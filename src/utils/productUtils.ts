import { Product, ProductVariant } from '@/data/products';

export interface GroupedProductVariant extends ProductVariant {
    flavor: string;
}

export interface GroupedProduct {
    id: string; // The base name, e.g., "Premium Whey"
    folder: string;
    name: string; // The base name
    description: string;
    variants: GroupedProductVariant[];
}

export function groupProducts(products: Product[]): GroupedProduct[] {
    const groupedMap = new Map<string, GroupedProduct>();

    products.forEach((product) => {
        // Split name by " - " to separate base name and flavor
        const parts = product.name.split(' - ');
        const baseName = parts[0].trim();
        const flavor = parts.length > 1 ? parts.slice(1).join(' - ').trim() : 'Original / Unflavored';

        if (!groupedMap.has(baseName)) {
            // First time seeing this base name, create the group
            groupedMap.set(baseName, {
                id: baseName.toLowerCase().replace(/\s+/g, '-'),
                folder: product.folder,
                name: baseName,
                description: product.description,
                variants: []
            });
        }

        const group = groupedMap.get(baseName)!;

        // Map existing variants to GroupedProductVariant (injecting flavor)
        product.variants.forEach((variant) => {
            group.variants.push({
                ...variant,
                flavor
            });
        });
    });

    return Array.from(groupedMap.values());
}
