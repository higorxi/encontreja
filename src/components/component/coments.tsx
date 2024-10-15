import { Button } from '@/components/ui/button';
import { FiArrowRight } from 'react-icons/fi';
import { Feedback } from './feedback';
import Link from 'next/link';

export function Coments() {
  return (
    <section className="py-16" style={{ marginTop: '2rem' }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center  tracking-tighter sm:text-5xl mb-2">
          O que nossos clientes dizem sobre o EncontreJá
        </h2>
        <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center mb-12">
          Veja como o EncontreJá está facilitando a vida de quem precisa contratar serviços de qualidade!
        </p>
        <div className="grid md:grid-cols-3 gap-8">
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
    </section>
  );
}
