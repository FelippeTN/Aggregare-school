import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Clock, CheckCircle, Phone, Mail, MapPin, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Enrollment = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma visita à Escola Aggregare.', '_blank');
  };

  return (
    <section id="matriculas" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Matricule-se Já!
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Garante já a vaga do seu filho na melhor escola da região. 
            Preencha o formulário abaixo e nossa equipe entrará em contato.
          </p>
          <Link to="/cadastro-interesse">
            <Button className="bg-gradient-to-r from-cyan-blue to-cyan-blue/90 hover:from-cyan-blue/90 hover:to-cyan-blue text-lg mt-10">
              Matrículas Abertas 2026
            </Button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Call to Action Principal */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground flex items-center">
                <Calendar className="mr-3 text-primary" size={28} />
                Faça Parte da Família Aggregare
              </CardTitle>
              <p className="text-muted-foreground">
                Garanta já a vaga do seu filho na melhor escola da região
              </p>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="text-center space-y-6">
                <div className="bg-primary/5 rounded-2xl p-8">
                  <GraduationCap className="text-primary mx-auto mb-4" size={64} />
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Matrículas Abertas para 2026
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Não perca a oportunidade de oferecer a melhor educação para seu filho. 
                    Vagas limitadas para todos os segmentos.
                  </p>
                  
                  <div className="space-y-4">
                    <Link to="/cadastro-interesse">
                      <Button 
                        className="w-full bg-primary hover:bg-primary/90 text-lg py-6 shadow-lg"
                        size="lg"
                      >
                        <GraduationCap className="mr-2" size={24} />
                        Cadastrar Interesse Agora
                      </Button>
                    </Link>
                    
                    <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                      <span>●</span>
                      <span>Processo 100% gratuito</span>
                      <span>●</span>
                      <span>Sem compromisso</span>
                      <span>●</span>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-3">Prefere falar conosco diretamente?</p>
                  <Button 
                    variant="outline" 
                    onClick={openWhatsApp}
                    className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                    size="lg"
                  >
                    <Phone className="mr-2" size={18} />
                    Agendar Visita via WhatsApp
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Informações Complementares */}
          <div className="space-y-8">
            {/* Diferenciais */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground flex items-center">
                  <CheckCircle className="mr-3 text-primary" size={24} />
                  Por que escolher a Aggregare?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <div className="font-medium text-foreground">Excelência Acadêmica</div>
                      <div className="text-sm text-muted-foreground">98% de aprovação no ENEM</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <div className="font-medium text-foreground">Valores Cristãos</div>
                      <div className="text-sm text-muted-foreground">Formação integral do caráter</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <div className="font-medium text-foreground">Metodologia Exclusiva</div>
                      <div className="text-sm text-muted-foreground">DNA Aggregare</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <div className="font-medium text-foreground">Acompanhamento Individual</div>
                      <div className="text-sm text-muted-foreground">Cada aluno é único</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Processo de Matrícula */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground flex items-center">
                  <Clock className="mr-3 text-secondary" size={24} />
                  Processo de Matrícula
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Cadastro de Interesse</div>
                      <div className="text-sm text-muted-foreground">Preencha o formulário ao lado</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Agendamento da Visita</div>
                      <div className="text-sm text-muted-foreground">Conheca nossa estrutura</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Documentação</div>
                      <div className="text-sm text-muted-foreground">Apresentação dos documentos</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      4
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Matrícula Confirmada</div>
                      <div className="text-sm text-muted-foreground">Bem-vindo à família Aggregare!</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contato */}
            <Card className="shadow-lg bg-primary text-primary-foreground">
              <CardHeader>
                <CardTitle className="text-xl font-bold flex items-center">
                  <Phone className="mr-3" size={24} />
                  Entre em Contato
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone size={18} />
                  <span>(11) 99999-9999</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={18} />
                  <span>contato@aggregare.edu.br</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin size={18} />
                  <span>Rua da Educação, 123 - Centro</span>
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