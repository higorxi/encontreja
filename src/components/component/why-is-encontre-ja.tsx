export function WhyIsEncontreJA() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 space-y-12 text-center">
        <div className="space-y-4 max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">O que é o EncontreJA?</h1>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            O EncontreJA é uma plataforma que conecta prestadores de serviços com usuários que precisam de sua
            expertise. Facilita para os profissionais exibirem seus serviços e para os clientes encontrarem o
            prestador certo para suas necessidades.
          </p>
        </div>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Para Prestadores de Serviços</h2>
              <p className="text-muted-foreground">
                Amplie seu alcance e mostre sua expertise para um público mais amplo.
              </p>
            </div>
            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <UsersIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Atingir Novos Clientes</h3>
                  <p className="text-muted-foreground">
                    Conecte-se com um público diversificado e expanda sua base de clientes.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <BriefcaseIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Exibir Expertise</h3>
                  <p className="text-muted-foreground">
                    Destaque suas habilidades, experiências e qualificações para atrair os clientes certos.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <CalendarIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Agendamento Flexível</h3>
                  <p className="text-muted-foreground">
                    Gerencie facilmente sua disponibilidade e agende compromissos com clientes.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Para Usuários</h2>
              <p className="text-muted-foreground">
                Encontre os profissionais certos para suas necessidades e agende serviços com facilidade.
              </p>
            </div>
            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <SearchIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Busca por Expertise</h3>
                  <p className="text-muted-foreground">
                    Encontre profissionais com as habilidades e qualificações específicas que você precisa.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <MapPinIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Buscar por Localização</h3>
                  <p className="text-muted-foreground">
                    Encontre facilmente prestadores na sua área ou em qualquer local que você precise.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <StarIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Ler Avaliações</h3>
                  <p className="text-muted-foreground">
                    Veja o que outros clientes disseram sobre os profissionais que você está considerando.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <CalendarIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Agendamento Imediato</h3>
                  <p className="text-muted-foreground">
                    Agende compromissos e reserve serviços com apenas alguns cliques.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


function BriefcaseIcon(props: any) {
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
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  )
}


function CalendarIcon(props: any) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function MapPinIcon(props: any) {
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
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}


function SearchIcon(props: any) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
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
  )
}


function UsersIcon(props: any) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
