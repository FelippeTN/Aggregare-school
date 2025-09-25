import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Calendar, Heart, Award, BookOpen, Users, X, ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";

import aggregareDay1 from "@/assets/kids_playing2.jpg";
import aggregareDay2 from "@/assets/kids_playing.jpg";
import aggregareDay3 from "@/assets/kids_playing3.jpg";
import aggregareDay4 from "@/assets/kids_playing4.jpg";

import festaSolidaria1 from "@/assets/festival_smiling.jpg";
import festaSolidaria2 from "@/assets/smiling.jpg";
import festaSolidaria3 from "@/assets/teen_praying.jpg";

import ficFeira1 from "@/assets/technology-education.jpg";
import ficFeira2 from "@/assets/students.jpg";
import ficFeira3 from "@/assets/students3.jpg";
import ficFeira4 from "@/assets/students4.jpg";

import expoAggregare1 from "@/assets/students2.jpg";
import expoAggregare2 from "@/assets/kid_studying.jpg";
import expoAggregare3 from "@/assets/kid_studying2.jpg";
import expoAggregare4 from "@/assets/kid_studying3.jpg";

interface ModalCarouselProps {
  images: string[];
  eventTitle: string;
}

function ModalCarousel({ images, eventTitle }: ModalCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative h-[60vh] rounded-lg overflow-hidden bg-gray-100">
        <img
          src={images[currentIndex]}
          alt={`${eventTitle} - Imagem ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
        
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
          disabled={images.length <= 1}
        >
          <ChevronLeft size={24} />
        </button>
        
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
          disabled={images.length <= 1}
        >
          <ChevronRight size={24} />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>

        <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}

const Events = () => {
  const events = [
    {
      title: "Aggregare Day",
      subtitle: "Dia da Família na Escola",
      icon: <Users size={32} />,
      date: "Setembro",
      description: "Um dia especial dedicado à integração entre família, escola e comunidade.",
      image: aggregareDay1,
      images: [aggregareDay1, aggregareDay2, aggregareDay3, aggregareDay4],
      color: "bg-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      title: "Festa Solidária",
      subtitle: "Ação Social da Escola",
      icon: <Heart size={32} />,
      date: "Dezembro",
      description: "Evento que mobiliza toda nossa comunidade escolar em ações de solidariedade.",
      image: festaSolidaria1,
      images: [festaSolidaria1, festaSolidaria2, festaSolidaria3],
      color: "bg-red-500",
      bgColor: "bg-red-50"
    },
    {
      title: "FIC - Feira Científica",
      subtitle: "Feira de Iniciação Científica",
      icon: <Award size={32} />,
      date: "Outubro",
      description: "Mostra científica onde nossos alunos apresentam projetos de pesquisa inovadores.",
      image: ficFeira1,
      images: [ficFeira1, ficFeira2, ficFeira3, ficFeira4],
      color: "bg-green-500",
      bgColor: "bg-green-50"
    },
    {
      title: "Expo Aggregare",
      subtitle: "Feira Literária e Cultural",
      icon: <BookOpen size={32} />,
      date: "Agosto",
      description: "Celebração da literatura e cultura com apresentações artísticas dos alunos.",
      image: expoAggregare1,
      images: [expoAggregare1, expoAggregare2, expoAggregare3, expoAggregare4],
      color: "bg-purple-500",
      bgColor: "bg-purple-50"
    }
  ];

  return (
    <section id="eventos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-black text-4xl md:text-5xl font-bold text-foreground mb-6 ">
            Nossos Eventos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Durante o ano letivo, promovemos eventos especiais que enriquecem a experiência 
            educativa e fortalecem a comunidade escolar.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div className="relative group cursor-pointer">
                  <div className="absolute inset-0 rounded-xl overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>
                  
                  <Card className="relative h-80 bg-transparent border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-[1.02]">
                    <CardHeader className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-16 h-16 ${event.color} rounded-xl flex items-center justify-center text-white shadow-2xl backdrop-blur-sm group-hover:scale-110 transition-transform duration-300`}>
                          {event.icon}
                        </div>
                        <Badge variant="outline" className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 transition-colors">
                          <Calendar size={14} />
                          <span className="ml-1">{event.date}</span>
                        </Badge>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="relative z-10 flex-1 flex flex-col justify-end">
                      <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                      <p className="text-gray-200 font-medium mb-3">{event.subtitle}</p>
                      <p className="text-gray-300 leading-relaxed mb-4">{event.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
                        >
                          <ImageIcon size={16} className="mr-2" />
                          Ver Galeria ({event.images.length} fotos)
                        </Button>
                        <div className="text-sm text-gray-400">
                          Clique para ver mais
                        </div>
                      </div>
                    </CardContent>

                    <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                  </Card>
                </div>
              </DialogTrigger>
              
              <DialogContent className="max-w-6xl w-[90vw] h-[90vh] p-0 overflow-hidden">
                <DialogHeader className="p-6 pb-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <DialogTitle className="text-2xl font-bold flex items-center gap-3">
                        <div className={`w-10 h-10 ${event.color} rounded-lg flex items-center justify-center text-white`}>
                          {React.cloneElement(event.icon, { size: 20 })}
                        </div>
                        {event.title}
                      </DialogTitle>
                      <p className="text-muted-foreground mt-1">{event.subtitle}</p>
                    </div>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Calendar size={14} />
                      {event.date}
                    </Badge>
                  </div>
                </DialogHeader>
                
                <div className="flex-1 p-6 pt-2">
                  <ModalCarousel images={event.images} eventTitle={event.title} />
                  <div className="mt-6 text-center">
                    <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                      {event.description}
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-dark-blue/5 via-blue-50/50 to-purple-50/50 rounded-3xl p-8 border border-dark-blue/10">
              <Calendar className="text-dark-blue mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Calendário Anual de Eventos
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Nossos eventos são cuidadosamente planejados para complementar o currículo acadêmico, 
                proporcionando experiências significativas que contribuem para a formação integral dos nossos alunos.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {events.map((event, index) => (
                  <div key={index} className="group">
                    <div className={`w-12 h-12 ${event.color} rounded-xl mx-auto mb-3 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                      {React.cloneElement(event.icon, { size: 20 })}
                    </div>
                    <div className="text-lg font-semibold text-foreground group-hover:text-dark-blue transition-colors">
                      {event.date}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      {event.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;