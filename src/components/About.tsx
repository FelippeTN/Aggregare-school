import { Card, CardContent } from "@/components/ui/card";
import { AboutCarousel } from "./Carousel";
import cardPhoto1 from "@/assets/teen_praying.jpg";
import cardPhoto2 from "@/assets/kid_studying5.jpg";
import cardPhoto3 from "@/assets/smiling.jpg";
import cardPhoto4 from "@/assets/festival_smiling.jpg";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-light-gray/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Quem Somos?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            O Colégio Cristão Aggregare é dirigido com experiência educacional, excelência e fé fundamentada. 
            Somos um colégio que busca, com profissionalismo, formar cidadãos íntegros, preparando nossos alunos para os desafios do futuro com base em valores cristãos sólidos e excelência acadêmica.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">
                Nossa História e Missão
              </h3>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Fundado com o propósito de unir tradição e inovação, o Colégio Cristão 
                Aggregare se destaca por proporcionar uma educação integral que forma não 
                apenas estudantes academicamente preparados, mas também cidadãos conscientes 
                de seu papel na sociedade, principalmente  como cristãos. 


              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Nosso diferencial está na combinação única de métodos pedagógicos 
                eficientes com princípios cristãos fundamentais, criando um ambiente 
                de aprendizado que valoriza tanto o conhecimento quanto o caráter.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <AboutCarousel />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <img 
              src={cardPhoto1}
              alt="Alunos engajados em atividades que refletem valores cristãos"
              className="w-full h-40 object-cover"
            />
            <CardContent className="p-6">
              <h4 className="text-lg font-semibold text-foreground mb-2">
                Valores Cristãos
              </h4>
              <p className="text-muted-foreground text-sm">
                Formação integral baseada em princípios cristãos sólidos
              </p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <img 
              src={cardPhoto2}
              alt="Estudantes em uma sala de aula moderna e tecnológica"
              className="w-full h-40 object-cover"
            />
            <CardContent className="p-6">
              <h4 className="text-lg font-semibold text-foreground mb-2">
                Excelência Acadêmica
              </h4>
              <p className="text-muted-foreground text-sm">
                Metodologias inovadoras para máximo aproveitamento
              </p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <img 
              src={cardPhoto3}
              alt="Interação entre pais, alunos e professores em um evento escolar"
              className="w-full h-40 object-cover"
            />
            <CardContent className="p-6">
              <h4 className="text-lg font-semibold text-foreground mb-2">
                Comunidade Forte
              </h4>
              <p className="text-muted-foreground text-sm">
                Relacionamento próximo entre escola, família e alunos
              </p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <img 
              src={cardPhoto4}
              alt="Fachada tradicional da escola com elementos de tecnologia moderna"
              className="w-full h-40 object-cover"
            />
            <CardContent className="p-6">
              <h4 className="text-lg font-semibold text-foreground mb-2">
                Tradição & Inovação
              </h4>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;