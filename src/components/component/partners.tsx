import Link from "next/link";
import LogoEzzpay from '../../../public/logo/LogoParceiros/EzzPayLogo.png';
import LogoFigurati from '../../../public/logo/LogoParceiros/logo-figurati.svg';
import LogoStripe from '../../../public/logo/LogoParceiros/StripeLogo.svg';
import Image from "next/image";

export function Partners() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto grid gap-8 px-4 md:px-6 text-center">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nossos Parceiros</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Conheça as empresas que nos ajudam a oferecer os melhores serviços para nossos clientes.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-items-center">
          {/* Ezzpay */}
          <div className="relative overflow-hidden rounded-lg bg-background shadow-lg transition-transform duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2 w-[380px]">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">Ver parceiro</span>
            </Link>
            <div className="flex h-32 items-center justify-center bg-muted">
              <Image
                src={LogoEzzpay}
                width={120}
                height={60}
                alt="Ezzpay"
                className="aspect-[2/1] object-contain object-center"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">Ezzpay</h3>
              <p className="text-sm text-muted-foreground">Solução de pagamentos inovadora.</p>
            </div>
          </div>

          {/* Stripe */}
          <div className="relative overflow-hidden rounded-lg bg-background shadow-lg transition-transform duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2 w-[380px]">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">Ver parceiro</span>
            </Link>
            <div className="flex h-32 items-center justify-center bg-muted">
              <Image
                src={LogoStripe}
                width={120}
                height={60}
                alt="Stripe"
                className="aspect-[2/1] object-contain object-center"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">Stripe</h3>
              <p className="text-sm text-muted-foreground">Plataforma global de pagamentos.</p>
            </div>
          </div>

          {/* Figurati */}
          <div className="relative overflow-hidden rounded-lg bg-background shadow-lg transition-transform duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2 w-[380px]">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">Ver parceiro</span>
            </Link>
            <div className="flex h-32 items-center justify-center bg-muted">
              <Image
                src={LogoFigurati} 
                width={120}
                height={60}
                alt="Figurati Design"
                className="aspect-[2/1] object-contain object-center"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">Figurati Design</h3>
              <p className="text-sm text-muted-foreground">Design e branding de alta qualidade.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
