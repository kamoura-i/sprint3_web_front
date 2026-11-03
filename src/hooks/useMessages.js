"use client";

import { useEffect, useState } from "react";
import { deleteMessage, getMessages } from "../lib/messages";

export function useMessages(enabled) {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deleting, setDeleting] = useState(null);
  const [revision, setRevision] = useState(0);

  useEffect(() => {
    if (!enabled) return;
    let cancelled = false;
    getMessages().then((result) => {
      if (!cancelled) { setMessages(result); setError(""); setLoading(false); }
    }).catch((reason) => {
      if (!cancelled) { setError(reason.message || "Erro ao carregar mensagens."); setLoading(false); }
    });
    return () => { cancelled = true; };
  }, [enabled, revision]);

  async function removeMessage(id) {
    setDeleting(String(id));
    setError("");
    try {
      await deleteMessage(id);
      setMessages((previous) => previous.filter((message) => String(message.id) !== String(id)));
    } catch (reason) {
      setError(reason.message || "Erro ao excluir mensagem.");
    } finally {
      setDeleting(null);
    }
  }

  function refresh() {
    setLoading(true);
    setRevision((previous) => previous + 1);
  }

  return { messages, loading, error, deleting, removeMessage, refresh };
}
