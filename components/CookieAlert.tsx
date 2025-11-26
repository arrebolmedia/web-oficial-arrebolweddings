"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/app/context/LanguageContext";

const CookieAlert = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { content } = useLanguage();

  useEffect(() => {
    const consent = localStorage.getItem("arrebol-cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("arrebol-cookie-consent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-[var(--background)] border-t border-[var(--border-subtle)] shadow-lg md:flex md:items-center md:justify-between md:px-8">
      <div className="mb-4 md:mb-0 md:mr-8">
        <p className="text-sm text-[var(--foreground)]">
          {content.common.cookieAlert.message}
        </p>
      </div>
      <button
        onClick={handleAccept}
        className="w-full md:w-auto px-6 py-2 bg-[var(--foreground)] text-[var(--background)] text-sm tracking-widest uppercase hover:bg-[var(--accent-wine)] transition-colors"
      >
        {content.common.cookieAlert.button}
      </button>
    </div>
  );
};

export default CookieAlert;
