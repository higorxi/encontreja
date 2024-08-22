'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ModalFlatServiceProvider } from './modal-flat-service-provider';

interface priceDetails {
  planName: string;
  planPrice: number;
}

export function Price() {
  const [selectedPlan, setSelectedPlan] = useState<priceDetails>();

  const openModal = (planName: string, planPrice: number) => {
    setSelectedPlan({ planName, planPrice });
  };

  const closeModal = () => {
    setSelectedPlan(undefined);
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-24">
      <div className="flex flex-col items-center mb-10">
        <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          E para você, profissional...
        </p>
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-center">
          Prepare-se para transformar seu negócio com o EncontreJá!
        </h2>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-6 max-w-7xl mx-auto">
        <div
          className="bg-gray-200 rounded-lg p-6 flex flex-col gap-4 mx-auto transform transition-transform duration-300 hover:scale-105 cursor-pointer shadow-md hover:shadow-lg"
          onClick={() => openModal('Basic', 9)}
        >
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-gray-800">Plano Semanal</h3>
            <p className="text-gray-600">Acesso temporário para visibilidade rápida e econômica.</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-4xl font-bold text-gray-800">R$ 4,99</h4>
            <p className="text-gray-600">por semana</p>
          </div>
          <ul className="space-y-2 text-gray-600">
            <li>
              <CheckIcon className="mr-2 inline-block h-4 w-4 fill-green-500" />
              Listagem do perfil por 7 dias.
            </li>
            <li>
              <CheckIcon className="mr-2 inline-block h-4 w-4 fill-green-500" />
              Disponibilidade de seleção de apenas um serviço
            </li>
            <li>
              <XIcon className="mr-2 inline-block h-4 w-4 fill-red-500" />
              Sempre no topo das buscas.
            </li>
            <li>
              <XIcon className="mr-2 inline-block h-4 w-4 fill-red-500" />
              Destaca seu perfil entre os recomendados.
            </li>
            <li>
              <XIcon className="mr-2 inline-block h-4 w-4 fill-red-500" />
              Suporte estendido e consultoria para otimização do perfil.
            </li>
          </ul>
          <Button className="bg-gray-800 text-white hover:bg-gray-700">Comprar</Button>
        </div>
        <div
          className="bg-yellow-500 rounded-lg p-6 flex flex-col gap-4 text-white shadow-lg mx-auto transform transition-transform duration-300 hover:scale-110 cursor-pointer relative"
          onClick={() => openModal('Gold', 49)}
        >
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">Plano Mensal</h3>
            <p className="text-yellow-200">Presença contínua na plataforma durante um mês.</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-4xl font-bold">R$ 19,99</h4>
            <p className="text-yellow-200">por mês</p>
          </div>
          <ul className="space-y-2 text-yellow-200">
            <li>
              <CheckIcon className="mr-2 inline-block h-4 w-4 fill-white" />
              Listagem do perfil por 30 dias.
            </li>
            <li>
              <CheckIcon className="mr-2 inline-block h-4 w-4 fill-white" />
              Disponibilidade de seleção de três serviços
            </li>
            <li>
              <CheckIcon className="mr-2 inline-block h-4 w-4 fill-white" />
              Sempre no topo das buscas.
            </li>
            <li>
              <CheckIcon className="mr-2 inline-block h-4 w-4 fill-white" />
              Destaca seu perfil entre os recomendados.
            </li>
            <li>
              <XIcon className="mr-2 inline-block h-4 w-4 fill-red-500" />
              Suporte estendido e consultoria para otimização do perfil.
            </li>
          </ul>
          <Button className="bg-white text-yellow-400 hover:bg-gray-200">Comprar</Button>
          <div className="absolute inset-0 border-4 border-yellow-400 rounded-lg"></div>
        </div>
        <div
          className="bg-gray-300 rounded-lg p-6 flex flex-col gap-4 mx-auto transform transition-transform duration-300 hover:scale-105 cursor-pointer shadow-md hover:shadow-lg"
          onClick={() => openModal('Silver', 29)}
        >
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-gray-800">Plano Anual</h3>
            <p className="text-gray-600">Máxima visibilidade e suporte completo durante o ano.</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-4xl font-bold text-gray-800">R$ 199,99</h4>
            <p className="text-gray-600">por ano</p>
          </div>
          <ul className="space-y-2 text-gray-600">
            <li>
              <CheckIcon className="mr-2 inline-block h-4 w-4 fill-green-500" />
              Listagem contínua por 12 meses.
            </li>
            <li>
              <CheckIcon className="mr-2 inline-block h-4 w-4 fill-green-500" />
              Disponibilidade de seleção de vários serviços
            </li>
            <li>
              <CheckIcon className="mr-2 inline-block h-4 w-4 fill-green-500" />
              Sempre no topo das buscas.
            </li>
            <li>
              <CheckIcon className="mr-2 inline-block h-4 w-4 fill-green-500" />
              Destaca seu perfil entre os recomendados.
            </li>
            <li>
              <CheckIcon className="mr-2 inline-block h-4 w-4 fill-green-500" />
              Suporte estendido e consultoria para otimização do perfil.
            </li>
          </ul>
          <Button className="bg-gray-800 text-white hover:bg-gray-700">Comprar</Button>
        </div>
      </div>

      {selectedPlan && <ModalFlatServiceProvider onClose={closeModal} plan={selectedPlan} />}
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
      <path d="M20 6 9 17l-5-5" />
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
