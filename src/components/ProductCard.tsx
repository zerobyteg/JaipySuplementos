"use client";

import React, { useState, useEffect } from 'react';
import { Weight } from 'lucide-react';
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

const FLAVOR_EMOJIS: Record<string, string> = {
    'Acai': '🍇',
    'Banana Split': '🍌',
    'Caramel': '🍯',
    'Chocolate Peanut Butter': '🍫',
    'Chocolate': '🍫',
    'Cookies and Cream': '🍪',
    'Dulce de Leche': '🍯',
    'Peanut Butter': '🥜',
    'Strawberry': '🍓',
    'Vainilla': '🍦',
    'Coconut': '🥥',
    'Cafe': '☕',
    'Pineapple Coconut': '🍍',
    'Strawberry Cheesecake': '🍰',
    'Fresa': '🍓',
    'Banana': '🍌',
    'Banoffee': '🍌',
    'Brigadeiro': '🍫',
    'Mani': '🥜',
    'Red Berry Yogurt': '🍓',
    'Coconut Tropical Fruit': '🥥',
    'Hazelnut Chocolate': '🍫',
    'Strawberry Milkshake': '🥤',
    'Vanilla Ice Cream': '🍦',
    'Blue Raspberry': '🍇',
    'Green Apple': '🍏',
    'Lemon Lime': '🍋',
    'Pineapple': '🍍',
    'Watermelon': '🍉',
    'Cola': '🥤',
    'Grape': '🍇',
    'Orange': '🍊',
    'Fruit Punch': '🥤',
    'Raspberry Lemonade': '🥤',
    'Tangerine': '🍊',
    'Key Lime Ice': '🍋',
    'Original / Unflavored': '💧',
    'Unflavored': '💧',
    'Hazelnut Cream': '🍯',
    '180 Caps': '💊',
    '120 caps': '💊',
    '90 caps': '💊',
    '60 caps': '💊',
    '30 caps': '💊',
    '405g': '🥤',
    'Cappuccino': '☕',
};

export default function ProductCard({ product }: { product: GroupedProduct }) {
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

    const [isLoading, setIsLoading] = useState(true);

    // Reset loading state when the source image changes
    useEffect(() => {
        setIsLoading(true);
    }, [activeVariant.imageFileName]);

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group flex flex-col bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800/50 hover:border-zinc-700/80 rounded-3xl p-5 transition-all duration-300 hover:shadow-2xl hover:shadow-black h-full"
        >
            {/* Image Container */}
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6 bg-white border border-zinc-800/30 flex items-center justify-center">
                {/* Spinner Overlay */}
                {isLoading && (
                    <div className="absolute inset-0 z-10 flex items-center justify-center bg-zinc-900/5 backdrop-blur-[2px] transition-opacity duration-300">
                        <div className="w-8 h-8 border-[3px] border-[#FFCC00]/20 border-t-[#FFCC00] rounded-full animate-spin shadow-[0_0_15px_rgba(255,204,0,0.1)]"></div>
                    </div>
                )}

                <Image
                    src={(product.folder.includes('/') || product.folder === 'wellness' || product.folder === 'quemadores')
                        ? `/products/${product.folder}/${activeVariant.imageFileName}`
                        : `/products/proteins/${product.folder}/${activeVariant.imageFileName}`}
                    alt={`${product.name} - ${activeVariant.flavor} - ${activeVariant.weight}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={`object-cover transition-all duration-700 group-hover:scale-110 ${isLoading ? 'opacity-0 scale-95 blur-sm' : 'opacity-100 scale-100 blur-0'}`}
                    onLoad={() => setIsLoading(false)}
                    priority={false}
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

                {/* Variant Selection Buttons (Flavor) - Stacked Grid */}
                {flavors.length > 1 && !(flavors.length === 1 && flavors[0] === 'Original / Unflavored') && (
                    <div className="mb-6 mt-auto">
                        <div className="flex items-center justify-between mb-3 px-1">
                            <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-black">Sabor:</span>
                            <span className="text-zinc-300 text-[10px] font-bold uppercase tracking-tight">{selectedFlavor}</span>
                        </div>

                        <div className="flex flex-wrap gap-3 py-1">
                            {flavors.map((flavor) => {
                                const isSelected = selectedFlavor === flavor;
                                const baseColor = FLAVOR_COLORS[flavor] || '#fff';
                                const emoji = FLAVOR_EMOJIS[flavor] || '✨';

                                return (
                                    <button
                                        key={flavor}
                                        onClick={() => setSelectedFlavor(flavor)}
                                        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 transition-all duration-300 relative flex items-center justify-center text-lg sm:text-xl ${isSelected ? 'border-white scale-110 shadow-[0_0_15px_rgba(255,204,0,0.4)]' : 'border-zinc-800 hover:border-zinc-500 hover:scale-105'}`}
                                        style={{ backgroundColor: baseColor }}
                                        title={flavor}
                                    >
                                        <span style={{ textShadow: '0 0 2px black' }}>
                                            {emoji}
                                        </span>
                                        {isSelected && (
                                            <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-[#FFCC00] rounded-full border-2 border-black animate-in zoom-in duration-300" />
                                        )}
                                    </button>
                                );
                            })}
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

                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={`https://wa.me/message/SLXS6GSCM4VTE1?text=${encodeURIComponent(`Hola, estoy interesado en el producto: ${product.name}`)}`}
                        target="_blank"
                        className="flex items-center justify-center p-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-2xl transition-all duration-300 shadow-[0_5px_15px_rgba(37,211,102,0.2)] hover:shadow-[0_8px_20px_rgba(37,211,102,0.3)] group/wa"
                        title="Consultar por WhatsApp"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            width="20"
                            height="20"
                            fill="currentColor"
                            className="transition-transform duration-300 group-hover/wa:rotate-12"
                        >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                    </motion.a>
                </div>
            </div>
        </div>
    );
}
