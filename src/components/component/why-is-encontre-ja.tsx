import { UsersIcon, BriefcaseIcon, CalendarIcon, SearchIcon, MapPinIcon, StarIcon } from 'lucide-react'

export function WhyIsEncontreJA() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6 space-y-12 text-center">
        <div className="space-y-4 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl text-black ">
            O que é o EncontreJA?
          </h1>
          <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            O EncontreJA é uma plataforma inovadora que conecta prestadores de serviços com usuários que precisam de sua
            expertise. Facilitamos para os profissionais exibirem seus serviços e para os clientes encontrarem o
            prestador ideal para suas necessidades.
          </p>
        </div>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 max-w-5xl mx-auto"> 
          <div className="space-y-6 bg-blue-100 p-8 rounded-4xl shadow-lg w-full py-12"> 
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-black">Para Prestadores de Serviços</h2>
              <p className="text-gray-600">
                Amplie seu alcance e mostre sua expertise para um público mais amplo.
              </p>
            </div>
            <div className="grid gap-6 pt-5">
              {[{
                icon: CalendarIcon,
                title: "Agendamento Flexível",
                desc: "Gerencie facilmente sua disponibilidade e agende compromissos com clientes.",
                color: "bg-green-500" // Cor 1
              }, {
                icon: UsersIcon,
                title: "Atingir Novos Clientes",
                desc: "Conecte-se com um público diversificado e expanda sua base de clientes.",
                color: "bg-red-500" // Cor 2
              }, {
                icon: BriefcaseIcon,
                title: "Exibir Expertise",
                desc: "Destaque suas habilidades, experiências e qualificações para atrair os clientes certos.",
                color: "bg-orange-500" // Usando a mesma cor do ícone acima
              }].map((item, index) => (
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
          <div className="space-y-6 bg-orange-100 p-8 rounded-4xl shadow-lg w-full py-12" > 
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-black">Para Usuários</h2>
              <p className="text-gray-600">
                Encontre os profissionais certos para suas necessidades e agende serviços com facilidade.
              </p>
            </div>
            <div className="grid gap-6 pt-5">
              {[{
                icon: StarIcon,
                title: "Ler Avaliações",
                desc: "Veja o que outros clientes disseram sobre os profissionais que você está considerando.",
                color: "bg-AmareloGastronômica" // Cor 3
              }, {
                icon: SearchIcon,
                title: "Busca por Expertise",
                desc: "Encontre profissionais com as habilidades e qualificações específicas que você precisa.",
                color: "bg-blue-500" // Usando a mesma cor do ícone acima
              }, {
                icon: MapPinIcon,
                title: "Buscar por Localização",
                desc: "Encontre facilmente prestadores na sua área ou em qualquer local que você precise.",
                color: "bg-purple-500" // Usando a mesma cor do ícone acima
              }].map((item, index) => (
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
  )
}
