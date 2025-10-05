import { useEffect, useState } from 'react';

export const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
};

export const usePerformanceMode = () => {
  const [isLowPerformance, setIsLowPerformance] = useState(false);

  useEffect(() => {
    const checkPerformance = () => {
      const hardwareConcurrency = navigator.hardwareConcurrency || 1;
      const deviceMemory = (navigator as any).deviceMemory || 1;
      const connection = (navigator as any).connection;
      
      const isLowEnd = 
        hardwareConcurrency < 4 || 
        deviceMemory < 4 || 
        (connection && connection.effectiveType && 
         ['slow-2g', '2g', '3g'].includes(connection.effectiveType));

      setIsLowPerformance(isLowEnd);
    };

    checkPerformance();
  }, []);

  return isLowPerformance;
};

export const useAnimationConfig = () => {
  const prefersReducedMotion = useReducedMotion();
  const isLowPerformance = usePerformanceMode();

  const config = {
    shouldReduceAnimations: prefersReducedMotion || isLowPerformance,
    
    duration: {
      fast: prefersReducedMotion ? 0.1 : isLowPerformance ? 0.2 : 0.3,
      normal: prefersReducedMotion ? 0.2 : isLowPerformance ? 0.4 : 0.6,
      slow: prefersReducedMotion ? 0.3 : isLowPerformance ? 0.6 : 1.0,
    },
    
    easing: prefersReducedMotion || isLowPerformance ? 'linear' : 'easeOut',
    
    spring: {
      stiffness: isLowPerformance ? 200 : 400,
      damping: isLowPerformance ? 15 : 10,
    }
  };

  return config;
};

export const useThrottledScroll = (callback: () => void, delay: number = 16) => {
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let lastExecTime = 0;

    const throttledCallback = () => {
      const now = Date.now();
      
      if (now - lastExecTime > delay) {
        callback();
        lastExecTime = now;
      } else {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          callback();
          lastExecTime = Date.now();
        }, delay - (now - lastExecTime));
      }
    };

    window.addEventListener('scroll', throttledCallback, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', throttledCallback);
      clearTimeout(timeoutId);
    };
  }, [callback, delay]);
};

export const useOptimizedInView = (options?: IntersectionObserverInit) => {
  const [isInView, setIsInView] = useState(false);
  const [ref, setRef] = useState<Element | null>(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '-50px',
        ...options
      }
    );

    observer.observe(ref);

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return [setRef, isInView] as const;
};

export const useImagePreload = (imageSources: string[]) => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  useEffect(() => {
    const loadImage = (src: string) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(src);
        img.onerror = reject;
        img.src = src;
      });
    };

    const loadAllImages = async () => {
      try {
        const results = await Promise.allSettled(
          imageSources.map(src => loadImage(src))
        );
        
        const loaded = new Set<string>();
        results.forEach((result, index) => {
          if (result.status === 'fulfilled') {
            loaded.add(imageSources[index]);
          }
        });
        
        setLoadedImages(loaded);
      } catch (error) {
        console.warn('Some images failed to preload:', error);
      }
    };

    if (imageSources.length > 0) {
      loadAllImages();
    }
  }, [imageSources]);

  return {
    loadedImages,
    isImageLoaded: (src: string) => loadedImages.has(src),
    allImagesLoaded: loadedImages.size === imageSources.length
  };
};

export default {
  useReducedMotion,
  usePerformanceMode,
  useAnimationConfig,
  useThrottledScroll,
  useOptimizedInView,
  useImagePreload
};