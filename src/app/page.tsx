import Hero from '@/components/Hero';
import TrendingProducts from '@/components/TrendingProducts';
import CataloguePopup from '@/components/CataloguePopup';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-black text-white overflow-hidden">
      <Hero />
      <TrendingProducts />
      <CataloguePopup />
    </main>
  );
}
