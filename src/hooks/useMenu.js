"use client";

import { useState } from "react";

// Encapsula o estado e o comportamento do menu mobile.
export function useMenu() {
  const [menu, setMenu] = useState(false);
  return {
    menu,
    alternarMenu: () => setMenu((aberto) => !aberto),
    fecharMenu: () => setMenu(false),
  };
}
