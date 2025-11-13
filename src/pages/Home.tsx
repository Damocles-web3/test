import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Markets from '@/components/Markets';
import TradingQuickAccess from '@/components/TradingQuickAccess';
import PlatformFeatures from '@/components/PlatformFeatures';
import ProductsShowcase from '@/components/ProductsShowcase';
import News from '@/components/News';
import SecurityInfo from '@/components/SecurityInfo';
import DownloadApp from '@/components/DownloadApp';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <Navbar />
      <main>
        <Hero />
        <Markets />
        <TradingQuickAccess />
        <PlatformFeatures />
        <ProductsShowcase />
        <News />
        <SecurityInfo />
        <DownloadApp />
      </main>
      <Footer />
    </div>
  );
}