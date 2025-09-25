import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
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
    window.open('https://wa.me/5521972079493?text=Olá! Gostaria de agendar uma visita à escola.', '_blank');
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 mx-2 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-10 mt-2 bg-background/95 backdrop-blur-md border rounded-2xl shadow-lg z-50">
      <div className="px-3 sm:px-4 md:px-5 lg:px-6">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
          <div className="flex items-center flex-shrink-0">
            <img 
              src={logo} 
              alt="Logo do Colégio" 
              className="h-10 w-12 sm:h-12 sm:w-14 md:h-14 md:w-16 object-contain" 
            />
          </div>

          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-sm lg:text-base text-foreground hover:text-primary transition-colors whitespace-nowrap"
            >
              Quem Somos
            </button>
            <button 
              onClick={() => scrollToSection('segmentos')}
              className="text-sm lg:text-base text-foreground hover:text-primary transition-colors whitespace-nowrap"
            >
              Segmentos
            </button>
            <button 
              onClick={() => scrollToSection('proposta')}
              className="text-sm lg:text-base text-foreground hover:text-primary transition-colors whitespace-nowrap"
            >
              Proposta Pedagógica
            </button>
            <button 
              onClick={() => scrollToSection('eventos')}
              className="text-sm lg:text-base text-foreground hover:text-primary transition-colors whitespace-nowrap"
            >
              Eventos
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-2 lg:space-x-3 xl:space-x-4 flex-shrink-0">
            <Button 
              variant="outline" 
              onClick={openWhatsApp}
              size="sm"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-xs lg:text-sm whitespace-nowrap px-2 lg:px-3 xl:px-4"
            >
              Agende uma Visita
            </Button>
            <Link to="/cadastro-interesse">
              <Button 
                size="sm"
                className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-xs lg:text-sm whitespace-nowrap px-2 lg:px-3 xl:px-4"
              >
                Matricule-se
              </Button>
            </Link>
          </div>

          <button 
            className="md:hidden p-2 rounded-md hover:bg-muted transition-colors flex-shrink-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100 pb-4' 
            : 'max-h-0 opacity-0 pb-0'
        } overflow-hidden`}>
          <div className="border-t border-border/50 pt-4">
            <nav className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-left py-2 px-1 text-foreground hover:text-primary transition-colors text-sm"
              >
                Quem Somos
              </button>
              <button 
                onClick={() => scrollToSection('segmentos')}
                className="text-left py-2 px-1 text-foreground hover:text-primary transition-colors text-sm"
              >
                Segmentos
              </button>
              <button 
                onClick={() => scrollToSection('proposta')}
                className="text-left py-2 px-1 text-foreground hover:text-primary transition-colors text-sm"
              >
                Proposta Pedagógica
              </button>
              <button 
                onClick={() => scrollToSection('eventos')}
                className="text-left py-2 px-1 text-foreground hover:text-primary transition-colors text-sm"
              >
                Eventos
              </button>
              
              <div className="flex flex-col space-y-2 pt-3 border-t border-border/50">
                <Button 
                  variant="outline" 
                  onClick={openWhatsApp}
                  size="sm"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground justify-center"
                >
                  Agende uma Visita
                </Button>
                <Link to="/cadastro-interesse" className="w-full">
                  <Button 
                    size="sm"
                    className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary w-full"
                  >
                    Matricule-se Já
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;