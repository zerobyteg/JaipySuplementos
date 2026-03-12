"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Weight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import { products } from '@/data/products';
import { groupProducts } from '@/utils/productUtils';
import { useDiscount } from '@/hooks/useDiscount';

const groupedProducts = groupProducts(products);

// Find the specific products requested
const trendingProductIds = ['premium-whey', 'creatine-br', 'vegan-protein'];
const trendingProducts = groupedProducts.filter(p => trendingProductIds.includes(p.id))
    // we sort to ensure they appear in the exact order requested
    .sort((a, b) => trendingProductIds.indexOf(a.id) - trendingProductIds.indexOf(b.id));

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const TrendingProducts = () => {
    const { isDiscountActive, calculateDiscountedPrice } = useDiscount();
    return (
        <section className="bg-black py-20 lg:py-32 relative">
            <div className="container mx-auto px-4 lg:px-8">

                <div className="flex flex-col mb-16">
                    <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
                        Nuestros <span className="text-[#FFCC00]">Productos</span>
                    </h3>
                    <p className="text-zinc-400 text-lg max-w-2xl">
                        Encuentra los suplementos perfectos para alcanzar tus metas y llevar tu entrenamiento al siguiente nivel.
                    </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {trendingProducts.map((product) => (
                        <motion.div
                            key={product.id}
                            variants={itemVariants}
                        >
                            <Link
                                href="/productos"
                                className="group flex flex-col h-full bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800/50 hover:border-zinc-700/80 rounded-3xl p-5 transition-all duration-300 hover:shadow-2xl hover:shadow-black cursor-pointer"
                            >
                                {/* Product Image Area */}
                                <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6 bg-white border border-zinc-800/30">
                                    <Image
                                        src={(product.folder.includes('/') || product.folder === 'wellness' || product.folder === 'quemadores')
                                            ? `/products/${product.folder}/${product.variants[0].imageFileName}`
                                            : `/products/proteins/${product.folder}/${product.variants[0].imageFileName}`}
                                        alt={product.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>

                                {/* Content Container */}
                                <div className="flex flex-col flex-grow">
                                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug group-hover:text-[#FFCC00] transition-colors duration-300 uppercase">
                                        {product.name}
                                    </h3>

                                    <p className="text-sm text-zinc-400 line-clamp-2 leading-relaxed mb-6 group-hover:line-clamp-none transition-all duration-300">
                                        {product.description}
                                    </p>

                                    {/* Spacer to keep price at bottom */}
                                    <div className="mt-auto mb-6"></div>

                                    {/* Price */}
                                    <div className="pt-4 border-t border-zinc-800/50 flex items-end justify-between mt-auto">
                                        <div className="flex flex-col">
                                            <span className="text-xs text-zinc-500 uppercase font-semibold tracking-wider mb-1">Precio</span>
                                            {isDiscountActive ? (
                                                <div className="flex flex-col items-start gap-0.5">
                                                    <span className="text-sm font-semibold text-zinc-500 line-through tracking-tight">
                                                        {product.variants[0].price}
                                                    </span>
                                                    <span className="text-2xl sm:text-3xl font-black text-[#FFCC00] tracking-tight transition-all duration-300 flex items-center gap-2">
                                                        {calculateDiscountedPrice(product.variants[0].price)}
                                                        <span className="text-sm bg-green-500/20 text-green-500 px-2 py-1 rounded-md font-black uppercase tracking-wider" title="Solo para nuevos usuarios">
                                                            -10%
                                                        </span>
                                                    </span>
                                                </div>
                                            ) : (
                                                <span className="text-2xl sm:text-3xl font-black text-[#FFCC00] tracking-tight transition-all duration-300">
                                                    {product.variants[0].price}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="mt-16 text-center">
                    <Link href="/productos" className="inline-flex items-center gap-3 text-zinc-400 hover:text-[#FFCC00] font-bold uppercase tracking-widest text-sm transition-colors opacity-80 hover:opacity-100">
                        Ver Catálogo Completo
                        <ArrowRight size={18} />
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default TrendingProducts;
