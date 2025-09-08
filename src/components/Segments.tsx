import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, GraduationCap, Clock, Trophy, Target } from "lucide-react";

const Segments = () => {
  const segments = [
    {
      title: "Ensino Fundamental I",
      subtitle: "1º ao 5º ano",
      icon: <BookOpen size={40} />,
      age: "6 a 10 anos",
      description: "Base sólida para o desenvolvimento integral da criança",
      features: [
        "Alfabetização e letramento",
        "Desenvolvimento do raciocínio lógico",
        "Formação de valores cristãos",
        "Atividades lúdicas e pedagógicas",
        "Acompanhamento individualizado"
      ],
      color: "bg-blue-50 border-blue-200"
    },
    {
      title: "Ensino Fundamental II",
      subtitle: "6º ao 9º ano",
      icon: <Users size={40} />,
      age: "11 a 14 anos",
      description: "Aprofundamento do conhecimento e desenvolvimento da autonomia",
      features: [
        "Preparação para o Ensino Médio",
        "Projetos interdisciplinares",
        "Desenvolvimento científico",
        "Formação cidadã",
        "Orientação vocacional inicial"
      ],
      color: "bg-green-50 border-green-200"
    },
    {
      title: "Ensino Médio",
      subtitle: "1º ao 3º ano",
      icon: <GraduationCap size={40} />,
      age: "15 a 17 anos",
      description: "Preparação completa para vestibulares e vida universitária",
      features: [
        "Preparação para ENEM e vestibulares",
        "Orientação profissional",
        "Simulados regulares",
        "Plantões de dúvidas",
        "Apoio emocional e acadêmico"
      ],
      color: "bg-purple-50 border-purple-200"
    }
  ];

  return (
    <section id="segmentos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nossos Segmentos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Da Educação Infantil ao Ensino Médio, oferecemos uma jornada educacional 
            completa, respeitando cada fase do desenvolvimento dos nossos alunos.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {segments.map((segment, index) => (
            <Card key={index} className={`${segment.color} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}>
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <div className="text-primary">
                    {segment.icon}
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  {segment.title}
                </CardTitle>
                <Badge variant="secondary" className="mx-auto mb-2">
                  {segment.subtitle}
                </Badge>
                <Badge variant="outline" className="mx-auto">
                  <Clock size={14} className="mr-1" />
                  {segment.age}
                </Badge>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground text-center leading-relaxed">
                  {segment.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground flex items-center">
                    <Target size={18} className="mr-2 text-primary" />
                    Principais Focos:
                  </h4>
                  <ul className="space-y-2">
                    {segment.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-primary/5 rounded-2xl p-8">
              <Trophy className="text-primary mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Resultados que Comprovam nossa Excelência
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-dark-blue mb-2">98%</div>
                  <div className="text-muted-foreground">Taxa de Aprovação no ENEM</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-blue mb-2">85%</div>
                  <div className="text-muted-foreground">Alunos em Universidades Públicas</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-dark-blue mb-2">92%</div>
                  <div className="text-muted-foreground">Satisfação das Famílias</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Segments;