import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Calendar, Heart, Award, BookOpen, Users, X, ChevronLeft, ChevronRight, ImageIcon, Instagram, ExternalLink } from "lucide-react";

import aggregareDay1 from "@/assets/Ag_day/IMG_5478.jpg";
import aggregareDay2 from "@/assets/Ag_day/IMG_7429.jpg";
import aggregareDay3 from "@/assets/Ag_day/IMG_7432.jpg";
import aggregareDay4 from "@/assets/Ag_day/IMG_7446.jpg";

import festaSolidaria1 from "@/assets/festa solidaria JPG/IMG_7674.jpg";
import festaSolidaria2 from "@/assets/festa solidaria JPG/IMG_7748.jpg";
import festaSolidaria3 from "@/assets/festa solidaria JPG/IMG_7762.jpg";
import festaSolidaria4 from "@/assets/festa solidaria JPG/IMG_7779.jpg";

import ficFeira1 from "@/assets/fic/IMG_6465.jpg";
import ficFeira2 from "@/assets/fic/IMG_6677.jpg";
import ficFeira3 from "@/assets/fic/IMG_6732.jpg";
import ficFeira4 from "@/assets/fic/IMG_6756.jpg";
import ficFeira5 from "@/assets/fic/IMG_7040.jpg";

import expoAggregare1 from "@/assets/feira literaria/IMG_8719.jpg";
import expoAggregare2 from "@/assets/feira literaria/IMG_8767.jpg";
import expoAggregare3 from "@/assets/feira literaria/IMG_8778.jpg";
import expoAggregare4 from "@/assets/feira literaria/IMG_8799.jpg";
import expoAggregare5 from "@/assets/feira literaria/IMG_8726.jpg";


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
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden bg-gray-100">
        <img
          src={images[currentIndex]}
          alt={`${eventTitle} - Imagem ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
        
        <button
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 hover:scale-110"
          disabled={images.length <= 1}
        >
          <ChevronLeft size={16} />
        </button>
        
        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 hover:scale-110"
          disabled={images.length <= 1}
        >
          <ChevronRight size={16} />
        </button>

        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>

        <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded-full text-xs">
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
      date: "Março",
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
      date: "Julho",
      description: "Evento que mobiliza toda nossa comunidade escolar em ações de solidariedade.",
      image: festaSolidaria1,
      images: [festaSolidaria1, festaSolidaria2, festaSolidaria3, festaSolidaria4],
      color: "bg-red-500",
      bgColor: "bg-red-50"
    },
    {
      title: "Expo Aggregare",
      subtitle: "Feira Literária e Cultural",
      icon: <BookOpen size={32} />,
      date: "Setembro",
      description: "Celebração da literatura e cultura com apresentações artísticas dos alunos.",
      image: expoAggregare1,
      images: [expoAggregare1, expoAggregare2, expoAggregare3, expoAggregare4, expoAggregare5],
      color: "bg-purple-500",
      bgColor: "bg-purple-50"
    },
    {
      title: "FIC - Feira Científica",
      subtitle: "Feira de Iniciação Científica",
      icon: <Award size={32} />,
      date: "Outubro",
      description: "Mostra científica onde nossos alunos apresentam projetos de pesquisa inovadores.",
      image: ficFeira1,
      images: [ficFeira1, ficFeira2, ficFeira3, ficFeira4, ficFeira5],
      color: "bg-green-500",
      bgColor: "bg-green-50"
    }
  ];

  return (
    <section id="eventos" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-black text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Nossos Eventos
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Durante o ano letivo, promovemos eventos especiais que enriquecem a experiência 
            educativa e fortalecem a comunidade escolar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
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
                  
                  <Card className="relative h-72 sm:h-72 lg:h-80 bg-transparent border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 lg:hover:-translate-y-4 hover:scale-[1.01] lg:hover:scale-[1.02] overflow-hidden">
                    <CardHeader className="relative z-10 p-4 sm:p-6 flex-shrink-0">
                      <div className="flex items-start justify-between mb-3 sm:mb-4">
                        <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 ${event.color} rounded-xl flex items-center justify-center text-white shadow-2xl backdrop-blur-sm group-hover:scale-110 transition-transform duration-300`}>
                          <div className="text-xl sm:text-2xl lg:text-3xl">
                            {React.cloneElement(event.icon, { size: undefined, className: "w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" })}
                          </div>
                        </div>
                        <Badge variant="outline" className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 transition-colors text-xs sm:text-sm">
                          <Calendar size={12} className="sm:w-4 sm:h-4" />
                          <span className="ml-1">{event.date}</span>
                        </Badge>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="relative z-10 flex-1 flex flex-col justify-end p-4 sm:p-6 pb-4 min-h-0">
                      <div className="space-y-2">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white line-clamp-2">{event.title}</h3>
                        <p className="text-gray-200 font-medium text-sm sm:text-base line-clamp-1">{event.subtitle}</p>
                        <p className="text-gray-300 leading-relaxed text-xs sm:text-sm line-clamp-2">{event.description}</p>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 mt-3 sm:mt-4">
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm text-xs sm:text-sm w-full sm:w-auto flex-shrink-0"
                        >
                          <ImageIcon size={12} className="mr-1 sm:mr-2" />
                          <span className="truncate">Ver Galeria ({event.images.length})</span>
                        </Button>
                        <div className="text-xs sm:text-sm text-gray-400 hidden sm:block">
                          Clique para ver mais
                        </div>
                      </div>
                    </CardContent>

                    <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                  </Card>
                </div>
              </DialogTrigger>

              <DialogContent className="max-w-5xl w-[95vw] sm:w-[90vw] max-h-[95vh] p-0 overflow-hidden flex flex-col">
                <DialogHeader className="p-3 sm:p-4 pb-2 flex-shrink-0">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3">
                    <div className="flex-1 min-w-0">
                      <DialogTitle className="text-base sm:text-xl font-bold flex items-center gap-2">
                        <div className={`w-6 h-6 sm:w-8 sm:h-8 ${event.color} rounded-lg flex items-center justify-center text-white flex-shrink-0`}>
                          {React.cloneElement(event.icon, { size: undefined, className: "w-3 h-3 sm:w-4 sm:h-4" })}
                        </div>
                        <span className="truncate">{event.title}</span>
                      </DialogTitle>
                      <p className="text-muted-foreground mt-1 text-xs sm:text-sm truncate">{event.subtitle}</p>
                    </div>
                    <Badge variant="outline" className="flex items-center gap-1 text-xs shrink-0">
                      <Calendar size={10} className="sm:w-3 sm:h-3" />
                      {event.date}
                    </Badge>
                  </div>
                </DialogHeader>
                
                <div className="flex-1 overflow-y-auto p-2 sm:p-3 space-y-3 sm:space-y-4">
                  <div className="flex-shrink-0">
                    <ModalCarousel images={event.images} eventTitle={event.title} />
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100 p-3 sm:p-4 flex-shrink-0">
                    <div className="text-center space-y-2 sm:space-y-3">
                      <div className="flex items-center justify-center gap-1.5">
                        <Instagram className="text-purple-600" size={18} />
                        <h4 className="text-sm sm:text-base font-semibold text-gray-800">
                          Gostou das fotos?
                        </h4>
                      </div>
                      <p className="text-gray-600 text-xs sm:text-sm">
                        Mais momentos do <strong>{event.title}</strong> no nosso Instagram!
                      </p>
                      <div className="flex flex-col items-center justify-center gap-2">
                        <Button
                          onClick={() => window.open('https://instagram.com/aggregareschool', '_blank')}
                          size="sm"
                          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-1.5 rounded-full transition-all duration-300 flex items-center gap-1.5 text-xs sm:text-sm"
                        >
                          <Instagram size={14} />
                          Ver no Instagram
                          <ExternalLink size={12} />
                        </Button>
                        <p className="text-xs text-gray-500">
                          @aggregareschool
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        <div className="text-center mt-12 lg:mt-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-dark-blue/5 via-blue-50/50 to-purple-50/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-dark-blue/10">
              <Calendar className="text-dark-blue mx-auto mb-4" size={40} />
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                Calendário Anual de Eventos
              </h3>
              <p className="text-muted-foreground mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base px-2">
                Nossos eventos são cuidadosamente planejados para complementar o currículo acadêmico, 
                proporcionando experiências significativas que contribuem para a formação integral dos nossos alunos.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {events.map((event, index) => (
                  <div key={index} className="group">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 ${event.color} rounded-xl mx-auto mb-2 sm:mb-3 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                      {React.cloneElement(event.icon, { size: undefined, className: "w-5 h-5 sm:w-6 sm:h-6" })}
                    </div>
                    <div className="text-base sm:text-lg font-semibold text-foreground group-hover:text-dark-blue transition-colors">
                      {event.date}
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground mt-1 px-1">
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