import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from '../assets/logo.ico';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/5521972079493?text=Olá! Gostaria de agendar uma visita à escola.', '_blank');
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.1, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 mx-2 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-10 mt-2 bg-background/95 backdrop-blur-md border rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 z-50"
    >
      <div className="px-4 sm:px-5 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
          <motion.div 
            className="flex items-center flex-shrink-0 space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 500, damping: 8 }}
          >
            <div className="relative">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-cyan-blue/20 to-transparent rounded-lg"
                animate={{ 
                  background: ["linear-gradient(45deg, rgba(0,191,255,0.1) 0%, transparent 50%)", 
                             "linear-gradient(225deg, rgba(0,191,255,0.1) 0%, transparent 50%)",
                             "linear-gradient(45deg, rgba(0,191,255,0.1) 0%, transparent 50%)"]
                }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <motion.img 
                src={logo} 
                alt="Logo do Colégio Aggregare" 
                className="relative h-10 w-12 sm:h-12 sm:w-14 md:h-14 md:w-16 object-contain" 
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.1 }
                }}
              />
            </div>  
          </motion.div>

          <motion.nav 
            className="hidden lg:flex items-center justify-center flex-1 space-x-2 xl:space-x-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, delay: 0.01 }}
          >
            {[
              { text: 'Quem Somos', id: 'sobre' },
              { text: 'Liderança', id: 'lideranca' },
              { text: 'Compromisso', id: 'compromisso' },
              { text: 'Segmentos', id: 'segmentos' },
              { text: 'Proposta', id: 'proposta' },
              { text: 'Eventos', id: 'eventos' },
              { text: 'Matrículas', id: 'matriculas' }
            ].map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm xl:text-base text-foreground hover:text-primary transition-colors whitespace-nowrap font-medium px-2 py-1 rounded-md hover:bg-primary/5 relative overflow-hidden"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1, delay: 0.05 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-cyan-blue/10 to-transparent rounded-md"
                  initial={{ x: '-100%' }}
                  whileHover={{ 
                    x: '100%',
                    transition: { duration: 0.1, ease: "easeInOut" }
                  }}
                />
                <span className="relative z-10">{item.text}</span>
              </motion.button>
            ))}
          </motion.nav>
          
          <motion.nav 
            className="hidden md:flex lg:hidden items-center justify-center flex-1 space-x-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, delay: 0.02 }}
          >
            {[
              { text: 'Sobre', id: 'sobre' },
              { text: 'Segmentos', id: 'segmentos' },
              { text: 'Proposta', id: 'proposta' },
              { text: 'Eventos', id: 'eventos' }
            ].map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm text-foreground hover:text-primary transition-colors whitespace-nowrap font-medium px-2 py-1 rounded-md hover:bg-primary/5 relative overflow-hidden"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1, delay: 0.05 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-cyan-blue/10 to-transparent rounded-md"
                  initial={{ x: '-100%' }}
                  whileHover={{ 
                    x: '100%',
                    transition: { duration: 0.1, ease: "easeInOut" }
                  }}
                />
                <span className="relative z-10">{item.text}</span>
              </motion.button>
            ))}
          </motion.nav>

          <motion.div 
            className="hidden md:flex items-center space-x-2 lg:space-x-3 flex-shrink-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.1, delay: 0.05 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                onClick={openWhatsApp}
                size="sm"
                className="border-primary/60 text-primary hover:bg-primary hover:text-white transition-all duration-200 text-xs lg:text-sm whitespace-nowrap px-3 lg:px-4 shadow-sm hover:shadow-md font-medium"
              >
                Agendar Visita
              </Button>
            </motion.div>
            <Link to="/cadastro-interesse">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="sm"
                  className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-xs lg:text-sm whitespace-nowrap px-3 lg:px-4 shadow-sm hover:shadow-lg transition-all duration-200 font-medium"
                >
                  Matricule-se
                </Button>
              </motion.div>
            </Link>
          </motion.div>

          <motion.button 
            className="md:hidden p-2 rounded-md hover:bg-muted transition-colors flex-shrink-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.1, delay: 0.05 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isMenuOpen ? 'close' : 'open'}
                initial={{ rotate: 0, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 180, opacity: 0 }}
                transition={{ duration: 0.1 }}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.1, ease: "easeInOut" }}
            >
              <motion.div 
                className="border-t border-border/50 pt-4 pb-4"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.1, delay: 0.01 }}
              >
                <nav className="flex flex-col space-y-3">
                  {[
                    { text: 'Quem Somos', id: 'sobre' },
                    { text: 'Liderança', id: 'lideranca' },
                    { text: 'Nosso Compromisso', id: 'compromisso' },
                    { text: 'Segmentos', id: 'segmentos' },
                    { text: 'Proposta Pedagógica', id: 'proposta' },
                    { text: 'Eventos', id: 'eventos' },
                    { text: 'Matrículas', id: 'matriculas' }
                  ].map((item, index) => (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="text-center py-2 px-1 text-foreground hover:text-primary transition-colors text-base font-medium relative overflow-hidden rounded-md hover:bg-primary/5"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.1, delay: 0.02 + index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <motion.span
                        className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-blue to-transparent"
                        initial={{ scaleY: 0 }}
                        whileHover={{ 
                          scaleY: 1,
                          transition: { duration: 0.1 }
                        }}
                      />
                      {item.text}
                    </motion.button>
                  ))}
                
                <motion.div 
                  className="flex flex-col space-y-3 pt-4 border-t border-border/50"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.1, delay: 0.05 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      variant="outline" 
                      onClick={openWhatsApp}
                      size="sm"
                      className="border-primary text-primary hover:bg-primary hover:text-white justify-center font-medium shadow-sm hover:shadow-md transition-all duration-200 w-full"
                    >
                      Agendar Visita
                    </Button>
                  </motion.div>
                  <Link to="/cadastro-interesse" className="w-full">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        size="sm"
                        className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary w-full font-medium shadow-sm hover:shadow-lg transition-all duration-200"
                      >
                        Matricule-se
                      </Button>
                    </motion.div>
                  </Link>
                </motion.div>
                </nav>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;