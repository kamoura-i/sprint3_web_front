"use client";

import { useEffect, useState } from "react";
import { AUTH_KEY, DEMO_EMAIL, DEMO_PASSWORD } from "../lib/auth";

export function useAuth() {
  // null significa: ainda não conferimos a sessão no navegador.
  const [authenticated, setAuthenticated] = useState(null);

  useEffect(() => {
    setAuthenticated(window.sessionStorage.getItem(AUTH_KEY) === "true");
  }, []);

  function login(email, password) {
    if (email.trim().toLowerCase() !== DEMO_EMAIL || password !== DEMO_PASSWORD) return false;
    window.sessionStorage.setItem(AUTH_KEY, "true");
    setAuthenticated(true);
    return true;
  }

  function logout() {
    window.sessionStorage.removeItem(AUTH_KEY);
    setAuthenticated(false);
  }

  return { authenticated, login, logout };
}
