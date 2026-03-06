"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative w-full min-h-[85vh] flex items-center bg-[#0a0a0a] overflow-hidden pb-12">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-black to-black z-10" />

            {/* Subtle Noise Texture */}
            <div
                className="absolute inset-0 z-15 opacity-[0.03] mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'repeat'
                }}
            />

            <div className="container mx-auto px-4 lg:px-8 relative z-20">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 pt-12 lg:pt-0">

                    {/* Left Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full lg:w-1/2 flex flex-col items-start text-left"
                    >
                        <div className="mb-4 inline-block rounded-full bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-zinc-400 backdrop-blur-md border border-white/5">
                            Calidad Premium Garantizada
                        </div>

                        <h1 className="text-[11vw] sm:text-[10vw] md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white leading-[0.85] mb-6 drop-shadow-xl" style={{ overflowWrap: 'break-word', hyphens: 'auto' }}>
                            Potencia<br />
                            <span className="text-[#FFCC00] drop-shadow-[0_0_15px_rgba(255,215,0,0.3)]">
                                Tu Entrenamiento
                            </span>
                        </h1>

                        <p className="text-zinc-400 text-lg md:text-xl font-medium max-w-lg mb-10 leading-relaxed">
                            Alcanza tus metas con la suplementación de más alta tecnología. Diseñado para atletas que no conocen límites.
                        </p>
                    </motion.div>

                    {/* Right Product Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="w-full lg:w-1/2 flex justify-center lg:justify-end relative mt-10 lg:mt-0"
                    >
                        {/* Pulsing Yellow Glow */}
                        <motion.div
                            animate={{ opacity: [0.15, 0.3, 0.15], scale: [1, 1.05, 1] }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-[#FFCC00] rounded-full blur-[120px] pointer-events-none"
                        />

                        {/* 3D Product Image (Static) */}
                        <div
                            className="relative z-10 w-full max-w-[500px] flex items-center justify-center"
                        >
                            <Image
                                src="/products/proteins/premium-whey/PREMIUM-WHEY-5LB-CHOCOLATE.png"
                                alt="Premium Whey Protein"
                                width={500}
                                height={500}
                                priority
                                className="w-[80%] md:w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
