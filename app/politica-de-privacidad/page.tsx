"use client";

import React from 'react';
import { useLanguage } from "@/app/context/LanguageContext";

export default function PrivacyPolicyPage() {
  const { content } = useLanguage();
  
  return (
    <div className="min-h-screen pt-32 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <h1 className="font-[var(--font-heading)] text-3xl md:text-4xl mb-8">{content.common.privacyPolicy.title}</h1>
      <div className="prose prose-stone max-w-none text-[var(--foreground)]/80">
        <p>{content.common.privacyPolicy.content}</p>
      </div>
    </div>
  );
}
