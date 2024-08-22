import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface PermissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCity: () => void;
}

export function PermissionModal({
  isOpen,
  onClose,
  onSelectCity,
}: PermissionModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md flex flex-col items-center"
      >
        <h2 className="text-xl font-semibold mb-4 text-center">Permissão de Localização Necessária</h2>
        <p className="mb-4 text-center">
          Precisamos do acesso à sua localização para melhorar a experiência do usuário. Por favor, ative a localização manualmente no seu navegador.
        </p>
        <p className="mb-4 text-center text-sm text-gray-500">
          Siga o GIF abaixo para saber como ativar a localização manualmente.
        </p>
        <div className="mb-4">
          <Image
            src="/placeholder.svg" 
            alt="Como ativar a localização"
            width={300}
            height={200}
            className="w-full h-auto"
          />
        </div>
        <div className="flex flex-col gap-4 w-full">
          <Button 
            onClick={onSelectCity}
            className="w-full"
          >
            Selecionar cidade manualmente
          </Button>
        </div>
      </div>
    </div>
  );
}
