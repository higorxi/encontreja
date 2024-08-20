import { Dialog, DialogContent, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function ModalLogout({ onClose }: { onClose: () => void }) {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <div className="flex flex-col items-center justify-center gap-4 py-8">
          <CircleIcon className="size-12 text-muted" />
          <div className="space-y-2 text-center">
            <h3 className="text-lg font-medium">Logout Confirmation</h3>
            <p className="text-muted-foreground">Are you sure you want to logout?</p>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" className="mr-2" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={() => {
            // Handle logout logic here
            onClose();
          }}>
            Confirm
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
