"use client";

import React from 'react';
import ProductGrid from './ProductGrid';
import { products } from '@/data/products';

export default function Catalog() {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-16 sm:py-24">
            {/* Header (Optional, if you want a title or filters here later) */}
            <div className="mb-12 text-center md:text-left">
                <h2 className="text-3xl font-black text-white uppercase tracking-tight sm:text-4xl">
                    Nuestros Productos
                </h2>
                <p className="mt-4 text-zinc-400 max-w-2xl text-lg">
                    Encuentra los suplementos perfectos para alcanzar tus metas y llevar tu entrenamiento al siguiente nivel.
                </p>
            </div>

            {/* Catalog Grid */}
            <ProductGrid products={products} />
        </div>
    );
}
