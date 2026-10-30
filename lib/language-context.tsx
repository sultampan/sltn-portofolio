"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Language = "id" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "id",
  setLang: () => {},
  toggleLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }): ReactNode {
  const [lang, setLangState] = useState<Language>("id");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("preferred_lang") as Language | null;
      if (saved === "id" || saved === "en") {
        queueMicrotask(() => {
          setLangState(saved);
        });
      }
    } catch {
      // Ignore localStorage errors in SSR / private mode
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem("preferred_lang", newLang);
    } catch {}
  };

  const toggleLang = () => {
    const next = lang === "id" ? "en" : "id";
    setLang(next);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  return useContext(LanguageContext);
}
