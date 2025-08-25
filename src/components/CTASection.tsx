import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 px-6 relative">
      {/* Background Effect */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=1920&h=1080&fit=crop"
          alt="Cosmic background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            <span className="text-silicon-text-dark">Ready to</span>{" "}
            <span className="text-foreground">accelerate your AI development?</span>
          </h2>
          
          <div className="flex justify-center">
            <Button className="btn-hero btn-green text-lg px-8 py-4">
              Get Started for Free
              <ExternalLink className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-20 hidden lg:block">
          <div className="w-full h-full bg-gradient-to-tl from-silicon-purple/30 to-transparent rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
};

export default CTASection;