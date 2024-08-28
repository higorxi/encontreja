import Link from "next/link";
import Image from "next/image";
import LogoAzulLaranjaLupa from "../../../public/logo/encontreja-logo-mini-azul-laranja.svg";
import LogoCinzaBrancoLupa from "../../../public/logo/encontreja-logo-mini-branco-cinza.svg";

interface LogoAlternativeProps {
  logoType?: number;
  className?: string;
}

export default function LogoAlternative({ logoType = 1, className }: LogoAlternativeProps) {
  let logoSrc;

  switch (logoType) {
    case 2:
      logoSrc = LogoCinzaBrancoLupa;
      break;
    case 3:
      logoSrc = LogoCinzaBrancoLupa;
      break;
    default:
      logoSrc = LogoAzulLaranjaLupa;
  }

  return (
    <Link href="/" className="flex items-center gap-2" prefetch={false}>
      <Image
        src={logoSrc}
        alt="Logo Encontre Já"
        width={38}
        height={38}
        className={`object-cover ${className}`} // Adicionar className aqui
      />
    </Link>
  );
}
