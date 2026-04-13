"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { contentEs, contentEn } from "@/lib/content";

const PACKAGES_API = "https://suite.arrebolweddings.com/api/packages";

type ContentType = typeof contentEs;

interface LanguageContextType {
  language: "es" | "en";
  content: ContentType;
  toggleLanguage: () => void;
  setLanguage: (lang: "es" | "en") => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Convierte un paquete de la API al formato que espera content.colecciones.collections
function apiPackageToCollection(pkg: any) {
  return {
    name: pkg.name,
    features: pkg.features,
    price: `$${pkg.price.toLocaleString("es-MX")} MXN`,
    discountedPrice: "",
    description: pkg.description,
  };
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<"es" | "en">("es");
  const [packagesFromApi, setPackagesFromApi] = useState<any[] | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language") as "es" | "en";
      if (savedLanguage && (savedLanguage === "es" || savedLanguage === "en")) {
        setLanguageState(savedLanguage);
      }
    }

    fetch(PACKAGES_API)
      .then((r) => r.json())
      .then((data) => setPackagesFromApi(data))
      .catch(() => {
        // Fallback silencioso — se usan los datos de content.ts
      });
  }, []);

  const setLanguage = (lang: "es" | "en") => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("language", lang);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  const baseContent = language === "es" ? contentEs : contentEn;

  // Si tenemos paquetes de la API, los inyectamos en colecciones.collections
  const content: ContentType = packagesFromApi
    ? {
        ...baseContent,
        colecciones: {
          ...baseContent.colecciones,
          collections: packagesFromApi.map(apiPackageToCollection),
        },
      }
    : baseContent;

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
