import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface ModelCardProps {
  title: string;
  image: string;
  href: string;
}

const ModelCard = ({ title, image, href }: ModelCardProps) => (
  <a href={href} className="block group">
    <div className="text-center mb-4">
      <h3 className="text-lg font-medium text-foreground mb-4">{title}</h3>
    </div>
    <div className="relative model-card border-4 border-silicon-dark-purple overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover transition-transform group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
    </div>
  </a>
);

const MultimodalSection = () => {
  const topModels = [
    {
      title: "FLUX.1 Kontext [pro]",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
      href: "/models/flux-kontext-pro"
    },
    {
      title: "FLUX.1 Kontext [max]",
      image: "https://images.unsplash.com/photo-1686191128892-6306e4194e5e?w=400&h=600&fit=crop",
      href: "/models/flux-kontext-max"
    },
    {
      title: "FLUX 1.1 [pro] Ultra",
      image: "https://images.unsplash.com/photo-1686191128892-6306e4194e5e?w=400&h=500&fit=crop",
      href: "/models/flux-pro-ultra"
    }
  ];

  const bottomModels = [
    {
      title: "Wan2.2-I2V-A14B",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=400&fit=crop",
      href: "/models/wan2-i2v"
    },
    {
      title: "Wan2.2-T2V-A14B",
      image: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?w=400&h=600&fit=crop",
      href: "/models/wan2-t2v"
    },
    {
      title: "Wan2.1-I2V-14B-720P",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=500&fit=crop",
      href: "/models/wan2-720p"
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="container mx-auto">
        {/* Top Row - Image Models */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {topModels.map((model, index) => (
              <div key={index} className="animate-fade-in-down" style={{ animationDelay: `${index * 0.2}s` }}>
                <ModelCard {...model} />
              </div>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Content */}
          <div className="text-left lg:text-left">
            <div className="tag-badge mb-6">
              MULTIMODAL
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-silicon-text-dark">High-Speed Inference for</span>
            </h2>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="section-gradient">Image, Video, and Beyond</span>
            </h2>
            <p className="text-lg text-silicon-text-muted mb-8 leading-relaxed">
              From image generation to visual understanding, our platform accelerates multimodal models with unmatched performance.
            </p>
            <Button className="btn-hero btn-primary">
              Get Started
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>

          {/* Right Content - Bottom Models */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bottomModels.map((model, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <ModelCard {...model} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultimodalSection;