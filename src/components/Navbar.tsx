"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Inicio', href: '/inicio' },
        { name: 'Productos', href: '/productos' },
        { name: 'Nosotros', href: '/nosotros' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contacto', href: '/contacto' },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full bg-black text-white font-sans border-b border-white/10">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0">
                        <span className="text-2xl font-black italic tracking-tighter sm:text-3xl">
                            JAIPY<span className="text-[#FFCC00]">SUPLEMENTOS</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-10">
                        {/* Nav Links */}
                        <div className="flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-xs font-bold uppercase tracking-widest hover:text-[#FFCC00] transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden p-2 hover:text-[#FFCC00] transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 top-[81px] z-50 bg-black lg:hidden overflow-y-auto border-t border-white/5">
                    <div className="flex flex-col p-6 gap-8">
                        <div className="flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-xl font-black uppercase tracking-tighter border-b border-white/10 pb-4 hover:text-[#FFCC00] transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
