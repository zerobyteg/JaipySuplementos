"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Weight, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { GroupedProduct, GroupedProductVariant } from '@/utils/productUtils';

const FLAVOR_COLORS: Record<string, string> = {
    'Acai': '#5C2D5C',
    'Banana Split': '#F3E5AB',
    'Caramel': '#C68E17',
    'Chocolate Peanut Butter': '#b26a11',
    'Chocolate': '#3C2F2F',
    'Cookies and Cream': '#D3D3D3',
    'Dulce de Leche': '#D2B48C',
    'Peanut Butter': '#CD853F',
    'Strawberry': '#FF6B6B',
    'Vainilla': '#F3E5AB',
    'Coconut': '#fffdf5',
    'Cafe': '#4B3621',
    'Pineapple Coconut': '#f3e5ab',
    'Strawberry Cheesecake': '#e6a8d7',
    'Fresa': '#FF6B6B',
    'Banana': '#F3E5AB',
    'Banoffee': '#e3d2a3',
    'Brigadeiro': '#4d331f',
    'Mani': '#CD853F',
    'Red Berry Yogurt': '#d01c1f',
    'Coconut Tropical Fruit': '#ffecb3',
    'Hazelnut Chocolate': '#8B4513',
    'Strawberry Milkshake': '#ffb6c1',
    'Vanilla Ice Cream': '#f3e5ab',
    'Blue Raspberry': '#00BFFF',
    'Green Apple': '#8DB600',
    'Lemon Lime': '#ccff00',
    'Pineapple': '#fff700',
    'Watermelon': '#fc6c85',
    'Cola': '#450201',
    'Grape': '#6f2da8',
    'Orange': '#ffa500',
    'Fruit Punch': '#ff003f',
    'Raspberry Lemonade': '#e30b5d',
    'Tangerine': '#f28500',
    'Key Lime Ice': '#e8f48c',
    'Original / Unflavored': '#ffffff',
    'Unflavored': '#ffffff',
    'Hazelnut Cream': '#D2B48C',
};

export default function ProductCard({ product }: { product: GroupedProduct }) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Unique flavors and weights
    const flavors = Array.from(new Set(product.variants.map(v => v.flavor)));
    const allWeights = Array.from(new Set(product.variants.map(v => v.weight)));

    // State for UI selection
    const [selectedFlavor, setSelectedFlavor] = useState<string>(flavors[0]);
    const [selectedWeight, setSelectedWeight] = useState<string>('');

    // Available weights for the currently selected flavor
    const weightsForSelectedFlavor = product.variants
        .filter(v => v.flavor === selectedFlavor)
        .map(v => v.weight);

    // Initialize or fallback weight when flavor changes
    useEffect(() => {
        if (!weightsForSelectedFlavor.includes(selectedWeight as any)) {
            setSelectedWeight(weightsForSelectedFlavor[0]);
        }
    }, [selectedFlavor, selectedWeight, weightsForSelectedFlavor]);

    // Find the exact variant based on selected flavor and weight
    let activeVariant = product.variants.find(
        v => v.flavor === selectedFlavor && v.weight === selectedWeight
    );

    // Initial render fallback if weight effect hasn't fired yet
    if (!activeVariant) {
        activeVariant = product.variants.find(v => v.flavor === selectedFlavor) || product.variants[0];
    }

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollAmount = clientWidth * 0.6;
            const scrollTo = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group flex flex-col bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800/50 hover:border-zinc-700/80 rounded-3xl p-5 transition-all duration-300 hover:shadow-2xl hover:shadow-black"
        >
            {/* Image Container */}
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6 bg-white border border-zinc-800/30">
                <Image
                    src={(product.folder.includes('/') || product.folder === 'wellness' || product.folder === 'quemadores')
                        ? `/products/${product.folder}/${activeVariant.imageFileName}`
                        : `/products/proteins/${product.folder}/${activeVariant.imageFileName}`}
                    alt={`${product.name} - ${activeVariant.flavor} - ${activeVariant.weight}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            {/* Content Container */}
            <div className="flex flex-col flex-grow">
                {/* Product Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug group-hover:text-[#FFCC00] transition-colors duration-300 uppercase">
                    {product.name}
                </h3>

                {/* Description - Smooth Animation using motion.div */}
                <div className="relative overflow-hidden mb-6">
                    <motion.div
                        initial={false}
                        animate={{
                            height: isHovered ? 'auto' : '2.8rem',
                            opacity: isHovered ? 1 : 0.5
                        }}
                        transition={{
                            duration: 0.6,
                            ease: [0.4, 0, 0.2, 1]
                        }}
                        className="overflow-hidden"
                    >
                        <p className="text-sm text-zinc-400 leading-relaxed">
                            {product.description}
                        </p>
                    </motion.div>
                </div>

                {/* Variant Selection Buttons (Weight) */}
                {allWeights.length > 1 && (
                    <div className="mb-4">
                        <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-black mb-2 block">Tamaño:</span>
                        <div className="flex gap-2 flex-wrap">
                            {allWeights.map((weight) => {
                                const isAvailable = weightsForSelectedFlavor.includes(weight as any);
                                const isSelected = selectedWeight === weight;

                                return (
                                    <button
                                        key={weight}
                                        onClick={() => isAvailable && setSelectedWeight(weight)}
                                        disabled={!isAvailable}
                                        className={`flex-1 min-w-[30%] flex items-center justify-center gap-1.5 py-2 text-[10px] sm:text-xs font-black uppercase tracking-widest rounded-xl transition-all duration-300 border-2 ${isSelected
                                            ? 'bg-[#FFCC00] text-black border-[#FFCC00] shadow-lg shadow-[#FFCC00]/20'
                                            : isAvailable
                                                ? 'bg-transparent text-zinc-400 border-zinc-700 hover:border-zinc-500 hover:text-white'
                                                : 'bg-transparent text-zinc-600 border-zinc-800/50 cursor-not-allowed opacity-50'
                                            }`}
                                    >
                                        <Weight className="w-3.5 h-3.5" />
                                        {weight}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* Variant Selection Buttons (Flavor) - Carousel Refined */}
                {flavors.length > 1 && !(flavors.length === 1 && flavors[0] === 'Original / Unflavored') && (
                    <div className="mb-6 mt-auto">
                        <div className="flex items-center justify-between mb-3 px-1">
                            <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-black">Sabor:</span>
                            <span className="text-zinc-300 text-[10px] font-bold uppercase tracking-tight">{selectedFlavor}</span>
                        </div>

                        <div className="relative flex items-center group/flavors">
                            {flavors.length > 4 && (
                                <button
                                    onClick={() => scroll('left')}
                                    className="absolute -left-2 z-20 p-1.5 bg-black/80 rounded-full text-white opacity-0 group-hover/flavors:opacity-100 transition-all hover:bg-[#FFCC00] hover:text-black shadow-xl"
                                >
                                    <ChevronLeft size={14} />
                                </button>
                            )}

                            <div
                                ref={scrollRef}
                                className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar py-2 px-2 w-full"
                            >
                                {flavors.map((flavor) => {
                                    const isSelected = selectedFlavor === flavor;
                                    const baseColor = FLAVOR_COLORS[flavor] || '#fff';

                                    return (
                                        <button
                                            key={flavor}
                                            onClick={() => setSelectedFlavor(flavor)}
                                            className={`flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 transition-all duration-300 relative ${isSelected ? 'border-white scale-110 shadow-[0_0_15px_rgba(255,204,0,0.4)]' : 'border-zinc-800 hover:border-zinc-500 hover:scale-105'}`}
                                            style={{ backgroundColor: baseColor }}
                                            title={flavor}
                                        >
                                            {isSelected && (
                                                <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-[#FFCC00] rounded-full border-2 border-black animate-in zoom-in duration-300" />
                                            )}
                                        </button>
                                    );
                                })}
                            </div>

                            {flavors.length > 4 && (
                                <button
                                    onClick={() => scroll('right')}
                                    className="absolute -right-2 z-20 p-1.5 bg-black/80 rounded-full text-white opacity-0 group-hover/flavors:opacity-100 transition-all hover:bg-[#FFCC00] hover:text-black shadow-xl"
                                >
                                    <ChevronRight size={14} />
                                </button>
                            )}
                        </div>
                    </div>
                )}

                {/* Price section */}
                <div className="pt-4 border-t border-zinc-800/50 flex items-end justify-between mt-auto">
                    <div className="flex flex-col">
                        <span className="text-xs text-zinc-500 uppercase font-semibold tracking-wider mb-1">Precio</span>
                        <span className="text-2xl sm:text-3xl font-black text-[#FFCC00] tracking-tight transition-all duration-300">
                            {activeVariant.price}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
