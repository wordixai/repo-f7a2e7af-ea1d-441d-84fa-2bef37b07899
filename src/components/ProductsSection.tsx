import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const ProductsSection = () => {
  const products = [
    {
      title: "Serverless",
      description: "Run any model instantly — no setup, no scaling headaches. Just call the API and pay only for what you use.",
      color: "text-silicon-light-purple",
      href: "/products#inference"
    },
    {
      title: "Fine-tuning",
      description: "Easily adapt base models to your data. Fine-tune with built-in monitoring and elastic compute, without managing infrastructure.",
      color: "text-silicon-purple",
      href: "/products#fine-tuning"
    },
    {
      title: "Reserved GPUs",
      description: "Lock in GPU capacity for stable performance and predictable billing. Ideal for high-volume or scheduled inference jobs.",
      color: "text-silicon-light-purple",
      href: "/products#reserved-gpus"
    }
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop"
          alt="Space background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="tag-badge mb-6 inline-block">
            PRODUCTS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-silicon-text-dark">Flexible Deployment Options,</span>
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="section-gradient">Built for Every Use Case</span>
          </h2>
          <p className="text-lg text-silicon-text-muted max-w-2xl mx-auto leading-relaxed mb-8">
            Run models serverlessly, on dedicated endpoints, or bring your own setup.
          </p>
          <Button className="btn-hero btn-primary">
            Get Started
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="text-left">
                <h3 className={`text-2xl font-bold mb-4 ${product.color}`}>
                  {product.title}
                </h3>
                <p className={`text-base leading-relaxed mb-6 ${product.color}`}>
                  {product.description}
                </p>
                <a
                  href={product.href}
                  className={`inline-flex items-center space-x-2 text-lg font-medium ${product.color} hover:opacity-80 transition-opacity`}
                >
                  <span>Learn More</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;