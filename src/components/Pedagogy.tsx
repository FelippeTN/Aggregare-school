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
    <section id="proposta" className="relative py-24 bg-light-gray/30 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-cyan-blue/40 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-cyan-cyan-blue/40 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 bg-clip-text text-transparent mb-8 leading-tight pb-2">
        Proposta Pedagógica & Projetos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-blue to-dark-blue rounded-full mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium">
            Nossa abordagem única combina metodologias comprovadas com projetos inovadores, 
            preparando alunos para o sucesso acadêmico e pessoal com base em valores cristãos sólidos e excelência acadêmica.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-10">
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-cyan-blue to-dark-blue rounded-full"></div>
                <h3 className="text-3xl font-bold text-slate-800 mb-2">
                  Metodologia Inovadora
                </h3>
                <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-blue to-dark-blue rounded-full mb-6"></div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-100">
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Nosso método pedagógico integra as melhores práticas educacionais internacionais 
                  com valores cristãos fundamentais, criando um ambiente de aprendizagem único e eficaz 
                  que prepara nossos alunos para os desafios do século XXI.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="text-cyan-blue" size={20} />
                    <span className="text-sm text-slate-600">Ensino Personalizado</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="text-cyan-blue" size={20} />
                    <span className="text-sm text-slate-600">Tecnologia Integrada</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="text-cyan-blue" size={20} />
                    <span className="text-sm text-slate-600">Valores Cristãos</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="text-cyan-blue" size={20} />
                    <span className="text-sm text-slate-600">Resultados Mensuráveis</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-blue/10 to-indigo-600/10 rounded-3xl blur-xl"></div>
            <div className="relative bg-white rounded-2xl p-2 shadow-2xl">
              <PedagogyCarousel />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card key={index} className="group text-center bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-br from-cyan-blue/10 to-indigo-600/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <img 
                    src={project.iconSrc} 
                    alt={`${project.title} icon`}
                    className="w-20 h-20 object-cover rounded-full shadow-lg"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-blue/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-cyan-blue/90 text-white shadow-lg">
                    {project.highlight}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-8">
                <h4 className="text-xl font-bold text-slate-800 mb-2">
                  {project.title}
                </h4>
                <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-blue to-dark-blue rounded-full mx-auto mb-4"></div>
                <p className="text-sm text-cyan-blue font-medium mb-4">
                  {project.subtitle}
                </p>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <div className="space-y-3 text-left">
                  <h5 className="font-semibold text-slate-800 flex items-center justify-center">
                    <Star size={18} className="mr-2 text-cyan-blue" />
                    Principais Benefícios:
                  </h5>
                  <ul className="space-y-2">
                    {project.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-sm text-slate-600">
                        <div className="w-2 h-2 bg-cyan-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
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
          <h3 className="text-3xl font-bold text-slate-800 mb-2">Nossos Parceiros</h3>
          <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-blue to-dark-blue rounded-full mx-auto mb-8"></div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-blue/5 to-indigo-600/5 rounded-2xl blur-xl"></div>
            <div className="relative bg-white/50 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <PartnershipsCarousel/>
            </div>
          </div>
        </div>
      </div> 
    </section>
  );
};

export default Pedagogy;