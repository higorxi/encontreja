import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";


interface InputDateOfBirthProps {
  showLabel?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function InputDateOfBirth({ showLabel = true, value, onChange }: InputDateOfBirthProps) {
  const [maskedValue, handleMaskedChange] = useMaskedInput(value);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [open, setOpen] = useState(false); // Controle de visibilidade do Popover

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleMaskedChange(e);
    onChange(e); // Propaga a mudança para o componente pai
  };

  const handleDateSelect = (date: Date) => {
    const formattedDate = formatDate(date);
    setSelectedDate(date);
    handleChange({ target: { value: formattedDate } } as React.ChangeEvent<HTMLInputElement>);
    setOpen(false); // Fecha o Popover após a seleção
  };

  const formatDate = (date: Date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      {showLabel && <Label htmlFor="dob">Date of Birth</Label>}
      <div className="relative">
        <Input
          id="dob"
          type="text"
          placeholder="DD/MM/YYYY"
          required
          className="pr-10"
          value={maskedValue}
          onChange={handleChange}
        />
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              className="absolute inset-y-0 right-0 w-12 rounded-r-md"
              onClick={() => setOpen(!open)} 
            >
              <CalendarDaysIcon className="h-24 w-24" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={handleDateSelect}
              showOutsideDays={false} 
            />
          </PopoverContent>
        </Popover>
      </div>
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
  )
}

function useMaskedInput(initialValue: string) {
  const [value, setValue] = useState(initialValue);

  const formatDate = (input: string) => {
    // Remove caracteres não numéricos
    const cleanInput = input.replace(/\D/g, "");

    // Aplica a máscara DD/MM/YYYY
    const masked = cleanInput
      .replace(/^(\d{2})(\d{0,2})/, "$1/$2")
      .replace(/\/(\d{2})(\d{0,4})/, "/$1/$2");

    return masked;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    const formattedValue = formatDate(newValue);
    setValue(formattedValue);
  };

  return [value, handleChange] as const;
}