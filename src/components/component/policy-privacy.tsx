export function PolicyPrivacy() {
  return (
    <div className="bg-background text-foreground p-8 md:p-12 lg:p-16 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Política de Privacidade</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Coleta de Dados</h2>
        <p className="text-muted-foreground">
          Coletamos informações pessoais, como nome, endereço de e-mail e número de telefone, quando você se cadastra em
          nossa plataforma ou entra em contato conosco. Também coletamos dados de navegação, como endereço IP, tipo de
          navegador e páginas visitadas, para melhorar a sua experiência e a segurança do nosso serviço.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Uso de Informações</h2>
        <p className="text-muted-foreground">
          Utilizamos as informações coletadas para fornecer e melhorar nossos serviços, processar pagamentos, enviar
          comunicações relevantes e cumprir obrigações legais. Também podemos usar os dados de navegação para analisar
          tendências e melhorar a usabilidade do nosso site.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Compartilhamento com Terceiros</h2>
        <p className="text-muted-foreground">
          Não compartilhamos suas informações pessoais com terceiros, exceto quando necessário para fornecer nossos
          serviços, cumprir requisitos legais ou proteger nossos direitos. Podemos compartilhar dados agregados e
          anônimos com parceiros de negócios para fins de análise e melhoria do nosso serviço.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Direitos do Usuário</h2>
        <p className="text-muted-foreground">
          Você tem o direito de acessar, corrigir, atualizar ou excluir suas informações pessoais a qualquer momento.
          Também pode solicitar a portabilidade dos seus dados ou restringir o processamento deles. Para exercer esses
          direitos, entre em contato conosco através dos canais abaixo.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contato</h2>
        <p className="text-muted-foreground">
          Se você tiver dúvidas ou preocupações sobre nossa Política de Privacidade, entre em contato conosco pelo
          e-mail{" "}
          <a href="#" className="underline">
            privacidade@exemplo.com
          </a>{" "}
          ou pelo telefone{" "}
          <a href="#" className="underline">
            (11) 12345-6789
          </a>
          .
        </p>
      </section>
    </div>
  )
}
