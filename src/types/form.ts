export interface StudentRegistrationForm {
  studentName: string;
  parentName: string;
  email: string;
  phone: string;
  segment: string;
  currentYear: string;
  currentSchool: string;
  message: string;
}

export type RequiredFormFields = Pick<
  StudentRegistrationForm, 
  'studentName' | 'parentName' | 'email' | 'phone' | 'segment' | 'currentYear'
>;

export interface EmailServiceConfig {
  accessKey: string;
  subject: string;
  apiUrl?: string;
}

export interface EmailSendResult {
  success: boolean;
  message?: string;
}

export interface EmailMessageData {
  studentData: {
    name: string;
    segment: string;
    currentYear: string;
    currentSchool?: string;
  };
  parentData: {
    name: string;
    email: string;
    phone: string;
  };
  additionalMessage?: string;
  timestamp: string;
}