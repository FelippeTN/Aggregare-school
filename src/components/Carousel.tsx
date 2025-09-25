import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";

import { type CarouselApi } from "@/components/ui/carousel"; 

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import image1 from "@/assets/kids_playing2.jpg";
import image2 from "@/assets/students2.jpg";
import image3 from "@/assets/kid_studying.jpg"; 
import image4 from "@/assets/kid2.jpg";

import pedagogy_image1 from "@/assets/pedagogy.jpg";
import pedagogy_image2 from "@/assets/pedagogy2.jpg";
import pedagogy_image3 from "@/assets/pedagogy3.jpg";
import pedagogy_image4 from "@/assets/pedagogy4.jpg";
import pedagogy_image5 from "@/assets/pedagogy5.jpg";

const images = [image1, image2, image3, image4];
const pedagogy_images = [pedagogy_image1, pedagogy_image2, pedagogy_image3, pedagogy_image4, pedagogy_image5];

interface Partnership {
  name: string;
  description: string;
  logo: string;
  url: string;
}
const defaultPartnerships: Partnership[] = [
  { name: "ACSI Brasil", description: "Association of Christian Schools International - Padrão internacional de qualidade educacional cristã", logo: "🏆", url: "https://www.acsi.org/" },
  { name: "Your Company School", description: "Parceiro estratégico em soluções educacionais", logo: "🏫", url: "https://example.com/" },
  { name: "Bernoulli", description: "Sistema de ensino com excelência acadêmica", logo: "📘", url: "https://www.bernoulli.com.br/" },
  { name: "Sae Digital", description: "Plataforma educacional digital inovadora", logo: "💡", url: "https://sae.digital/" },
  { name: "Evolucional", description: "Soluções em avaliação e desempenho educacional", logo: "📊", url: "https://evolucional.com.br/" },
  { name: "Acesso GEO", description: "Plataforma de gestão escolar integrada", logo: "🌐", url: "https://gestaoescolaronline.com.br/" },
  { name: "Class App", description: "Comunicação prática entre escola e famílias", logo: "📱", url: "https://www.classapp.com.br/" },
  { name: "Estuda.com", description: "Tecnologia para apoiar alunos e professores", logo: "📝", url: "https://www.estuda.com/" },
];
interface AutoplayCarouselProps {
  images?: string[];
  items?: any[];
  renderItem?: (item: any, index: number) => React.ReactNode;
  autoplayInterval?: number;
  className?: string;
}

function AutoplayCarousel({ images, items, renderItem, autoplayInterval = 3000, className = "w-full" }: AutoplayCarouselProps) {

  const [api, setApi] = React.useState<CarouselApi>();
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

  const startAutoplay = React.useCallback(() => {
    if (!api) return;
    if (intervalRef.current) clearInterval(intervalRef.current);
    
    intervalRef.current = setInterval(() => {
      api.scrollNext();
    }, autoplayInterval); 
  }, [api, autoplayInterval]);

  const stopAutoplay = React.useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  }, []);

  React.useEffect(() => {
    if (!api) {
      return;
    }
    
    startAutoplay();
    api.on('pointerDown', stopAutoplay);
    api.on('select', () => {
      stopAutoplay();
      startAutoplay();
    });
    
    return () => stopAutoplay();
  }, [api, startAutoplay, stopAutoplay]);

  return (
    <Carousel
      setApi={setApi}
      opts={{
        loop: true,
      }}
      className={className}
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
    >
      <CarouselContent>
       {items && renderItem
    ? items.map((item, index) => renderItem(item, index))
    : images?.map((imgSrc, index) => (
        <CarouselItem key={index}>
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-0">
                <img 
                  src={imgSrc} 
                  alt={`Imagem ${index + 1} do carrossel`} 
                  className="w-full h-full object-cover rounded-lg"
                />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      ))
  }
      </CarouselContent >
      <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-black rounded-full p-2 shadow-md hover:shadow-lg transition">&#8592;</CarouselPrevious>
      <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-black rounded-full p-2 shadow-md hover:shadow-lg transition">&#8594;</CarouselNext>
    </Carousel>
  );
}

export function AboutCarousel() {
  return <AutoplayCarousel images={images} />;
}

export function PedagogyCarousel() {
  return <AutoplayCarousel images={pedagogy_images} />;
}
export function PartnershipsCarousel({ partnerships }: { partnerships?: Partnership[] }) {
  return (
    <div className="flex gap-4 overflow-x-auto py-4 px-2 scroll-smooth">
      {(partnerships || defaultPartnerships).map((partner, index) => (
        <a
          key={index}
          href={partner.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 w-64 cursor-pointer hover:scale-105 transition-transform"
        >
          <Card className="p-6 shadow-lg hover:shadow-xl transition h-full">
            <CardContent className="text-center">
              <div className="text-4xl mb-4">{partner.logo}</div>
              <h4 className="text-xl font-semibold text-foreground mb-2">{partner.name}</h4>
              <p className="text-muted-foreground">{partner.description}</p>
            </CardContent>
          </Card>
        </a>
      ))}
    </div>
  );
}