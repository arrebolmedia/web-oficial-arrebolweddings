"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { contentEs, contentEn } from "@/lib/content";

type ContentType = typeof contentEs;

interface LanguageContextType {
  language: "es" | "en";
  content: ContentType;
  toggleLanguage: () => void;
  setLanguage: (lang: "es" | "en") => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<"es" | "en">("es");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as "es" | "en";
    if (savedLanguage && (savedLanguage === "es" || savedLanguage === "en")) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: "es" | "en") => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  const content = language === "es" ? contentEs : contentEn;

  return (
    <LanguageContext.Provider value={{ language, content, toggleLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
