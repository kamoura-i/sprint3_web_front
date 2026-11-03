"use client";

import { useContactForm } from "../../hooks/useContactForm";
import { isMockApiConfigured } from "../../lib/messages";

export default function ContactSection() {
  const { fields, changeField, status, sending, submit } = useContactForm();

  return (
    <section className="section contact-section" id="contato">
      <div className="container contact-grid">
        <div className="contact-content">
          <span className="section-label">CONTATO</span>
          <h2>
            Quer saber mais sobre o <span>Jovi?</span>
          </h2>
          <p>
            Entre em contato com nossa equipe para conhecer melhor a proposta do
            Modo Estudante.
          </p>
          {!isMockApiConfigured && (
            <p className="demo-warning">
              Modo demonstração local: configure a MockAPI para enviar mensagens
              à API. Use somente dados de teste.
            </p>
          )}
        </div>
        <form className="contact-form" onSubmit={submit} id="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Seu nome"
              value={fields.name}
              onChange={changeField}
              autoComplete="name"
              maxLength={100}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="seuemail@email.com"
              value={fields.email}
              onChange={changeField}
              autoComplete="email"
              maxLength={150}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Mensagem</label>
            <textarea
              id="description"
              name="description"
              rows={5}
              placeholder="Digite sua mensagem..."
              value={fields.description}
              onChange={changeField}
              maxLength={1000}
              required
            />
          </div>
          <button
            type="submit"
            className="button button-primary"
            disabled={sending}
          >
            {sending ? "Enviando..." : "Enviar mensagem"}
          </button>
          <p
            role="status"
            aria-live="polite"
            className={`form-message${status.type === "error" ? " is-error" : status.type === "ok" ? " is-ok" : ""}`}
          >
            {status.text}
          </p>
        </form>
      </div>
    </section>
  );
}
