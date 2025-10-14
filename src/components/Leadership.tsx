import { Card, CardContent } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { StaggerChildren, FadeInWhenVisible, ScaleIn } from "./AnimationComponents";
import couplePhoto from "@/assets/lideres/fabio e simone.jpg"; 

const Leadership = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "50px" });
  return (
    <section id="lideranca" className="mt-32" ref={ref}>
      <FadeInWhenVisible>
        <div className="text-center mb-10">
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

      <StaggerChildren className="max-w-6xl mx-auto" staggerDelay={0.2}>
        <ScaleIn delay={0.1}>
          <Card className="shadow-2xl overflow-hidden border-0 bg-white">
            <div className="relative overflow-hidden group">
              <motion.img 
                src={couplePhoto}
                alt="Fábio e Simone Simas - Liderança do Colégio Cristão Aggregare"
                className="w-full h-[500px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                whileHover={{ scale: 1.05 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white text-center">
                <h4 className="text-3xl font-bold mb-2">Fábio e Simone Simas</h4>
                <p className="text-slate-100 font-semibold text-lg">Liderança do Colégio Cristão Aggregare</p>
                <div className="w-32 h-1 bg-gradient-to-r from-cyan-blue via-purple-600 to-pink-600 rounded-full mt-4 mx-auto"></div>
              </div>
            </div>

            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-cyan-blue rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      </svg>
                    </div>
                    <h5 className="text-lg font-bold text-slate-800">Formação Acadêmica</h5>
                  </div>
                  
                  <ul className="space-y-3 text-slate-700 min-h-[160px]">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyan-blue rounded-full mt-2 flex-shrink-0"></div>
                      <span className="font-medium">Doutor em Estudos de Linguagem pela UFF</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyan-blue rounded-full mt-2 flex-shrink-0"></div>
                      <span className="font-medium">MBA em Finanças pela Fundação Dom Cabral</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyan-blue rounded-full mt-2 flex-shrink-0"></div>
                      <span className="font-medium">Teologia Reformada pelo SETAV</span>
                    </li>
                  </ul>
                  
                  <p className="text-slate-600 leading-relaxed pt-4 border-t border-slate-200 mt-auto">
                    Especialista em educação com vasta experiência em gestão acadêmica 
                    e desenvolvimento curricular, unindo conhecimento pedagógico avançado 
                    com sólida formação teológica.
                  </p>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h5 className="text-lg font-bold text-slate-800">Formação e Experiência</h5>
                  </div>
                  
                  <ul className="space-y-3 text-slate-700 min-h-[160px]">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="font-medium">Psicóloga clínica e hospitalar</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="font-medium">Especialista em TCC pela PUC/UERJ</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="font-medium">Especialista em Psicologia hospitalar pelo Hospital Albert Einstein</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="font-medium">15+ anos de experiência em saúde mental</span>
                    </li>
                  </ul>
                  
                  <p className="text-slate-600 leading-relaxed pt-4 border-t border-slate-200 mt-auto">
                    Sua expertise em saúde mental e desenvolvimento humano enriquece 
                    significativamente nosso ambiente de acolhimento e cuidado integral 
                    com os estudantes e suas famílias.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </ScaleIn>
      </StaggerChildren>
    </section>
  );
};

export default Leadership;