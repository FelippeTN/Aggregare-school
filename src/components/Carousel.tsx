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
      </CarouselContent >
      <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-black rounded-full p-2 shadow-md hover:shadow-lg transition">&#8592;</CarouselPrevious>
      <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-black rounded-full p-2 shadow-md hover:shadow-lg transition">&#8594;</CarouselNext>
    </Carousel>
  );
}