"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAuth } from "../../hooks/useAuth";
import { DEMO_EMAIL, DEMO_PASSWORD } from "../../lib/auth";

export default function LoginPage() {
  const router = useRouter();
  const { authenticated, login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (authenticated === true) router.replace("/dashboard");
  }, [authenticated, router]);

  function submit(event) {
    event.preventDefault();
    if (login(email, password)) {
      setError("");
      router.replace("/dashboard");
    } else {
      setError("Credenciais de demonstração inválidas.");
    }
  }

  return (
    <>
      <Navbar />
      <main className="internal-page">
        <div className="container internal-container">
          <div className="auth-panel">
            <span className="section-label">ÁREA DA EQUIPE</span>
            <h1>
              Entrar no <span>Jovi</span>
            </h1>
            <p>Acesso demonstrativo para acompanhar as mensagens recebidas.</p>
            <div className="demo-credentials">
              <strong>Login de teste (não é autenticação real):</strong>
              <code>{DEMO_EMAIL}</code>
              <code>{DEMO_PASSWORD}</code>
            </div>
            <form className="contact-form" onSubmit={submit}>
              <div className="form-group">
                <label htmlFor="login-email">E-mail</label>
                <input
                  id="login-email"
                  type="email"
                  autoComplete="username"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="E-mail"
                />
              </div>
              <div className="form-group">
                <label htmlFor="login-password">Senha</label>
                <input
                  id="login-password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Senha"
                />
              </div>
              <button className="button button-primary" type="submit">
                Entrar no dashboard
              </button>
              <p className="form-message is-error" role="alert">
                {error}
              </p>
            </form>
            <Link className="text-link" href="/">
              Voltar para a página inicial
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
