"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "O que é o EncontreJá?",
    answer: "O EncontreJá é uma plataforma que conecta clientes a prestadores de serviços locais de diversas áreas, como eletricistas, encanadores, pintores, técnicos em informática, entre outros. Aqui, você pode encontrar e contratar profissionais de confiança de maneira rápida e fácil."
  },
  {
    question: "Como funciona o EncontreJá para clientes?",
    answer: "Como cliente, você pode navegar pela nossa lista de prestadores de serviços, filtrar por área de atuação e região, e entrar em contato diretamente com o profissional para solicitar um orçamento. A contratação e o pagamento dos serviços são feitos diretamente com o prestador."
  },
  {
    question: "Como posso me cadastrar como profissional?",
    answer: "Se você é um prestador de serviços, é muito simples se cadastrar! Basta acessar a página de cadastro, preencher suas informações, selecionar as áreas em que você atua e criar seu perfil profissional. Isso permitirá que clientes encontrem você facilmente na plataforma."
  },
  {
    question: "Quais são as vantagens de ser um profissional listado no EncontreJá?",
    answer: "Ao se cadastrar como profissional, você ganha: Maior visibilidade para clientes locais, recebimento direto de solicitações de orçamento, avaliações que ajudam a construir sua reputação, gerenciamento fácil de seu perfil e histórico de serviços."
  },
  {
    question: "O EncontreJá é gratuito?",
    answer: "Sim, para os clientes o uso da plataforma é 100% gratuito! Já os profissionais podem optar por planos de destaque (Semanal, Mensal, Anual) que oferecem benefícios adicionais, como maior visibilidade e posicionamento privilegiado nas buscas."
  },
  {
    question: "Quais são os planos para profissionais e seus preços?",
    answer: "O EncontreJá oferece três tipos de planos para profissionais: R$ 4,99 por semana, R$ 19,99 por mês, e R$ 199,99 por ano. Os planos superiores garantem destaque nos resultados de busca e uma maior visibilidade para seu perfil."
  },
  {
    question: "Como funcionam as avaliações de profissionais?",
    answer: "Os clientes podem avaliar os profissionais após a conclusão do serviço. Essas avaliações ajudam outros usuários a escolherem com confiança e proporcionam aos profissionais a chance de melhorar sua reputação na plataforma."
  },
  {
    question: "Quais tipos de serviços posso encontrar no EncontreJá?",
    answer: "No EncontreJá, você pode encontrar uma ampla variedade de serviços, incluindo: Eletricistas, encanadores, pintores, jardineiros, mecânicos, técnicos de informática, faxineiros, serralheiros e muitos outros!"
  },
  {
    question: "Como posso entrar em contato com o suporte do EncontreJá?",
    answer: "Se você tiver qualquer dúvida ou problema, pode entrar em contato com nossa equipe de suporte pelo e-mail suporte@useencontreja.com.br."
  },
  {
    question: "Posso modificar meus dados de cadastro?",
    answer: "Sim! Você pode acessar seu perfil a qualquer momento e atualizar suas informações pessoais e profissionais, como telefone, e-mail, áreas de atuação e fotos."
  },
  {
    question: "O EncontreJá oferece garantias para os serviços contratados?",
    answer: "O EncontreJá é uma plataforma que conecta clientes e profissionais, mas não interfere diretamente na contratação e execução dos serviços. Não oferecemos garantias sobre o trabalho realizado, por isso recomendamos sempre consultar as avaliações e referências dos profissionais antes da contratação."
  },
  {
    question: "Como o EncontreJá garante a qualidade dos profissionais?",
    answer: "Os profissionais no EncontreJá são avaliados pelos clientes que contratam seus serviços, o que ajuda a manter a qualidade na plataforma. Além disso, incentivamos os profissionais a manterem seus perfis atualizados e a fornecerem serviços de alta qualidade para receberem boas avaliações."
  },
  {
    question: "Posso cancelar minha assinatura como profissional?",
    answer: "Sim, você pode cancelar sua assinatura a qualquer momento. Basta acessar seu perfil e seguir as instruções para cancelar seu plano. O cancelamento impede a renovação automática do plano, e você continuará a ter acesso ao plano até o final do período contratado."
  },
  {
    question: "Como faço para contratar um serviço?",
    answer: "É simples! Basta procurar o serviço desejado na plataforma, visualizar os profissionais disponíveis, ler suas avaliações e entrar em contato com o prestador para solicitar um orçamento. A negociação do valor e condições do serviço é feita diretamente com o profissional."
  },
  {
    question: "O EncontreJá armazena meus dados pessoais?",
    answer: "Sim, mas garantimos que seus dados pessoais estão seguros e são utilizados de acordo com a nossa Política de Privacidade. Não compartilhamos suas informações com terceiros sem sua autorização."
  },
  {
    question: "O que devo fazer se um profissional não cumprir o combinado?",
    answer: "Se você tiver problemas com um profissional, recomendamos que entre em contato diretamente com ele para tentar resolver a situação. Caso não consiga, você pode nos enviar uma reclamação pelo e-mail suporte@useencontreja.com.br, e avaliaremos o caso para tomar as devidas providências."
  }

]

export function ModernFaq() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl text-black ">
            Perguntas frequentes
          </h1>
          <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Encontre respostas para perguntas comuns sobre nossos produtos e serviços.
          </p>
        </div>
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Input
              type="text"
              placeholder="Pesquisar FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <Accordion type="single" collapsible className="max-w-2xl mx-auto space-y-4">
          {filteredFaqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white dark:bg-blue-200 rounded-lg">
              <AccordionTrigger className="px-6 py-4 text-left text-orange-900 dark:text-white">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-gray-600 dark:text-white">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        {filteredFaqs.length === 0 && (
          <p className="text-center text-gray-600 mt-8">Não foram encontradas perguntas frequentes correspondentes. Por favor, tente um termo de pesquisa diferente.</p>
        )}
      </div>
    </div>
  )
}