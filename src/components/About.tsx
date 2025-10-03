import { Card, CardContent } from "@/components/ui/card";
import { AboutCarousel } from "./Carousel";
import cardPhoto1 from "@/assets/teen_praying.jpg";
import cardPhoto2 from "@/assets/kid_studying5.jpg";
import cardPhoto3 from "@/assets/smiling.jpg";
import cardPhoto4 from "@/assets/festival_smiling.jpg";
import leader1Photo from "@/assets/lideres/fabio.png";
import leader2Photo from "@/assets/lideres/simone.png";

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

        <div className="mt-20">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Nossa Liderança
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Conheça os líderes dedicados que guiam nossa instituição com paixão, 
              experiência e compromisso inabalável com a excelência educacional cristã 
              e o desenvolvimento integral de nossos alunos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="group shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 bg-white">
              <div className="relative overflow-hidden">
                <img 
                  src={leader1Photo}
                  alt="Fábio Simas - Educador Sênior do Colégio Cristão Aggregare"
                  className="w-full h-96 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3">
                    <h4 className="text-xl font-bold text-foreground">
                      Fábio Simas
                    </h4>
                    <p className="text-primary font-semibold">
                      Educador Sênior
                    </p>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-8 space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm font-medium text-foreground">Formação Acadêmica</span>
                  </div>
                  <ul className="text-muted-foreground text-sm space-y-1 ml-4">
                    <li>• Doutor em Estudos de Linguagem pela UFF</li>
                    <li>• MBA em Finanças pela Fundação Dom Cabral</li>
                    <li>• Teologia Reformada pelo SETAV</li>
                  </ul>
                </div>
                
                <div className="pt-3 border-t border-gray-100">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Especialista em educação com vasta experiência em gestão acadêmica 
                    e desenvolvimento curricular, unindo conhecimento pedagógico avançado 
                    com sólida formação teológica.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="group shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 bg-white">
              <div className="relative overflow-hidden">
                <img 
                  src={leader2Photo}
                  alt="Simone Simas - Psicóloga e Diretora do Colégio Cristão Aggregare"
                  className="w-full h-96 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3">
                    <h4 className="text-xl font-bold text-foreground">
                      Simone Simas
                    </h4>
                    <p className="text-primary font-semibold">
                      Psicóloga e Diretora
                    </p>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-8 space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm font-medium text-foreground">Formação e Experiência</span>
                  </div>
                  <ul className="text-muted-foreground text-sm space-y-1 ml-4">
                    <li>• Psicóloga formada pelo Albert Einstein</li>
                    <li>• Especialista em TCC pela PUC/UERJ</li>
                    <li>• 15+ anos de experiência em saúde mental</li>
                  </ul>
                </div>
                
                <div className="pt-3 border-t border-gray-100">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Sua expertise em saúde mental e desenvolvimento humano enriquece 
                    significativamente nosso ambiente de acolhimento e cuidado integral 
                    com os estudantes e suas famílias.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>


          <div className="mt-16 bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="text-center">
              <h4 className="text-xl font-bold text-foreground mb-4">
                Nosso Compromisso
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                Nossa liderança está comprometida em manter os mais altos padrões de 
                excelência educacional, sempre fundamentados em valores cristãos sólidos 
                e no desenvolvimento integral de cada estudante.
              </p>
            </div>
          </div>
        </div>
      </div> 
    </section>
  );
};

export default About;