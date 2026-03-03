"use client";

import React, { useState } from 'react';
import { ShoppingCart, Weight } from 'lucide-react';
import Image from 'next/image';

import { Product } from '@/data/products';

export default function ProductCard({ product }: { product: Product }) {
    const [selectedVariantId, setSelectedVariantId] = useState(product.variants[0].id);
    const selectedVariant = product.variants.find(v => v.id === selectedVariantId) || product.variants[0];

    return (
        <div className="group flex flex-col bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800/50 hover:border-zinc-700/80 rounded-3xl p-5 transition-all duration-300 hover:shadow-2xl hover:shadow-black">
            {/* Image Container with subtle hover zoom */}
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6 bg-white border border-zinc-800/30">
                <Image
                    src={(product.folder.includes('/') || product.folder === 'wellness' || product.folder === 'quemadores')
                        ? encodeURI(`/products/${product.folder}/${selectedVariant.imageFileName}`)
                        : encodeURI(`/products/proteins/${product.folder}/${selectedVariant.imageFileName}`)}
                    alt={`${product.name} - ${selectedVariant.weight}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            {/* Content Container */}
            <div className="flex flex-col flex-grow">
                {/* Product Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug group-hover:text-amber-500 transition-colors duration-300">
                    {product.name}
                </h3>

                {/* Description (max 2 lines using line-clamp-2) */}
                <p className="text-sm text-zinc-400 line-clamp-2 group-hover:line-clamp-none leading-relaxed mb-6">
                    {product.description}
                </p>

                {/* Variant Selection Buttons */}
                {product.variants.length > 1 && (
                    <div className="flex gap-3 mb-6 mt-auto">
                        {product.variants.map((variant) => (
                            <button
                                key={variant.id}
                                onClick={() => setSelectedVariantId(variant.id)}
                                className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 text-xs font-black uppercase tracking-widest rounded-xl transition-all duration-300 border-2 ${selectedVariantId === variant.id
                                    ? 'bg-amber-500 text-black border-amber-500 shadow-lg shadow-amber-500/20'
                                    : 'bg-transparent text-zinc-400 border-zinc-700 hover:border-zinc-500 hover:text-white'
                                    }`}
                            >
                                <Weight className="w-3.5 h-3.5" />
                                {variant.weight}
                            </button>
                        ))}
                    </div>
                )}

                {/* Price section */}
                <div className="pt-4 border-t border-zinc-800/50 flex items-end justify-between mt-auto">
                    <div className="flex flex-col">
                        <span className="text-xs text-zinc-500 uppercase font-semibold tracking-wider mb-1">Precio</span>
                        <span className="text-2xl sm:text-3xl font-black text-amber-500 tracking-tight transition-all duration-300">
                            {selectedVariant.price}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
