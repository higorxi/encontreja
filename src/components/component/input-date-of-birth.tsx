import { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';

interface InputDateOfBirthProps {
  showLabel?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function InputDateOfBirth({ showLabel = true, value, onChange }: InputDateOfBirthProps) {
  const [maskedValue, handleMaskedChange] = useMaskedInput(value);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string | null>(null); // Estado para mensagem de erro

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleMaskedChange(e);
    onChange(e);
    validateDate(e.target.value); // Valida a data ao alterar
  };

  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      const formattedDate = formatDate(date);
      setSelectedDate(date);
      handleChange({ target: { value: formattedDate } } as React.ChangeEvent<HTMLInputElement>);
      setOpen(false);
      validateDate(formattedDate); // Valida a data ao selecionar
    }
  };

  const validateDate = (dateString: string) => {
    const [day, month, year] = dateString.split('/').map(Number);
    const selectedDate = new Date(year, month - 1, day);
    
    if (selectedDate.getFullYear() !== year || selectedDate.getMonth() !== month - 1 || selectedDate.getDate() !== day) {
        setError('Data inválida. Por favor, insira uma data correta.');
        return;
    }

    const today = new Date();
    const age = today.getFullYear() - selectedDate.getFullYear();

    if ( age < 18 || (age === 18 && (today.getMonth() < selectedDate.getMonth() || (today.getMonth() === selectedDate.getMonth() && today.getDate() < selectedDate.getDate())))) {
        setError('Você deve ter pelo menos 18 anos.');
    } else {
        setError(null); // Limpa a mensagem de erro se a data for válida
    }
};

  const formatDate = (date: Date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      {showLabel && <Label htmlFor="dob">Data de Nascimento</Label>}
      <div className="relative">
        <Input
          id="dob"
          type="text"
          placeholder="DD/MM/YYYY"
          required
          className="pr-10"
          value={maskedValue}
          onChange={handleChange}
          maxLength={10}
        />
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              className="absolute inset-y-0 right-0 w-12 rounded-r-md"
              onClick={() => setOpen(!open)}
            >
              <CalendarDaysIcon className="h-6 w-6" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={handleDateSelect as (date: Date | undefined) => void}
              showOutsideDays={false}
            />
          </PopoverContent>
        </Popover>
      </div>
      {error && <span className="text-sm text-red-600">{error}</span>} {/* Mensagem de erro */}
    </div>
  );
}

function CalendarDaysIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  );
}

function useMaskedInput(initialValue: string) {
  const [value, setValue] = useState(initialValue);

  const formatDate = (input: string) => {
    // Remove caracteres não numéricos
    const cleanInput = input.replace(/\D/g, '');

    // Aplica a máscara DD/MM/YYYY
    const masked = cleanInput.replace(/^(\d{2})(\d{0,2})/, '$1/$2').replace(/\/(\d{2})(\d{0,4})/, '/$1/$2');

    return masked;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    const formattedValue = formatDate(newValue);
    setValue(formattedValue);
  };

  return [value, handleChange] as const;
}
