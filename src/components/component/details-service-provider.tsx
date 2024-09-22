"use client"
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { BsWhatsapp } from "react-icons/bs";
import { IoLogoInstagram } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { FaPhoneFlip } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { getAnuncio } from "@/service/advertisementService";
import { Loading } from "./loading";

interface DetailsServiceProviderProps {
  dataServiceProvider: any;
  dataServiceProvider1?: {
    imgSrc: string;
    name: string;
    location: string;
    rating: number;
    phone: string;
    email: string;
    type: string;
    whatsapp: string;
    description: string;
    servicePhotos: string[];
    details: {
      available: boolean;
      priceRange: string;
    };
  };
  onClose: () => void;
}

export function DetailsServiceProvider({
  dataServiceProvider,
  onClose,
}: DetailsServiceProviderProps) {
  const [serviceProvider, setServiceProvider] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const fetchServiceProvider = async () => {
      setLoading(true)
      try {
        const data = await getAnuncio(dataServiceProvider.id);
        setServiceProvider(data);
      } catch (err) {
        setError('Failed to fetch service provider');
      } finally {
        setLoading(false);
      }
    };

    fetchServiceProvider();
  }, []); 

  if (loading) {
    return <Loading/>
  }

  const defaultProvider = {
    imgSrc: "https://via.placeholder.com/80",
    name: "Nome do Prestador",
    location: "Localização",
    rating: 4.5,
    phone: "(11) 99999-9999",
    email: "exemplo@email.com",
    whatsapp: "(11) 99999-9999",
    description: "Descrição do serviço prestado.",
    servicePhotos: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    details: {
      available: true,
      priceRange: "$$$"
    }
  };

  const provider = serviceProvider || defaultProvider;
  const servicePhotos = Array.isArray(provider.photoUrls) && provider.photoUrls.length > 0 
    ? provider.photoUrls 
    : ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"];

  return (
    <>
    <Card className="w-full max-w-6xl mx-auto p-4 relative">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-8 h-8 bg-white text-black flex items-center justify-center rounded-2xl"
        aria-label="Fechar"
      >
        <CloseIcon className="w-5 h-5" />
      </button>
      <div className="flex items-start justify-between gap-4 p-4 bg-muted rounded-t-lg">
        <div className="flex items-center gap-4">
          <Image
            src={provider.user.profilePhotoUrl}
            alt="Foto do Perfil"
            width={60}
            height={60}
            className="rounded-full"
            style={{ aspectRatio: "1/1", objectFit: "cover" }}
          />
          <div className="grid gap-1">
            <h2 className="text-lg font-bold">{provider.user.name}</h2>
            <div className="text-muted-foreground">
              <span className="font-medium">Localização:</span> {provider.user.city}
            </div>
            <div className="text-muted-foreground">
              <span className="font-medium">Avaliação:</span> 5 ★
            </div>
          </div>
        </div>
        <div className="flex flex-col text-muted-foreground">
          <div className="flex items-center gap-1 mb-1">
            <FaPhoneFlip className="w-4 h-4" />
            <span className="truncate">{defaultProvider.phone} <strong>PRECISA RESOLVER</strong></span>
          </div>
          <div className="flex items-center gap-1 mb-1">
            <CiMail className="w-4 h-4" />
            <span className="truncate">{defaultProvider.email} <strong>PRECISA RESOLVER</strong></span>
          </div>
          <div className="flex items-center gap-1">
            <BsWhatsapp className="w-4 h-4" />
            <span className="truncate">{provider.whatsappNumber}</span>
          </div>
        </div>
      </div>
      <CardContent className="p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Detalhes do Serviço Column */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Detalhes do Serviço */}
              <div className="grid gap-2">
                <h3 className="text-lg font-semibold">Detalhes do Serviço</h3>
                <div className="grid gap-1 text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <BriefcaseIcon className="w-4 h-4" />
                    <span>Serviços de Encanamento</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <HomeIcon className="w-4 h-4" />
                    <span>Visitas Domiciliares</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ClockIcon className="w-4 h-4" />
                    <span>Seg-Sex, 9h - 17h</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-medium">Disponível:</span> Sim
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-medium">Faixa de Preço:</span> {defaultProvider.details.priceRange}
                  </div>
                </div>
              </div>
              <div className="grid gap-2">
                <h3 className="text-lg font-semibold">Mais Detalhes</h3>
                <div className="grid gap-1 text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <span className="font-medium">Disponível:</span>
                    <span>{defaultProvider.details.available ? "Sim" : "Não"}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-medium">Faixa de Preço:</span>
                    <span>{defaultProvider.details.priceRange}</span>
                  </div>
                </div>
              </div>
            </div>
            <Separator className='mt-2'/>
            <div className="grid gap-2 mt-2">
              <h3 className="text-lg font-semibold">Sobre</h3>
              <p className="text-muted-foreground">{serviceProvider.description}</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            {servicePhotos.map((photoUrls: string, index: number) => (
              <Image
                key={index}
                src={photoUrls}
                alt={`Foto do Serviço ${index + 1}`}
                width={120} 
                height={120} 
                className="w-full h-auto rounded-lg object-cover"
                style={{ height: "120px", objectFit: "cover" }}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-between gap-2 mt-4">
          <a
            href={`https://wa.me/+5562985194415`} 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            <BsWhatsapp className="w-5 h-5 mr-2" />
            Entrar em contato no WhatsApp
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            <IoLogoInstagram className="w-5 h-5 mr-2" />
            Visualizar portfólio/Instagram
          </a>
        </div>
      </CardContent>
    </Card>
    </>
  );
}

function BriefcaseIcon(props: any) {
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
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

function CloseIcon(props: any) {
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
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function ClockIcon(props: any) {
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
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function HomeIcon(props: any) {
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
      <path d="M3 9l9-7 9 7v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" />
      <path d="M9 22V12h6v10" />
    </svg>
  );
}

