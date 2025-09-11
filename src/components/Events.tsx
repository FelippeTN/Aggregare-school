import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Heart, Award, BookOpen, Users } from "lucide-react";

const Events = () => {
  const events = [
    {
      title: "Aggregare Day",
      subtitle: "Dia da Família na Escola",
      icon: <Users size={32} />,
      date: "Setembro",
      description: "Um dia especial dedicado à integração entre família, escola e comunidade.",
      image: "/src/assets/kids_playing2.jpg",
      color: "bg-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      title: "Festa Solidária",
      subtitle: "Ação Social da Escola",
      icon: <Heart size={32} />,
      date: "Dezembro",
      description: "Evento que mobiliza toda nossa comunidade escolar em ações de solidariedade.",
      image: "/src/assets/kids_playing3.jpg",
      color: "bg-red-500",
      bgColor: "bg-red-50"
    },
    {
      title: "FIC - Feira Científica",
      subtitle: "Feira de Iniciação Científica",
      icon: <Award size={32} />,
      date: "Outubro",
      description: "Mostra científica onde nossos alunos apresentam projetos de pesquisa inovadores.",
      image: "/src/assets/technology-education.jpg",
      color: "bg-green-500",
      bgColor: "bg-green-50"
    },
    {
      title: "Expo Aggregare",
      subtitle: "Feira Literária e Cultural",
      icon: <BookOpen size={32} />,
      date: "Agosto",
      description: "Celebração da literatura e cultura com apresentações artísticas dos alunos.",
      image: "/src/assets/students2.jpg",
      color: "bg-purple-500",
      bgColor: "bg-purple-50"
    }
  ];

  return (
    <section id="eventos" className="py-20 bg-background">
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
            <div key={index} className="relative group">
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>
              
              <Card className="relative h-80 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 ${event.color} rounded-full flex items-center justify-center text-white shadow-xl backdrop-blur-sm`}>
                      {event.icon}
                    </div>
                    <Badge variant="outline" className="bg-white/20 backdrop-blur-sm border-white/30 text-white">
                      <Calendar size={14} />
                      <span className="ml-1">{event.date}</span>
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="relative z-10 flex-1 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                  <p className="text-gray-200 font-medium mb-3">{event.subtitle}</p>
                  <p className="text-gray-300 leading-relaxed">{event.description}</p>
                </CardContent>
              </Card>
            </div>
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