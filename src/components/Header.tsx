import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import safarLogo from "@/assets/safar-logo.png";

const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl overflow-hidden bg-gradient-to-br from-saffron to-temple-orange p-1">
              <img 
                src={safarLogo} 
                alt="Safar Logo" 
                className="w-full h-full object-contain filter brightness-0 invert"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground font-serif">Safar</h1>
              <p className="text-xs text-muted-foreground">Audio Heritage Tours</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              Browse Cities
            </Button>
            <Button variant="ghost" size="sm" className="hidden md:flex">
              My Tours
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;