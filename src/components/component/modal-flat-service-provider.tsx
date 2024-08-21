import { useState, useEffect } from 'react';
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Cards from 'react-credit-cards-2'; 

export function ModalFlatServiceProvider({ onClose, plan }: any) {
  const [zipcode, setZipcode] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [step, setStep] = useState(1); 
  const [paymentMethod, setPaymentMethod] = useState('credit-card'); 
  const [timer, setTimer] = useState(0); 
  const [confirmButtonDisabled, setConfirmButtonDisabled] = useState(true); 
  const [cardState, setCardState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: undefined,
  }); 

  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined;
    if (paymentMethod === 'pix' && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 0) {
            setConfirmButtonDisabled(false); 
            clearInterval(interval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [paymentMethod, timer]);

  const handleSearch = async () => {
    if (zipcode.length === 8 || zipcode.length === 9) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${zipcode}/json/`);
        const data = await response.json();
        if (data.erro) {
          alert('CEP não encontrado');
          setCity('');
          setState('');
        } else {
          setCity(data.localidade);
          setState(data.uf);
        }
      } catch (error) {
        alert('Erro ao buscar o CEP');
        console.error(error);
      }
    } else {
      alert('CEP inválido');
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setStep(2); 
  };

  const handlePaymentMethodChange = (value: any) => {
    setPaymentMethod(value);
    if (value === 'pix') {
      setTimer(60); 
      setConfirmButtonDisabled(true); 
    }
  };

  const handleConfirm = () => {
    setStep(3); // Avança para o passo 3
  };

  const handleCardInputChange = (e: any) => {
    const { name, value } = e.target;
    setCardState((prev) => ({ ...prev, [name]: value }));
  };

  const handleCardInputFocus = (e: any) => {
    setCardState((prev) => ({ ...prev, focus: e.target.name }));
  };

  return (
    <Dialog defaultOpen onOpenChange={onClose}>
      <DialogTrigger asChild>
        <Button>Checkout</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        {step === 1 && (
          <div className="grid gap-6">
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold">Checkout</h2>
                <div className="flex items-center gap-2">
                  <PackageIcon className="w-5 h-5 text-muted-foreground" />
                  <span className="text-muted-foreground">Plan: {plan}</span>
                </div>
              </div>
              <p className="text-muted-foreground">
                Please provide your personal information to complete the checkout process.
              </p>
            </div>
            <form className="grid gap-4" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="cpf">CPF</Label>
                  <Input id="cpf" placeholder="123.456.789-00" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" placeholder="+55 (11) 12345-6789" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="address">Billing Address</Label>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="zipcode">Zip Code</Label>
                    <div className="relative">
                      <Input
                        id="zipcode"
                        placeholder="12345-678"
                        value={zipcode}
                        onChange={(e) => setZipcode(e.target.value)}
                      />
                      <Button
                        type="button"
                        size="icon"
                        className="absolute right-2 top-1/2 -translate-y-1/2"
                        onClick={handleSearch}
                      >
                        <SearchIcon className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" placeholder="São Paulo" value={city} readOnly />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="state">State</Label>
                    <Input id="state" placeholder="SP" value={state} readOnly />
                  </div>
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="payment">Payment Method</Label>
                <RadioGroup id="payment" value={paymentMethod} onValueChange={handlePaymentMethodChange}>
                  <div className="flex items-center gap-4">
                    <Label htmlFor="credit-card" className="flex items-center gap-2 cursor-pointer">
                      <RadioGroupItem id="credit-card" value="credit-card" />
                      <CreditCardIcon className="w-5 h-5" />
                      Credit Card
                    </Label>
                    <Label htmlFor="pix" className="flex items-center gap-2 cursor-pointer">
                      <RadioGroupItem id="pix" value="pix" />
                      <QrCodeIcon className="w-5 h-5" />
                      Pix
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <div className="font-semibold">Total</div>
                  <div className="text-2xl font-semibold">$99.00</div>
                </div>
                <Button type="submit" className="w-full">
                  Continuar
                </Button>
              </div>
            </form>
          </div>
        )}
        {step === 2 && paymentMethod === 'pix' && (
          <div className="grid gap-6">
            <h2 className="text-2xl font-semibold">Pix Payment</h2>
            <div className="grid gap-4">
              <div className="flex items-center justify-center">
                {/* Simulação de QR Code */}
                <div className="w-40 h-40 bg-gray-200 rounded-md flex items-center justify-center text-gray-600">
                  QR Code
                </div>
              </div>
              <div className="text-center">
                <p className="text-lg">Copie e cole o código abaixo para pagar:</p>
                <div className="bg-gray-100 p-4 rounded-md text-lg">
                  1234 5678 9012 3456
                </div>
              </div>
              <div className="flex gap-4 mt-6">
                <Button type="button" onClick={() => setStep(1)} variant="outline">
                  Voltar
                </Button>
                <Button
                  type="button"
                  disabled={confirmButtonDisabled}
                  onClick={handleConfirm}
                >
                  Confirmar
                </Button>
                {timer > 0 && (
                  <div className="text-center mt-4">
                    <p className="text-red-600">Tempo restante: {Math.floor(timer / 60)}:{timer % 60 < 10 ? `0${timer % 60}` : timer % 60}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        {step === 2 && paymentMethod === 'credit-card' && (
          <div className="grid gap-6">
            <h2 className="text-2xl font-semibold">Credit Card Payment</h2>
            <Cards
              number={cardState.number}
              name={cardState.name}
              expiry={cardState.expiry}
              cvc={cardState.cvc}
              focused={cardState.focus}
            />
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="card-number">Card Number</Label>
                <Input
                  id="card-number"
                  name="number"
                  value={cardState.number}
                  onChange={handleCardInputChange}
                  onFocus={handleCardInputFocus}
                  placeholder="1234 5678 9012 3456"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="card-name">Name on Card</Label>
                <Input
                  id="card-name"
                  name="name"
                  value={cardState.name}
                  onChange={handleCardInputChange}
                  onFocus={handleCardInputFocus}
                  placeholder="John Doe"
                />
              </div>
              <div className="flex justify-between space-x-4">
              <div className="grid gap-2">
                <Label htmlFor="card-expiry">Expiry Date</Label>
                <Input
                  id="card-expiry"
                  name="expiry"
                  value={cardState.expiry}
                  onChange={handleCardInputChange}
                  onFocus={handleCardInputFocus}
                  placeholder="MM/YY"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="card-cvc">CVC</Label>
                <Input
                  id="card-cvc"
                  name="cvc"
                  value={cardState.cvc}
                  onChange={handleCardInputChange}
                  onFocus={handleCardInputFocus}
                  placeholder="123"
                />
              </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="installments">Select Installments</Label>
                <select
                  id="installments"
                  className="p-2 border rounded-md"
                  onChange={(e) => console.log('Selected Installment:', e.target.value)}
                >
                  <option value="1">1x - $99.00</option>
                  <option value="2">2x - $49.50</option>
                  <option value="3">3x - $33.00</option>
                  <option value="3">4x - $15.00</option>
                  <option value="3">5x - $7.00</option>
                  <option value="3">6x - $3.60</option>
                  <option value="3">7x - $1.50</option>
                  <option value="3">8x - $0.75</option>
                </select>
              </div>
              
              <div className="flex justify-between space-x-4">
                    <Button type="button" variant="outline" onClick={onClose}>
                      Voltar
                    </Button>
                    <Button onClick={handleConfirm}>Confirmar</Button>
                  </div>
            </div>
          </div>
        )}
        {step === 3 && (
          <div className="grid gap-6">
            <h2 className="text-2xl font-semibold">Confirmation</h2>
            <p>Your payment has been successfully processed. Thank you!</p>
            <Button onClick={onClose}>Close</Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}


function CreditCardIcon(props: any) {
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
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  );
}

function PackageIcon(props: any) {
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
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
}

function QrCodeIcon(props: any) {
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
      <rect width="5" height="5" x="3" y="3" rx="1" />
      <rect width="5" height="5" x="16" y="3" rx="1" />
      <rect width="5" height="5" x="3" y="16" rx="1" />
      <path d="M21 16h-3a2 2 0 0 0-2 2v3" />
      <path d="M21 21v.01" />
      <path d="M12 7v3a2 2 0 0 1-2 2H7" />
      <path d="M3 12h.01" />
      <path d="M12 3h.01" />
      <path d="M12 16v.01" />
      <path d="M16 12h1" />
      <path d="M21 12v.01" />
      <path d="M12 21v-1" />
    </svg>
  );
}

function SearchIcon(props: any) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
