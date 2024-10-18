import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { useUser } from '@/contexts/AuthContext';

export function ModalProfile({ onClose }: { onClose: () => void }) {
  const [isPasswordVerified, setIsPasswordVerified] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isCheckingPassword, setIsCheckingPassword] = useState(false);
  const user = useUser();
  const handleVerifyPassword = async () => {
    setIsCheckingPassword(true);
    const isCorrect = await fakeVerifyPassword(currentPassword);
    setIsCheckingPassword(false);
    if (isCorrect) {
      setIsPasswordVerified(true);
    } else {
      toast.error('Senha atual incorreta');
    }
  };

  const fakeVerifyPassword = async (password: string) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(password === 'senhaCorreta');
      }, 1000);
    });
  };

  return (
    <Dialog defaultOpen onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] ">
        <Tabs defaultValue="account" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="account">Conta</TabsTrigger>
            <TabsTrigger value="password">Senha</TabsTrigger>
            <TabsTrigger value="delete">Excluir</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>Informações da Conta</CardTitle>
                <CardDescription>Atualize os detalhes do seu perfil aqui.</CardDescription>
                <CardDescription>
                  <Link href="/perfil">Para visualizar seu anuncio, clique aqui</Link>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome</Label>
                    <Input id="name" defaultValue={user?.name} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue={user?.email} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Telefone</Label>
                    <Input id="phone" type="number" defaultValue="(11) 99999-9999" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">CPF</Label>
                    <Input id="document" type="text" defaultValue={user?.document} />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="ml-auto" onClick={onClose}>
                  Salvar Alterações
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          {/* Conteúdo da aba Senha */}
          <TabsContent value="password">
            <Card>
              <CardHeader>
                <CardTitle>Alterar Senha</CardTitle>
                <CardDescription>Atualize sua senha aqui.</CardDescription>
                <CardDescription>Após salvar, você será desconectado.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {!isPasswordVerified ? (
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Senha Atual</Label>
                    <Input
                      id="current-password"
                      type="password"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                    />
                    <Button onClick={handleVerifyPassword} disabled={isCheckingPassword}>
                      {isCheckingPassword ? 'Verificando...' : 'Verificar Senha'}
                    </Button>
                  </div>
                ) : (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="new-password">Nova Senha</Label>
                      <Input
                        id="new-password"
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                      />

                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">Confirmar Nova Senha</Label>
                        <Input
                          id="confirm-password"
                          type="password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                      </div>
                      <div className="text-sm text-muted-foreground">
                        A senha deve atender aos seguintes requisitos:
                      </div>
                      <ul className="list-disc pl-5 text-sm text-muted-foreground">
                        <li>Pelo menos 8 caracteres</li>
                        <li>Pelo menos uma letra maiúscula</li>
                        <li>Pelo menos uma letra minúscula</li>
                        <li>Pelo menos um número</li>
                        <li>Opcional: Pelo menos um caractere especial (ex: !@#$%)</li>
                      </ul>
                    </div>
                  </>
                )}
              </CardContent>

              <CardFooter>
                {isPasswordVerified && (
                  <Button className="ml-auto" onClick={onClose}>
                    Alterar Senha
                  </Button>
                )}
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="delete">
            <Card>
              <CardHeader>
                <CardTitle>Excluir Conta</CardTitle>
                <CardDescription>
                  Esta ação não pode ser desfeita. Sua conta e todos os seus dados serão excluídos permanentemente.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="confirm-delete">Digite &rdquo;EXCLUIR&rdquo; para confirmar</Label>
                  <Input id="confirm-delete" />
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="destructive" className="ml-auto" onClick={onClose}>
                  Excluir Conta
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
