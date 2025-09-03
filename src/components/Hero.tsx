import { Button } from "@/components/ui/button";
import { GraduationCap, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/kids_playing.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Escola Aggregare" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Colégio <span className="text-cyan-blue">Aggregare</span>
          </h1>
          
          <div className="text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto">
            <span className="text-cyan-blue font-semibold">Tradição e Inovação</span> com{" "}
            <span className="text-cyan-blue font-semibold">Excelência Acadêmica</span>
            <br />
            a partir de princípios e valores cristãos
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/cadastro-interesse">
              <Button 
                size="lg" 
                className="bg-cyan-blue text-cyan-blue-foreground hover:bg-cyan-blue/90 text-black text-lg px-8 py-4 shadow-lg"
              >
                <GraduationCap className="mr-2" size={24} />
                Matrículas Abertas 2026
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-black hover:bg-white/90 hover:text-primary text-lg px-8 py-4"
              onClick={() => {
                const element = document.getElementById('sobre');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Users className="mr-2" size={24} />
              Conheça Nossa Escola
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="text-secondary-foreground" size={32} />
              </div>
              <div className="text-2xl font-bold text-cyan-blue">25+</div>
              <div className="text-sm opacity-90">Anos de Tradição</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-secondary-foreground" size={32} />
              </div>
              <div className="text-2xl font-bold text-cyan-blue">1500+</div>
              <div className="text-sm opacity-90">Alunos Formados</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-secondary-foreground" size={32} />
              </div>
              <div className="text-2xl font-bold text-cyan-blue">98%</div>
              <div className="text-sm opacity-90">Aprovação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;