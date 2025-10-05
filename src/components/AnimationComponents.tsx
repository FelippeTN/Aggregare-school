import { motion } from "framer-motion";

interface AnimatedLoadingProps {
  text?: string;
  size?: "sm" | "md" | "lg";
}

export const AnimatedLoading = ({ text = "Carregando...", size = "md" }: AnimatedLoadingProps) => {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-10 h-10",
    lg: "w-16 h-16"
  };

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <motion.div 
        className={`${sizeClasses[size]} border-4 border-cyan-blue/20 border-t-cyan-blue rounded-full`}
        animate={{ rotate: 360 }}
        transition={{ 
          duration: 0.1, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      />
      {text && (
        <motion.p 
          className="mt-4 text-slate-600 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, delay: 0.01 }}
        >
          {text}
        </motion.p>
      )}
    </div>
  );
};

interface FadeInWhenVisibleProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
}

export const FadeInWhenVisible = ({ 
  children, 
  delay = 0, 
  duration = 0.15,
  y = 10 
}: FadeInWhenVisibleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "50px" }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

interface SlideInFromSideProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  delay?: number;
  duration?: number;
}

export const SlideInFromSide = ({ 
  children, 
  direction = "left", 
  delay = 0, 
  duration = 0.1 
}: SlideInFromSideProps) => {
  const x = direction === "left" ? -20 : 20;

  return (
    <motion.div
      initial={{ opacity: 0, x }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "50px" }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

interface ScaleInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  scale?: number;
}

export const ScaleIn = ({ 
  children, 
  delay = 0, 
  duration = 0.1,
  scale = 0.98 
}: ScaleInProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "50px" }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

interface StaggerChildrenProps {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
}

export const StaggerChildren = ({ 
  children, 
  staggerDelay = 0.01,
  className = "" 
}: StaggerChildrenProps) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "50px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerChild = ({ children, y = 5 }: { children: React.ReactNode; y?: number }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.08, ease: "easeOut" }
        }
      }}
    >
      {children}
    </motion.div>
  );
};

interface HoverLiftProps {
  children: React.ReactNode;
  y?: number;
  scale?: number;
  className?: string;
}

export const HoverLift = ({ 
  children, 
  y = -10, 
  scale = 1.02,
  className = "" 
}: HoverLiftProps) => {
  return (
    <motion.div
      className={className}
      whileHover={{ 
        y, 
        scale,
        transition: { type: "spring", stiffness: 600, damping: 10 }
      }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  );
};

interface FloatingElementProps {
  children: React.ReactNode;
  duration?: number;
  y?: number[];
}

export const FloatingElement = ({ 
  children, 
  duration = 6,
  y = [0, -20, 0] 
}: FloatingElementProps) => {
  return (
    <motion.div
      animate={{ y }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
};

export default {
  AnimatedLoading,
  FadeInWhenVisible,
  SlideInFromSide,
  ScaleIn,
  StaggerChildren,
  StaggerChild,
  HoverLift,
  FloatingElement
};