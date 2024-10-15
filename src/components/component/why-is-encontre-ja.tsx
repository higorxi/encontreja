import {
  UsersIcon,
  BriefcaseIcon,
  CalendarIcon,
  SearchIcon,
  MapPinIcon,
  StarIcon,
  ZapIcon,
  TestTube2Icon,
  LaptopIcon,
  PaintbrushIcon,
  HouseIcon,
  FlowerIcon,
  ConstructionIcon,
  TreesIcon,
} from 'lucide-react';
import { BiSolidCarMechanic } from 'react-icons/bi';
import { FaBroom } from 'react-icons/fa';

export function WhyIsEncontreJA() {
  return (
    <>
      <section className="w-full py-2 md:py-2 lg:py-4">
        <div className="container px-4 md:px-8 mx-auto text-center">
          <div className="space-y-4 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-2">O que é o EncontreJA?</h2>
            <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              O EncontreJA é uma plataforma inovadora que conecta prestadores de serviços com usuários que precisam de
              sua expertise. Facilitamos para os profissionais exibirem seus serviços e para os clientes encontrarem o
              prestador ideal para suas necessidades.
            </p>
          </div>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 max-w-5xl mx-auto">
            <div className="space-y-6 bg-blue-100 p-8 rounded-4xl shadow-lg w-full py-12">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-black">Para Prestadores de Serviços</h2>
                <p className="text-gray-600">Amplie seu alcance e mostre sua expertise para um público mais amplo.</p>
              </div>
              <div className="grid gap-6 pt-5">
                {[
                  {
                    icon: CalendarIcon,
                    title: 'Agendamento Flexível',
                    desc: 'Gerencie facilmente sua disponibilidade e agende compromissos com clientes.',
                    color: 'bg-green-500', // Cor 1
                  },
                  {
                    icon: UsersIcon,
                    title: 'Atingir Novos Clientes',
                    desc: 'Conecte-se com um público diversificado e expanda sua base de clientes.',
                    color: 'bg-red-500', // Cor 2
                  },
                  {
                    icon: BriefcaseIcon,
                    title: 'Exibir Expertise',
                    desc: 'Destaque suas habilidades, experiências e qualificações para atrair os clientes certos.',
                    color: 'bg-orange-500', // Usando a mesma cor do ícone acima
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className={`${item.color} rounded-md p-3 flex items-center justify-center`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6 bg-orange-100 p-8 rounded-4xl shadow-lg w-full py-12">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-black">Para Usuários</h2>
                <p className="text-gray-600">
                  Encontre os profissionais certos para suas necessidades e agende serviços com facilidade.
                </p>
              </div>
              <div className="grid gap-6 pt-5">
                {[
                  {
                    icon: StarIcon,
                    title: 'Ler Avaliações',
                    desc: 'Veja o que outros clientes disseram sobre os profissionais que você está considerando.',
                    color: 'bg-AmareloGastronômica', // Cor 3
                  },
                  {
                    icon: SearchIcon,
                    title: 'Busca por Expertise',
                    desc: 'Encontre profissionais com as habilidades e qualificações específicas que você precisa.',
                    color: 'bg-blue-500', // Usando a mesma cor do ícone acima
                  },
                  {
                    icon: MapPinIcon,
                    title: 'Buscar por Localização',
                    desc: 'Encontre facilmente prestadores na sua área ou em qualquer local que você precise.',
                    color: 'bg-purple-500', // Usando a mesma cor do ícone acima
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className={`${item.color} rounded-md p-3 flex items-center justify-center`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-16 lg:py-22 mb-10 bg-gradient-to-r from-blue-50 to-orange-100" style={{ marginTop: '6rem' }}>
        <div className="container px-4 md:px-8 mx-auto text-center ">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-2">Como funciona?</h2>
          <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mb-12">
            É muito simples! Basta seguir os três passos abaixo.
          </p>
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex flex-col items-center space-y-4">
              <h3 className="text-xl font-bold">1. Busque o Serviço</h3>
              <p className="text-center text-gray-500">
                Insira o serviço desejado e sua localização para encontrar os profissionais ideais.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <h3 className="text-xl font-bold">2. Conecte-se com Profissionais </h3>
              <p className="text-center text-gray-500">
                Receba uma lista instantânea de profissionais disponíveis e qualificados para a sua necessidade.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <h3 className="text-xl font-bold">3. Agende com Facilidade</h3>
              <p className="text-center text-gray-500">
                Escolha o profissional que mais combina com você, agende o serviço e aproveite um atendimento de
                qualidade, sem complicações.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-16 lg:py-22 mb-10" style={{ paddingTop: '2rem' }}>
        <div className="container px-4 md:px-8 mx-auto text-center ">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-2">Serviços populares</h2>
          <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mb-12">
            Oferecemos serviços que estão sempre em alta demanda. Abaixo, você encontra os mais populares!
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5 lg:gap-16 justify-center">
            <div className="flex flex-col items-center gap-4">
              <div className="bg-orange-600 rounded-md p-3 flex items-center justify-center">
                <ZapIcon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center">
                  Eletricistas
                </h3>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="bg-AzulProfundo rounded-md p-3 flex items-center justify-center">
                <TestTube2Icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center">
                  Encanadores
                </h3>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="bg-yellow-400 rounded-md p-3 flex items-center justify-center">
                <FaBroom className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center">
                  Faxineiros e Diaristas
                </h3>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="bg-green-500 rounded-md p-3 flex items-center justify-center">
                <LaptopIcon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center">
                  Técnicos de Informática
                </h3>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="bg-pink-400 rounded-md p-3 flex items-center justify-center">
                <PaintbrushIcon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center">
                  Pintores
                </h3>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="bg-red-500 rounded-md p-3 flex items-center justify-center">
                <HouseIcon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center">
                  Técnicos em Eletrodomésticos
                </h3>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="bg-purple-500 rounded-md p-3 flex items-center justify-center">
                <FlowerIcon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center">
                  Jardineiros
                </h3>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="bg-gray-500 rounded-md p-3 flex items-center justify-center">
                <ConstructionIcon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center">
                  Pedreiros e Construtores
                </h3>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="bg-black rounded-md p-3 flex items-center justify-center">
                <BiSolidCarMechanic className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center">
                  Mecânicos
                </h3>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="bg-blue-900 rounded-md p-3 flex items-center justify-center">
                <TreesIcon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center">
                  Marceneiros e Carpinteiros
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
