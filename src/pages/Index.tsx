import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import MultimodalSection from '@/components/MultimodalSection';
import LLMSection from '@/components/LLMSection';
import ProductsSection from '@/components/ProductsSection';
import AdvantageSection from '@/components/AdvantageSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <MultimodalSection />
        <LLMSection />
        <ProductsSection />
        <AdvantageSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;