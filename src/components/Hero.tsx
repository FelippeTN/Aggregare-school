import { Button } from "@/components/ui/button";
import { GraduationCap, Users, Award, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { CountUp } from "countup.js";
import heroImage from "@/assets/kids_playing.jpg";
import { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const options = { duration: 1, useEasing: true, suffix: "+" };

      const anos = document.getElementById("anos");
      const alunos = document.getElementById("alunos");
      const aprovacao = document.getElementById("aprovacao");

      if (anos) new CountUp(anos, 25, options).start();
      if (alunos) new CountUp(alunos, 1500, options).start();
      if (aprovacao) new CountUp(aprovacao, 98, { ...options, suffix: "%" }).start();
    }, 1500); // Delay para iniciar após as animações de entrada

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-18 md:pt-20 lg:pt-24">
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <motion.img 
          src={heroImage} 
          alt="Escola Aggregare" 
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.1, ease: "easeOut" }}
        />
        <motion.div 
          className="absolute inset-0 bg-primary/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, delay: 0.01 }}
        />
      </motion.div>

      <motion.div 
        className="relative z-10 container mx-auto px-3 sm:px-4 text-center text-white"
        style={{ opacity }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.1, delay: 0.01, ease: "easeOut" }}
          >
            Colégio Cristão <motion.span 
              className="text-cyan-blue"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.1, delay: 0.025, ease: "easeOut" }}
            >
              Aggregare
            </motion.span>
          </motion.h1>
          
          <motion.div 
            className="text-base xs:text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 md:mb-8 leading-relaxed max-w-3xl mx-auto px-2"
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.1, delay: 0.055, ease: "easeOut" }}
          >
            <motion.span 
              className="text-cyan-blue font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.05 }}
            >
              Tradição e Inovação
            </motion.span> com{" "}
            <motion.span 
              className="text-cyan-blue font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.05 }}
            >
              Excelência Acadêmica
            </motion.span>
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.05 }}
            >
              a partir de princípios e valores cristãos
            </motion.span>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8 md:mb-12 px-4"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.05, ease: "easeOut" }}
          >
            <Link to="/cadastro-interesse" className="w-full sm:w-auto">
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,191,255,0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button 
                  size="lg" 
                  className="bg-cyan-blue text-cyan-blue-foreground hover:bg-cyan-blue/90 text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 shadow-lg w-full sm:w-auto relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ 
                      x: '100%',
                      transition: { duration: 0.1 }
                    }}
                  />
                  <GraduationCap className="mr-2 relative z-10" size={18} />
                  <span className="relative z-10">Matrículas Abertas 2026</span>
                </Button>
              </motion.div>
            </Link>
            <motion.div
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(255,255,255,0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-black hover:bg-white/90 hover:text-primary text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 w-full sm:w-auto relative overflow-hidden group"
                onClick={() => {
                  const element = document.getElementById('sobre');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-blue/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ 
                    x: '100%',
                    transition: { duration: 0.1 }
                  }}
                />
                <Users className="mr-2 relative z-10" size={18} />
                <span className="relative z-10">Conheça Nossa Escola</span>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-4 max-w-lg mx-auto px-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.05, ease: "easeOut" }}
          >
            <motion.div 
              className="text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.05, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.1 }
              }}
            >
              <motion.div 
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-cyan-blue rounded-full flex items-center justify-center mx-auto mb-1 relative overflow-hidden"
                whileHover={{ 
                  boxShadow: "0 10px 30px rgba(0,191,255,0.4)",
                  y: -5
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent"
                  animate={{ 
                    rotate: [0, 360],
                    transition: { duration: 1, repeat: Infinity, ease: "linear" }
                  }}
                />
                <Users className="text-cyan-blue-foreground relative z-10" size={20} />
              </motion.div>
              <motion.div 
                className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-blue" 
                id="alunos"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.1, delay: 0.05, type: "spring", stiffness: 200 }}
              >
                0
              </motion.div>
              <motion.div 
                className="text-xs sm:text-sm opacity-90"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 0.9, y: 0 }}
                transition={{ duration: 0.1, delay: 0.05 }}
              >
                Alunos Formados
              </motion.div>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.05, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.1 }
              }}
            >
              <motion.div 
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-cyan-blue rounded-full flex items-center justify-center mx-auto mb-1 relative overflow-hidden"
                whileHover={{ 
                  boxShadow: "0 10px 30px rgba(0,191,255,0.4)",
                  y: -5
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent"
                  animate={{ 
                    rotate: [0, 360],
                    transition: { duration: 1, repeat: Infinity, ease: "linear", delay: 0.05 }
                  }}
                />
                <Award className="text-cyan-blue-foreground relative z-10" size={20} />
              </motion.div>
              <motion.div 
                className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-blue" 
                id="aprovacao"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.1, delay: 0.05, type: "spring", stiffness: 200 }}
              >
                0
              </motion.div>
              <motion.div 
                className="text-xs sm:text-sm opacity-90"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 0.9, y: 0 }}
                transition={{ duration: 0.1, delay: 0.05 }}
              >
                Aprovação
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.05, ease: "easeOut" }}
      >
        <motion.div 
          className="cursor-pointer p-2 sm:p-3 md:p-4 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-300 group"
          onClick={() => {
            const element = document.getElementById('sobre');
            if (element) element.scrollIntoView({ behavior: 'smooth' });
          }}
          animate={{ 
            y: [0, -10, 0],
            transition: { 
              duration: 1, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 0.05
            }
          }}
          whileHover={{ 
            scale: 1.1,
            backgroundColor: "rgba(255,255,255,0.4)",
            borderColor: "rgba(0,191,255,0.8)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ 
              rotate: [0, 5, -5, 0],
              transition: { 
                duration: 0.1, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 0.05
              }
            }}
          >
            <ChevronDown 
              className="text-white group-hover:text-cyan-blue transition-colors duration-300" 
              size={20} 
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
