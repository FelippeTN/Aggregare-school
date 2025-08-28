import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.ico';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const openWhatsApp = () => {
    // Substitua pelo número real da escola
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma visita à escola.', '_blank');
  };

  return (
    <header className="fixed top-0 left-10 right-10 bg-background/90 backdrop-blur-sm border rounded-b-2xl z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
              <img src={logo} alt="Logo do Colégio" className="h-14 w-15 object-contain" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Quem Somos
            </button>
            <button 
              onClick={() => scrollToSection('segmentos')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Segmentos
            </button>
            <button 
              onClick={() => scrollToSection('proposta')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Proposta Pedagógica
            </button>
            <button 
              onClick={() => scrollToSection('eventos')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Eventos
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              variant="outline" 
              onClick={openWhatsApp}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Agende uma Visita
            </Button>
            <Link to="/cadastro-interesse">
              <Button 
                className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary"
              >
                Matricule-se Já
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg">
            <nav className="flex flex-col space-y-4 p-6">
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-left text-foreground hover:text-dark-blue transition-colors"
              >
                Quem Somos
              </button>
              <button 
                onClick={() => scrollToSection('segmentos')}
                className="text-left text-foreground hover:text-dark-blue  transition-colors"
              >
                Segmentos
              </button>
              <button 
                onClick={() => scrollToSection('proposta')}
                className="text-left text-foreground hover:text-dark-blue  transition-colors"
              >
                Proposta Pedagógica
              </button>
              <button 
                onClick={() => scrollToSection('eventos')}
                className="text-left text-foreground hover:text-dark-blue  transition-colors"
              >
                Eventos
              </button>
              <div className="flex flex-col space-y-3 pt-4 border-t border-border">
                <Button 
                  variant="outline" 
                  onClick={openWhatsApp}
                  className="border-dark-blue  text-dark-blue hover:bg-dark-blue  hover:text-primary-foreground"
                >
                  Agende uma Visita
                </Button>
                <Link to="/cadastro-interesse">
                  <Button 
                    className="bg-gradient-to-r from-dark-blue  to-dark-blue /90 hover:from-dark-blue/90 hover:to-dark-blue "
                  >
                    Matricule-se Já
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;