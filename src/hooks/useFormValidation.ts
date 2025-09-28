import { useState } from 'react';
import type { StudentRegistrationForm, RequiredFormFields } from '../types/form';

export const useFormValidation = () => {
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const validateRequiredFields = (formData: StudentRegistrationForm): boolean => {
    const errors: Record<string, string> = {};
    
    const requiredFields: Array<keyof RequiredFormFields> = [
      'studentName',
      'parentName', 
      'email',
      'phone',
      'segment',
      'currentYear'
    ];

    requiredFields.forEach(field => {
      if (!formData[field]?.trim()) {
        errors[field] = 'Este campo é obrigatório';
      }
    });

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
      setValidationErrors(prev => ({
        ...prev,
        email: 'Por favor, insira um email válido'
      }));
      return false;
    }

    setValidationErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors.email;
      return newErrors;
    });
    
    return true;
  };

  const validateForm = (formData: StudentRegistrationForm): boolean => {
    const hasRequiredFields = validateRequiredFields(formData);
    const hasValidEmail = validateEmail(formData.email);
    
    return hasRequiredFields && hasValidEmail;
  };

  const clearValidationErrors = () => {
    setValidationErrors({});
  };

  return {
    validationErrors,
    validateForm,
    validateRequiredFields,
    validateEmail,
    clearValidationErrors
  };
};