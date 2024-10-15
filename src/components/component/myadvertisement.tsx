'use client';

import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { DetailsServiceProvider } from './details-service-provider';
import usePageTitle from '@/Hooks/usePageTittle';
import InfoIcon from './infoIcon';
import { toast } from 'react-toastify';
import { ModalServiceRegister } from './modal-service-register';
import { Price } from './price';
import { getStatusForMyAdvertisement } from '@/service/advertisementService';
import { useUser } from '@/contexts/AuthContext';

export function MyAdvertisement() {
  usePageTitle('Meu Serviço - EncontreJA');
  const user = useUser();
  const [servicoPostado, setServicoPostado] = useState<boolean>(false);
  const [servicoPago, setServicoPago] = useState<boolean | null>(null);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [data, setData] = useState({
    id: "",
    description: "",
    descriptionLastPlan: "",
    user: {
        name: "",
        city: ""
    },
    paid: Boolean
})
  useEffect(() => {
    const fetchServiceStatus = async () => {
      if (!user) {
        console.log('Usuário não autenticado ou ainda não carregado');
        return;
      }
      try {
        const response = await getStatusForMyAdvertisement('06512743113');
        setServicoPostado(!!response.id); 
        setServicoPago(response.paid); 
        setData(response)
      } catch (error) {
        console.error('Erro ao buscar status do serviço:', error);
      }
    };

    fetchServiceStatus();
  }, [user]);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 lg:mb-10">
        <div className="grid gap-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-center sm:text-left">Visualize seu anuncio(s) aqui</h1>
          <div className="flex justify-between items-center">
            <p className="text-muted-foreground text-center sm:text-left">
              Aqui você poderá ver como seu anuncio é exibido <br /> exatamente para os usuários finais
            </p>
            <InfoIcon
              message="Você poderá cadastrar mais anuncios caso detenha de um plano Mensal ou Anual."
              title="Serviços"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4 sm:mt-0">
          <Button variant="default" onClick={() => toast.success(`A cidade que será exibido seus anuncios é: ${data.user.city}`)}>
          {data.user.city}
          </Button>
          <Button
            variant="default"
            onClick={() => toast.success(`O serviço que será exibido seus anuncios é: Eletricista`)}
          >
            Eletricista
          </Button>
          <Button
            variant="default"
            onClick={() => toast.success(`A sua avaliação que será exibido em seus anuncios é: 5 estrelas`)}
          >
            5 estrelas
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 justify-items-center">
        {servicoPostado ? (
          servicoPago ? (
            <div
              className="bg-gray-100 p-2 rounded-lg shadow-sm overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105 max-w-md w-full sm:col-start-2"
              onClick={() => setActiveModal('user')}
            >
              <div className="aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg"
                  alt="Prestador de serviço"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  style={{ aspectRatio: '400/400', objectFit: 'cover' }}
                />
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-lg font-semibold">{data.user.name}</div>
                  <div className="flex items-center gap-1 text-sm text-primary">
                    {Array.from({ length: 5 }, (_, index) => (
                      <StarIcon
                        key={index}
                        className={`w-4 h-4 ${
                          index < Math.floor(5) ? 'fill-primary' : 'fill-muted stroke-muted-foreground'
                        }`}
                      />
                    ))}
                    <span>(5)</span>
                  </div>
                </div>
                <div className="text-muted-foreground mb-4">{data.user.city}</div>
                <p className="text-sm leading-relaxed">{data.description}</p>
              </div>
            </div>
          ) : (
            // Caso o serviço tenha sido postado, mas não pago
            <>
              <div
                className="bg-gray-100 p-2 rounded-lg shadow-sm overflow-hidden cursor-not-allowed opacity-50 max-w-md w-full sm:col-start-2"
                onClick={() => console.log('Abrir pagamento do anuncio')}
              >
                <div className="aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg"
                    alt="Prestador de serviço"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                    style={{ aspectRatio: '400/400', objectFit: 'cover' }}
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-lg font-semibold">{data.user.name}</div>
                    <div className="flex items-center gap-1 text-sm text-primary">
                      {Array.from({ length: 5 }, (_, index) => (
                        <StarIcon
                          key={index}
                          className={`w-4 h-4 ${
                            index < Math.floor(5) ? 'fill-primary' : 'fill-muted stroke-muted-foreground'
                          }`}
                        />
                      ))}
                      <span>(5)</span>
                    </div>
                  </div>
                  <div className="text-muted-foreground mb-4">{data.user.city}</div>
                  <p className="text-sm leading-relaxed">{data.description}</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center sm:col-start-2 bg-gray-100 p-2 max-w-md w-full pt-4 pb-4">
                <p className="text-center text-muted-foreground mb-4 p-2">
                  Serviço cadastrado, selecione um plano para os usuários visualizarem seus serviços.
                </p>
                <button
                  className="bg-LaranjaIndustrial text-white px-4 py-2 rounded-md"
                  onClick={() => setActiveModal('plan')}
                >
                  Escolha aqui um plano
                </button>
              </div>
            </>
          )
        ) : (
          // Caso não tenha nenhum serviço postado
          <div className="flex flex-col items-center justify-center sm:col-start-2 BG">
            <p className="text-center text-muted-foreground mb-4">Nenhum serviço cadastrado ainda.</p>
            <button className="bg-primary text-white px-4 py-2 rounded-md" onClick={() => setActiveModal('register')}>
              Cadastre aqui um serviço
            </button>
          </div>
        )}
      </div>

      {activeModal === 'plan' && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 modal-overlay">
          <Price onClose={() => setActiveModal(null)} />
        </div>
      )}

      {activeModal === 'user' && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 modal-overlay">
          <DetailsServiceProvider
            dataServiceProvider={data}
            onClose={() => setActiveModal(null)}
          />
        </div>
      )}

      {activeModal === 'register' && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 modal-overlay">
          <ModalServiceRegister onClose={() => setActiveModal(null)} />
        </div>
      )}
    </div>
  );
}

function StarIcon(props: any) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
