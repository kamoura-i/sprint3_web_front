"use client";

import { useState } from "react";
import { createMessage } from "../lib/messages";

const EMPTY = { name: "", email: "", description: "" };

export function useContactForm() {
  const [fields, setFields] = useState(EMPTY);
  const [status, setStatus] = useState({ type: "", text: "" });
  const [sending, setSending] = useState(false);

  function changeField(event) {
    const { name, value } = event.target;
    setFields((previous) => ({ ...previous, [name]: value }));
  }

  async function submit(event) {
    event.preventDefault();
    if (sending) return;

    const payload = {
      name: fields.name.trim(),
      email: fields.email.trim(),
      description: fields.description.trim(),
    };
    if (payload.name.length < 2) {
      setStatus({ type: "error", text: "Informe seu nome (mínimo de 2 caracteres)." });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(payload.email)) {
      setStatus({ type: "error", text: "Informe um e-mail válido." });
      return;
    }
    if (payload.description.length < 10) {
      setStatus({ type: "error", text: "A mensagem precisa ter pelo menos 10 caracteres." });
      return;
    }

    setSending(true);
    setStatus({ type: "", text: "" });
    try {
      await createMessage(payload);
      setFields(EMPTY);
      setStatus({ type: "ok", text: "Mensagem registrada! Obrigado pelo contato." });
    } catch (error) {
      setStatus({ type: "error", text: error.message || "Não foi possível enviar. Tente novamente." });
    } finally {
      setSending(false);
    }
  }

  return { fields, changeField, status, sending, submit };
}
