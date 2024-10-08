import { Button } from '@/components/ui/button';
import { FiArrowRight } from 'react-icons/fi';
import { Feedback } from './feedback';

export function Coments() {
  return (
    <div className="flex flex-col lg:flex-row w-full min-w-full max-w-7xl mx-auto p-4 pl-0 gap-8 min-h-[600px]">
      <div className="w-full lg:w-2/5 bg-gradient-to-r from-red-500 to-orange-500 text-white p-8 rounded-tr-4xl rounded-br-4xl flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center text-center gap-6">
          <h2 className="text-3xl font-bold mb-8">Vantagens do Nosso Serviço</h2>
          <p className="mb-4 text-justify">
            Descubra as vantagens incríveis do nosso serviço. Oferecemos soluções personalizadas e atendimento de
            qualidade para garantir a sua satisfação.
          </p>
          <p className="mb-4 text-justify">
            Estamos comprometidos em fornecer o melhor suporte possível, sempre atentos às suas necessidades e prontos
            para oferecer as melhores soluções para você.
          </p>
          <div className="flex items-center w-full justify-start">
            <Button className="bg-white text-black rounded-full px-6 py-3 flex items-center justify-between w-full lg:w-auto pr-2 rounded-2xl hover:text-white">
              <span className="mr-auto">Saiba Mais</span>
              <div className="bg-black rounded-full p-2 ml-4 rounded-2xl">
                <FiArrowRight className="text-white" />
              </div>
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-3/5 space-y-4 flex flex-col justify-between">
        <div className="bg-white p-2 rounded-lg shadow-md flex-grow">
          <Feedback
            name="João Batista"
            serviceType="manutenção"
            description="Serviço de manutenção impecável! A equipe demonstrou grande competência, com uma execução rápida e sem falhas nos equipamentos."
            stars={5}
          />
        </div>
        <div className="bg-white p-2 rounded-lg shadow-md flex-grow">
          <Feedback
            name="Maria Silva"
            serviceType="desenvolvimento"
            description="O desenvolvimento da aplicação superou todas as expectativas. O trabalho foi entregue no prazo, com uma qualidade excepcional e atenção aos mínimos detalhes."
            stars={4}
          />
        </div>
        <div className="bg-white p-2 rounded-lg shadow-md flex-grow">
          <Feedback
            name="Carlos Souza"
            serviceType="fotografia"
            description="O serviço de fotografia foi incrível! As fotos ficaram perfeitas, capturando cada momento com profissionalismo e criatividade. Altamente recomendável!"
            stars={4}
          />
        </div>
      </div>
    </div>
  );
}
