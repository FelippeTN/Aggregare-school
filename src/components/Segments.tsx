import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, GraduationCap, Clock, Trophy, Target } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { StaggerChildren, StaggerChild, HoverLift } from "./AnimationComponents";

const Segments = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const segments = [
    {
      title: "Ensino Fundamental I",
      subtitle: "1º ao 5º ano",
      icon: <BookOpen size={40} />,
      age: "6 a 10 anos",
      description: "Base sólida para o desenvolvimento integral da criança",
      features: [
        "Alfabetização e fluência de leitura",
        "Desenvolvimento do raciocínio lógico",
        "Formação de valores cristãos",
        "Atividades lúdicas e pedagógicas",
        "Acompanhamento individualizado"
      ],
      color: "bg-blue-50 border-blue-200"
    },
    {
      title: "Ensino Fundamental II",
      subtitle: "6º ao 9º ano",
      icon: <Users size={40} />,
      age: "11 a 14 anos",
      description: "Aprofundamento do conhecimento e desenvolvimento da autonomia",
      features: [
        "Preparação para o Ensino Médio",
        "Projetos interdisciplinares",
        "Desenvolvimento científico",
        "Formação cidadã",
        "Orientação vocacional inicial"
      ],
      color: "bg-green-50 border-green-200"
    },
    {
      title: "Ensino Médio",
      subtitle: "1º ao 3º ano",
      icon: <GraduationCap size={40} />,
      age: "15 a 17 anos",
      description: "Preparação completa para vestibulares e vida universitária",
      features: [
        "Preparação para ENEM e vestibulares",
        "Orientação profissional",
        "Simulados regulares",
        "Plantões de dúvidas",
        "Apoio emocional e acadêmico"
      ],
      color: "bg-purple-50 border-purple-200"
    }
  ];

  return (
    <section id="segmentos" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.1, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 1, delay: 0.02, ease: "easeOut" }}
          >
            Nossos Segmentos
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.1, delay: 0.05, ease: "easeOut" }}
          >
            Da Educação Infantil ao Ensino Médio, oferecemos uma jornada educacional 
            completa, respeitando cada fase do desenvolvimento dos nossos alunos.
          </motion.p>
        </motion.div>

        <StaggerChildren className="grid lg:grid-cols-3 gap-8" staggerDelay={0.01}>
          {segments.map((segment, index) => (
            <StaggerChild key={index}>
              <HoverLift y={-15} scale={1.03}>
                <Card className={`${segment.color} shadow-lg border-2 relative overflow-hidden group`}>
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <div className="text-primary">
                    {segment.icon}
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  {segment.title}
                </CardTitle>
                <Badge variant="secondary" className="mx-auto mb-2">
                  {segment.subtitle}
                </Badge>
                <Badge variant="outline" className="mx-auto">
                  <Clock size={14} className="mr-1" />
                  {segment.age}
                </Badge>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground text-center leading-relaxed">
                  {segment.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground flex items-center">
                    <Target size={18} className="mr-2 text-primary" />
                    Principais Focos:
                  </h4>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.1 }}
                  />
                  <ul className="space-y-2 relative z-10">
                    {segment.features.map((feature, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-start text-sm text-muted-foreground"
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ duration: 0.1, delay: 0.05 + idx * 0.1 }}
                      >
                        <motion.div 
                          className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"
                          whileHover={{ scale: 1.5 }}
                        />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </CardContent>
                </Card>
              </HoverLift>
            </StaggerChild>
          ))}
        </StaggerChildren>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.1, delay: 0.05, ease: "easeOut" }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="bg-primary/5 rounded-2xl p-8 relative overflow-hidden group"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0,191,255,0.1)"
              }}
              transition={{ duration: 0.1 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-blue/10 to-transparent opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.1 }}
              />
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
              >
                <Trophy className="text-primary mx-auto mb-4 relative z-10" size={48} />
              </motion.div>
              <h3 className="text-2xl font-bold text-foreground mb-4 relative z-10">
                Resultados que Comprovam nossa Excelência
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-center relative z-10">
                {[
                  { value: "98%", label: "Taxa de Aprovação no ENEM", color: "text-dark-blue" },
                  { value: "85%", label: "Alunos em Universidades Públicas", color: "text-cyan-blue" },
                  { value: "92%", label: "Satisfação das Famílias", color: "text-dark-blue" }
                ].map((stat, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <motion.div 
                      className={`text-3xl font-bold ${stat.color} mb-2`}
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ 
                        duration: 0.1, 
                        delay: 0.05 + index * 0.2, 
                        type: "spring", 
                        stiffness: 200 
                      }}
                    >
                      {stat.value}
                    </motion.div>
                    <motion.div 
                      className="text-muted-foreground"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.1, delay: 0.05 + index * 0.2 }}
                    >
                      {stat.label}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Segments;