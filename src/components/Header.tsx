"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SocialIcon = ({ type }: { type: string }) => {
  const icons: Record<string, React.ReactNode> = {
    facebook: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="currentColor" stroke="none"/>,
    instagram: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441c.795 0 1.439-.645 1.439-1.441s-.644-1.44-1.439-1.44z" fill="currentColor" stroke="none"/>,
    linkedin: <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fill="currentColor" stroke="none"/>,
    x: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor" stroke="none"/>
  };
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      {icons[type]}
    </svg>
  );
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const politicasLinks = [
    { label: "Política Integral de Gestión", href: "https://www.iceberg.com.co/docs/GR-PO-05%20POLITICA%20INTEGRAL%20DE%20GESTION.pdf" },
    { label: "Política de Seguridad Vial", href: "https://www.iceberg.com.co/docs/GR-PO-06%20POLITICA%20DE%20SEGURIDAD%20VIAL24.pdf" },
    { label: "Prevención de Adicciones", href: "https://www.iceberg.com.co/docs/GR-PO-02%20POLITICA%20PREVENCION%20DE%20ADICCIONES%20Vv.03.pdf" },
    { label: "Acoso Laboral y Sexual", href: "https://www.iceberg.com.co/docs/Acosolaboral.pdf" },
    { label: "Código de Ética", href: "https://www.iceberg.com.co/docs/GR-DG-01C%C3%B3digodeeticayConductaVv02.pdf" },
    { label: "Tratamiento de Datos", href: "https://www.iceberg.com.co/docs/ley.pdf" },
  ];

  const sociosLinks = [
    { label: "Encuesta de Satisfacción", href: "/encuesta" },
    { label: "Correo Corporativo", href: "https://acortar.link/L3zljh" },
    { label: "FortiClient VPN", href: "https://links.fortinet.com/forticlient/win/vpnagent" },
  ];

  const navLinks = [
    { label: "Inicio", href: "/" },
    { label: "Nosotros", href: "/nosotros" },
    { label: "Trabaja con nosotros", href: "/trabaja-con-nosotros" },
    { label: "Contacto", href: "/contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[1000] font-sans">
      <div className="bg-white py-4">
         <div className="max-w-[1240px] mx-auto px-6 flex justify-between items-center text-[#003366] font-semibold text-[13px] uppercase tracking-[0.2em]">
            <div className="flex items-center gap-10">
               <div className="flex items-center gap-3">
                  <Clock size={16} strokeWidth={3} />
                  <span>Lunes-Viernes: 8am a 5pm</span>
               </div>
               <div className="flex items-center gap-3 border-l border-slate-200 pl-10">
                  <span>Sabados: 8am a 1pm</span>
               </div>
               <a href="tel:6018966565" className="flex items-center gap-3 border-l border-slate-200 pl-10 hover:text-[#0072CE] transition-all">
                  <Phone size={16} strokeWidth={3} />
                  <span>(601) 896 6565</span>
               </a>
            </div>
            <div className="flex items-center gap-8">
               <a href="https://www.facebook.com/IcebergColombia" target="_blank" className="hover:text-[#0072CE] hover:scale-125 transition-all"><SocialIcon type="facebook" /></a>
               <a href="https://www.instagram.com/transportes_iceberg/" target="_blank" className="hover:text-[#0072CE] hover:scale-125 transition-all"><SocialIcon type="instagram" /></a>
               <a href="https://www.linkedin.com/company/iceberg_colombia/?viewAsMember=true" target="_blank" className="hover:text-[#0072CE] hover:scale-125 transition-all"><SocialIcon type="linkedin" /></a>
               <a href="https://x.com/Iceberg_CO" target="_blank" className="hover:text-[#0072CE] hover:scale-125 transition-all"><SocialIcon type="x" /></a>
            </div>
         </div>
      </div>

      <div className={`transition-all duration-300 ${isScrolled ? "bg-white shadow-xl py-3 border-b border-slate-100" : "bg-white py-6 shadow-sm"}`}>
        <div className="max-w-[1240px] mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="relative w-40 lg:w-48 h-10 block">
            <Image src="/images/site/logo.gif" alt="Iceberg Logo" fill className="object-contain" priority />
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map(link => (
              <Link 
                key={link.href} 
                href={link.href} 
                className={`text-[12px] font-semibold uppercase tracking-wider transition-all duration-300 ${pathname === link.href ? "text-[#00AEEF] scale-105" : "text-[#003366] hover:text-[#00AEEF]"}`}
              >
                {link.label}
              </Link>
            ))}
            
            <div className="relative group">
               <button className="text-[12px] font-semibold uppercase tracking-wider text-[#003366] group-hover:text-[#00AEEF] flex items-center gap-1 transition-colors">
                  Políticas <ChevronDown size={14} className="opacity-40" />
               </button>
               <div className="absolute top-full -left-4 mt-2 w-72 bg-white shadow-2xl border border-slate-100 rounded-md py-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all -translate-y-2 group-hover:translate-y-0">
                  {politicasLinks.map(link => (
                    <a key={link.label} href={link.href} target="_blank" className="block px-6 py-2.5 text-[11px] font-semibold uppercase text-slate-500 hover:bg-slate-50 hover:text-[#00AEEF] transition-colors">
                       {link.label}
                    </a>
                  ))}
               </div>
            </div>

            <div className="relative group">
               <button className="text-[12px] font-semibold uppercase tracking-wider text-[#003366] group-hover:text-[#00AEEF] flex items-center gap-1 transition-colors">
                  Socios <ChevronDown size={14} className="opacity-40" />
               </button>
               <div className="absolute top-full -left-4 mt-2 w-64 bg-white shadow-2xl border border-slate-100 rounded-md py-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all -translate-y-2 group-hover:translate-y-0">
                  {sociosLinks.map(link => (
                    link.href.startsWith('/') 
                      ? <Link key={link.label} href={link.href} className="block px-6 py-2.5 text-[11px] font-semibold uppercase text-slate-500 hover:bg-slate-50 hover:text-[#00AEEF] transition-colors">{link.label}</Link>
                      : <a key={link.label} href={link.href} target="_blank" className="block px-6 py-2.5 text-[11px] font-semibold uppercase text-slate-500 hover:bg-slate-50 hover:text-[#00AEEF] transition-colors">{link.label}</a>
                  ))}
               </div>
            </div>
          </nav>

          <button className="lg:hidden text-[#003366] p-2 hover:bg-slate-50 rounded-md transition-all" onClick={() => setMobileMenuOpen(true)}>
            <Menu size={24}/>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[1100] flex flex-col p-8 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-16 px-2">
              <Image src="/images/site/logo.gif" alt="Iceberg" width={140} height={40} className="object-contain" />
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 bg-slate-50 rounded-full"><X size={28} className="text-[#003366]"/></button>
            </div>
            <nav className="flex flex-col gap-6">
               {navLinks.map((link, i) => (
                 <motion.div
                   key={link.href}
                   initial={{ opacity: 0, x: 20 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ delay: i * 0.1 }}
                 >
                   <Link 
                     href={link.href} 
                     onClick={() => setMobileMenuOpen(false)} 
                     className={`text-2xl font-bold uppercase border-b border-slate-50 pb-3 block ${pathname === link.href ? "text-[#00AEEF]" : "text-[#003366]"}`}
                   >
                     {link.label}
                   </Link>
                 </motion.div>
               ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
