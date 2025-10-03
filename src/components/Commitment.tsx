import { motion } from 'framer-motion';

const Commitment = () => {
  return (
    <section className="mt-32">
      <motion.div 
        className="bg-gradient-to-br from-dark-blue/80 to-dark-blue rounded-2xl overflow-hidden shadow-2xl relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-blue/10 via-transparent to-indigo-600/10"></div>
        
        <div className="relative p-12 lg:p-16 text-center">
          <motion.div 
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full mb-8 shadow-lg"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </motion.div>
          
          <motion.h4 
            className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Nosso Compromisso
          </motion.h4>
          
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-cyan-blue to-dark-blue rounded-full mx-auto mb-10"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          ></motion.div>
          
          <div className="max-w-4xl mx-auto">
            <motion.p 
              className="text-slate-300 text-xl leading-relaxed font-medium mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Nossa liderança está comprometida em manter os mais altos padrões de 
              excelência educacional, sempre fundamentados em valores cristãos sólidos 
              e no desenvolvimento integral de cada estudante.
            </motion.p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div 
                className="group"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                  <div className="w-3 h-3 bg-cyan-blue rounded-full mx-auto mb-4"></div>
                  <h5 className="text-white font-bold text-lg mb-3">Excelência Educacional</h5>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Compromisso com os mais altos padrões acadêmicos
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="group"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                  <div className="w-3 h-3 bg-cyan-blue rounded-full mx-auto mb-4"></div>
                  <h5 className="text-white font-bold text-lg mb-3">Valores Cristãos</h5>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Formação fundamentada em princípios sólidos
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="group"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                  <div className="w-3 h-3 bg-cyan-blue rounded-full mx-auto mb-4"></div>
                  <h5 className="text-white font-bold text-lg mb-3">Cuidado Integral</h5>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Desenvolvimento completo de cada estudante
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Commitment;