import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

export function RecoveryPassword({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState<"email" | "code" | "success">("email");

  const handleSubmitEmail = (event: React.FormEvent) => {
    event.preventDefault();
    // Add logic to send recovery email
    setStep("code"); // Move to the next step
  };

  const handleSubmitCode = (event: React.FormEvent) => {
    event.preventDefault();
    // Add code validation logic here
    setStep("success"); // Move to the success step
  };

  const handleClose = () => {
    setStep("email"); // Reset to initial step
    onClose(); // Close the dialog
  };

  return (
    <Dialog open onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {step === "email" && "Recover Password"}
            {step === "code" && "Verificar Código"}
            {step === "success" && "Sucesso"}
          </DialogTitle>
          <DialogDescription>
            {step === "email" && "Digite seu endereço de e-mail e enviaremos um código para redefinir sua senha."}
            {step === "code" && "Insira o código enviado para o seu e-mail para continuar com a recuperação de senha."}
            {step === "success" && "Sua senha foi redefinida com sucesso. Você pode agora fazer login com sua nova senha."}
          </DialogDescription>
        </DialogHeader>

        {step === "email" && (
          <form onSubmit={handleSubmitEmail} className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="joaobatista@email.com"
              />
            </div>
            <DialogFooter>
              <Button type="submit">Enviar código de recuperação</Button>
              <Button variant="outline" onClick={handleClose}>Cancelar</Button>
            </DialogFooter>
          </form>
        )}

        {step === "code" && (
          <form onSubmit={handleSubmitCode} className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="code">Código</Label>
              <Input
                id="code"
                type="text"
                placeholder="Digite o código"
              />
            </div>
            <DialogFooter>
              <Button type="submit">Validar Código</Button>
              <Button variant="outline" onClick={handleClose}>Cancelar</Button>
            </DialogFooter>
          </form>
        )}

        {step === "success" && (
          <DialogFooter>
            <Button onClick={handleClose}>Fechar</Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
}
