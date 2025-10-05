import { Card, CardContent } from "@/components/ui/card";
import { AboutCarousel } from "./Carousel";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import cardPhoto1 from "@/assets/teen_praying.jpg";
import cardPhoto2 from "@/assets/kid_studying5.jpg";
import cardPhoto3 from "@/assets/smiling.jpg";
import cardPhoto4 from "@/assets/festival_smiling.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="relative py-24 bg-light-gray/30 overflow-hidden" ref={ref}>
      <motion.div className="absolute inset-0">
        <motion.div 
          className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-cyan-blue/40 to-transparent rounded-full blur-3xl"
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 1, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-cyan-cyan-blue/40 to-transparent rounded-full blur-3xl"
          animate={{ 
            x: [0, -50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        />
      </motion.div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.1, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 bg-clip-text text-transparent mb-8 leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 1, delay: 0.05, ease: "easeOut" }}
          >
            Quem Somos?
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-cyan-blue to-dark-blue rounded-full mx-auto mb-8"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.1, delay: 0.05, ease: "easeOut" }}
          />
          <motion.p 
            className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.1, delay: 0.05, ease: "easeOut" }}
          >
            O Colégio Cristão Aggregare é dirigido com experiência educacional, excelência e fé fundamentada. 
            Somos um colégio que busca, com profissionalismo, formar cidadãos íntegros, preparando nossos alunos para os desafios do futuro com base em valores cristãos sólidos e excelência acadêmica.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-2 gap-16 items-center mb-24"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 0.05, ease: "easeOut" }}
        >
          <motion.div 
            className="space-y-10"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 1, delay: 0.05, ease: "easeOut" }}
          >
            <div className="space-y-8">
              <motion.div 
                className="relative"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div 
                  className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-cyan-blue to-dark-blue rounded-full"
                  initial={{ height: 0 }}
                  animate={isInView ? { height: "100%" } : { height: 0 }}
                  transition={{ duration: 0.1, delay: 0.05, ease: "easeOut" }}
                />
                <motion.h3 
                  className="text-3xl font-bold text-slate-800 mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.1, delay: 0.05, ease: "easeOut" }}
                >
                  Nossa História e Missão
                </motion.h3>
                <motion.div 
                  className="w-16 h-0.5 bg-gradient-to-r from-cyan-blue to-dark-blue rounded-full mb-6"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: 64 } : { width: 0 }}
                  transition={{ duration: 0.1, delay: 0.05, ease: "easeOut" }}
                />
              </motion.div>
              <motion.div 
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-100 relative overflow-hidden group"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
                transition={{ duration: 1, delay: 0.05, ease: "easeOut" }}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 20px 40px rgba(0,191,255,0.15)",
                  transition: { duration: 0.1 }
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-blue/5 to-transparent opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.1 }}
                />
                <motion.p 
                  className="text-lg text-slate-600 leading-relaxed mb-6 relative z-10"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.1, delay: 0.05 }}
                >
                  Fundado com o propósito de unir tradição e inovação, o Colégio Cristão 
                  Aggregare se destaca por proporcionar uma educação integral que forma não 
                  apenas estudantes academicamente preparados, mas também cidadãos conscientes 
                  de seu papel na sociedade, principalmente  como cristãos. 
                </motion.p>
                <motion.p 
                  className="text-lg text-slate-600 leading-relaxed relative z-10"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.1, delay: 0.05 }}
                >
                  Nosso diferencial está na combinação única de métodos pedagógicos 
                  eficientes com princípios cristãos fundamentais, criando um ambiente 
                  de aprendizado que valoriza tanto o conhecimento quanto o caráter.
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 1, delay: 0.05, ease: "easeOut" }}
          >
            <motion.div 
              className="absolute -inset-4 bg-gradient-to-r from-cyan-blue/10 to-indigo-600/10 rounded-3xl blur-xl"
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 1, 0]
              }}
              transition={{ 
                duration: 1, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
            <motion.div 
              className="relative bg-white rounded-2xl p-2 shadow-2xl"
              whileHover={{ 
                y: -10,
                boxShadow: "0 25px 50px rgba(0,191,255,0.2)",
                transition: { duration: 0.1 }
              }}
            >
              <AboutCarousel />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 0.05, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.1, delay: 0.05, ease: "easeOut" }}
            whileHover={{ 
              y: -15,
              transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
          >
            <Card className="group text-center bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-0">
            <div className="relative overflow-hidden">
              <img 
                src={cardPhoto1}
                alt="Alunos engajados em atividades que refletem valores cristãos"
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-blue/20 to-transparent"></div>
              <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-cyan-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
            </div>
            <CardContent className="p-8">
              <h4 className="text-xl font-bold text-slate-800 mb-3">
                Valores Cristãos
              </h4>
              <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-blue to-dark-blue rounded-full mx-auto mb-4"></div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Formação integral baseada em princípios cristãos sólidos
              </p>
            </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.1, delay: 0.05, ease: "easeOut" }}
            whileHover={{ 
              y: -15,
              transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
          >
            <Card className="group text-center bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-0">
              <div className="relative overflow-hidden">
                <img 
                  src={cardPhoto2}
                  alt="Estudantes em uma sala de aula moderna e tecnológica"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/20 to-transparent"></div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-cyan-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>
              <CardContent className="p-8">
                <h4 className="text-xl font-bold text-slate-800 mb-3">
                  Excelência Acadêmica
                </h4>
                <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-blue to-dark-blue rounded-full mx-auto mb-4"></div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Metodologias inovadoras para máximo aproveitamento
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.1, delay: 0.05, ease: "easeOut" }}
            whileHover={{ 
              y: -15,
              transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
          >
            <Card className="group text-center bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-0">
              <div className="relative overflow-hidden">
                <img 
                  src={cardPhoto3}
                  alt="Interação entre pais, alunos e professores em um evento escolar"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent"></div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-cyan-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <CardContent className="p-8">
                <h4 className="text-xl font-bold text-slate-800 mb-3">
                  Comunidade Forte
                </h4>
                <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-blue to-dark-blue rounded-full mx-auto mb-4"></div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Relacionamento próximo entre escola, família e alunos
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.1, delay: 0.05, ease: "easeOut" }}
            whileHover={{ 
              y: -15,
              transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
          >
            <Card className="group text-center bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-0">
              <div className="relative overflow-hidden">
                <img 
                  src={cardPhoto4}
                  alt="Fachada tradicional da escola com elementos de tecnologia moderna"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/20 to-transparent"></div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-cyan-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <CardContent className="p-8">
                <h4 className="text-xl font-bold text-slate-800 mb-3">
                  Tradição & Inovação
                </h4>
                <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-blue to-dark-blue rounded-full mx-auto mb-4"></div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Equilibrio perfeito entre valores tradicionais e métodos modernos
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div> 
    </section>
  );
};

export default About;