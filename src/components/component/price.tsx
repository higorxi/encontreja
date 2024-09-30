'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ModalFlatServiceProvider } from './modal-flat-service-provider';
import { ModalLogin } from './modal-login'; 
import { useAuth } from '@/contexts/AuthContext';
import { createPaymentCreditCard } from '@/service/paymentService';

interface PriceDetails {
  planName: string;
  planPrice: number;
  id: number
}

export function Price() {
  const { isAuthenticated } = useAuth();
  const [selectedPlan, setSelectedPlan] = useState<PriceDetails>();
  const [showModal, setShowModal] = useState<'price' | 'login' | null>(null);

  const openModal = (planName: string, planPrice: number, id: number) => {
    if (isAuthenticated) {
      setSelectedPlan({ planName, planPrice, id });
      setShowModal('price');
    } else {
      setShowModal('login');
    }
  };

  const closeModal = () => {
    setSelectedPlan(undefined);
    setShowModal(null);
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-24">
      <div className="flex flex-col items-center mb-10">
        <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          E para você, profissional...
        </p>
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-center">
          Prepare-se para transformar seu negócio com o EncontreJá!
        </h2>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-6 max-w-7xl mx-auto">
        <div
          className="bg-blue-100 rounded-lg p-6 flex flex-col gap-4 mx-auto transform transition-transform duration-300 hover:scale-105 cursor-pointer shadow-md hover:shadow-lg"
          onClick={() => openModal('Semanal', 4.99, 1)}
        >
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-gray-800">Plano Semanal</h3>
            <p className="text-gray-600">Acesso temporário para visibilidade rápida e econômica.</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-4xl font-bold text-gray-800">R$ 4,99</h4>
            <p className="text-gray-600">por semana</p>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li>
              <CheckIcon className="mr-2 inline-block h-4 w-4 text-blue-600" />
              Listagem do perfil por 7 dias.
            </li>
            <li>
              <CheckIcon className="mr-2 inline-block h-4 w-4 text-blue-600" />
              Disponibilidade de seleção de apenas um serviço.
            </li>
            <li>
              <XIcon className="mr-2 inline-block h-4 w-4 text-gray-400" />
              Sempre no topo das buscas.
            </li>
            <li>
              <XIcon className="mr-2 inline-block h-4 w-4 text-gray-400" />
              Destaca seu perfil entre os recomendados.
            </li>
            <li>
              <XIcon className="mr-2 inline-block h-4 w-4 text-gray-400" />
              Suporte estendido e consultoria para otimização do perfil.
            </li>
          </ul>
          <Button className="bg-blue-500 text-white hover:bg-blue-600">Comprar</Button>
          <div className="absolute inset-0 border-4 border-blue-500 rounded-lg"></div>
        </div>
        <div
          className="bg-LaranjaIndustrial bg-opacity-55 rounded-lg p-6 flex flex-col gap-4 text-gray-800 shadow-md mx-auto transform transition-transform duration-300 hover:scale-110 cursor-pointer relative"
          onClick={() => openModal('Mensal', 19.99, 2)}
        >
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">Plano Mensal</h3>
            <p className="text-gray-800">Presença contínua na plataforma durante um mês.</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-4xl font-bold">R$ 19,99</h4>
            <p className="text-gray-800">por mês</p>
          </div>
          <ul className="space-y-2 text-gray-800">
            <li>
              <CheckIcon className="mr-2 inline-block h-4 w-4 text-orange-800" />
              Listagem do perfil por 30 dias.
            </li>
            <li>
              <CheckIcon className="mr-2 inline-block h-4 w-4 text-orange-800" />
              Disponibilidade de seleção de três serviços.
            </li>
            <li>
              <CheckIcon className="mr-2 inline-block h-4 w-4 text-orange-800" />
              Sempre no topo das buscas.
            </li>
            <li>
              <CheckIcon className="mr-2 inline-block h-4 w-4 text-orange-800" />
              Destaca seu perfil entre os recomendados.
            </li>
            <li>
              <XIcon className="mr-2 inline-block h-4 w-4 text-gray-400" />
              Suporte estendido e consultoria para otimização do perfil.
            </li>
          </ul>
          <Button className="bg-LaranjaIndustrial text-white hover:bg-LaranjaEscuro2">Comprar</Button>
          <div className="absolute inset-0 border-4 border-LaranjaIndustrial opacity-55 rounded-lg"></div>
        </div>
        <div
          className="bg-yellow-100 rounded-lg p-6 flex flex-col gap-4 mx-auto transform transition-transform duration-300 hover:scale-110 cursor-pointer shadow-md hover:shadow-lg relative"
          onClick={() => openModal('Anual', 199.99, 3)}
        >
          <div className="space-y-2">
            <div className="absolute top-0 right-0 bg-yellow-200 text-gray-800 py-1 px-3 rounded-bl-lg">Melhor Opção</div>
            <h3 className="text-2xl font-bold text-gray-800">Plano Anual</h3>
            <p className="text-gray-800">Máxima visibilidade e suporte completo durante o ano.</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-4xl font-bold text-gray-800">R$ 199,99</h4>
            <p className="text-gray-800">por ano</p>
          </div>
          <ul className="space-y-2 text-gray-800">
            <li>
              <CheckIcon className="mr-2 inline-block h-4 w-4 text-yellow-600" />
              Listagem contínua por 12 meses.
            </li>
            <li>
              <CheckIcon className="mr-2 inline-block h-4 w-4 text-yellow-600" />
              Disponibilidade de seleção de vários serviços.
            </li>
            <li>
              <CheckIcon className="mr-2 inline-block h-4 w-4 text-yellow-600" />
              Sempre no topo das buscas.
            </li>
            <li>
              <CheckIcon className="mr-2 inline-block h-4 w-4 text-yellow-600" />
              Destaca seu perfil entre os recomendados.
            </li>
            <li>
              <CheckIcon className="mr-2 inline-block h-4 w-4 text-yellow-600" />
              Suporte estendido e consultoria para otimização do perfil.
            </li>
          </ul>
          <Button className="bg-yellow-500 text-gray-800 hover:bg-yellow-600">Comprar</Button>
          <div className="absolute inset-0 border-4 border-yellow-300 rounded-lg animate-pulse"></div>
        </div>
      </div>

      {showModal === 'price' && selectedPlan && (
        <ModalFlatServiceProvider onClose={closeModal} plan={selectedPlan}/>
      )}
      {showModal === 'login' && <ModalLogin onClose={closeModal} />}
    </section>
  );
}

function CheckIcon(props: any) {
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
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function XIcon(props: any) {
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
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}
