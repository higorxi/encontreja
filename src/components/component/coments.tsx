import { Button } from '@/components/ui/button';
import { FiArrowRight } from 'react-icons/fi';
import { Feedback } from './feedback';
import Link from 'next/link';

export function Coments() {
  return (
    <div className="flex flex-col lg:flex-row container px-4 md:px-8 mx-auto min-h-[600px] ">
      <div className="w-full lg:w-3/5 bg-AzulProfundo text-white p-10 rounded-tr-4xl rounded-br-4xl flex flex-col items-center justify-center shadow-lg">
        <div className="flex flex-col items-center justify-center text-center gap-6">
          <h2 className="text-4xl font-extrabold mb-6 animate-pulse text-AmareloGastronômica">Vantagens do Nosso Serviço</h2>

          <ul className="list-none mb-4 text-justify text-lg leading-relaxed">
            <li>
              <b className='text-AmareloGastronômica'>Atendimento Rápido e Eficiente:</b> Sabemos que seu tempo é precioso. Por isso, garantimos respostas
              rápidas e soluções eficazes para suas necessidades.
            </li>
            <br />
            <li>
              <b className='text-AmareloGastronômica' >Preços Justos:</b> Oferecemos preços competitivos, sem surpresas. Você sempre saberá o que esperar
              antes de contratar um serviço.
            </li>
            <br />
            <li>
              <b className='text-AmareloGastronômica'>Serviços na Sua Região:</b> Conectamos você com profissionais próximos, garantindo rapidez e eficiência
              no atendimento.
            </li>
            <br />
            <li>
              <b className='text-AmareloGastronômica'>Feedback e Avaliações</b>: Veja o que outros clientes estão dizendo sobre os prestadores de serviços,
              ajudando você a tomar decisões informadas.
            </li>
            <br />
            <li>
              <b className='text-AmareloGastronômica'>Segurança e Confiabilidade</b>: Trabalhamos com transparência e responsabilidade, assegurando que você
              se sinta seguro ao contratar nossos serviços.
            </li>
          </ul>

          <div className="flex items-center w-full justify-center">
            <Link
              href="/servicos"
              className="inline-flex h-12 items-center justify-center bg-AmareloGastronômica px-10 text-lg font-semibold text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105"
              prefetch={false}
            >
              Saiba mais
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-3/5 space-y-4 flex flex-col justify-between" style={{ marginLeft: '1%' }}>
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
