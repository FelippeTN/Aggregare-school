import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FadeInWhenVisible, StaggerChildren, StaggerChild, ScaleIn } from "./AnimationComponents";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AndersonImage from "@/assets/capelão/anderson.png";
import CamilaImage from "@/assets/capelão/camila.png";

const introParagraphs = [
  "O Colégio Cristão Aggregare é fundamentado em princípios cristãos que promovem valor ético, respeito ao próximo e uma visão de mundo embasada na fé reformada. Nossa capelania oferece um espaço para crescimento espiritual e pessoal, estreitando laços com a família para que cada aluno seja cuidado individualmente.",
  "Acreditamos em uma instituição que compreende o aluno integralmente. Por isso, incentivamos o crescimento intelectual, emocional e espiritual, cultivando um ambiente onde fé e conhecimento caminham juntos.",
  "Nossos capelães estão diariamente presentes no colégio, disponíveis para orar, ouvir, aconselhar e compartilhar a Palavra com amor e acolhimento, acompanhando cada estudante em sua jornada." 
];

const chaplains = [
  {
    name: "Anderson Barros",
    role: "Capelão Escolar",
    quote: "Na capelania, cada aluno é importante, cada história tem valor e cada coração encontra acolhimento.",
    initials: "AB",
    image: AndersonImage
  },
  {
    name: "Camila Luna",
    role: "Capelã Escolar",
    quote: "A capelania é acolhimento com cuidado de Deus. Ser luz na vida dos alunos é um grande privilégio.",
    initials: "CL",
    image: CamilaImage
  }
];

const verse = {
  reference: "Salmo 119:105",
  text: "A tua palavra é lâmpada para os meus pés e luz para o meu caminho."
};

const Chaplaincy = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="capelania" className="py-24 bg-light-gray/30 relative overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <FadeInWhenVisible>
          <motion.div
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Capelania
            </h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-cyan-blue to-dark-blue rounded-full mx-auto mb-8 mt-6"
              initial={{ width: 0 }}
              animate={isInView ? { width: 96 } : { width: 0 }}
              transition={{ duration: 0.2, delay: 0.1, ease: "easeOut" }}
            />
            <motion.p
              className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.2, delay: 0.05, ease: "easeOut" }}
            >
              Cuidado espiritual que ilumina cada jornada!
            </motion.p>
          </motion.div>
        </FadeInWhenVisible>

  <StaggerChildren className="mt-12 grid gap-8 md:grid-cols-3">
          {introParagraphs.map((paragraph, index) => (
            <StaggerChild key={index}>
              <div className="h-full bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-100 shadow-lg p-8">
                <div className="flex items-center gap-3 mb-4 text-cyan-blue font-semibold">
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-6 h-6" stroke="currentColor" fill="none" strokeWidth="1.8"
                    initial={{ rotate: -5, opacity: 0 }}
                    animate={isInView ? { rotate: 0, opacity: 1 } : { rotate: -5, opacity: 0 }}
                    transition={{ duration: 0.25, delay: 0.05 * index, ease: "easeOut" }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12c2.21 0 4-1.79 4-4V3l4 2v3c0 4.42-3.58 8-8 8" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 01-9-9V7l4-2v5c0 2.21 1.79 4 4 4" />
                  </motion.svg>
                  <span className="uppercase tracking-wider text-xs">Cuidado integral</span>
                </div>
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                  {paragraph}
                </p>
              </div>
            </StaggerChild>
          ))}
        </StaggerChildren>

        <FadeInWhenVisible>
          <div className="mt-16 text-center">
            <motion.h3
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              Nossos Capelães
            </motion.h3>
            <motion.p
              className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.2, delay: 0.05, ease: "easeOut" }}
            >
              Uma equipe acolhedora, pronta para escutar, aconselhar e caminhar lado a lado com nossas famílias.
            </motion.p>
          </div>
        </FadeInWhenVisible>

  <StaggerChildren className="mt-12 grid gap-10 md:grid-cols-2 xl:gap-12">
          {chaplains.map((chaplain, index) => (
            <ScaleIn key={chaplain.name} delay={0.1 * index}>
              <Card className="relative overflow-hidden border-0 shadow-xl bg-white/90 backdrop-blur">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-blue via-sky-500 to-dark-blue" />
                <CardContent className="p-10">
                  <div className="flex flex-col gap-6 text-left">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-16 w-16 ring-4 ring-cyan-blue/20">
                        <AvatarImage src={chaplain.image} alt={`Foto de ${chaplain.name}`} />
                        <AvatarFallback className="bg-gradient-to-br from-cyan-blue to-dark-blue text-white text-2xl font-bold">
                          {chaplain.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="text-2xl font-bold text-foreground">{chaplain.name}</h4>
                        <p className="text-sm uppercase tracking-widest text-cyan-blue font-semibold">
                          {chaplain.role}
                        </p>
                      </div>
                    </div>

                    <blockquote className="relative pl-6 text-lg text-muted-foreground leading-relaxed">
                      <span className="absolute left-0 top-0 text-4xl text-cyan-blue/60">“</span>
                      {chaplain.quote}
                      <span className="text-4xl text-cyan-blue/60 align-[-0.4em] ml-1">”</span>
                    </blockquote>

                    <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-slate-400">
                      <span className="w-2 h-2 rounded-full bg-cyan-blue/60" />
                      Presença & Acolhimento
                      <span className="w-2 h-2 rounded-full bg-dark-blue/60" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScaleIn>
          ))}
        </StaggerChildren>

        <FadeInWhenVisible>
          <motion.div
            className="mt-20 mx-auto max-w-3xl bg-white/90 backdrop-blur border border-cyan-blue/20 rounded-3xl p-8 shadow-lg text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <div className="flex justify-center mb-4">
              <motion.span
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-blue/10 text-cyan-blue"
                initial={{ rotate: -15, scale: 0.9 }}
                animate={isInView ? { rotate: 0, scale: 1 } : { rotate: -15, scale: 0.9 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 3h9a3 3 0 013 3v13a2 2 0 00-2-2H6a2 2 0 00-2 2V6a3 3 0 012-3z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 3v16" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v6M10 11h4" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 19h10" />
                </svg>
              </motion.span>
            </div>
            <p className="text-xl md:text-2xl font-semibold text-foreground italic leading-relaxed">
              “{verse.text}”
            </p>
            <p className="mt-3 text-sm font-semibold tracking-[0.35em] uppercase text-cyan-blue">
              {verse.reference}
            </p>
          </motion.div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
};

export default Chaplaincy;
