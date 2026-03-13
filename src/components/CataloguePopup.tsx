"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, BookOpen, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const CataloguePopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);

        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
    };

    if (!isMounted) return null;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="fixed bottom-6 right-6 z-50 w-[calc(100%-3rem)] max-w-sm sm:w-80"
                >
                    <div className="relative bg-zinc-900 border border-[#FFCC00]/50 shadow-[0_10px_40px_rgba(0,0,0,0.8),0_0_20px_rgba(255,204,0,0.15)] rounded-2xl overflow-hidden backdrop-blur-xl">
                        {/* Decorative Top Bar */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FFCC00] to-yellow-600" />

                        {/* Close Button */}
                        <button
                            onClick={handleClose}
                            className="absolute top-3 right-3 text-zinc-400 hover:text-white transition-colors p-1"
                            aria-label="Cerrar"
                        >
                            <X size={18} />
                        </button>

                        <div className="p-5">
                            {/* Header */}
                            <div className="flex items-start gap-3 mb-4">
                                <div className="bg-[#FFCC00]/20 p-2 rounded-lg text-[#FFCC00] shrink-0">
                                    <BookOpen size={24} />
                                </div>
                                <div>
                                    <h3 className="text-white font-black uppercase tracking-tight leading-tight">
                                        ¡Explora Nuestro Catálogo!
                                    </h3>
                                    <p className="text-zinc-400 text-xs mt-0.5">
                                        Descubrí todos nuestros productos y encontrá lo que necesitás.
                                    </p>
                                </div>
                            </div>

                            {/* CTA */}
                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <Link
                                    href="/productos"
                                    onClick={handleClose}
                                    className="w-full flex items-center justify-center gap-2 bg-[#FFCC00] hover:bg-yellow-400 text-black font-bold py-3 px-4 rounded-xl transition-all shadow-[0_5px_15px_rgba(255,204,0,0.25)]"
                                >
                                    <span>Ver Catálogo</span>
                                    <ArrowRight size={18} />
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CataloguePopup;
