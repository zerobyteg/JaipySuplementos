"use client";

import React, { useState } from 'react';
import ProductGrid from './ProductGrid';
import { products } from '@/data/products';

export default function Catalog() {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 9;

    const totalPages = Math.ceil(products.length / productsPerPage);
    const startIndex = (currentPage - 1) * productsPerPage;
    const currentProducts = products.slice(startIndex, startIndex + productsPerPage);
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
            <ProductGrid products={currentProducts} />

            {/* Pagination Controls */}
            {totalPages > 1 && (
                <div className="mt-16 flex justify-center items-center gap-4">
                    <button
                        onClick={() => {
                            setCurrentPage(p => Math.max(1, p - 1));
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        disabled={currentPage === 1}
                        className={`px-6 py-3 rounded-xl font-bold uppercase tracking-widest text-sm transition-all duration-300 ${currentPage === 1
                                ? 'bg-zinc-900 text-zinc-600 cursor-not-allowed border border-zinc-800'
                                : 'bg-transparent text-white border border-[#FFCC00] hover:bg-[#FFCC00] hover:text-black shadow-[0_0_15px_rgba(255,204,0,0.1)] hover:shadow-[0_0_20px_rgba(255,204,0,0.3)]'
                            }`}
                    >
                        Anterior
                    </button>

                    <span className="text-zinc-400 font-bold min-w-[100px] text-center">
                        {currentPage} de {totalPages}
                    </span>

                    <button
                        onClick={() => {
                            setCurrentPage(p => Math.min(totalPages, p + 1));
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        disabled={currentPage === totalPages}
                        className={`px-6 py-3 rounded-xl font-bold uppercase tracking-widest text-sm transition-all duration-300 ${currentPage === totalPages
                                ? 'bg-zinc-900 text-zinc-600 cursor-not-allowed border border-zinc-800'
                                : 'bg-[#FFCC00] text-black border border-[#FFCC00] hover:bg-[#e6b800] shadow-[0_0_15px_rgba(255,204,0,0.2)] hover:shadow-[0_0_20px_rgba(255,204,0,0.4)]'
                            }`}
                    >
                        Siguiente
                    </button>
                </div>
            )}
        </div>
    );
}
