import { Card, CardContent } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { StaggerChildren, StaggerChild, FadeInWhenVisible, ScaleIn } from "./AnimationComponents";
import leader1Photo from "@/assets/lideres/fabio.png";
import leader2Photo from "@/assets/lideres/simone.png";

const Leadership = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "50px" });
  return (
    <section id="lideranca" className="mt-32" ref={ref}>
      <FadeInWhenVisible>
        <div className="text-center mb-20">
          <motion.h3 
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 bg-clip-text text-transparent mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
          >
            Nossa Liderança
          </motion.h3>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-cyan-blue to-dark-blue rounded-full mx-auto mb-8"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.1, delay: 0.05, ease: "easeOut" }}
          />
          <motion.p 
            className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.1, delay: 0.05, ease: "easeOut" }}
          >
            Conheça os líderes dedicados que guiam nossa instituição com paixão, 
            experiência e compromisso inabalável com a excelência educacional cristã 
            e o desenvolvimento integral de nossos alunos.
          </motion.p>
        </div>
      </FadeInWhenVisible>

      <StaggerChildren className="grid md:grid-cols-2 gap-16 max-w-7xl mx-auto" staggerDelay={0.1}>
        <StaggerChild>
          <ScaleIn delay={0.2}>
            <Card className="group shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden border-0 bg-gradient-to-br from-white via-slate-50 to-white hover:-translate-y-3">
              <div className="relative overflow-hidden">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-cyan-blue/5 to-indigo-600/5 z-10"
                  animate={{ 
                    background: [
                      "linear-gradient(45deg, rgba(0,191,255,0.05) 0%, rgba(75,0,130,0.05) 100%)",
                      "linear-gradient(225deg, rgba(0,191,255,0.05) 0%, rgba(75,0,130,0.05) 100%)",
                      "linear-gradient(45deg, rgba(0,191,255,0.05) 0%, rgba(75,0,130,0.05) 100%)"
                    ]
                  }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                <motion.img 
                  src={leader1Photo}
                  alt="Fábio Simas - Educador Sênior do Colégio Cristão Aggregare"
                  className="w-full h-96 object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  whileHover={{ scale: 1.05 }}
                />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent"></div>
            <div className="absolute top-6 right-6 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl border border-white/20">
              <svg className="w-7 h-7 text-cyan-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-5 shadow-2xl border border-white/30">
                <h4 className="text-2xl font-bold text-slate-800 mb-1">
                  Fábio Simas
                </h4>
                <p className="text-cyan-blue font-bold text-lg">
                  Educador Sênior
                </p>
                <div className="w-16 h-1 bg-gradient-to-r from-cyan-blue to-dark-blue rounded-full mt-2"></div>
              </div>
            </div>
          </div>
          
          <CardContent className="p-10 space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-gradient-to-r from-cyan-blue to-dark-blue rounded-full shadow-lg"></div>
                <span className="text-base font-bold text-slate-800">Formação Acadêmica</span>
              </div>
              <div className="bg-gradient-to-r from-cyan-blue/10 to-indigo-50 rounded-xl p-6 border border-cyan-blue/10">
                <ul className="text-slate-700 space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span className="font-medium">Doutor em Estudos de Linguagem pela UFF</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="font-medium">MBA em Finanças pela Fundação Dom Cabral</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="font-medium">Teologia Reformada pelo SETAV</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="pt-4 border-t border-slate-200">
              <p className="text-slate-600 leading-relaxed font-medium">
                Especialista em educação com vasta experiência em gestão acadêmica 
                e desenvolvimento curricular, unindo conhecimento pedagógico avançado 
                com sólida formação teológica.
              </p>
            </div>
          </CardContent>
            </Card>
          </ScaleIn>
        </StaggerChild>

        <StaggerChild>
          <ScaleIn delay={0.4}>
            <Card className="group shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden border-0 bg-gradient-to-br from-white via-slate-50 to-white hover:-translate-y-3">
              <div className="relative overflow-hidden">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 z-10"
                  animate={{ 
                    background: [
                      "linear-gradient(45deg, rgba(147,51,234,0.05) 0%, rgba(236,72,153,0.05) 100%)",
                      "linear-gradient(225deg, rgba(147,51,234,0.05) 0%, rgba(236,72,153,0.05) 100%)",
                      "linear-gradient(45deg, rgba(147,51,234,0.05) 0%, rgba(236,72,153,0.05) 100%)"
                    ]
                  }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear", delay: 1 }}
                />
                <motion.img 
                  src={leader2Photo}
                  alt="Simone Simas - Psicóloga e Diretora do Colégio Cristão Aggregare"
                  className="w-full h-96 object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  whileHover={{ scale: 1.05 }}
                />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent"></div>
            <div className="absolute top-6 right-6 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl border border-white/20">
              <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-5 shadow-2xl border border-white/30">
                <h4 className="text-2xl font-bold text-slate-800 mb-1">
                  Simone Simas
                </h4>
                <p className="text-purple-600 font-bold text-lg">
                  Psicóloga e Diretora
                </p>
                <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mt-2"></div>
              </div>
            </div>
          </div>
          
          <CardContent className="p-10 space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-lg"></div>
                <span className="text-base font-bold text-slate-800">Formação e Experiência</span>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                <ul className="text-slate-700 space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="font-medium">Psicóloga formada pelo Albert Einstein</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pink-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="font-medium">Especialista em TCC pela PUC/UERJ</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-violet-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="font-medium">15+ anos de experiência em saúde mental</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="pt-4 border-t border-slate-200">
              <p className="text-slate-600 leading-relaxed font-medium">
                Sua expertise em saúde mental e desenvolvimento humano enriquece 
                significativamente nosso ambiente de acolhimento e cuidado integral 
                com os estudantes e suas famílias.
              </p>
            </div>
              </CardContent>
            </Card>
          </ScaleIn>
        </StaggerChild>
      </StaggerChildren>
    </section>
  );
};

export default Leadership;