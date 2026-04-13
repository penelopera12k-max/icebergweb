"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import BrandSection from "@/components/BrandSection";

export default function Contacto() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <main className="bg-white min-h-screen pt-48 pb-20 font-sans">
      <div className="max-w-[1000px] mx-auto px-6">
        
        <div className="text-center mb-16 space-y-4">
           <h1 className="text-4xl lg:text-5xl font-black uppercase text-[#003366] tracking-tighter">CONTACTO CORPORATIVO</h1>
           <div className="h-2 w-24 bg-[#00AEEF] mx-auto"></div>
           <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">Estamos Listos para mover tu carga</p>
        </div>

        <div className="bg-slate-50 p-8 lg:p-12 rounded-3xl shadow-2xl border border-slate-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[12px] font-black text-[#003366] uppercase tracking-widest pl-2">Nombre Completo</label>
                <input 
                  required
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-white border-2 border-slate-200 rounded-xl px-6 py-4 focus:border-[#00AEEF] outline-none transition-all font-bold text-[#003366]" 
                  placeholder="Tu nombre aquí..."
                />
              </div>
              <div className="space-y-2">
                <label className="text-[12px] font-black text-[#003366] uppercase tracking-widest pl-2">Correo Corporativo</label>
                <input 
                  required
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-white border-2 border-slate-200 rounded-xl px-6 py-4 focus:border-[#00AEEF] outline-none transition-all font-bold text-[#003366]" 
                  placeholder="email@empresa.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[12px] font-black text-[#003366] uppercase tracking-widest pl-2">Asunto</label>
              <input 
                required
                type="text" 
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                className="w-full bg-white border-2 border-slate-200 rounded-xl px-6 py-4 focus:border-[#00AEEF] outline-none transition-all font-bold text-[#003366]" 
                placeholder="Solicitud de cotización, Convenio, etc."
              />
            </div>

            <div className="space-y-2">
              <label className="text-[12px] font-black text-[#003366] uppercase tracking-widest pl-2">Mensaje</label>
              <textarea 
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-white border-2 border-slate-200 rounded-xl px-6 py-4 focus:border-[#00AEEF] outline-none transition-all font-bold text-[#003366] resize-none" 
                placeholder="¿En qué podemos ayudarte?"
              ></textarea>
            </div>

            <button 
              disabled={status === 'loading'}
              className="w-full bg-[#003366] text-white py-5 rounded-xl font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-[#0072CE] transition-all disabled:opacity-50 btn-shimmer group"
            >
              {status === 'loading' ? (
                <Loader2 className="animate-spin" />
              ) : (
                <>ENVIAR MENSAJE <Send size={18} className="group-hover:translate-x-2 transition-transform" /></>
              )}
            </button>
          </form>

          <AnimatePresence>
            {status === 'success' && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-8 bg-green-50 border border-green-200 p-4 rounded-xl flex items-center gap-4 text-green-700 font-bold"
              >
                <CheckCircle2 size={24} />
                <span>¡Mensaje enviado con éxito! El equipo de Iceberg te contactará pronto.</span>
              </motion.div>
            )}
            {status === 'error' && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-8 bg-red-50 border border-red-200 p-4 rounded-xl flex items-center gap-4 text-red-700 font-bold"
              >
                <AlertCircle size={24} />
                <span>Hubo un problema al enviar el mensaje. Por favor intenta de nuevo.</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-24">
        <BrandSection />
      </div>
    </main>
  );
}
