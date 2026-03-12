"use client";

import { useState, useEffect } from 'react';

export function useDiscount() {
    const [isDiscountActive, setIsDiscountActive] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);

        const checkDiscountStatus = () => {
            const nextAvailableTimeStr = localStorage.getItem('jaipy_discount_popup_next_available');
            const storedEndTime = localStorage.getItem('jaipy_discount_popup_end_time');

            if (nextAvailableTimeStr) {
                const nextAvailable = parseInt(nextAvailableTimeStr, 10);
                if (new Date().getTime() < nextAvailable) {
                    setIsDiscountActive(false);
                    return;
                }
            }

            if (storedEndTime) {
                const endTime = parseInt(storedEndTime, 10);
                const now = new Date().getTime();
                const remaining = Math.max(0, Math.floor((endTime - now) / 1000));

                if (remaining > 0) {
                    setIsDiscountActive(true);
                } else {
                    // Timer expired but chance hasn't been consumed by the popup yet,
                    // or they refreshed after expiration. We consider it inactive 
                    // right now until the popup remounts, consumes the chance, and starts a new timer.
                    setIsDiscountActive(false);
                }
            } else {
                // If there's no stored end time, but they haven't used their 48hr offer:
                // They either haven't seen the popup yet, or they consumed a previous offer
                // and the popup will start a fresh timer soon.
                // We consider them active for the discount.
                setIsDiscountActive(true);
            }
        };

        checkDiscountStatus();

        // Optional: set up an interval to periodically check if the discount has expired
        const intervalId = setInterval(checkDiscountStatus, 1000);

        return () => clearInterval(intervalId);
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
        isDiscountActive: isMounted ? isDiscountActive : false, 
        calculateDiscountedPrice 
    };
}
