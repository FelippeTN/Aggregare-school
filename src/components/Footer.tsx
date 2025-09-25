import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Heart } from "lucide-react";
import logo from '../assets/logo.ico';

const Footer = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/5521972079493?text=Olá! Gostaria de mais informações sobre a Escola Aggregare.', '_blank');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-dark-blue text-primary-foreground">
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center justify-center sm:justify-start space-x-2 bg-white p-4 sm:p-5 rounded-lg w-max mx-auto sm:mx-0">
              <img src={logo} alt="Logo do Colégio" className="h-12 w-13 sm:h-14 sm:w-15 object-contain" />
            </div>
            <p className="text-primary-foreground/80 leading-relaxed text-center sm:text-left text-sm sm:text-base">
              Há mais de 25 anos formando cidadãos íntegros através da excelência acadêmica 
              e valores cristãos sólidos.
            </p>
            <div className="space-y-2 text-center sm:text-left">
              <p className="font-semibold text-cyan-blue text-sm sm:text-base">
                "Tradição e Inovação com Excelência Acadêmica"
              </p>
              <p className="text-xs sm:text-sm text-primary-foreground/70">
                Princípios e valores cristãos
              </p>
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-4 sm:space-y-6">
            <h4 className="text-lg sm:text-xl font-bold text-cyan-blue text-center sm:text-left">Links Rápidos</h4>
            <nav className="space-y-2 sm:space-y-3 text-center sm:text-left">
              <button 
                onClick={() => scrollToSection('sobre')}
                className="block text-primary-foreground/80 hover:text-cyan-blue transition-colors text-sm sm:text-base w-full sm:w-auto"
              >
                Quem Somos
              </button>
              <button 
                onClick={() => scrollToSection('segmentos')}
                className="block text-primary-foreground/80 hover:text-cyan-blue transition-colors text-sm sm:text-base w-full sm:w-auto"
              >
                Segmentos
              </button>
              <button 
                onClick={() => scrollToSection('proposta')}
                className="block text-primary-foreground/80 hover:text-cyan-blue transition-colors text-sm sm:text-base w-full sm:w-auto"
              >
                Proposta Pedagógica
              </button>
              <button 
                onClick={() => scrollToSection('eventos')}
                className="block text-primary-foreground/80 hover:text-cyan-blue transition-colors text-sm sm:text-base w-full sm:w-auto"
              >
                Eventos
              </button>
              <button 
                onClick={() => scrollToSection('matriculas')}
                className="block text-primary-foreground/80 hover:text-cyan-blue transition-colors text-sm sm:text-base w-full sm:w-auto"
              >
                Matrículas 2026
              </button>
            </nav>
          </div>

          {/* Contato */}
          <div className="space-y-4 sm:space-y-6">
            <h4 className="text-lg sm:text-xl font-bold text-cyan-blue text-center sm:text-left">Contato</h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start space-x-3 justify-center sm:justify-start">
                <MapPin className="text-cyan-blue flex-shrink-0 mt-1" size={18} />
                <div className="text-center sm:text-left">
                  <p className="text-primary-foreground/80 text-sm sm:text-base">
                    Rua Professor Miguel Couto, 123<br />
                    Icarai - Niterói, RJ<br />
                    CEP: 24230-240
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3 justify-center sm:justify-start">
                <Phone className="text-cyan-blue" size={18} />
                <span className="text-primary-foreground/80 text-sm sm:text-base">(21) 97207-9493</span>
              </div>
              <div className="flex items-start sm:items-center space-x-3 justify-center sm:justify-start">
                <Mail className="text-cyan-blue flex-shrink-0 mt-1 sm:mt-0" size={18}/>
                <span className="text-primary-foreground/80 text-sm sm:text-base break-all">secretaria@colegiocristaoaggregare.com.br</span>
              </div>
            </div>
          </div>

          {/* Redes Sociais e CTA */}
          <div className="space-y-4 sm:space-y-6">
            <h4 className="text-lg sm:text-xl font-bold text-cyan-blue text-center sm:text-left">Conecte-se</h4>
            <div className="space-y-4">
              <div className="flex space-x-4 justify-center sm:justify-start">
                <a 
                  href="https://www.instagram.com/colegioaggregare/"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="w-10 h-10 bg-cyan-blue/20 rounded-full flex items-center justify-center hover:bg-cyan-blue hover:text-cyan-blue-foreground transition-all"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="https://www.facebook.com/colegioaggregare" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-cyan-blue/20 rounded-full flex items-center justify-center hover:bg-cyan-blue hover:text-cyan-blue-foreground transition-all"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="https://www.youtube.com/@colegioaggregare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-cyan-blue/20 rounded-full flex items-center justify-center hover:bg-cyan-blue hover:text-cyan-blue-foreground transition-all"
                >
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-6 sm:my-8 bg-dark-blue-foreground/20" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
          <div>
            <p className="text-primary-foreground/60 text-xs sm:text-sm">
              © {new Date().getFullYear()} Escola Aggregare. Todos os direitos reservados.
            </p>
            <p className="text-primary-foreground/60 text-xs mt-1">
              CNPJ: 11.369.387/0001-74 
            </p>
          </div>
          
          <div className="flex items-center space-x-2 text-primary-foreground/60 text-xs sm:text-sm">
            <span>Feito com</span>
            <Heart size={16} className="text-cyan-blue" />
            <span>para a educação</span>
          </div>
        </div>

        {/* Parceiros */}
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-dark-blue-foreground/20">
          <div className="text-center">
            <p className="text-primary-foreground/60 text-sm mb-4">Parceiro Oficial:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-3 sm:gap-4 max-w-full overflow-hidden">
              <div className="bg-white/10 px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-lg mx-auto w-full max-w-xs">
                <span className="font-semibold text-cyan-blue text-sm sm:text-base"><a href="https://www.classapp.com.br/"
                target="_blank"
                rel="noopener noreferrer">Class App</a></span>
                <div className="text-xs text-primary-foreground/60 mt-1">
                 Agenda Escolar
                </div>
              </div>
              <div className="bg-white/10 px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-lg mx-auto w-full max-w-xs">
                <span className="font-semibold text-cyan-blue text-sm sm:text-base"><a href="https://www.estuda.com/"
                target="_blank"
                rel="noopener noreferrer">Estuda.com</a></span>
                <div className="text-xs text-primary-foreground/60 mt-1">
                 Plataforma de Estudos
                </div>
              </div>
              <div className="bg-white/10 px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-lg mx-auto w-full max-w-xs">
                <span className="font-semibold text-cyan-blue text-sm sm:text-base"><a href="https://www.bernoulli.com.br/"
                target="_blank"
                rel="noopener noreferrer">Bernoulli</a></span>
                <div className="text-xs text-primary-foreground/60 mt-1">
                  Material Didático
                </div>
              </div>
              <div className="bg-white/10 px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-lg mx-auto w-full max-w-xs">
                <span className="font-semibold text-cyan-blue text-sm sm:text-base">
                  <a href="https://www.acsi.org/"
                  target="_blank"
                  rel="noopener noreferrer">ACSI Brasil</a></span>
                <div className="text-xs text-primary-foreground/60 mt-1">
                  Association of Christian Schools International
                </div>
              </div>
              <div className="bg-white/10 px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-lg mx-auto w-full max-w-xs">
                <span className="font-semibold text-cyan-blue text-sm sm:text-base"><a href="https://sae.digital/"
                target="_blank"
                rel="noopener noreferrer">SAE Digital</a></span>
                <div className="text-xs text-primary-foreground/60 mt-1">
                  Sistema de Ensino
                </div>
              </div>
              <div className="bg-white/10 px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-lg mx-auto w-full max-w-xs">
                <span className="font-semibold text-cyan-blue text-sm sm:text-base"><a href="https://evolucional.com.br/"
                target="_blank"
                rel="noopener noreferrer">Evolucional</a></span>
                <div className="text-xs text-primary-foreground/60 mt-1">
                 Análise de Desempenho
                </div>
              </div>
              <div className="bg-white/10 px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-lg mx-auto w-full max-w-xs">
                <span className="font-semibold text-cyan-blue text-sm sm:text-base"><a href="https://gestaoescolaronline.com.br/"
                target="_blank"
                rel="noopener noreferrer">Acesso GEO</a></span>
                <div className="text-xs text-primary-foreground/60 mt-1">
                  Gestão Escolar
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;