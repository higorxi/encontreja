export function formatPhoneNumber(phone: string): string {
    const cleaned = phone.replace(/\D/g, '');
  
    const formattedRegex = /^\(\d{2}\) \d{5}-\d{4}$/;
    if (formattedRegex.test(phone)) {
      return phone; 
    }

    if (cleaned.length === 11) {
      return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7)}`;
    }

    return phone;
  }