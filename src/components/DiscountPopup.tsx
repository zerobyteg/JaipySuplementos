"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Tag, Clock } from 'lucide-react';

const DiscountPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);

        const hasSeenPopup = localStorage.getItem('jaipy_discount_popup_closed');
        const storedEndTime = localStorage.getItem('jaipy_discount_popup_end_time');

        if (hasSeenPopup === 'true') {
            return;
        }

        let endTime = storedEndTime ? parseInt(storedEndTime, 10) : null;

        if (endTime) {
            const now = new Date().getTime();
            const remaining = Math.max(0, Math.floor((endTime - now) / 1000));
            
            if (remaining > 0) {
                setTimeLeft(remaining);
                // If there's an active timer, show immediately (or you could still wait 7s. Let's show immediately if active)
                setIsVisible(true);
            } else {
                // Timer expired
                localStorage.setItem('jaipy_discount_popup_closed', 'true');
                return;
            }
        } else {
            // First time logic
            const timer = setTimeout(() => {
                const newEndTime = new Date().getTime() + 600 * 1000;
                localStorage.setItem('jaipy_discount_popup_end_time', newEndTime.toString());
                setIsVisible(true);
            }, 7000);

            return () => clearTimeout(timer);
        }
    }, []);

    useEffect(() => {
        if (!isVisible || timeLeft <= 0) return;

        const intervalId = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(intervalId);
                    localStorage.setItem('jaipy_discount_popup_closed', 'true');
                    setIsVisible(false);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(intervalId);
    }, [isVisible, timeLeft]);

    const handleClose = () => {
        setIsVisible(false);
        localStorage.setItem('jaipy_discount_popup_closed', 'true');
    };

    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    if (!isMounted) return null;

    const whatsappMessage = encodeURIComponent("¡Hola! Vengo del catálogo y quiero aprovechar mi descuento del 10% en mi primera compra en los próximos 10 minutos.");
    const whatsappLink = `https://wa.me/595991712966?text=${whatsappMessage}`;

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
                            aria-label="Cerrar oferta"
                        >
                            <X size={18} />
                        </button>

                        <div className="p-5">
                            {/* Header */}
                            <div className="flex items-start gap-3 mb-3">
                                <div className="bg-[#FFCC00]/20 p-2 rounded-lg text-[#FFCC00]">
                                    <Tag size={24} />
                                </div>
                                <div>
                                    <h3 className="text-white font-black uppercase tracking-tight leading-tight">
                                        ¡10% de Descuento!
                                    </h3>
                                    <p className="text-zinc-400 text-xs">
                                        En tu próxima compra.
                                    </p>
                                </div>
                            </div>

                            {/* Timer */}
                            <div className="bg-black/50 border border-zinc-800 rounded-xl p-3 mb-4 flex items-center justify-between">
                                <span className="text-xs font-bold text-zinc-300 uppercase tracking-wider">La oferta expira en:</span>
                                <div className="flex items-center gap-1.5 text-[#FFCC00] font-mono text-lg font-bold">
                                    <Clock size={16} className="animate-pulse" />
                                    <span>{formatTime(timeLeft)}</span>
                                </div>
                            </div>

                            {/* Warning / Condition */}
                            <p className="text-[10px] text-zinc-500 text-center mb-4 uppercase tracking-widest px-2">
                                * Válido para una sola compra.
                            </p>

                            {/* CTA */}
                            <motion.a
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={handleClose}
                                className="w-full flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-3 px-4 rounded-xl transition-all shadow-[0_5px_15px_rgba(37,211,102,0.2)]"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    width="18"
                                    height="18"
                                    fill="currentColor"
                                    className="shrink-0"
                                >
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                <span>¡Lo quiero!</span>
                            </motion.a>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default DiscountPopup;
