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
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 bg-white p-5 rounded-lg w-max">
              <img src={logo} alt="Logo do Colégio" className="h-14 w-15 object-contain" />
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Há mais de 25 anos formando cidadãos íntegros através da excelência acadêmica 
              e valores cristãos sólidos.
            </p>
            <div className="space-y-2">
              <p className="font-semibold text-cyan-blue">
                "Tradição e Inovação com Excelência Acadêmica"
              </p>
              <p className="text-sm text-primary-foreground/70">
                Princípios e valores cristãos
              </p>
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-cyan-blue">Links Rápidos</h4>
            <nav className="space-y-3">
              <button 
                onClick={() => scrollToSection('sobre')}
                className="block text-primary-foreground/80 hover:text-cyan-blue transition-colors"
              >
                Quem Somos
              </button>
              <button 
                onClick={() => scrollToSection('segmentos')}
                className="block text-primary-foreground/80 hover:text-cyan-blue transition-colors"
              >
                Segmentos
              </button>
              <button 
                onClick={() => scrollToSection('proposta')}
                className="block text-primary-foreground/80 hover:text-cyan-blue transition-colors"
              >
                Proposta Pedagógica
              </button>
              <button 
                onClick={() => scrollToSection('eventos')}
                className="block text-primary-foreground/80 hover:text-cyan-blue transition-colors"
              >
                Eventos
              </button>
              <button 
                onClick={() => scrollToSection('matriculas')}
                className="block text-primary-foreground/80 hover:text-cyan-blue transition-colors"
              >
                Matrículas 2026
              </button>
            </nav>
          </div>

          {/* Contato */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-cyan-blue">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-cyan-blue flex-shrink-0 mt-1" size={18} />
                <div>
                  <p className="text-primary-foreground/80">
                    Rua Professor Miguel Couto, 123<br />
                    Icarai - Niterói, RJ<br />
                    CEP: 24230-240
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-cyan-blue" size={18} />
                <span className="text-primary-foreground/80">(21) 97207-9493</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-cyan-blue flex-shrink-0" size={18}/>
                <span className="text-primary-foreground/80">secretaria@colegiocristaoaggregare.com.br</span>
              </div>
            </div>
          </div>

          {/* Redes Sociais e CTA */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-cyan-blue">Conecte-se</h4>
            <div className="space-y-4">
              <div className="flex space-x-4">
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

        <Separator className="my-8 bg-dark-blue-foreground/20" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} Escola Aggregare. Todos os direitos reservados.
            </p>
            <p className="text-primary-foreground/60 text-xs mt-1">
              CNPJ: 11.369.387/0001-74 
            </p>
          </div>
          
          <div className="flex items-center space-x-2 text-primary-foreground/60 text-sm">
            <span>Feito com</span>
            <Heart size={16} className="text-cyan-blue" />
            <span>para a educação</span>
          </div>
        </div>

        {/* Parceiros */}
        <div className="mt-8 pt-8 border-t border-dark-blue-foreground/20">
          <div className="text-center">
            <p className="text-primary-foreground/60 text-sm mb-4">Parceiro Oficial:</p>
            <div className="flex justify-center items-center space-x-4">
              <div className="bg-white/10 px-6 py-3 rounded-lg">
                <span className="font-semibold text-cyan-blue"><a href="https://www.classapp.com.br/"
                target="_blank"
                rel="noopener noreferrer">Class App</a></span>
                <div className="text-xs text-primary-foreground/60 mt-1">
                 Agenda Escolar
                </div>
              </div>
              <div className="bg-white/10 px-6 py-3 rounded-lg">
                <span className="font-semibold text-cyan-blue"><a href="https://www.estuda.com/"
                target="_blank"
                rel="noopener noreferrer">Estuda.com</a></span>
                <div className="text-xs text-primary-foreground/60 mt-1">
                 Plataforma de Estudos
                </div>
              </div>
              <div className="bg-white/10 px-6 py-3 rounded-lg">
                <span className="font-semibold text-cyan-blue"><a href="https://www.bernoulli.com.br/"
                target="_blank"
                rel="noopener noreferrer">Bernoulli</a></span>
                <div className="text-xs text-primary-foreground/60 mt-1">
                  Material Didático
                </div>
              </div>
              <div className="bg-white/10 px-6 py-3 rounded-lg">
                <span className="font-semibold text-cyan-blue">
                  <a href="https://www.acsi.org/"
                  target="_blank"
                  rel="noopener noreferrer">ACSI Brasil</a></span>
                <div className="text-xs text-primary-foreground/60 mt-1">
                  Association of Christian Schools International
                </div>
              </div>
              <div className="bg-white/10 px-6 py-3 rounded-lg">
                <span className="font-semibold text-cyan-blue"><a href="https://sae.digital/"
                target="_blank"
                rel="noopener noreferrer">SAE Digital</a></span>
                <div className="text-xs text-primary-foreground/60 mt-1">
                  Sistema de Ensino
                </div>
              </div>
              <div className="bg-white/10 px-6 py-3 rounded-lg">
                <span className="font-semibold text-cyan-blue"><a href="https://evolucional.com.br/"
                target="_blank"
                rel="noopener noreferrer">Evolucional</a></span>
                <div className="text-xs text-primary-foreground/60 mt-1">
                 Análise de Desempenho
                </div>
              </div>
              <div className="bg-white/10 px-6 py-3 rounded-lg">
                <span className="font-semibold text-cyan-blue"><a href="https://gestaoescolaronline.com.br/"
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