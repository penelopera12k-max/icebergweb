import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Transportes Iceberg de Colombia - Líderes en Carga",
  description: "Servicio de transporte terrestre automotor de carga líquida y seca a nivel nacional.",
};

import PageTransition from "@/components/PageTransition";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        <PageTransition>
          {children}
        </PageTransition>
        <Footer />
        
        {/* WhatsApp FAB Global - Professional Icon */}
        <a 
          href="https://wa.me/573228430132" 
          target="_blank"
          className="fixed bottom-10 right-10 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-2xl z-[5000] hover:scale-110 active:scale-95 transition-all shadow-[#25D366]/40"
          aria-label="Contactar por WhatsApp"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217s.231.001.332.005c.109.004.258-.041.404.308.145.348.497 1.214.539 1.301.041.087.068.188.01.304s-.087.188-.173.289c-.086.101-.181.226-.258.303-.087.087-.177.182-.073.362.105.181.464.766.996 1.239.686.61 1.265.799 1.446.884.181.086.286.071.392-.051.106-.122.454-.528.575-.709.121-.181.242-.152.409-.09.167.063 1.06.501 1.24.59.181.09.301.135.344.21.043.075.043.435-.1.84z"/>
            <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 1.5c-4.694 0-8.5 3.806-8.5 8.5 0 1.636.46 3.164 1.254 4.467l-1.052 3.841 3.937-1.035A8.463 8.463 0 0 0 12 20.5c4.694 0 8.5-3.806 8.5-8.5S16.694 3.5 12 3.5z"/>
          </svg>
        </a>
      </body>
    </html>
  );
}
