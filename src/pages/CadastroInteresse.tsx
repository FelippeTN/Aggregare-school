import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { GraduationCap, ArrowLeft, CheckCircle, Phone, Mail, MapPin, Users, Award, Heart, Loader2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useFormValidation } from "@/hooks/useFormValidation";
import { Link } from "react-router-dom";
import { createEmailService } from "@/services/sendEmail";
import type { StudentRegistrationForm } from "@/types/form";

const CadastroInteresse = () => {
  const [formData, setFormData] = useState<StudentRegistrationForm>({
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    segment: '',
    currentYear: '',
    currentSchool: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { validateForm } = useFormValidation();

  const emailService = createEmailService();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm(formData)) {
      toast({
        title: "Dados inválidos",
        description: "Por favor, verifique os dados inseridos e tente novamente.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      const result = await emailService.sendRegistrationEmail(formData);
      
      if (result.success) {
        setIsSubmitted(true);
        toast({
          title: "Cadastro realizado com sucesso!",
          description: "Nossa equipe entrará em contato em breve para agendar sua visita.",
        });
      } else {
        throw new Error(result.message || 'Falha no envio');
      }
    } catch (error) {
      console.error('Erro ao enviar cadastro:', error);
      toast({
        title: "Erro ao enviar cadastro",
        description: error instanceof Error ? error.message : "Tente novamente em alguns minutos ou entre em contato diretamente.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/5521972079493?text=Olá! Acabei de fazer meu cadastro de interesse na Escola Aggregare e gostaria de agendar uma visita.', '_blank');
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-section-bg flex items-center justify-center px-4">
        <Card className="max-w-2xl w-full shadow-xl">
          <CardHeader className="text-center">
            <div className="w-20 h-20 bg-dark-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="text-primary-foreground" size={40} />
            </div>
            <CardTitle className="text-3xl font-bold text-foreground mb-2">
              Cadastro Realizado!
            </CardTitle>
            <p className="text-muted-foreground">
              Obrigado pelo seu interesse na Escola Aggregare
            </p>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <div className="space-y-4">
              <p className="text-foreground leading-relaxed">
                Recebemos suas informações com sucesso! Nossa equipe pedagógica entrará 
                em contato em breve para agendar uma visita à escola e esclarecer todas as suas dúvidas.
              </p>
              <div className="bg-dark-blue/5 rounded-lg p-6 space-y-4">
                <h4 className="font-semibold text-foreground flex items-center justify-center">
                  <Users className="mr-2 text-primary" size={20} />
                  Próximos Passos:
                </h4>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">1</div>
                    <span>Entraremos em contato em até 24 horas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">2</div>
                    <span>Agendaremos uma visita à escola</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">3</div>
                    <span>Apresentaremos nossa proposta pedagógica</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button variant="outline" className="border-primary text-primary hover:bg-dark-blue hover:text-primary-foreground">
                  <ArrowLeft className="mr-2" size={18} />
                  Voltar ao Site
                </Button>
              </Link>
            </div>

            <div className="border-t border-border pt-6">
              <h4 className="font-semibold text-foreground mb-4">Ou entre em contato diretamente:</h4>
              <div className="grid sm:grid-cols-3 gap-4 text-sm">
                <div className="flex flex-col items-center space-y-2">
                  <Phone className="text-primary" size={24} />
                  <span className="text-muted-foreground">(21) 97207-9493</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <Mail className="text-primary" size={24} />
                  <span className="text-muted-foreground break-all">secretaria@colegiocristaoaggregare.com</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <MapPin className="text-primary" size={24} />
                  <span className="text-muted-foreground">Rua Professor Miguel Couto, 123Icarai - Niterói, RJ</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-section-bg py-3">
        <div className="flex items-center justify-between mb-8 px-4">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-6 mr-6">
            <ArrowLeft className="mr-2" size={20} />
            Voltar ao site
          </Link>
        </div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Cadastro de Interesse
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Preencha o formulário abaixo para demonstrar interesse na Escola Aggregare. 
            Nossa equipe entrará em contato para agendar uma visita e esclarecer todas as suas dúvidas.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    Informações do Aluno e Responsável
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Todos os campos marcados com * são obrigatórios
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                        Dados do Aluno
                      </h3>
                      
                      <div className="space-y-2">
                        <Label htmlFor="studentName">Nome Completo do Aluno *</Label>
                        <Input
                          id="studentName"
                          value={formData.studentName}
                          onChange={(e) => handleInputChange('studentName', e.target.value)}
                          placeholder="Nome completo do aluno"
                          required
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Segmento de Interesse *</Label>
                          <Select onValueChange={(value) => handleInputChange('segment', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione o segmento" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="fundamental1" className="bg-gray-50 hover:bg-blue-50 focus:bg-blue-100">Ensino Fundamental I (1º ao 5º ano)</SelectItem>
                              <SelectItem value="fundamental2" className="bg-gray-50 hover:bg-blue-50 focus:bg-blue-100">Ensino Fundamental II (6º ao 9º ano)</SelectItem>
                              <SelectItem value="medio" className="bg-gray-50 hover:bg-blue-50 focus:bg-blue-100">Ensino Médio (1º ao 3º ano)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="currentYear">Ano/Série Pretendida para 2026 *</Label>
                          <Select onValueChange={(value) => handleInputChange('currentYear', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione o ano" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1ano" className="bg-gray-50 hover:bg-blue-50 focus:bg-blue-100">1º Ano</SelectItem>
                              <SelectItem value="2ano" className="bg-gray-50 hover:bg-blue-50 focus:bg-blue-100">2º Ano</SelectItem>
                              <SelectItem value="3ano" className="bg-gray-50 hover:bg-blue-50 focus:bg-blue-100">3º Ano</SelectItem>
                              <SelectItem value="4ano" className="bg-gray-50 hover:bg-blue-50 focus:bg-blue-100">4º Ano</SelectItem>
                              <SelectItem value="5ano" className="bg-gray-50 hover:bg-blue-50 focus:bg-blue-100">5º Ano</SelectItem>
                              <SelectItem value="6ano" className="bg-gray-50 hover:bg-blue-50 focus:bg-blue-100">6º Ano</SelectItem>
                              <SelectItem value="7ano" className="bg-gray-50 hover:bg-blue-50 focus:bg-blue-100">7º Ano</SelectItem>
                              <SelectItem value="8ano" className="bg-gray-50 hover:bg-blue-50 focus:bg-blue-100">8º Ano</SelectItem>
                              <SelectItem value="9ano" className="bg-gray-50 hover:bg-blue-50 focus:bg-blue-100">9º Ano</SelectItem>
                              <SelectItem value="1medio" className="bg-gray-50 hover:bg-blue-50 focus:bg-blue-100">1º Médio</SelectItem>
                              <SelectItem value="2medio" className="bg-gray-50 hover:bg-blue-50 focus:bg-blue-100">2º Médio</SelectItem>
                              <SelectItem value="3medio" className="bg-gray-50 hover:bg-blue-50 focus:bg-blue-100">3º Médio</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="currentSchool">Escola Atual (opcional)</Label>
                        <Input
                          id="currentSchool"
                          value={formData.currentSchool}
                          onChange={(e) => handleInputChange('currentSchool', e.target.value)}
                          placeholder="Nome da escola onde o aluno estuda atualmente"
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                        Dados do Responsável
                      </h3>
                      
                      <div className="space-y-2">
                        <Label htmlFor="parentName">Nome Completo do Responsável *</Label>
                        <Input
                          id="parentName"
                          value={formData.parentName}
                          onChange={(e) => handleInputChange('parentName', e.target.value)}
                          placeholder="Seu nome completo"
                          required
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">E-mail *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            placeholder="seu@email.com"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Telefone/WhatsApp *</Label>
                          <Input
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            placeholder="(21) 99999-9999"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Mensagem Adicional (opcional)</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Conte-nos sobre suas expectativas, dúvidas ou qualquer informação adicional que julgar importante..."
                        rows={4}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-dark-blue hover:bg-dark-blue/90 text-lg py-3"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 animate-spin" size={20} />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <GraduationCap className="mr-2" size={20} />
                          Enviar Cadastro de Interesse
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-foreground flex items-center">
                    <Award className="mr-3 text-primary" size={20} />
                    Por que Aggregare?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Heart className="text-primary flex-shrink-0 mt-1" size={16} />
                      <div>
                        <div className="font-medium text-foreground text-sm">Valores Cristãos</div>
                        <div className="text-xs text-muted-foreground">Formação integral do caráter</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Award className="text-secondary flex-shrink-0 mt-1" size={16} />
                      <div>
                        <div className="font-medium text-foreground text-sm">98% Aprovação ENEM</div>
                        <div className="text-xs text-muted-foreground">Excelência acadêmica comprovada</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Users className="text-primary flex-shrink-0 mt-1" size={16} />
                      <div>
                        <div className="font-medium text-foreground text-sm">Ensino com Amor</div>
                        <div className="text-xs text-muted-foreground">Experiência e inovação</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg bg-dark-blue text-primary-foreground">
                <CardHeader>
                  <CardTitle className="text-lg font-bold flex items-center">
                    <Phone className="mr-3" size={20} />
                    Contato Direto
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm opacity-90">
                    Prefere falar conosco diretamente?
                  </p>
                  <Button 
                    onClick={openWhatsApp}
                    className="w-full bg-cyan-blue text-secondary-foreground hover:bg-cyan-blue/90"
                  >
                    <Phone className="mr-0" size={16} />
                    WhatsApp
                  </Button>
                  <div className="space-y-5 text-sm opacity-90">
                    <div className="flex items-center space-x-2">
                      <Mail size={18} />
                      <span className="break-all min-w-0">secretaria@colegiocristaoaggregare.com</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin size={18} />
                      <span>Rua Professor Miguel Couto, 123 Icarai - Niterói, RJ</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <a href="https://www.acsi.org/"
                  target="_blank"
                  rel="noopener noreferrer">         
                <Card className="shadow-lg mt-6">
                  <CardContent className="pt-6 text-center">
                    <div className="text-3xl mb-2">🏆</div>
                    <h4 className="font-semibold text-foreground mb-2">Parceiro ACSI Brasil</h4>
                    <p className="text-xs text-muted-foreground">
                      Padrão internacional de qualidade educacional cristã
                    </p>
                  </CardContent>
                </Card>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CadastroInteresse;