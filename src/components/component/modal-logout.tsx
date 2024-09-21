import { Dialog, DialogContent, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { IoIosLogOut } from "react-icons/io";

export function ModalLogout({ onClose }: { onClose: () => void }) {
  const { logout } = useAuth();
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <div className="flex flex-col items-center justify-center gap-4 py-8">
          <IoIosLogOut className="size-12 text-muted" />
          <div className="space-y-2 text-center">
            <h3 className="text-lg font-medium">Confirmação de Logout</h3>
            <p className="text-muted-foreground">Tem certeza de que deseja sair?</p>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" className="mr-2" onClick={onClose}>
            Cancelar
          </Button>
          <Button onClick={async () => {
            await logout()
            onClose();
          }}>
            Sair
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function CircleIcon(props: any) {
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
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}
