import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 hero-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Tagline */}
        <div className="mb-8 animate-fade-in-down">
          <a
            href="/blog/gpt-oss"
            className="inline-flex items-center px-4 py-2 rounded-full border border-silicon-yellow/20 bg-silicon-yellow/10 text-silicon-yellow text-sm font-mono uppercase hover:bg-silicon-yellow/20 transition-colors"
          >
            🎉 gpt-oss on SiliconFlow
          </a>
        </div>

        {/* Main Heading */}
        <div className="mb-6 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
            <span className="text-silicon-text-dark">One Platform</span>
            <br />
            <span className="text-foreground">All Your AI Inference Needs</span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-xl text-silicon-text-muted max-w-2xl mx-auto leading-relaxed">
            From small dev teams to large enterprises: unified serverless, reserved, or private‐cloud inference—no fragmentation.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Button className="btn-hero btn-primary">
            Get Started for Free
            <ExternalLink className="w-4 h-4" />
          </Button>
          <Button className="btn-hero btn-secondary">
            Contact Sales
          </Button>
        </div>
      </div>

      {/* Floating particles animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-silicon-purple/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;