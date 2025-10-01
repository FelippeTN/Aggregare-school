  import type { 
  StudentRegistrationForm, 
  EmailServiceConfig, 
  EmailSendResult,
  EmailMessageData 
} from '../types/form';


export class EmailService {
  private config: EmailServiceConfig;

  constructor(config: EmailServiceConfig) {
    this.config = config;
  }

  private formatEmailMessage(data: EmailMessageData): string {
    return `
=== DADOS DO ALUNO ===
Nome do Aluno: ${data.studentData.name}
Segmento: ${data.studentData.segment}
Ano/Série Pretendida: ${data.studentData.currentYear}
Escola Atual: ${data.studentData.currentSchool || 'Não informado'}

=== DADOS DO RESPONSÁVEL ===
Nome do Responsável: ${data.parentData.name}
E-mail: ${data.parentData.email}
Telefone: ${data.parentData.phone}

=== MENSAGEM ADICIONAL ===
${data.additionalMessage || 'Nenhuma mensagem adicional'}

=== INFORMAÇÕES DO ENVIO ===
Data/Hora: ${data.timestamp}

---
Este email foi enviado automaticamente através do formulário de cadastro de interesse do site da Escola Aggregare.
    `.trim();
  }

  private transformFormToMessageData(formData: StudentRegistrationForm): EmailMessageData {
    return {
      studentData: {
        name: formData.studentName,
        segment: formData.segment,
        currentYear: formData.currentYear,
        currentSchool: formData.currentSchool || undefined,
      },
      parentData: {
        name: formData.parentName,
        email: formData.email,
        phone: formData.phone,
      },
      additionalMessage: formData.message || undefined,
      timestamp: new Date().toLocaleString('pt-BR'),
    };
  }


  private async sendWithWeb3Forms(formData: StudentRegistrationForm): Promise<EmailSendResult> {
    if (!this.config.accessKey) {
      throw new Error('Chave do Web3Forms não configurada');
    }

    const messageData = this.transformFormToMessageData(formData);
    const formDataToSend = new FormData();
    
    formDataToSend.append('access_key', this.config.accessKey);
    formDataToSend.append('subject', this.config.subject);
    formDataToSend.append('from_name', formData.parentName);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('message', this.formatEmailMessage(messageData));

    const apiUrl = this.config.apiUrl || 'https://api.web3forms.com/submit';
    
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: formDataToSend
      });

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      const result = await response.json();
      
      return {
        success: result.success,
        message: result.message
      };
    } catch (error) {
      throw new Error(
        error instanceof Error 
          ? `Falha no envio via Web3Forms: ${error.message}`
          : 'Erro desconhecido no envio'
      );
    }
  }

  async sendRegistrationEmail(formData: StudentRegistrationForm): Promise<EmailSendResult> {
    return this.sendWithWeb3Forms(formData);
  }
}

export const createEmailService = (): EmailService => {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
  
  return new EmailService({
    accessKey,
    subject: 'Novo Cadastro de Interesse - Escola Aggregare'
  });
};