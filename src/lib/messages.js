// Integração REST com MockAPI. Sem URL configurada, demonstração local EXPLICITAMENTE identificada.
const ENDPOINT = (process.env.NEXT_PUBLIC_MOCKAPI_URL || "").replace(/\/+$/, "");
const STORAGE_KEY = "jovi_sprint4_demo_messages";

export const isMockApiConfigured = Boolean(ENDPOINT);

function readLocal() {
  try {
    const value = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "[]");
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}

function writeLocal(messages) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
}

async function apiRequest(path = "", options = {}) {
  const response = await fetch(`${ENDPOINT}/messages${path}`, {
    ...options,
    headers: { "Content-Type": "application/json", ...options.headers },
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error(`MockAPI retornou HTTP ${response.status}. Verifique a URL e o recurso messages.`);
  }
  if (response.status === 204) return null;
  return response.json();
}

export async function getMessages() {
  if (isMockApiConfigured) {
    const data = await apiRequest();
    if (!Array.isArray(data)) throw new Error("A API não retornou uma lista de mensagens.");
    return data;
  }
  return readLocal();
}

export async function createMessage({ name, email, description }) {
  const message = { name, email, description, createdAt: new Date().toISOString() };
  if (isMockApiConfigured) {
    return apiRequest("", { method: "POST", body: JSON.stringify(message) });
  }
  const created = { ...message, id: String(Date.now()) + "-" + Math.random().toString(36).slice(2, 8) };
  writeLocal([created, ...readLocal()]);
  return created;
}

export async function deleteMessage(id) {
  if (isMockApiConfigured) {
    return apiRequest(`/${encodeURIComponent(id)}`, { method: "DELETE" });
  }
  writeLocal(readLocal().filter((message) => String(message.id) !== String(id)));
}
