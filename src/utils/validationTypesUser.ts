import { CEP, DateOfBirth, Email, Telephone, Document } from "@/types/userTypes";

// Função de validação para Email
function isValidEmail(email: string): email is Email {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  export function createEmail(email: string): Email {
    if (!isValidEmail(email)) {
      throw new Error('Invalid email format');
    }
    return email as Email;
  }
  
  // Função de validação para CPF
  function isValidCPF(cpf: string): cpf is Document {
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return cpfRegex.test(cpf);
  }
  
  export function createDocument(cpf: string): Document {
    if (!isValidCPF(cpf)) {
      throw new Error('Invalid CPF format');
    }
    return cpf as Document;
  }
  
  // Função de validação para CEP
  function isValidCEP(cep: string): cep is CEP {
    const cepRegex = /^\d{5}-\d{3}$/;
    return cepRegex.test(cep);
  }
  
  export function createCEP(cep: string): CEP {
    if (!isValidCEP(cep)) {
      throw new Error('Invalid CEP format');
    }
    return cep as CEP;
  }
  
  // Função de validação para Telephone
  function isValidTelephone(telephone: string): telephone is Telephone {
    const telephoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
    return telephoneRegex.test(telephone);
  }
  
  export function createTelephone(telephone: string): Telephone {
    if (!isValidTelephone(telephone)) {
      throw new Error('Invalid Telephone format');
    }
    return telephone as Telephone;
  }
  
  // Função de validação para Data de Nascimento (formato dd/mm/yyyy)
  function isValidDateOfBirth(dateOfBirth: string): dateOfBirth is DateOfBirth {
    const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
    const [day, month, year] = dateOfBirth.split('/').map(Number);
  
    if (!dateRegex.test(dateOfBirth)) {
      return false;
    }
  
    const currentYear = new Date().getFullYear();
    const minYear = currentYear - 18;
    return year <= minYear && day >= 1 && day <= 31 && month >= 1 && month <= 12;
  }
  
  export function createDateOfBirth(dateOfBirth: string): DateOfBirth {
    if (!isValidDateOfBirth(dateOfBirth)) {
      throw new Error('Invalid Date of Birth format or age is under 18');
    }
    return dateOfBirth as DateOfBirth;
  }
  