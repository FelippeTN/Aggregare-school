import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Heart, Award, BookOpen, Users, Star } from "lucide-react";

const Events = () => {
  const events = [
    {
      title: "Aggregare Day",
      subtitle: "Dia da Família na Escola",
      icon: <Users size={32} />,
      date: "Setembro",
      description: "Um dia especial dedicado à integração entre família, escola e comunidade, fortalecendo os laços que formam nossa comunidade educativa.",
      highlights: [
        "Apresentações culturais dos alunos",
        "Atividades interativas para toda família",
        "Exposição de trabalhos acadêmicos",
        "Confraternização e networking",
        "Momentos de louvor e gratidão"
      ],
      color: "bg-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      title: "Festa Solidária",
      subtitle: "Ação Social da Escola",
      icon: <Heart size={32} />,
      date: "Dezembro",
      description: "Evento que mobiliza toda nossa comunidade escolar em ações de solidariedade, vivenciando na prática os valores cristãos que ensinamos.",
      highlights: [
        "Arrecadação para famílias carentes",
        "Participação de toda comunidade escolar",
        "Desenvolvimento da consciência social",
        "Voluntariado e trabalho em equipe",
        "Impacto positivo na sociedade"
      ],
      color: "bg-red-500",
      bgColor: "bg-red-50"
    },
    {
      title: "FIC - Feira Científica",
      subtitle: "Feira de Iniciação Científica",
      icon: <Award size={32} />,
      date: "Outubro",
      description: "Mostra científica onde nossos alunos apresentam projetos de pesquisa, desenvolvendo o pensamento científico e a capacidade de inovação.",
      highlights: [
        "Projetos de pesquisa interdisciplinares",
        "Apresentações científicas dos alunos",
        "Avaliação por banca especializada",
        "Desenvolvimento do pensamento crítico",
        "Preparação para olimpíadas científicas"
      ],
      color: "bg-green-500",
      bgColor: "bg-green-50"
    },
    {
      title: "Expo Aggregare",
      subtitle: "Feira Literária e Cultural",
      icon: <BookOpen size={32} />,
      date: "Agosto",
      description: "Celebração da literatura e cultura, onde nossos alunos compartilham suas criações artísticas e literárias com toda a comunidade.",
      highlights: [
        "Exposição de obras literárias dos alunos",
        "Apresentações teatrais e musicais",
        "Saraus e recitais de poesia",
        "Oficinas de criação artística",
        "Valorização da cultura nacional"
      ],
      color: "bg-purple-500",
      bgColor: "bg-purple-50"
    }
  ];

  return (
    <section id="eventos" className="py-20 bg-background-cyan-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nossos Eventos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Durante o ano letivo, promovemos eventos especiais que enriquecem a experiência 
            educativa e fortalecem a comunidade escolar.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <Card key={index} className={`${event.bgColor} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden`}>
              <CardHeader className="relative pb-4">
                <div className="flex items-start justify-between">
                  <div className={`w-16 h-16 ${event.color} rounded-full flex items-center justify-center text-white shadow-lg`}>
                    {event.icon}
                  </div>
                  <Badge variant="outline" className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{event.date}</span>
                  </Badge>
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  {event.title}
                </CardTitle>
                <p className={`text-sm font-medium ${event.color.replace('bg-', 'text-')}`}>
                  {event.subtitle}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {event.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground flex items-center">
                    <Star size={18} className="mr-2 text-secondary" />
                    Destaques do Evento:
                  </h4>
                  <ul className="space-y-2">
                    {event.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start text-sm text-muted-foreground">
                        <div className={`w-2 h-2 ${event.color} rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                        {highlight}
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
              <Calendar className="text-primary mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Calendário Anual de Eventos
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Nossos eventos são cuidadosamente planejados para complementar o currículo acadêmico, 
                proporcionando experiências significativas que contribuem para a formação integral dos nossos alunos.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                <div className="space-y-2">
                  <div className="text-lg font-semibold text-purple-600">Agosto</div>
                  <div className="text-sm text-muted-foreground">Expo Aggregare</div>
                </div>
                <div className="space-y-2">
                  <div className="text-lg font-semibold text-blue-600">Setembro</div>
                  <div className="text-sm text-muted-foreground">Aggregare Day</div>
                </div>
                <div className="space-y-2">
                  <div className="text-lg font-semibold text-green-600">Outubro</div>
                  <div className="text-sm text-muted-foreground">FIC - Feira Científica</div>
                </div>
                <div className="space-y-2">
                  <div className="text-lg font-semibold text-red-600">Dezembro</div>
                  <div className="text-sm text-muted-foreground">Festa Solidária</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;