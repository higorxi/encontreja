'use client';
import { useState, useEffect } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import { loadStripe, StripePaymentElementOptions } from '@stripe/stripe-js';
import { Elements, useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { toast } from 'react-toastify';
import { createPaymentCreditCard, createPaymentPIX } from '@/service/paymentService';
import { useUser } from '@/contexts/AuthContext';
import { AxiosError } from 'axios';
import { FaRegCopy } from 'react-icons/fa';
import React from 'react';
interface FetchClientSecretResponse {
  success: boolean;
  error: string | null;
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string);

export function ModalFlatServiceProvider({ onClose, plan }: any) {
  const user = useUser();
  const [zipcode, setZipcode] = useState('');
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [timer, setTimer] = useState(0);
  const [confirmButtonDisabled, setConfirmButtonDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState('');
  const [loading, setLoading] = useState(false);
  const [dataBilling, setDataBilling] = useState({
    name: '',
    email: '',
    document: '',
    telephone: '',
    postalCode: '',
    city: '',
    uf: '',
  });
  const [dataPIX, setDataPix] = useState({
    base64image: '',
    emvqrcps: '',
    transactionId: '',
  });

  const PaymentForm = ({}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event: any) => {
      event.preventDefault();

      if (!stripe || !elements) {
        return;
      }

      setLoading(true);
      try {
        const { error } = await stripe.confirmPayment({
          elements,
          confirmParams: {
            return_url: 'https://encontreja.vercel.app/meu-servico',
          },
        });

        if (error) {
          toast.error(error.message);
        } else {
          toast.success('Pagamento realizado com sucesso!');
          handleConfirm();
        }
      } catch (error) {
        toast.error('Ocorreu um erro ao processar o pagamento.');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    const paymentElementOptions: StripePaymentElementOptions = {
      layout: 'accordion',
    };

    return (
      <>
        <form id="payment-form" onSubmit={handleSubmit}>
          <PaymentElement id="payment-element" options={paymentElementOptions} />
          <div className="flex space-x-4  mt-4">
            <Button
              className="w-64 flex items-center gap-1 px-4 py-2 text-sm font-medium bg-gray-50 text-AzulProfundo hover:bg-gray-100 rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105"
              variant="none"
              type="button"
              onClick={backStep}
            >
              Cancelar
            </Button>
            <Button
              className="w-64 flex items-center gap-1 px-4 py-2 text-sm font-medium bg-AzulEscuro1 text-gray-50 hover:bg-AzulEscuro2 rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105"
              variant="none"
              type="submit"
              disabled={isLoading || !stripe || !elements}
              id="submit"
            >
              Pagar
            </Button>
          </div>
          {message && <div id="payment-message">{message}</div>}
        </form>
      </>
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
          toast.error('CEP não encontrado');
          setDataBilling((prevState) => ({
            ...prevState,
            city: '',
            uf: '',
          }));
        } else {
          setDataBilling((prevState) => ({
            ...prevState,
            city: data.localidade,
            uf: data.uf,
          }));
        }
      } catch (error) {
        toast.error('Erro ao buscar o CEP');
        console.error(error);
      }
    } else {
      toast.error('CEP inválido');
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  const handlePaymentMethodChange = (value: string) => {
    setPaymentMethod(value);
    if (value === 'pix') {
      setTimer(60);
      setConfirmButtonDisabled(true);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: keyof typeof dataBilling) => {
    let valueToSet = e.target.value;

    setDataBilling((prevState) => ({
      ...prevState,
      [fieldName]: valueToSet,
    }));
  };

  const insertDataFetchForPIX = (e: React.ChangeEvent<HTMLInputElement>, fieldName: keyof typeof dataBilling) => {
    let valueToSet = e.target.value;

    setDataPix((prevState) => ({
      ...prevState,
      [fieldName]: valueToSet,
    }));
  };

  const fetchClientSecret = async (): Promise<FetchClientSecretResponse> => {
    if (paymentMethod === 'credit-card') {
      setLoading(true);
      try {
        const response = await createPaymentCreditCard(user?.document as string, plan, dataBilling);

        if (response.clientSecret) {
          setClientSecret(response.clientSecret);
          return { success: true, error: null };
        } else {
          throw new Error('Client secret not received');
        }
      } catch (error: unknown) {
        console.error('Error fetching client secret:', error);
        const errorMessage =
          error instanceof AxiosError
            ? error.response?.data || error.message
            : 'Entre em contato com o suporte: suporte@useencontreja.com.br';

        return { success: false, error: errorMessage };
      } finally {
        setLoading(false);
      }
    }
    return { success: false, error: 'Invalid payment method' };
  };

  const fetchPix = async (): Promise<FetchClientSecretResponse> => {
    if (paymentMethod === 'pix') {
      setLoading(true);
      try {
        const response = await createPaymentPIX(user?.document as string, plan, dataBilling);
        if (response) {
          setDataPix({
            base64image: response.base64image,
            emvqrcps: response.emvqrcps,
            transactionId: response.transactionId,
          });
          return { success: true, error: null };
        }
      } catch (error: unknown) {
        console.error('Error fetching client secret for PIX:', error);
        const errorMessage =
          error instanceof AxiosError
            ? error.response?.data || error.message
            : 'Entre em contato com o suporte: suporte@useencontreja.com.br';

        return { success: false, error: errorMessage };
      } finally {
        setLoading(false);
      }
    }
    return { success: false, error: 'Invalid payment method' };
  };

  const nextStep = async () => {
    if (paymentMethod === 'credit-card') {
      const result = await fetchClientSecret();
      if (result.success === true) {
        setStep(2);
      } else {
        setStep(1);
        toast.error(`Error ao gerar pagamento: ${result.error}`);
      }
    } else {
      const result = await fetchPix();
      if (result.error === null) {
        setStep(2);
      } else {
        setStep(1);
        toast.error(`Error ao gerar pagamento: ${result.error}`);
      }
    }
  };

  const handleConfirm = () => {
    setStep(3);
  };

  const backStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const customAppearance = {
    clientSecret: clientSecret as unknown as string,
    shapes: {
      borderRadius: 12,
      borderWidth: 0.5,
    },
    primaryButton: {
      shapes: {
        borderRadius: 20,
      },
    },
    colors: {
      primary: '#FF0000 !important',
      background: '#FF0000 !important',
      componentBackground: '#FF0000',
      componentBorder: '#FF0000',
      componentDivider: '#FF0000',
      primaryText: '#FF0000',
      secondaryText: '#FF0000',
      componentText: '#FF0000',
      placeholderText: '#FF0000',
    },
  };

  const isFormDataBillingValid =
    dataBilling.name !== '' &&
    dataBilling.email !== '' &&
    dataBilling.document !== '' &&
    dataBilling.telephone !== '' &&
    dataBilling.postalCode !== '' &&
    dataBilling.city !== '' &&
    dataBilling.uf !== '' &&
    paymentMethod !== '';

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
                  <Input
                    id="name"
                    placeholder="João Batista"
                    value={dataBilling.name}
                    onChange={(e) => handleInputChange(e, 'name')}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="joaobatista@email.com"
                    value={dataBilling.email}
                    onChange={(e) => handleInputChange(e, 'email')}
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="cpf">CPF</Label>
                  <Input
                    id="cpf"
                    placeholder="123.456.789-00"
                    value={dataBilling.document}
                    onChange={(e) => handleInputChange(e, 'document')}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input
                    id="phone"
                    placeholder="+55 (11) 12345-6789"
                    value={dataBilling.telephone}
                    onChange={(e) => handleInputChange(e, 'telephone')}
                  />
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
                        onChange={(e) => {
                          setZipcode(e.target.value);
                          handleInputChange(e, 'postalCode');
                        }}
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
                    <Input
                      id="city"
                      placeholder="São Paulo"
                      value={dataBilling.city}
                      readOnly
                      onChange={(e) => handleInputChange(e, 'city')}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="state">Estado</Label>
                    <Input
                      id="state"
                      placeholder="SP"
                      value={dataBilling.uf}
                      readOnly
                      onChange={(e) => handleInputChange(e, 'uf')}
                    />
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
                <Button
                  type="submit"
                  className={`w-full ${loading ? 'opacity-50' : ''}`}
                  onClick={nextStep}
                  disabled={!isFormDataBillingValid || loading}
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <span className="ml-2 flex items-center">
                        <span className="dot-blink"></span>
                        <span className="dot-blink"></span>
                        <span className="dot-blink"></span>
                      </span>
                    </div>
                  ) : (
                    'Continuar'
                  )}
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
                  <img
                    src={`data:image/png;base64,${dataPIX.base64image}`}
                    alt="QR Code"
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
              </div>
              <div className="text-center mt-4">
                <p className="text-lg">Copie e cole o código abaixo para pagar:</p>
                <div className="relative bg-gray-100 p-4 rounded-md text-lg flex justify-between items-center">
                  <span className="select-all">
                    {dataPIX.emvqrcps.length > 40 ? `${dataPIX.emvqrcps.substring(0, 40)}...` : dataPIX.emvqrcps}
                  </span>
                  <button
                    className="ml-2 text-blue-500 hover:text-blue-700 focus:outline-none"
                    onClick={() => navigator.clipboard.writeText(dataPIX.emvqrcps)}
                  >
                    <FaRegCopy />
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
                  {confirmButtonDisabled ? 'Aguardando pagamento...' : 'Continuar'}
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

            {loading && clientSecret !== null ? (
              <div className="flex items-center justify-center h-32">
                <div className="loader">Loading...</div>
              </div>
            ) : (
              <Elements stripe={stripePromise} options={customAppearance}>
                <PaymentForm />
              </Elements>
            )}

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
