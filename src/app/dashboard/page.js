"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAuth } from "../../hooks/useAuth";
import { useMessages } from "../../hooks/useMessages";
import { isMockApiConfigured } from "../../lib/messages";

function MessageCard({ message, deleting, onDelete }) {
  const when = message.createdAt ? new Date(message.createdAt) : null;
  const whenText =
    when && !Number.isNaN(when.getTime())
      ? when.toLocaleString("pt-BR")
      : "Data indisponível";
  return (
    <article className="message-card">
      <div className="message-card-header">
        <h2>{message.name}</h2>
        <span>{whenText}</span>
      </div>
      <p className="message-email">{message.email}</p>
      <p className="message-body">{message.description}</p>
      <button
        type="button"
        className="button button-outline"
        disabled={deleting}
        onClick={() => onDelete(message.id)}
      >
        {deleting ? "Excluindo..." : "Excluir mensagem"}
      </button>
    </article>
  );
}

export default function DashboardPage() {
  const router = useRouter();
  const { authenticated, logout } = useAuth();
  const { messages, loading, error, deleting, removeMessage, refresh } =
    useMessages(authenticated === true);

  useEffect(() => {
    if (authenticated === false) router.replace("/login");
  }, [authenticated, router]);

  function signOut() {
    logout();
    router.replace("/login");
  }

  return (
    <>
      <Navbar />
      <main className="internal-page">
        <div className="container internal-container">
          {authenticated !== true ? (
            <p role="status">Verificando acesso demonstrativo...</p>
          ) : (
            <>
              <div className="dashboard-top">
                <div>
                  <span className="section-label">
                    DASHBOARD · DEMONSTRAÇÃO
                  </span>
                  <h1>Mensagens de contato</h1>
                  <p>
                    Visualização das mensagens enviadas pelo formulário do Jovi.
                  </p>
                </div>
                <button
                  type="button"
                  className="button button-outline"
                  onClick={signOut}
                >
                  Sair
                </button>
              </div>
              <div className="dashboard-toolbar">
                <span>
                  {isMockApiConfigured
                    ? "Fonte: MockAPI"
                    : "Fonte: localStorage (simulação — configure a MockAPI)"}
                </span>
                <button
                  type="button"
                  className="button button-outline"
                  onClick={refresh}
                  disabled={loading}
                >
                  Atualizar lista
                </button>
              </div>
              <p className="demo-warning">
                Acesso demonstrativo, protegido apenas no navegador. Não
                armazene mensagens reais ou dados sensíveis em uma MockAPI
                pública.
              </p>
              {error && (
                <p className="alert-error" role="alert">
                  {error}
                </p>
              )}
              {loading ? (
                <p role="status">Carregando mensagens...</p>
              ) : messages.length === 0 && !error ? (
                <div className="empty-panel">
                  <p>Nenhuma mensagem cadastrada.</p>
                  <Link href="/#contato" className="text-link">
                    Enviar uma mensagem de teste
                  </Link>
                </div>
              ) : (
                <div className="messages-grid">
                  {messages.map((message) => (
                    <MessageCard
                      key={message.id}
                      message={message}
                      deleting={deleting === String(message.id)}
                      onDelete={removeMessage}
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
