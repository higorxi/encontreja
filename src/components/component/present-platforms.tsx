import Link from "next/link";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import ImagePlataform from "../../../public/HomeScreen/WallpaperHome (10).svg";
import Image from "next/image";

export function PresentPlatforms() {
  return (
    <section className="relative w-full min-w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-blue-100 overflow-hidden">

      <div className="container mx-auto flex flex-col items-center justify-center gap-8 px-4 md:px-6 lg:flex-row lg:justify-between lg:gap-12">
        <div className="space-y-6 text-center lg:text-left lg:space-y-8">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight md:text-5xl">
            Esteja 100% conectado com nossos serviços
          </h2>
          <p className="text-lg text-gray-700 max-w-xl mx-auto lg:mx-0 lg:text-base">
            Baixe nosso aplicativo e tenha acesso a todos os nossos serviços de forma rápida e prática.
          </p>
          <div className="flex flex-col items-center gap-4 lg:items-center lg:gap-6">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
              <span className="inline-flex items-center justify-center rounded-lg bg-gray-400 px-6 py-3 text-sm font-semibold text-gray-500 shadow-lg cursor-not-allowed">
                <FaGooglePlay className="mr-2 h-6 w-6" />
                Play Store (em breve)
              </span>
              <span className="inline-flex items-center justify-center rounded-lg bg-gray-400 px-6 py-3 text-sm font-semibold text-gray-500 shadow-lg cursor-not-allowed">
                <FaApple className="mr-2 h-6 w-6" />
                App Store (em breve)
              </span>
            </div>
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-AzulProfundo px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-AzulProfundo"
              prefetch={false}
            >
              <BiWorld className="mr-2 h-6 w-6" />
              Acesse nosso site!
            </Link>
          </div>
        </div>
        <Image
          src={ImagePlataform}
          width={600}
          height={400}
          alt="Imagem de conexão"
          className="w-full max-w-xl"
          style={{ aspectRatio: "3 / 2", objectFit: "cover" }}
        />
      </div>

    </section>
  );
}
