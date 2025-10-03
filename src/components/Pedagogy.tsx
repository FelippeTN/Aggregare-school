import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, CheckCircle, Star } from "lucide-react";
import { PedagogyCarousel, PartnershipsCarousel } from "./Carousel";

import financialIcon from "@/assets/icons/financialIcon.png";
import simuladoIcon from "@/assets/icons/simuladoIcon.png";
import dnaIcon from "@/assets/icons/DnaIcon.jpg";

const Pedagogy = () => {
  const projects = [
    {
      title: "Educação Financeira",
      subtitle: "Desde os Anos Iniciais",
      iconSrc: financialIcon,
      description: "Desenvolvemos consciência financeira desde cedo, preparando nossos alunos para uma vida adulta responsável e próspera.",
      benefits: [
        "Noções de poupança e investimento",
        "Consumo consciente e responsável",
        "Matemática aplicada ao cotidiano",
        "Planejamento e organização pessoal"
      ],
      highlight: "Pioneiros na região"
    },
    {
      title: "DNA Aggregare",
      subtitle: "Metodologia Própria",
      iconSrc: dnaIcon,
      description: "Nossa metodologia exclusiva integra tradição cristã com inovação pedagógica, formando alunos preparados para os desafios do século XXI.",
      benefits: [
        "Aprendizagem baseada em projetos",
        "Desenvolvimento socioemocional",
        "Integração tecnológica consciente",
        "Formação de liderança cristã"
      ],
      highlight: "Exclusivo Aggregare"
    },
    {
      title: "Simulados Regulares",
      subtitle: "Preparação Contínua",
      iconSrc: simuladoIcon,
      description: "Sistema de avaliações que prepara nossos alunos para os principais vestibulares e ENEM, com acompanhamento individualizado.",
      benefits: [
        "Simulados semanais e mensais",
        "Análise de desempenho detalhada",
        "Ranking e metas personalizadas",
        "Preparação psicológica para provas"
      ],
      highlight: "Resultados comprovados"
    }
  ];
  return (
    <section id="proposta" className="py-20 bg-light-gray/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Proposta Pedagógica & Projetos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Nossa abordagem única combina metodologias comprovadas com projetos inovadores, 
            preparando alunos para o sucesso acadêmico e pessoal.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <PedagogyCarousel />
          </div>
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Brain className="text-primary" size={32} />
                <h3 className="text-2xl font-semibold text-foreground">
                  Metodologia Inovadora
                </h3>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Nosso método pedagógico integra as melhores práticas educacionais internacionais 
                com valores cristãos fundamentais, criando um ambiente de aprendizagem único e eficaz.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-primary" size={20} />
                  <span className="text-sm text-muted-foreground">Ensino Personalizado</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-primary" size={20} />
                  <span className="text-sm text-muted-foreground">Tecnologia Integrada</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-primary" size={20} />
                  <span className="text-sm text-muted-foreground">Valores Cristãos</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-primary" size={20} />
                  <span className="text-sm text-muted-foreground">Resultados Mensuráveis</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card key={index} className="relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center overflow-hidden">
                    <img 
                      src={project.iconSrc} 
                      alt={`${project.title} icon`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Badge className="bg-cyan-blue text-secondary-foreground">
                    {project.highlight}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {project.title}
                </CardTitle>
                <p className="text-sm text-primary font-medium">
                  {project.subtitle}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground flex items-center">
                    <Star size={18} className="mr-2 text-secondary" />
                    Principais Benefícios:
                  </h4>
                  <ul className="space-y-2">
                    {project.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">Nossos Parceiros</h3>
          <div className="w-full">
           <PartnershipsCarousel/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pedagogy;