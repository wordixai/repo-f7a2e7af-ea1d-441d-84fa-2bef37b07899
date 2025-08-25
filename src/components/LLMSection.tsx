import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface LLMCardProps {
  name: string;
  icon: string;
  href: string;
}

const LLMCard = ({ name, icon, href }: LLMCardProps) => (
  <a href={href} className="block">
    <div className="model-card hover:bg-silicon-bg-card/80 transition-all">
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 rounded bg-white/10 flex items-center justify-center">
          <img src={icon} alt={name} className="w-8 h-8 object-contain" />
        </div>
        <h3 className="text-lg font-medium text-foreground">{name}</h3>
      </div>
    </div>
  </a>
);

const LLMSection = () => {
  const llmModels = [
    { name: "DeepSeek-R1", icon: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=48&h=48&fit=crop", href: "/models/deepseek-r1" },
    { name: "DeepSeek-V3", icon: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=48&h=48&fit=crop", href: "/models/deepseek-v3" },
    { name: "gpt-oss-120b", icon: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=48&h=48&fit=crop", href: "/models/gpt-oss-120b" },
    { name: "gpt-oss-20b", icon: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=48&h=48&fit=crop", href: "/models/gpt-oss-20b" },
    { name: "GLM-4.5", icon: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=48&h=48&fit=crop", href: "/models/glm-4-5" },
    { name: "GLM-4.5-Air", icon: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=48&h=48&fit=crop", href: "/models/glm-4-5-air" },
    { name: "GLM-4.5V", icon: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=48&h=48&fit=crop", href: "/models/glm-4-5v" },
    { name: "step3", icon: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=48&h=48&fit=crop", href: "/models/step3" },
    { name: "Qwen3-Coder-480B-A35B", icon: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=48&h=48&fit=crop", href: "/models/qwen3-coder-480b" },
    { name: "Qwen3-Coder-30B-A3B-Instruct", icon: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=48&h=48&fit=crop", href: "/models/qwen3-coder-30b" },
    { name: "Qwen3-30B-A3B-Thinking-2507", icon: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=48&h=48&fit=crop", href: "/models/qwen3-30b-thinking" },
    { name: "Qwen3-235B-A22B-Instruct-2507", icon: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=48&h=48&fit=crop", href: "/models/qwen3-235b" }
  ];

  return (
    <section className="py-20 px-6 relative">
      {/* Background Vector */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 opacity-10">
        <svg width="500" height="400" viewBox="0 0 509 406" className="text-silicon-purple">
          <path d="M0 100 Q250 0 509 100 Q250 200 0 100" fill="currentColor" opacity="0.1" />
        </svg>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div>
            <div className="tag-badge mb-6">
              LLMs
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-silicon-text-dark">Run Powerful LLMs</span>
            </h2>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="section-gradient">Faster, Smarter, at Any Scale</span>
            </h2>
            <p className="text-lg text-silicon-text-muted mb-8 leading-relaxed">
              Serve open and commercial LLMs through our optimized stack. Lower latency, higher throughput, and predictable costs.
            </p>
          </div>

          {/* Right Content - LLM Models Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {llmModels.map((model, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <LLMCard {...model} />
              </div>
            ))}
          </div>
        </div>

        {/* Explore More Button */}
        <div className="text-center mt-12">
          <Button className="btn-hero btn-primary">
            Explore More
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LLMSection;