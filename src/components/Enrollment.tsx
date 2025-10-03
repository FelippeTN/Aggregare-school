import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Clock, CheckCircle, Phone, Mail, MapPin, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Enrollment = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/5521972079493?text=Olá! Gostaria de agendar uma visita à Escola Aggregare.', '_blank');
  };

  return (
    <section id="matriculas" className="py-12 sm:py-16 lg:py-20 bg-light-gray/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-4">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Matricule-se Já!
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
            Garante já a vaga do seu filho na melhor escola da região. 
            Preencha o formulário abaixo e nossa equipe entrará em contato.
          </p>
          <Link to="/cadastro-interesse">
            <Button className="bg-dark-blue text-dark-blue-foreground hover:bg-dark-blue/90 text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 shadow-lg mt-4 sm:mt-3 w-full sm:w-auto">
              Matrículas Abertas 2026
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          <Card className="shadow-xl">
            <CardHeader className="pb-4 sm:pb-6">
              <CardTitle className="text-xl sm:text-2xl font-bold text-foreground flex items-center flex-wrap sm:flex-nowrap">
                <Calendar className="mr-2 sm:mr-3 text-primary flex-shrink-0" size={24} />
                <span className="text-center sm:text-left">Faça Parte da Família Aggregare</span>
              </CardTitle>
              <p className="text-muted-foreground text-sm sm:text-base">
                Garanta já a vaga do seu filho na melhor escola da região
              </p>
            </CardHeader>
            <CardContent className="space-y-6 sm:space-y-8">
              <div className="text-center space-y-4 sm:space-y-6">
                <div className="bg-dark-blue/5 rounded-2xl p-4 sm:p-6 lg:p-8">
                  <GraduationCap className="text-primary mx-auto mb-3 sm:mb-4" size={48} />
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                    Matrículas Abertas para 2026
                  </h3>
                  <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    Não perca a oportunidade de oferecer a melhor educação para seu filho. 
                    Vagas limitadas para todos os segmentos.
                  </p>
                  
                  <div className="space-y-3 sm:space-y-4">
                    <Link to="/cadastro-interesse">
                      <Button 
                        className="w-full bg-dark-blue hover:bg-dark-blue/90 text-base sm:text-lg py-4 sm:py-6 shadow-lg"
                        size="lg"
                      >
                        <GraduationCap className="mr-2" size={20} />
                        Cadastrar Interesse Agora
                      </Button>
                    </Link>
                    
                    <div className="flex items-center justify-center space-x-1 sm:space-x-2 text-xs sm:text-sm text-muted-foreground flex-wrap">
                      <span>●</span>
                      <span>Processo 100% gratuito</span>
                      <span>●</span>
                      <span>Sem compromisso</span>
                      <span>●</span>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-xs sm:text-sm text-muted-foreground mb-3">Prefere falar conosco diretamente?</p>
                  <Button 
                    variant="outline" 
                    onClick={openWhatsApp}
                    className="border-dark-blue text-dark-blue hover:bg-dark-blue/90 hover:text-white w-full sm:w-auto"
                    size="lg"
                  >
                    <Phone className="mr-2" size={16} />
                    <span className="text-sm sm:text-base">Agendar Visita via WhatsApp</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6 sm:space-y-8">
            <Card className="shadow-lg">
              <CardHeader className="pb-3 sm:pb-6">
                <CardTitle className="text-lg sm:text-xl font-bold text-foreground flex items-center">
                  <CheckCircle className="mr-2 sm:mr-3 text-primary flex-shrink-0" size={20} />
                  <span>Por que escolher a Aggregare?</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                <div className="grid gap-3 sm:gap-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-dark-blue rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                    <div>
                      <div className="font-medium text-foreground text-sm sm:text-base">Excelência Acadêmica</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">98% de aprovação no ENEM</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-dark-blue rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                    <div>
                      <div className="font-medium text-foreground text-sm sm:text-base">Valores Cristãos</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Formação integral do caráter</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-dark-blue rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                    <div>
                      <div className="font-medium text-foreground text-sm sm:text-base">Metodologia Exclusiva</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">DNA Aggregare</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-dark-blue rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                    <div>
                      <div className="font-medium text-foreground text-sm sm:text-base">Acompanhamento Individual</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Cada aluno é único</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader className="pb-3 sm:pb-6">
                <CardTitle className="text-lg sm:text-xl font-bold text-foreground flex items-center">
                  <Clock className="mr-2 sm:mr-3 text-dark-blue flex-shrink-0" size={20} />
                  <span>Processo de Matrícula</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-dark-blue text-primary-foreground rounded-full flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <div className="font-medium text-foreground text-sm sm:text-base">Cadastro de Interesse</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Preencha o formulário ao lado</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-dark-blue text-primary-foreground rounded-full flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <div className="font-medium text-foreground text-sm sm:text-base">Agendamento da Visita</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Conheca nossa estrutura</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-dark-blue text-primary-foreground rounded-full flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <div className="font-medium text-foreground text-sm sm:text-base">Documentação</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Apresentação dos documentos</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-dark-blue text-primary-foreground rounded-full flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <div className="font-medium text-foreground text-sm sm:text-base">Matrícula Confirmada</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Bem-vindo à família Aggregare!</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg bg-dark-blue text-primary-foreground">
              <CardHeader className="pb-3 sm:pb-6">
                <CardTitle className="text-lg sm:text-xl font-bold flex items-center">
                  <Phone className="mr-2 sm:mr-3 flex-shrink-0" size={20} />
                  <span>Entre em Contato</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                <div className="flex items-start sm:items-center space-x-3 text-sm sm:text-base">
                  <Phone size={16} className="flex-shrink-0 mt-0.5 sm:mt-0" />
                  <span className="break-all">(21) 97207-9493</span>
                </div>
                <div className="flex items-start sm:items-center space-x-3 text-sm sm:text-base">
                  <Mail size={16} className="flex-shrink-0 mt-0.5 sm:mt-0" />
                    <span className="break-words">secretaria@colegiocristaoaggregare.<wbr />com.br
                    </span>
                </div>
                <div className="flex items-start space-x-3 text-sm sm:text-base">
                  <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                  <span>Rua Professor Miguel Couto, 479, Icaraí, Niterói - RJ.</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Enrollment;