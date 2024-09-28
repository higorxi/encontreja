'use client';
import { useState, useEffect } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import styled from 'styled-components';
import { toast } from 'react-toastify';

const stripePromise = loadStripe(
  'pk_live_51PrtGQ03J0JuscImJhDClxai2DSx74OE5fWnWIRSAO5xvJOQDWlLXzUFHMShxSoE074NqjfS1tNyoaHKP2jFJCBD00cDrjRTMO'
);

const FormContainer = styled.div`
  background: White;
  padding: 3rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 30vw;
  text-align: center;
`;

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

  const PaymentForm = () => {
    const stripe = useStripe();

    const elements = useElements();

    const handleSubmit = async (event: any) => {
      event.preventDefault();

      if (!stripe || !elements) {
        return;
      }

      const response = await fetch('http://localhost:8080/api/payments/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userDocument: '06512743113',
          plan: {
            id: 1,
          },
        }),
      });

      const { clientSecret } = await response.json();

      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(PaymentElement),
        },
      });

      if (error) {
        toast.error(error.message);
      } else {
        if (paymentIntent.status === 'succeeded') {
          toast.error('Pagamento realizado com sucesso!');
          handleConfirm();
        } else {
          toast.error(`Pagamento não foi bem-sucedido: ${paymentIntent.status}`);
        }
      }
    };

    return (
      <FormContainer>
        <h2 className="mb-8">Insira os dados</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-8">
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                      color: '#aab7c4',
                    },
                  },
                  invalid: {
                    color: '#9e2146',
                  },
                },
                iconStyle: "solid",
                classes:{
                  
                }
                
              }}
            />
          </div>
          <div className="flex space-x-4">
            <Button
            className="w-64 flex items-center gap-1 px-4 py-2 text-sm font-medium bg-gray-50 text-AzulProfundo hover:bg-gray-100 rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105"
            variant='none'
            type="button" disabled={!stripe} onClick={backStep}
          >
            Cancelar
          </Button>
            <Button
            className="w-64 flex items-center gap-1 px-4 py-2 text-sm font-medium bg-AzulEscuro1 text-gray-50 hover:bg-AzulEscuro2 rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105"
            variant='none'
            type="submit" disabled={!stripe}
          >
            Pagar
          </Button>
          </div>
        </form>
      </FormContainer>
    );
  };

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

  const handlePaymentMethodChange = (value: string) => {
    setPaymentMethod(value);
    if (value === 'pix') {
      setTimer(60);
      setConfirmButtonDisabled(true);
    }
  };

  const handleConfirm = () => {
    setStep(3);
  };

  const backStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const code = '12312312301920391203912093091293012031029301290312312312312312312312';

  return (
    <Dialog defaultOpen onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        {step === 1 && (
          <div className="grid gap-6">
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold">Checkout Assinatura</h2>
                <div className="flex items-center gap-2">
                  <PackageIcon className="w-5 h-5 text-muted-foreground" />
                  <span className="text-muted-foreground">Plano: {plan.planName}</span>
                </div>
              </div>
              <p className="text-muted-foreground">
                Forneça suas informações pessoais para concluir o processo de finalização da assinatura.
              </p>
            </div>
            <form className="grid gap-4" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Nome</Label>
                  <Input id="name" placeholder="João Batista" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="joaobatista@email.com" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="cpf">CPF</Label>
                  <Input id="cpf" placeholder="123.456.789-00" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input id="phone" placeholder="+55 (11) 12345-6789" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="address">Endereço de Cobrança</Label>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="zipcode">CEP</Label>
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
                    <Label htmlFor="city">Cidade</Label>
                    <Input id="city" placeholder="São Paulo" value={city} readOnly />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="state">Estado</Label>
                    <Input id="state" placeholder="SP" value={state} readOnly />
                  </div>
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="payment">Método de Pagamento</Label>
                <RadioGroup id="payment" value={paymentMethod} onValueChange={handlePaymentMethodChange}>
                  <div className="flex items-center gap-4">
                    <Label htmlFor="credit-card" className="flex items-center gap-2 cursor-pointer">
                      <RadioGroupItem id="credit-card" value="credit-card" />
                      <CreditCardIcon className="w-5 h-5" />
                      Cartão de Crédito
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
                  <div className="text-2xl font-semibold">R${plan.planPrice}</div>
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
            <h2 className="text-2xl font-semibold text-center">Pagamento via Pix</h2>
            <div className="grid gap-4">
              <div className="flex items-center justify-center">
                <div className="w-40 h-40 bg-gray-200 rounded-md flex items-center justify-center text-gray-600">
                  QR Code
                </div>
              </div>
              <div className="text-center mt-4">
                <p className="text-lg">Copie e cole o código abaixo para pagar:</p>
                <div className="relative bg-gray-100 p-4 rounded-md text-lg flex justify-between items-center">
                  <span className="select-all">{code.length > 40 ? `${code.substring(0, 40)}...` : code}</span>
                  <button
                    className="ml-2 text-blue-500 hover:text-blue-700 focus:outline-none"
                    onClick={() => navigator.clipboard.writeText(code)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7H5a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-3M16 5l4 4m-4-4v4h4"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              {timer > 0 && (
                <div className="text-center mt-4">
                  <p className="text-red-600">
                    Tempo restante: {Math.floor(timer / 60)}:{timer % 60 < 10 ? `0${timer % 60}` : timer % 60}
                  </p>
                </div>
              )}
              <div className="flex justify-between gap-4 mt-6">
                <Button type="button" onClick={backStep} variant="outline">
                  Voltar
                </Button>
                <Button
                  type="button"
                  disabled={confirmButtonDisabled}
                  onClick={handleConfirm}
                  className={`flex items-center gap-2 ${
                    confirmButtonDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                  } text-white px-4 py-2 rounded-md`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d={`M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v4a1 1 0 002 0V7zm0 6a1 1 0 11-2 0 1 1 012 0z`}
                      clipRule="evenodd"
                    />
                  </svg>
                  {confirmButtonDisabled ? 'Desbloqueando...' : 'Continuar'}
                </Button>
              </div>
            </div>
          </div>
        )}
        {step === 2 && paymentMethod === 'credit-card' && (
          <div className="flex flex-col items-center justify-center">
            <div className="mb-4">
              <h2 className="text-2xl font-semibold text-center">Pagamento por cartão de crédito</h2>
            </div>
            <div className="mb-4">
              <Cards number="11111111111111111" name="João Batista" expiry="01/11" cvc="190" />
            </div>
            <Elements stripe={stripePromise}>
              <PaymentForm />
            </Elements>
            <div className="mt-4 w-full">
              <div className="flex items-center justify-between bg-white p-4 rounded-md shadow-md">
                <div className="text-xl font-semibold">Total</div>
                <div className="text-xl font-semibold">R$ {plan.planPrice}</div>
              </div>
            </div>
          </div>
        )}
        {step === 3 && (
          <div className="grid gap-6">
            <h2 className="text-2xl font-semibold">Confirmação</h2>
            <p>Seu pagamento foi processado com sucesso. Obrigado!</p>
            <p>
              Mais informações serão repassadas via email, caso necessite alterar alguma informação, entre em contato
              com o suporte:
              <strong>suporte@encontreja.com</strong>
            </p>

            <Button onClick={onClose}>Fechar</Button>
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
