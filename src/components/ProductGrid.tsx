import React from 'react';
import ProductCard from './ProductCard';
import { GroupedProduct } from '@/utils/productUtils';

export default function ProductGrid({ products }: { products: GroupedProduct[] }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}
