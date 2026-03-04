'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

interface ReciboData {
  fechaEmision: string;
  cliente: string;
  fechaEvento: string;
  monto: string;
  concepto: string;
}

export default function GenerarRecibo() {
  const router = useRouter();
  const reciboRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState<ReciboData>({
    fechaEmision: new Date().toISOString().split('T')[0],
    cliente: '',
    fechaEvento: '',
    monto: '',
    concepto: ''
  });

  const [showRecibo, setShowRecibo] = useState(false);

  useEffect(() => {
    // Verificar autenticación
    const isAuth = sessionStorage.getItem('recibos_auth');
    if (!isAuth) {
      router.push('/recibos');
    }
  }, [router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleGenerateRecibo = (e: React.FormEvent) => {
    e.preventDefault();
    setShowRecibo(true);
  };

  const handleExportPDF = async () => {
    if (!reciboRef.current) return;

    try {
      // Usar html2canvas y jspdf
      const html2canvas = (await import('html2canvas')).default;
      const { jsPDF } = await import('jspdf');

      const canvas = await html2canvas(reciboRef.current, {
        logging: false,
        useCORS: true,
      } as any);

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save(`Recibo_${formData.cliente.replace(/\s+/g, '_')}_${formData.fechaEmision}.pdf`);
    } catch (error) {
      console.error('Error al generar PDF:', error);
      alert('Error al generar el PDF. Asegúrate de tener las dependencias instaladas.');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('recibos_auth');
    router.push('/recibos');
  };

  const formatCurrency = (amount: string) => {
    const num = parseFloat(amount);
    if (isNaN(num)) return '$0.00';
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN'
    }).format(num);
  };

  const formatDateFromString = (dateString: string) => {
    if (!dateString) return 'Invalid Date';
    // Parsear la fecha en formato YYYY-MM-DD y crear fecha en hora local
    const [year, month, day] = dateString.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    
    if (isNaN(date.getTime())) return 'Invalid Date';
    
    return date.toLocaleDateString('es-MX', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-[var(--background)] p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8 pb-6 border-b border-[var(--border-subtle)]">
          <div>
            <h1 className="font-[var(--font-heading)] text-3xl md:text-4xl text-[var(--foreground)] tracking-wide">
              Generar Recibo
            </h1>
            <p className="text-[var(--foreground)]/60 mt-1 text-sm tracking-wide">Sistema de emisión de recibos - Arrebol Weddings</p>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-[var(--foreground)]/70 hover:text-[var(--foreground)] border border-[var(--border-subtle)] hover:border-[var(--foreground)]/30 transition-all text-sm tracking-wide"
          >
            Cerrar Sesión
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Formulario */}
          <div className="bg-white border border-[var(--border-subtle)] p-6">
            <h2 className="font-[var(--font-heading)] text-2xl text-[var(--foreground)] mb-6 tracking-wide">Datos del Recibo</h2>
            
            <form onSubmit={handleGenerateRecibo} className="space-y-1">
              <div className="group">
                <label className="block text-sm text-[var(--foreground)]/70 mb-2 tracking-wide">
                  Fecha de Emisión
                </label>
                <input
                  type="date"
                  name="fechaEmision"
                  value={formData.fechaEmision}
                  onChange={handleInputChange}
                  className="w-full py-3 bg-transparent border-b border-[var(--foreground)]/20 focus:border-[var(--foreground)] outline-none transition-colors text-[var(--foreground)]"
                  required
                />
              </div>

              <div className="group pt-4">
                <label className="block text-sm text-[var(--foreground)]/70 mb-2 tracking-wide">
                  Cliente
                </label>
                <input
                  type="text"
                  name="cliente"
                  value={formData.cliente}
                  onChange={handleInputChange}
                  placeholder="Nombre del cliente"
                  className="w-full py-3 bg-transparent border-b border-[var(--foreground)]/20 focus:border-[var(--foreground)] outline-none transition-colors placeholder:text-[var(--foreground)]/40 placeholder:text-sm text-[var(--foreground)]"
                  required
                />
              </div>

              <div className="group pt-4">
                <label className="block text-sm text-[var(--foreground)]/70 mb-2 tracking-wide">
                  Fecha del Evento Social
                </label>
                <input
                  type="date"
                  name="fechaEvento"
                  value={formData.fechaEvento}
                  onChange={handleInputChange}
                  className="w-full py-3 bg-transparent border-b border-[var(--foreground)]/20 focus:border-[var(--foreground)] outline-none transition-colors text-[var(--foreground)]"
                  required
                />
              </div>

              <div className="group pt-4">
                <label className="block text-sm text-[var(--foreground)]/70 mb-2 tracking-wide">
                  Monto (MXN)
                </label>
                <input
                  type="number"
                  name="monto"
                  value={formData.monto}
                  onChange={handleInputChange}
                  placeholder="0.00"
                  step="0.01"
                  min="0"
                  className="w-full py-3 bg-transparent border-b border-[var(--foreground)]/20 focus:border-[var(--foreground)] outline-none transition-colors placeholder:text-[var(--foreground)]/40 placeholder:text-sm text-[var(--foreground)]"
                  required
                />
              </div>

              <div className="group pt-4">
                <label className="block text-sm text-[var(--foreground)]/70 mb-2 tracking-wide">
                  Concepto
                </label>
                <textarea
                  name="concepto"
                  value={formData.concepto}
                  onChange={handleInputChange}
                  placeholder="Descripción del servicio..."
                  rows={4}
                  className="w-full py-3 bg-transparent border-b border-[var(--foreground)]/20 focus:border-[var(--foreground)] outline-none transition-colors placeholder:text-[var(--foreground)]/40 placeholder:text-sm text-[var(--foreground)] resize-none"
                  required
                />
              </div>

              <div className="flex gap-3 pt-8">
                <button
                  type="submit"
                  className="flex-1 bg-[var(--foreground)] text-[var(--background)] font-light py-3 px-6 hover:bg-[var(--accent-terracotta)] transition-all tracking-wide"
                >
                  Generar Vista Previa
                </button>
                {showRecibo && (
                  <button
                    type="button"
                    onClick={handleExportPDF}
                    className="flex-1 bg-[var(--accent-wine)] text-white font-light py-3 px-6 hover:bg-[var(--accent-terracotta)] transition-all tracking-wide"
                  >
                    Exportar a PDF
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Vista Previa del Recibo */}
          <div className="bg-white border border-[var(--border-subtle)] p-6">
            <h2 className="font-[var(--font-heading)] text-2xl text-[var(--foreground)] mb-6 tracking-wide">Vista Previa</h2>
            
            {!showRecibo ? (
              <div className="flex items-center justify-center h-96 text-[var(--foreground)]/40">
                <div className="text-center">
                  <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <p className="text-sm tracking-wide">Completa el formulario para ver la vista previa</p>
                </div>
              </div>
            ) : (
              <div ref={reciboRef} className="bg-white p-8 border border-[var(--border-subtle)]">
                {/* Logo y Header */}
                <div className="flex items-start justify-between mb-8 pb-6 border-b border-[var(--border-subtle)]">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-[var(--accent-terracotta)] p-2">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-[var(--font-heading)] text-2xl text-[var(--foreground)] tracking-wide">
                          Arrebol Weddings
                        </h3>
                        <p className="text-xs text-[var(--foreground)]/60 tracking-wider">WEDDING PHOTOGRAPHY & VIDEOGRAPHY</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-[var(--font-heading)] text-2xl text-[var(--foreground)] tracking-wide">RECIBO</p>
                    <p className="text-xs text-[var(--foreground)]/60 mt-1 tracking-wide">
                      {formatDateFromString(formData.fechaEmision)}
                    </p>
                  </div>
                </div>

                {/* Información del Cliente */}
                <div className="mb-6">
                  <p className="text-xs text-[var(--foreground)]/60 mb-1 tracking-wider">CLIENTE:</p>
                  <p className="font-[var(--font-heading)] text-lg text-[var(--foreground)] tracking-wide">{formData.cliente}</p>
                </div>

                {/* Detalles del Recibo */}
                <div className="bg-[var(--background)] p-6 mb-6 border border-[var(--border-subtle)]">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-[var(--foreground)]/60 mb-1 tracking-wider">Fecha del Evento:</p>
                      <p className="text-sm text-[var(--foreground)] tracking-wide">
                        {formatDateFromString(formData.fechaEvento)}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-[var(--foreground)]/60 mb-1 tracking-wider">Monto:</p>
                      <p className="font-[var(--font-heading)] text-2xl text-[var(--accent-terracotta)] tracking-wide">
                        {formatCurrency(formData.monto)}
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs text-[var(--foreground)]/60 mb-2 tracking-wider">Concepto:</p>
                    <p className="text-sm text-[var(--foreground)]/80 whitespace-pre-wrap leading-relaxed">{formData.concepto}</p>
                  </div>
                </div>

                {/* Firma */}
                <div className="mt-12 pt-6 border-t border-[var(--border-subtle)]">
                  <div className="text-center">
                    <div className="w-64 mx-auto border-t border-[var(--foreground)] pt-2 mb-2">
                      <p className="font-[var(--font-heading)] text-[var(--foreground)] tracking-wide">Anthony Cazares</p>
                    </div>
                    <p className="text-xs text-[var(--foreground)]/60 tracking-wider">ARREBOL WEDDINGS</p>
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-8 text-center text-xs text-[var(--foreground)]/40">
                  <p className="tracking-wider">www.arrebolweddings.com</p>
                  <p className="mt-1 tracking-wide">Este documento es un comprobante de pago válido</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
