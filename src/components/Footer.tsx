"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, ShieldCheck } from "lucide-react";

const SocialIcon = ({ type }: { type: string }) => {
  const icons: Record<string, React.ReactNode> = {
    facebook: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="currentColor" stroke="none"/>,
    instagram: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441c.795 0 1.439-.645 1.439-1.441s-.644-1.44-1.439-1.44z" fill="currentColor" stroke="none"/>,
    linkedin: <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fill="currentColor" stroke="none"/>,
    x: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor" stroke="none"/>
  };
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      {icons[type]}
    </svg>
  );
};

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10 font-sans">
      <div className="max-w-[1240px] mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          <div className="space-y-6">
            <Image src="/images/site/logo.gif" alt="Iceberg Logo" width={180} height={50} className="object-contain" />
            <p className="text-[13px] text-slate-500 leading-relaxed font-semibold">
              Líderes en transporte terrestre automotor de carga líquida y seca a nivel nacional. 
              Comprometidos con la excelencia operativa y la seguridad integral.
            </p>
            <div className="flex gap-4">
               <a href="https://www.facebook.com/IcebergColombia" target="_blank" className="p-2.5 bg-white rounded-full border border-slate-100 text-[#003366] hover:bg-[#003366] hover:text-white transition-all shadow-sm"><SocialIcon type="facebook" /></a>
               <a href="https://www.instagram.com/transportes_iceberg/" target="_blank" className="p-2.5 bg-white rounded-full border border-slate-100 text-[#003366] hover:bg-[#003366] hover:text-white transition-all shadow-sm"><SocialIcon type="instagram" /></a>
               <a href="https://www.linkedin.com/company/iceberg_colombia/?viewAsMember=true" target="_blank" className="p-2.5 bg-white rounded-full border border-slate-100 text-[#003366] hover:bg-[#003366] hover:text-white transition-all shadow-sm"><SocialIcon type="linkedin" /></a>
               <a href="https://x.com/Iceberg_CO" target="_blank" className="p-2.5 bg-white rounded-full border border-slate-100 text-[#003366] hover:bg-[#003366] hover:text-white transition-all shadow-sm"><SocialIcon type="x" /></a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-[11px] font-black uppercase text-[#003366] tracking-[0.2em]">Navegación</h4>
            <nav className="flex flex-col gap-4">
              <Link href="/" className="text-[13px] font-bold text-slate-500 hover:text-[#0072CE] transition-colors">Inicio</Link>
              <Link href="/nosotros" className="text-[13px] font-bold text-slate-500 hover:text-[#0072CE] transition-colors">Sobre Nosotros</Link>
              <Link href="/noticias" className="text-[13px] font-bold text-slate-500 hover:text-[#0072CE] transition-colors">Vida en Iceberg</Link>
              <Link href="/trabaja-con-nosotros" className="text-[13px] font-bold text-slate-500 hover:text-[#0072CE] transition-colors">Talento Humano</Link>
              <Link href="/contactanos" className="text-[13px] font-bold text-slate-500 hover:text-[#0072CE] transition-colors">Contáctenos</Link>
            </nav>
          </div>

          <div className="space-y-6">
            <h4 className="text-[11px] font-black uppercase text-[#003366] tracking-[0.2em]">Políticas Corporativas</h4>
            <nav className="flex flex-col gap-4 text-[13px] font-bold text-slate-500">
               <a href="https://www.iceberg.com.co/docs/GR-PO-05%20POLITICA%20INTEGRAL%20DE%20GESTION.pdf" target="_blank" className="hover:text-[#0072CE] transition-colors">Política de Gestión</a>
               <a href="https://www.iceberg.com.co/docs/GR-PO-06%20POLITICA%20DE%20SEGURIDAD%20VIAL24.pdf" target="_blank" className="hover:text-[#0072CE] transition-colors">Seguridad Vial</a>
               <a href="https://www.iceberg.com.co/docs/GR-DG-01C%C3%B3digodeeticayConductaVv02.pdf" target="_blank" className="hover:text-[#0072CE] transition-colors">Código de Ética</a>
               <Link href="/nosotros#linea-etica" className="flex items-center gap-2 text-[#003366] hover:text-[#0072CE] transition-colors">
                  <ShieldCheck size={16} /> Línea Ética Iceberg
               </Link>
            </nav>
          </div>

          <div className="space-y-6">
            <h4 className="text-[11px] font-black uppercase text-[#003366] tracking-[0.2em]">Sede Principal</h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin size={18} className="text-[#0072CE] shrink-0" />
                <p className="text-[13px] font-bold text-slate-500">Km 1.6 Vía Siberia-Cota, Parque Industrial Sabana Cota</p>
              </div>
              <div className="flex gap-3">
                <Phone size={18} className="text-[#0072CE] shrink-0" />
                <p className="text-[13px] font-bold text-slate-500">+57 1 896 64 65</p>
              </div>
              <div className="flex gap-3">
                <Mail size={18} className="text-[#0072CE] shrink-0" />
                <p className="text-[13px] font-bold text-slate-500">comercial@iceberg.com.co</p>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
           <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
              © {new Date().getFullYear()} Transportes Iceberg de Colombia S.A.S.
           </p>
           <div className="flex gap-8 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
              <Link href="#" className="hover:text-slate-600 transition-colors">Tratamiento de Datos</Link>
              <Link href="#" className="hover:text-slate-600 transition-colors">Seguridad de la Información</Link>
           </div>
        </div>

      </div>
    </footer>
  );
}
