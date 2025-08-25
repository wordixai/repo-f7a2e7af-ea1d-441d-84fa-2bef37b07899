import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ExternalLink, Twitter, Linkedin, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-silicon-bg-dark py-16 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo and Subscribe */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-8">
              <div className="w-8 h-8 bg-silicon-purple rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold text-foreground">SiliconFlow</span>
            </div>
            
            <div className="max-w-md">
              <h3 className="text-lg font-semibold text-silicon-text-light mb-4">
                Subscribe for updates
              </h3>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="bg-silicon-bg-card border-silicon-bg-card text-foreground placeholder:text-muted-foreground"
                />
                <Button className="btn-green px-6">
                  Subscribe
                </Button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-8">
              <Button variant="secondary" size="icon" className="bg-secondary hover:bg-secondary/80">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="secondary" size="icon" className="bg-secondary hover:bg-secondary/80">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="secondary" size="icon" className="bg-secondary hover:bg-secondary/80">
                <MessageCircle className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-lg font-semibold text-silicon-text-light mb-4">PAGES</h4>
            <nav className="space-y-3">
              <a href="/" className="block text-sm text-secondary-foreground hover:text-foreground transition-colors">
                Home
              </a>
              <a href="/models" className="block text-sm text-secondary-foreground hover:text-foreground transition-colors">
                Models
              </a>
              <a href="/products" className="block text-sm text-secondary-foreground hover:text-foreground transition-colors">
                Products
              </a>
              <div className="flex items-center space-x-1">
                <a href="/docs" className="text-sm text-secondary-foreground hover:text-foreground transition-colors">
                  Docs
                </a>
                <ExternalLink className="w-3 h-3 text-silicon-text-dark" />
              </div>
              <a href="/pricing" className="block text-sm text-secondary-foreground hover:text-foreground transition-colors">
                Pricing
              </a>
              <a href="/blog" className="block text-sm text-secondary-foreground hover:text-foreground transition-colors">
                Blog
              </a>
              <a href="/about" className="block text-sm text-secondary-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="/contact" className="block text-sm text-secondary-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Models */}
          <div>
            <h4 className="text-lg font-semibold text-silicon-text-light mb-4">MODELS</h4>
            <nav className="space-y-3">
              <a href="/models#image" className="block text-sm text-secondary-foreground hover:text-foreground transition-colors">
                Image
              </a>
              <a href="/models#video" className="block text-sm text-secondary-foreground hover:text-foreground transition-colors">
                Video
              </a>
              <div className="flex items-center space-x-1">
                <a href="/models#llm" className="text-sm text-secondary-foreground hover:text-foreground transition-colors">
                  LLM
                </a>
                <ExternalLink className="w-3 h-3 text-silicon-text-dark" />
              </div>
              <a href="/models#audio" className="block text-sm text-secondary-foreground hover:text-foreground transition-colors">
                Audio
              </a>
            </nav>

            <h4 className="text-lg font-semibold text-silicon-text-light mb-4 mt-8">PRODUCTS</h4>
            <nav className="space-y-3">
              <a href="/products#overview" className="block text-sm text-secondary-foreground hover:text-foreground transition-colors">
                Overview
              </a>
              <div className="flex items-center space-x-1">
                <a href="/products#inference" className="text-sm text-secondary-foreground hover:text-foreground transition-colors">
                  Inference
                </a>
                <ExternalLink className="w-3 h-3 text-silicon-text-dark" />
              </div>
              <a href="/products#fine-tuning" className="block text-sm text-secondary-foreground hover:text-foreground transition-colors">
                Fine-tuning
              </a>
              <a href="/products#reserved-gpus" className="block text-sm text-secondary-foreground hover:text-foreground transition-colors">
                Reserved GPUs
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground mb-4 md:mb-0">
            © 2025 SiliconFlow Technology PTE. LTD.
          </p>
          <div className="flex items-center space-x-4 text-sm text-foreground">
            <a href="/terms" className="hover:text-silicon-light-purple transition-colors">
              Terms
            </a>
            <span>·</span>
            <a href="/privacy" className="hover:text-silicon-light-purple transition-colors">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;