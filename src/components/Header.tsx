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
    <header className="fixed top-0 left-0 right-0 mx-2 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-10 mt-2 bg-background/95 backdrop-blur-md border rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 z-50">
      <div className="px-4 sm:px-5 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
          <div className="flex items-center flex-shrink-0 space-x-3">
            <div className="relative">
              <div className="absolute inset-0"></div>
              <img 
                src={logo} 
                alt="Logo do Colégio Aggregare" 
                className="relative h-10 w-12 sm:h-12 sm:w-14 md:h-14 md:w-16 object-contain transition-transform hover:scale-105 duration-200" 
              />
            </div>  
          </div>

          <nav className="hidden lg:flex items-center justify-center flex-1 space-x-2 xl:space-x-4">
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-sm xl:text-base text-foreground hover:text-primary transition-colors whitespace-nowrap font-medium px-2 py-1 rounded-md hover:bg-primary/5"
            >
              Quem Somos
            </button>
            <button 
              onClick={() => scrollToSection('lideranca')}
              className="text-sm xl:text-base text-foreground hover:text-primary transition-colors whitespace-nowrap font-medium px-2 py-1 rounded-md hover:bg-primary/5"
            >
              Liderança
            </button>
            <button 
              onClick={() => scrollToSection('compromisso')}
              className="text-sm xl:text-base text-foreground hover:text-primary transition-colors whitespace-nowrap font-medium px-2 py-1 rounded-md hover:bg-primary/5"
            >
              Compromisso
            </button>
            <button 
              onClick={() => scrollToSection('segmentos')}
              className="text-sm xl:text-base text-foreground hover:text-primary transition-colors whitespace-nowrap font-medium px-2 py-1 rounded-md hover:bg-primary/5"
            >
              Segmentos
            </button>
            <button 
              onClick={() => scrollToSection('proposta')}
              className="text-sm xl:text-base text-foreground hover:text-primary transition-colors whitespace-nowrap font-medium px-2 py-1 rounded-md hover:bg-primary/5"
            >
              Proposta
            </button>
            <button 
              onClick={() => scrollToSection('eventos')}
              className="text-sm xl:text-base text-foreground hover:text-primary transition-colors whitespace-nowrap font-medium px-2 py-1 rounded-md hover:bg-primary/5"
            >
              Eventos
            </button>
            <button 
              onClick={() => scrollToSection('matriculas')}
              className="text-sm xl:text-base text-foreground hover:text-primary transition-colors whitespace-nowrap font-medium px-2 py-1 rounded-md hover:bg-primary/5"
            >
              Matrículas
            </button>
          </nav>
          
          {/* Menu simplificado para tablets */}
          <nav className="hidden md:flex lg:hidden items-center justify-center flex-1 space-x-2">
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-sm text-foreground hover:text-primary transition-colors whitespace-nowrap font-medium px-2 py-1 rounded-md hover:bg-primary/5"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('segmentos')}
              className="text-sm text-foreground hover:text-primary transition-colors whitespace-nowrap font-medium px-2 py-1 rounded-md hover:bg-primary/5"
            >
              Segmentos
            </button>
            <button 
              onClick={() => scrollToSection('proposta')}
              className="text-sm text-foreground hover:text-primary transition-colors whitespace-nowrap font-medium px-2 py-1 rounded-md hover:bg-primary/5"
            >
              Proposta
            </button>
            <button 
              onClick={() => scrollToSection('eventos')}
              className="text-sm text-foreground hover:text-primary transition-colors whitespace-nowrap font-medium px-2 py-1 rounded-md hover:bg-primary/5"
            >
              Eventos
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-2 lg:space-x-3 flex-shrink-0">
            <Button 
              variant="outline" 
              onClick={openWhatsApp}
              size="sm"
              className="border-primary/60 text-primary hover:bg-primary hover:text-white transition-all duration-200 text-xs lg:text-sm whitespace-nowrap px-3 lg:px-4 shadow-sm hover:shadow-md font-medium"
            >
              Agendar Visita
            </Button>
            <Link to="/cadastro-interesse">
              <Button 
                size="sm"
                className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-xs lg:text-sm whitespace-nowrap px-3 lg:px-4 shadow-sm hover:shadow-lg transition-all duration-200 font-medium"
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
            ? 'max-h-screen opacity-100 pb-4' 
            : 'max-h-0 opacity-0 pb-0'
        } overflow-hidden`}>
          <div className="border-t border-border/50 pt-4">
            <nav className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-center py-2 px-1 text-foreground hover:text-primary transition-colors text-base font-medium"
              >
                Quem Somos
              </button>
              <button 
                onClick={() => scrollToSection('lideranca')}
                className="text-center py-2 px-1 text-foreground hover:text-primary transition-colors text-base font-medium"
              >
                Liderança
              </button>
              <button 
                onClick={() => scrollToSection('compromisso')}
                className="text-center py-2 px-1 text-foreground hover:text-primary transition-colors text-base font-medium"
              >
                Nosso Compromisso
              </button>
              <button 
                onClick={() => scrollToSection('segmentos')}
                className="text-center py-2 px-1 text-foreground hover:text-primary transition-colors text-base font-medium"
              >
                Segmentos
              </button>
              <button 
                onClick={() => scrollToSection('proposta')}
                className="text-center py-2 px-1 text-foreground hover:text-primary transition-colors text-base font-medium"
              >
                Proposta Pedagógica
              </button>
              <button 
                onClick={() => scrollToSection('eventos')}
                className="text-center py-2 px-1 text-foreground hover:text-primary transition-colors text-base font-medium"
              >
                Eventos
              </button>
              <button 
                onClick={() => scrollToSection('matriculas')}
                className="text-center py-2 px-1 text-foreground hover:text-primary transition-colors text-base font-medium"
              >
                Matrículas
              </button>
              
              <div className="flex flex-col space-y-3 pt-4 border-t border-border/50">
                <Button 
                  variant="outline" 
                  onClick={openWhatsApp}
                  size="sm"
                  className="border-primary text-primary hover:bg-primary hover:text-white justify-center font-medium shadow-sm hover:shadow-md transition-all duration-200"
                >
                  Agendar Visita
                </Button>
                <Link to="/cadastro-interesse" className="w-full">
                  <Button 
                    size="sm"
                    className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary w-full font-medium shadow-sm hover:shadow-lg transition-all duration-200"
                  >
                    Matricule-se
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