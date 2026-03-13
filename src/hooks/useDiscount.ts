"use client";

import { useState, useEffect } from 'react';

export function useDiscount() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const calculateDiscountedPrice = (priceString: string) => {
        // Assume price format like "380.000" or "1.380.000"
        const numericPrice = parseInt(priceString.replace(/\./g, ''), 10);
        if (isNaN(numericPrice)) return priceString; // Fallback if parsing fails

        const discountedPrice = numericPrice * 0.90; // 10% discount
        
        // Format back to string with dots
        return discountedPrice.toLocaleString('es-PY').replace(/,/g, '.');
    };

    return { 
        isDiscountActive: isMounted ? true : false, 
        calculateDiscountedPrice 
    };
}
