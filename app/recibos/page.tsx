'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RecibosLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validación de credenciales
    if (email === 'anthony@arrebolweddings.com' && password === 'Marketing2025.-') {
      sessionStorage.setItem('recibos_auth', 'true');
      router.push('/recibos/generar');
    } else {
      setError('Credenciales incorrectas');
    }
  };

  return (
    <div className="min-h-screen bg-[var(--background)] flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white border border-[var(--border-subtle)] p-8 md:p-12">
          {/* Logo */}
          <div className="text-center mb-10">
            <div className="inline-block bg-[var(--accent-terracotta)] p-3 mb-4">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h1 className="font-[var(--font-heading)] text-3xl md:text-4xl text-[var(--foreground)] mb-2 tracking-wide">
              Arrebol Weddings
            </h1>
            <p className="text-[var(--foreground)]/60 text-sm tracking-wide">Sistema de Recibos</p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-1">
            <div className="group">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError('');
                }}
                className="w-full py-3 bg-transparent border-b border-[var(--foreground)]/20 focus:border-[var(--foreground)] outline-none transition-colors placeholder:text-[var(--foreground)]/40 placeholder:text-sm text-[var(--foreground)]"
                placeholder="Correo electrónico"
                required
              />
            </div>
            <div className="group pt-4">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError('');
                }}
                className="w-full py-3 bg-transparent border-b border-[var(--foreground)]/20 focus:border-[var(--foreground)] outline-none transition-colors placeholder:text-[var(--foreground)]/40 placeholder:text-sm text-[var(--foreground)]"
                placeholder="Contraseña"
                required
              />
            </div>
            {error && (
              <p className="pt-3 text-sm text-red-700 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full mt-8 bg-[var(--foreground)] text-[var(--background)] font-light py-3 px-6 hover:bg-[var(--accent-terracotta)] transition-all tracking-wide"
            >
              Ingresar al Sistema
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
