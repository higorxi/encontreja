import Link from 'next/link';
import Image from 'next/image';
import ImageHome from '../../../public/HomeScreen/Encanador.svg';
import Marquee from 'react-fast-marquee';
import {
  FaBroom,
  FaCut,
  FaDesktop,
  FaHammer,
  FaLaptop,
  FaLeaf,
  FaPaintBrush,
  FaPen,
  FaPencilAlt,
  FaPlug,
  FaShower,
  FaSoap,
  FaUserTie,
  FaWater,
  FaWrench,
} from 'react-icons/fa';
import { CameraIcon, FlowerIcon, HomeIcon } from 'lucide-react';

export function InitialScreen() {
  const gif = (
    <section className="w-full min-w-full pb-10">
      <div className="container min-w-full mx-auto">
        <Link href="/servicos">
          <Marquee speed={50} className="w-full">
            <div className="flex items-center space-x-6">
              <FaWrench title="Eletricista" size={24} className="ml-6 text-primary-foreground" />
              <FaWater title="Encanador" size={24} />
              <FaPaintBrush title="Pintor" size={24} />
              <FaBroom title="Faxineiro" size={24} />
              <FaLaptop title="Técnico" size={24} />
              <FaCut title="Cabeleireiro" size={24} />
              <FaLeaf title="Jardineiro" size={24} />
              <FaHammer title="Carpinteiro" size={24} />
              <FaShower title="Encanador" size={24} />
              <FaPlug title="Eletricista" size={24} />
              <FaPen title="Pintor" size={24} />
              <FaSoap title="Faxineiro" size={24} />
              <FaDesktop title="Técnico" size={24} />
              <FaUserTie title="Consultor" size={24} />
              <FaPencilAlt title="Designer" size={24} />
              <FaWrench title="Eletricista" size={24} />
              <FaWater title="Encanador" size={24} />
              <FaPaintBrush title="Pintor" size={24} />
              <FaBroom title="Faxineiro" size={24} />
              <FaLaptop title="Técnico" size={24} />
              <FaCut title="Cabeleireiro" size={24} />
              <FaLeaf title="Jardineiro" size={24} />
              <FaHammer title="Carpinteiro" size={24} />
              <FaShower title="Encanador" size={24} />
              <FaPlug title="Eletricista" size={24} />
              <FaPen title="Pintor" size={24} />
              <FaSoap title="Faxineiro" size={24} />
              <FaDesktop title="Técnico" size={24} />
              <FaUserTie title="Consultor" size={24} />
              <FaPencilAlt title="Designer" size={24} />
              <FaWrench title="Eletricista" size={24} />
              <FaWater title="Encanador" size={24} />
              <FaPaintBrush title="Pintor" size={24} />
              <FaBroom title="Faxineiro" size={24} />
              <FaWater title="Encanador" size={24} />
              <FaPaintBrush title="Pintor" size={24} />
              <FaBroom title="Faxineiro" size={24} />
              <FaLaptop title="Técnico" size={24} />
              <FaCut title="Cabeleireiro" size={24} />
              <FaLeaf title="Jardineiro" size={24} />
              <FaHammer title="Carpinteiro" size={24} />
              <FaShower title="Encanador" size={24} />
              <FaPlug title="Eletricista" size={24} />
              <FaPen title="Pintor" size={24} />
              <FaSoap title="Faxineiro" size={24} />
              <FaDesktop title="Técnico" size={24} />
              <FaUserTie title="Consultor" size={24} />
              <FaPencilAlt title="Designer" size={24} />
              <FaWrench title="Eletricista" size={24} />
              <FaWater title="Encanador" size={24} />
              <FaPaintBrush title="Pintor" size={24} />
              <FaBroom title="Faxineiro" size={24} />
              <FaLaptop title="Técnico" size={24} />
              <FaCut title="Cabeleireiro" size={24} />
              <FaLeaf title="Jardineiro" size={24} />
              <FaHammer title="Carpinteiro" size={24} />
              <FaShower title="Encanador" size={24} />
              <FaPlug title="Eletricista" size={24} />
              <FaPen title="Pintor" size={24} />
              <FaSoap title="Faxineiro" size={24} />
              <FaDesktop title="Técnico" size={24} />
              <FaUserTie title="Consultor" size={24} />
              <FaPencilAlt title="Designer" size={24} />
              <FaWrench title="Eletricista" size={24} />
              <FaWater title="Encanador" size={24} />
              <FaPaintBrush title="Pintor" size={24} />
              <FaBroom title="Faxineiro" size={24} />
              <FaWater title="Encanador" size={24} />
              <FaPaintBrush title="Pintor" size={24} />
              <FaBroom title="Faxineiro" size={24} />
              <FaLaptop title="Técnico" size={24} />
              <FaCut title="Cabeleireiro" size={24} />
              <FaLeaf title="Jardineiro" size={24} />
              <FaHammer title="Carpinteiro" size={24} />
              <FaShower title="Encanador" size={24} />
              <FaPlug title="Eletricista" size={24} />
              <FaPen title="Pintor" size={24} />
              <FaSoap title="Faxineiro" size={24} />
              <FaDesktop title="Técnico" size={24} />
              <FaUserTie title="Consultor" size={24} />
              <FaPencilAlt title="Designer" size={24} />
              <FaWrench title="Eletricista" size={24} />
              <FaWater title="Encanador" size={24} />
              <FaPaintBrush title="Pintor" size={24} />
              <FaBroom title="Faxineiro" size={24} />
              <FaLaptop title="Técnico" size={24} />
              <FaCut title="Cabeleireiro" size={24} />
              <FaLeaf title="Jardineiro" size={24} />
              <FaHammer title="Carpinteiro" size={24} />
              <FaShower title="Encanador" size={24} />
              <FaPlug title="Eletricista" size={24} />
              <FaPen title="Pintor" size={24} />
              <FaSoap title="Faxineiro" size={24} />
              <FaDesktop title="Técnico" size={24} />
              <FaUserTie title="Consultor" size={24} />
              <FaPencilAlt title="Designer" size={24} />
              <FaWrench title="Eletricista" size={24} />
              <FaWater title="Encanador" size={24} />
              <FaPaintBrush title="Pintor" size={24} />
              <FaBroom title="Faxineiro" size={24} />
              <FaLaptop title="Técnico" size={24} className="mr-4" />
            </div>
          </Marquee>
        </Link>
      </div>
    </section>
  );

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-14 lg:py-18 xl:py-22" style={{ paddingBottom: '0rem' }}>
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px] justify-center">
              <div className="flex flex-col justify-center space-y-8">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Encontre o serviço local ideal para você, de forma rápida e fácil!
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    No EncontreJá, conectamos você aos melhores profissionais da sua região em minutos! Quer você
                    precise de um eletricista, encanador, pintor, ou qualquer outro serviço, temos tudo o que você
                    precisa, na palma da sua mão. 🚀
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="/servicos"
                    className="inline-flex h-12 items-center justify-center bg-AmareloGastronômica px-10 text-lg font-semibold text-black  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105"
                    prefetch={false}
                  >
                    Explorar serviços
                  </Link>
                </div>
              </div>
              <div className="relative">
                <Image
                  src={ImageHome}
                  width="600"
                  height="400"
                  alt="Hero"
                  className="mx-auto overflow-hidden rounded-xl object-cover sm:w-full lg:aspect-square"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-16 lg:py-22 mb-10" style={{ paddingTop: '2rem' }}>
          <div className="container px-4 md:px-8 mx-auto">
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-16 justify-center">
              <div className="flex flex-col items-center gap-4">
                <div className="bg-orange-600 rounded-md p-3 flex items-center justify-center">
                  <BrushIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-center">Serviços de beleza</h3>
                  <p className="text-muted-foreground text-justify">
                    Cuide de você com os melhores profissionais de beleza da sua região. Encontre cabeleireiros,
                    manicures, esteticistas e outros especialistas prontos para realçar sua beleza e bem-estar no
                    conforto da sua casa ou em estúdios locais.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="bg-AzulProfundo rounded-md p-3 flex items-center justify-center">
                  <WrenchIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-center">Reparos domésticos</h3>
                  <p className="text-muted-foreground text-justify">
                    Pequenos problemas podem se tornar grandes se não forem tratados a tempo. Encontre especialistas em
                    reparos domésticos, desde consertos de móveis e eletrodomésticos até reparos gerais na estrutura da
                    casa, garantindo que seu lar esteja sempre em perfeito estado.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="bg-yellow-400 rounded-md p-3 flex items-center justify-center">
                  <LaptopIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-center">Suporte técnico</h3>
                  <p className="text-muted-foreground text-justify">
                    Problemas com tecnologia? Conte com técnicos em informática e eletrônicos para solucionar falhas em
                    seus dispositivos, configurar redes, instalar softwares e garantir que tudo funcione perfeitamente,
                    seja em casa ou no escritório.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="bg-green-500 rounded-md p-3 flex items-center justify-center">
                  <FaBroom className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-center">Serviços de Limpeza</h3>
                  <p className="text-muted-foreground text-justify">
                    Mantenha seu espaço limpo e organizado com a ajuda de profissionais especializados em serviços de
                    limpeza. Encontre faxineiros e empresas de limpeza que oferecem serviços personalizados para sua
                    casa ou escritório, garantindo um ambiente saudável e agradável.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="bg-gray-400 rounded-md p-3 flex items-center justify-center">
                  <HomeIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-center">Design de Interiores</h3>
                  <p className="text-muted-foreground text-justify">
                    Transforme seu espaço com a ajuda de especialistas em design de interiores. Encontre profissionais
                    criativos que podem ajudá-lo a criar ambientes bonitos e funcionais, adaptando cada detalhe ao seu
                    gosto e estilo, seja em sua casa ou escritório.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="bg-red-500 rounded-md p-3 flex items-center justify-center">
                  <CameraIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-center">Fotografia Profissional</h3>
                  <p className="text-muted-foreground text-justify">
                    Capture os melhores momentos da sua vida com fotógrafos profissionais. Encontre especialistas em
                    fotografia para eventos, ensaios pessoais ou retratos familiares, garantindo que suas memórias sejam
                    eternizadas com qualidade e arte.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function BrushIcon(props: any) {
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
      <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
      <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" />
    </svg>
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
      <path d="m20 6-12 12-5-5" />
    </svg>
  );
}

function WrenchIcon(props: any) {
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
      <path d="M17.66 8.34a2.11 2.11 0 0 0 0-2.99L15 2.68a2.11 2.11 0 0 0-2.99 0l-3.1 3.1a2.11 2.11 0 0 0 0 2.99l.79.79L6.7 10.29a2.11 2.11 0 0 0 0 2.99l.79.79a2.11 2.11 0 0 0 2.99 0l3.1-3.1a2.11 2.11 0 0 0 2.99 0l3.11-3.11a2.11 2.11 0 0 0 0-2.99z" />
    </svg>
  );
}

function LaptopIcon(props: any) {
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
      <path d="M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z" />
      <path d="M1 20h22" />
    </svg>
  );
}
