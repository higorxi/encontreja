import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

export function ModalProfile({ onClose }: { onClose: () => void }) {
  return (
    <Dialog defaultOpen onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
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
                  <Link href="/perfil">
                  Visualize maiores informações do seu perfil.
                  </Link>
                  </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome</Label>
                    <Input id="name" defaultValue="Jared Palmer" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="jared@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Sobre</Label>
                  <Textarea
                  id="bio"
                  rows={3}
                  placeholder="Fale mais sobre você..."
                  className="w-full h-24 resize-none"
                />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="ml-auto" onClick={onClose}>Salvar Alterações</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="password">
            <Card>
              <CardHeader>
                <CardTitle>Alterar Senha</CardTitle>
                <CardDescription>Atualize sua senha aqui. Após salvar, você será desconectado.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Senha Atual</Label>
                  <Input id="current-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password">Nova Senha</Label>
                  <Input id="new-password" type="password" />
                  <div className="text-sm text-muted-foreground">
                    A senha deve ter pelo menos 8 caracteres e conter pelo menos uma letra maiúscula, uma letra minúscula e um número.
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirmar Senha</Label>
                  <Input id="confirm-password" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="ml-auto" onClick={onClose}>Alterar Senha</Button>
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
