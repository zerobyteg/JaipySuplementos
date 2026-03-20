import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://suplementos.jairokov.com"),
  title: "Jaipy Suplementos",
  description: "Tu destino premium para la suplementación deportiva de alto rendimiento.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jaipy Suplementos",
    description: "Tu destino premium para la suplementación deportiva de alto rendimiento.",
    url: "https://suplementos.jairokov.com",
    siteName: "Jaipy Suplementos",
    locale: "es_PY",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body
        className={`${inter.variable} antialiased bg-black text-white min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
