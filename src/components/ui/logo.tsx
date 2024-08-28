import Link from "next/link";
import Image from "next/image";
import LogoAzulLaranja  from "../../../public/logo/encontreja-logo-azul-laranja.svg"

export default function Logo(){
    return(
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Image
          src={LogoAzulLaranja}
          alt="Logo Encontre Já versão azul e laranja"
          width={293}
          height={38}
          className="w-full object-cover"
          style={{ aspectRatio: '293/38', objectFit: 'cover' }}
        />
        </Link>
    )
}