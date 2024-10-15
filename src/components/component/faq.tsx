import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"

export function FAQ() {
  return (
    <section className="w-full min-w-full py-10">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Perguntas Frequentes</h2>
          <p className="text-muted-foreground md:text-xl">
            Encontre respostas para as perguntas mais comuns sobre nosso produto.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-3xl space-y-6">
          <Collapsible>
            <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-muted px-4 py-3 text-left font-bold transition-colors hover:bg-muted/80">
              Quais recursos o seu produto oferece?
              <ChevronDownIcon className="h-5 w-5 transition-transform data-[state=open]:rotate-180" />
            </CollapsibleTrigger>
            <CollapsibleContent className="px-4 py-3 text-muted-foreground">
              Nosso produto oferece uma ampla gama de recursos para ajudar você a otimizar seu fluxo de trabalho e
              aumentar a produtividade. Alguns dos principais recursos incluem colaboração em tempo real, análises
              avançadas e integração perfeita com suas ferramentas existentes.
            </CollapsibleContent>
          </Collapsible>
          <Collapsible>
            <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-muted px-4 py-3 text-left font-bold transition-colors hover:bg-muted/80">
              Quanto custa o seu produto?
              <ChevronDownIcon className="h-5 w-5 transition-transform data-[state=open]:rotate-180" />
            </CollapsibleTrigger>
            <CollapsibleContent className="px-4 py-3 text-muted-foreground">
              Oferecemos uma variedade de planos de preços para atender a diferentes necessidades e orçamentos. Nosso
              plano básico começa a partir de $9 por mês, e também temos planos para grandes empresas. Você pode
              verificar nossa página de preços para mais detalhes.
            </CollapsibleContent>
          </Collapsible>
          <Collapsible>
            <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-muted px-4 py-3 text-left font-bold transition-colors hover:bg-muted/80">
              Como posso começar a usar seu produto?
              <ChevronDownIcon className="h-5 w-5 transition-transform data-[state=open]:rotate-180" />
            </CollapsibleTrigger>
            <CollapsibleContent className="px-4 py-3 text-muted-foreground">
              Começar a usar nosso produto é fácil. Basta criar uma conta em nosso site, e você será guiado pelo
              processo de integração. Também temos documentação extensa e tutoriais em vídeo para ajudar você a começar
              rapidamente.
            </CollapsibleContent>
          </Collapsible>
          <Collapsible>
            <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-muted px-4 py-3 text-left font-bold transition-colors hover:bg-muted/80">
              Que tipo de suporte vocês oferecem?
              <ChevronDownIcon className="h-5 w-5 transition-transform data-[state=open]:rotate-180" />
            </CollapsibleTrigger>
            <CollapsibleContent className="px-4 py-3 text-muted-foreground">
              Temos orgulho em oferecer um excelente suporte ao cliente. Nossa equipe de agentes de suporte é
              experiente e amigável, disponível 24/7 para ajudar com qualquer dúvida ou problema. Você pode nos
              contatar por email, telefone ou chat online.
            </CollapsibleContent>
          </Collapsible>
          <Collapsible>
            <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-muted px-4 py-3 text-left font-bold transition-colors hover:bg-muted/80">
              Como é a segurança dos meus dados com seu produto?
              <ChevronDownIcon className="h-5 w-5 transition-transform data-[state=open]:rotate-180" />
            </CollapsibleTrigger>
            <CollapsibleContent className="px-4 py-3 text-muted-foreground">
              Levamos a segurança dos dados muito a sério. Seus dados são criptografados tanto em trânsito quanto em
              repouso, e temos controles rigorosos de acesso para garantir que apenas pessoal autorizado possa acessar
              suas informações. Também realizamos auditorias de segurança regularmente para garantir que atendemos aos
              mais altos padrões da indústria.
            </CollapsibleContent>
          </Collapsible>
          <Collapsible>
            <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-muted px-4 py-3 text-left font-bold transition-colors hover:bg-muted/80">
              Vocês oferecem integrações com outras ferramentas?
              <ChevronDownIcon className="h-5 w-5 transition-transform data-[state=open]:rotate-180" />
            </CollapsibleTrigger>
            <CollapsibleContent className="px-4 py-3 text-muted-foreground">
              Sim, oferecemos uma ampla gama de integrações com ferramentas e plataformas populares, incluindo
              softwares de gerenciamento de projetos, sistemas de CRM e aplicativos de produtividade. Isso permite que
              você incorpore nosso produto perfeitamente ao seu fluxo de trabalho existente.
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </section>
  )
}

function ChevronDownIcon(props: any) {
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
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}
