"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    Mail,
    Phone,
    MapPin,
    ShieldCheck,
    Truck,
    Clock
} from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#050505] border-t border-zinc-800/50 pt-16 pb-8 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-64 bg-[#FFCC00]/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand & Info */}
                    <div className="flex flex-col space-y-6">
                        <Link href="/" className="inline-block">
                            <span className="text-2xl font-black uppercase tracking-tighter text-white italic">
                                JAIPY<span className="text-[#FFCC00]">SUPLEMENTOS</span>
                            </span>
                        </Link>
                        <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
                            Tu destino premium para la suplementación deportiva de alto rendimiento. Calidad garantizada para potenciar tus metas.
                        </p>

                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6 px-1 border-l-2 border-[#FFCC00]">
                            Navegación
                        </h4>
                        <ul className="space-y-4">
                            {['Inicio', 'Productos'].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={item === 'Inicio' ? '/' : `/${item.toLowerCase()}`}
                                        className="text-zinc-500 hover:text-white text-sm transition-colors flex items-center group"
                                    >
                                        <span className="w-0 h-[1px] bg-[#FFCC00] mr-0 transition-all group-hover:w-3 group-hover:mr-2" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6 px-1 border-l-2 border-[#FFCC00]">
                            Contacto
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3 text-sm group">
                                <Mail size={18} className="text-[#FFCC00] mt-0.5 shrink-0" />
                                <span className="text-zinc-500 group-hover:text-zinc-300 transition-colors">jairokov@gmail.com</span>
                            </li>
                            <li className="flex items-start space-x-3 text-sm group">
                                <Phone size={18} className="text-[#FFCC00] mt-0.5 shrink-0" />
                                <span className="text-zinc-500 group-hover:text-zinc-300 transition-colors">+595 991 712966</span>
                            </li>
                            <li className="flex items-start space-x-3 text-sm group">
                                <MapPin size={18} className="text-[#FFCC00] mt-0.5 shrink-0" />
                                <span className="text-zinc-500 group-hover:text-zinc-300 transition-colors">Asunción, Paraguay</span>
                            </li>
                        </ul>
                    </div>

                    {/* CTA / WhatsApp */}
                    <div className="bg-zinc-900/40 border border-zinc-800/50 rounded-2xl p-6 backdrop-blur-sm self-start">
                        <h4 className="text-white font-bold text-sm mb-4">¿Necesitas ayuda?</h4>
                        <p className="text-zinc-500 text-xs mb-6 leading-relaxed">
                            Chatea con nosotros directamente por WhatsApp para asesoramiento personalizado.
                        </p>
                        <motion.a
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            href="https://wa.me/message/SLXS6GSCM4VTE1"
                            target="_blank"
                            className="flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-3 px-4 rounded-xl transition-colors shadow-[0_10px_20px_rgba(37,211,102,0.2)]"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                width="20"
                                height="20"
                                fill="currentColor"
                            >
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            <span>WhatsApp</span>
                        </motion.a>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-zinc-800/30 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-zinc-600">
                    <div className="flex flex-col md:items-end w-full text-center md:text-right">
                        <p>© {currentYear} Jaipy Suplementos. Todos los derechos reservados.</p>
                        <p className="mt-1 opacity-50">Desarrollado con pasión.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
