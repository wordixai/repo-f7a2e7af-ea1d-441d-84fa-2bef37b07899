import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, ExternalLink, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-silicon-purple rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold text-foreground">SiliconFlow</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-1 cursor-pointer hover:text-silicon-light-purple transition-colors">
              <span className="text-sm font-medium">Models</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center space-x-1 cursor-pointer hover:text-silicon-light-purple transition-colors">
              <span className="text-sm font-medium">Products</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <a href="/pricing" className="text-sm font-medium hover:text-silicon-light-purple transition-colors">
              Pricing
            </a>
            <div className="flex items-center space-x-1 cursor-pointer hover:text-silicon-light-purple transition-colors">
              <span className="text-sm font-medium">Docs</span>
              <ExternalLink className="w-4 h-4" />
            </div>
            <a href="/blog" className="text-sm font-medium hover:text-silicon-light-purple transition-colors">
              Blog
            </a>
            <a href="/about" className="text-sm font-medium hover:text-silicon-light-purple transition-colors">
              About
            </a>
            <a href="/contact" className="text-sm font-medium hover:text-silicon-light-purple transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-foreground hover:text-silicon-light-purple">
              <ExternalLink className="w-4 h-4" />
            </Button>
            <Button className="btn-green">
              Get Started
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a href="/models" className="text-sm font-medium hover:text-silicon-light-purple transition-colors">
                Models
              </a>
              <a href="/products" className="text-sm font-medium hover:text-silicon-light-purple transition-colors">
                Products
              </a>
              <a href="/pricing" className="text-sm font-medium hover:text-silicon-light-purple transition-colors">
                Pricing
              </a>
              <a href="/docs" className="text-sm font-medium hover:text-silicon-light-purple transition-colors">
                Docs
              </a>
              <a href="/blog" className="text-sm font-medium hover:text-silicon-light-purple transition-colors">
                Blog
              </a>
              <a href="/about" className="text-sm font-medium hover:text-silicon-light-purple transition-colors">
                About
              </a>
              <a href="/contact" className="text-sm font-medium hover:text-silicon-light-purple transition-colors">
                Contact
              </a>
              <Button className="btn-green w-full">
                Get Started
                <ExternalLink className="w-4 h-4" />
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;