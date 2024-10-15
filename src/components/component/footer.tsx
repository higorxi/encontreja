import Link from 'next/link';
import Logo from '../ui/logo';

export function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2024 EncontreJá. Todos os direitos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="/faq">
          FAQ
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="/parceiros">
          Parceiros
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="/termos-de-uso">
          Termos de Uso
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="/politica-de-privacidade">
          Política de Privacidade
          </a>
        </nav>
      </footer>
    // <footer className="bg-black text-white py-12 border-t">
    //   <div className="container mx-auto px-4 md:px-6 max-w-7xl">
    //     <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
    //       <div className="flex flex-col items-start gap-4">
    //         <Logo/>
    //         <div className="flex flex-col gap-2 text-sm">
    //           <div className="flex items-center gap-2">
    //             <PhoneIcon className="w-4 h-4" />
    //             <span>+55 (62) 98519-4415</span>
    //           </div>
    //           <div className="flex items-center gap-2">
    //             <MailIcon className="w-4 h-4" />
    //             <span>suporte@useencontreja.com.br</span>
    //           </div>
    //           <div className="flex items-center gap-2">
    //             <MapPinIcon className="w-4 h-4" />
    //             <span>Anápolis, Goiás, Brasil</span>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="grid grid-cols-2 gap-6 md:gap-12">
    //         <div className="grid gap-2">
    //           <h4 className="text-lg font-extrabold">Companhia</h4>
    //           <Link href="#" className="hover:underline hover:text-blue-300" prefetch={false}>
    //             Sobre
    //           </Link>
    //           <Link href="/#why" className="hover:underline hover:text-blue-300" prefetch={false}>
    //             Serviços
    //           </Link>
    //           <Link href="/#price" className="hover:underline hover:text-blue-300" prefetch={false}>
    //             Preços
    //           </Link>
    //           <Link href="/#contact" className="hover:underline hover:text-blue-300" prefetch={false}>
    //             Contate-nos
    //           </Link>
    //         </div>
    //         <div className="grid gap-2">
    //           <h4 className="text-lg font-extrabold">Recursos</h4>
    //           <Link href="/faq" className="hover:underline hover:text-blue-300" prefetch={false}>
    //             FAQ
    //           </Link>
    //           <Link href="/parceiros" className="hover:underline hover:text-blue-300" prefetch={false}>
    //             Parceiros
    //           </Link>
    //           <Link href="/termos-de-uso" className="hover:underline hover:text-blue-300" prefetch={false}>
    //             Termos de Uso
    //           </Link>
    //           <Link href="/politica-de-privacidade" className="hover:underline hover:text-blue-300" prefetch={false}>
    //             Política de Privacidade
    //           </Link>
    //         </div>
    //       </div>
    //       <div className="flex flex-col gap-4">
    //         <h4 className="text-lg font-extrabold">Redes sociais</h4>
    //         <div className="flex gap-4">
    //           <Link href="#" className="text-muted-foreground hover:text-primary" prefetch={false}>
    //             <TwitterIcon className="w-6 h-6 hover:text-blue-200" />
    //           </Link>
    //           <Link href="#" className="text-muted-foreground hover:text-primary" prefetch={false}>
    //             <FacebookIcon className="w-6 h-6 hover:text-blue-600" />
    //           </Link>
    //           <Link href="https://www.instagram.com/useencontreja" className="text-muted-foreground hover:text-primary" prefetch={false}>
    //             <InstagramIcon className="w-6 h-6 hover:text-orange-500" />
    //           </Link>
    //           <Link href="#" className="text-muted-foreground hover:text-primary" prefetch={false}>
    //             <LinkedinIcon className="w-6 h-6 hover:text-blue-600" />
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="mt-12 text-center text-sm">
    //       <p>&copy; 2024 EncontreJá. Todos os direitos reservados.</p>
    //     </div>
    //   </div>
    // </footer>
  );
}

function FacebookIcon(props: any) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props: any) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props: any) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function MailIcon(props: any) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
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
  );
}

function PhoneIcon(props: any) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function TwitterIcon(props: any) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
