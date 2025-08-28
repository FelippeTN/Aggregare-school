import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";

// Importe o tipo 'CarouselApi' do próprio componente do shadcn
import { type CarouselApi } from "@/components/ui/carousel"; 

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import image1 from "@/assets/students-studying.jpg";
import image2 from "@/assets/kids-school1.jpg";
import image3 from "@/assets/kids-school2.jpg"; 
const images = [image1, image2, image3];

export function AboutCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();

  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

  const startAutoplay = React.useCallback(() => {
    if (!api) return;
    if (intervalRef.current) clearInterval(intervalRef.current);
    
    intervalRef.current = setInterval(() => {
      api.scrollNext();
    }, 3000); 
  }, [api]);

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
      className="w-full"
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
    >
      <CarouselContent>
        {images.map((imgSrc, index) => (
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
        ))}
      </CarouselContent>
      
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}