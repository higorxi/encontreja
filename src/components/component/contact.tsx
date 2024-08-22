import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section className="bg-background text-foreground py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-xl mx-auto space-y-6">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Fale conosco</h2>
            <p className="text-muted-foreground">Preencha o formulário abaixo para entrar em contato.</p>
          </div>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome</Label>
                <Input id="name" placeholder="Digite seu nome" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Telefone</Label>
                <Input id="phone" placeholder="Digite seu telefone" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Digite seu email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Mensagem</Label>
              <Textarea id="message" placeholder="Descreva sua dúvida ou problema" className="min-h-[150px]" />
            </div>
            <Button type="submit" className="w-full">
              Enviar
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
