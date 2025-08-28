import { Card, CardContent } from "@/components/ui/card";
import { Heart, BookOpen, Users, Trophy } from "lucide-react";
import { AboutCarousel } from "./Carousel";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Quem Somos?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Há mais de 25 anos, a Escola Aggregare forma cidadãos íntegros, 
            preparando nossos alunos para os desafios do futuro com base em 
            valores cristãos sólidos e excelência acadêmica.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">
                Nossa História e Missão
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Fundada com o propósito de unir tradição e inovação, a Escola Aggregare 
                se destaca por proporcionar uma educação integral que forma não apenas 
                estudantes academicamente preparados, mas também cidadãos conscientes 
                de seu papel na sociedade.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nosso diferencial está na combinação única de métodos pedagógicos 
                modernos com princípios cristãos fundamentais, criando um ambiente 
                de aprendizado que valoriza tanto o conhecimento quanto o caráter.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <AboutCarousel />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-primary" size={32} />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">
                Valores Cristãos
              </h4>
              <p className="text-muted-foreground text-sm">
                Formação integral baseada em princípios cristãos sólidos
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="text-secondary" size={32} />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">
                Excelência Acadêmica
              </h4>
              <p className="text-muted-foreground text-sm">
                Metodologias inovadoras para máximo aproveitamento
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary" size={32} />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">
                Comunidade Forte
              </h4>
              <p className="text-muted-foreground text-sm">
                Relacionamento próximo entre escola, família e alunos
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="text-secondary" size={32} />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">
                Tradição & Inovação
              </h4>
              <p className="text-muted-foreground text-sm">
                25+ anos de experiência com métodos modernos
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;