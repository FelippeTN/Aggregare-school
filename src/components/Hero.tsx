import { Button } from "@/components/ui/button";
import { GraduationCap, Users, Award, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { CountUp } from "countup.js";
import heroImage from "@/assets/kids_playing.jpg";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    const options = { duration: 7, useEasing: true, suffix: "+" };

    const anos = document.getElementById("anos");
    const alunos = document.getElementById("alunos");
    const aprovacao = document.getElementById("aprovacao");

    if (anos) new CountUp(anos, 25, options).start();
    if (alunos) new CountUp(alunos, 1500, options).start();
    if (aprovacao) new CountUp(aprovacao, 98, { ...options, suffix: "%" }).start();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Escola Aggregare" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            Colégio Cristão <span className="text-cyan-blue">Aggregare</span>
          </h1>
          
          <div className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto px-2">
            <span className="text-cyan-blue font-semibold">Tradição e Inovação</span> com{" "}
            <span className="text-cyan-blue font-semibold">Excelência Acadêmica</span>
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            a partir de princípios e valores cristãos
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4">
            <Link to="/cadastro-interesse" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                className="bg-cyan-blue text-cyan-blue-foreground hover:bg-cyan-blue/90 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 shadow-lg w-full sm:w-auto"
              >
                <GraduationCap className="mr-2" size={20} />
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
              <Users className="mr-2" size={20} />
              Conheça Nossa Escola
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-2xl mx-auto px-4">
            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-cyan-blue rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <GraduationCap className="text-cyan-blue-foreground" size={28} />
              </div>
              <div className="text-xl sm:text-2xl font-bold text-cyan-blue" id="anos">0</div>
              <div className="text-xs sm:text-sm opacity-90">Anos de Tradição</div>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-cyan-blue rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Users className="text-cyan-blue-foreground" size={28} />
              </div>
              <div className="text-xl sm:text-2xl font-bold text-cyan-blue" id="alunos">0</div>
              <div className="text-xs sm:text-sm opacity-90">Alunos Formados</div>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-cyan-blue rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Award className="text-cyan-blue-foreground" size={28} />
              </div>
              <div className="text-xl sm:text-2xl font-bold text-cyan-blue" id="aprovacao">0</div>
              <div className="text-xs sm:text-sm opacity-90">Aprovação</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <div 
          className="cursor-pointer p-3 sm:p-4 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-300 group"
          style={{
            animation: 'bounce 2s infinite'
          }}
          onClick={() => {
            const element = document.getElementById('sobre');
            if (element) element.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <ChevronDown 
            className="text-white group-hover:text-cyan-blue transition-colors duration-300" 
            size={24} 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
