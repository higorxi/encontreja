"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export function Price() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const openModal = (plan: any) => {
    setSelectedPlan(plan);
    console.log(`Abrindo modal para o plano: ${plan}`);
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-6 max-w-7xl mx-auto">
        <div
          className="bg-gray-200 rounded-lg p-6 flex flex-col gap-4 mx-auto transform transition-transform duration-300 hover:scale-105 cursor-pointer shadow-md hover:shadow-lg"
          onClick={() => openModal('Basic')}
        >
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-gray-800">Basic</h3>
            <p className="text-gray-600">Perfect for individuals and small teams.</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-4xl font-bold text-gray-800">$9</h4>
            <p className="text-gray-600">per month</p>
          </div>
          <ul className="space-y-2 text-gray-600">
            <li>
              <CheckIcon className="mr-2 inline-block h-4 w-4 fill-green-500" />
              5 GB storage
            </li>
            <li>
              <CheckIcon className="mr-2 inline-block h-4 w-4 fill-green-500" />
              1 user
            </li>
            <li>
              <CheckIcon className="mr-2 inline-block h-4 w-4 fill-green-500" />
              Basic features
            </li>
            <li>
              <XIcon className="mr-2 inline-block h-4 w-4 fill-red-500" />
              No custom domain
            </li>
            <li>
              <XIcon className="mr-2 inline-block h-4 w-4 fill-red-500" />
              Limited integrations
            </li>
          </ul>
          <Button className="bg-gray-800 text-white hover:bg-gray-700">Subscribe</Button>
        </div>
        <div
          className="bg-yellow-400 rounded-lg p-6 flex flex-col gap-4 text-white shadow-lg mx-auto transform transition-transform duration-300 hover:scale-110 cursor-pointer relative"
          onClick={() => openModal('Gold')}
        >
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">Gold</h3>
            <p className="text-yellow-200">Ideal for growing teams and businesses.</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-4xl font-bold">$49</h4>
            <p className="text-yellow-200">per month</p>
          </div>
          <ul className="space-y-2 text-yellow-200">
            <li>
              <CheckIcon className="mr-2 inline-block h-4 w-4 fill-white" />
              50 GB storage
            </li>
            <li>
              <CheckIcon className="mr-2 inline-block h-4 w-4 fill-white" />
              5 users
            </li>
            <li>
              <CheckIcon className="mr-2 inline-block h-4 w-4 fill-white" />
              Advanced features
            </li>
            <li>
              <CheckIcon className="mr-2 inline-block h-4 w-4 fill-white" />
              Custom domain
            </li>
            <li>
              <CheckIcon className="mr-2 inline-block h-4 w-4 fill-white" />
              Unlimited integrations
            </li>
          </ul>
          <Button className="bg-white text-yellow-400 hover:bg-gray-200">Subscribe</Button>
          <div className="absolute inset-0 border-4 border-yellow-600 rounded-lg"></div>
        </div>
        <div
          className="bg-gray-300 rounded-lg p-6 flex flex-col gap-4 mx-auto transform transition-transform duration-300 hover:scale-105 cursor-pointer shadow-md hover:shadow-lg"
          onClick={() => openModal('Silver')}
        >
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-gray-800">Silver</h3>
            <p className="text-gray-600">Great for small teams and freelancers.</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-4xl font-bold text-gray-800">$29</h4>
            <p className="text-gray-600">per month</p>
          </div>
          <ul className="space-y-2 text-gray-600">
            <li>
              <CheckIcon className="mr-2 inline-block h-4 w-4 fill-blue-500" />
              20 GB storage
            </li>
            <li>
              <CheckIcon className="mr-2 inline-block h-4 w-4 fill-blue-500" />
              3 users
            </li>
            <li>
              <CheckIcon className="mr-2 inline-block h-4 w-4 fill-blue-500" />
              Standard features
            </li>
            <li>
              <XIcon className="mr-2 inline-block h-4 w-4 fill-red-500" />
              No custom domain
            </li>
            <li>
              <XIcon className="mr-2 inline-block h-4 w-4 fill-red-500" />
              Limited integrations
            </li>
          </ul>
          <Button className="bg-gray-800 text-white hover:bg-gray-700">Subscribe</Button>
        </div>
      </div>
      {/* Modal Component */}
      {selectedPlan && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-xl font-bold mb-4">Plano Selecionado: {selectedPlan}</h2>
            <p>Detalhes do plano {selectedPlan} aqui...</p>
            <Button onClick={() => setSelectedPlan(null)} className="mt-4 bg-red-500 text-white hover:bg-red-400">
              Fechar
            </Button>
          </div>
        </div>
      )}
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
