import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

interface DetailsServiceProviderProps {
  dataServiceProvider?: {
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
  onClose
}: DetailsServiceProviderProps) {

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

  const provider = dataServiceProvider || defaultProvider;
  const servicePhotos = Array.isArray(provider.servicePhotos) && provider.servicePhotos.length > 0 
    ? provider.servicePhotos 
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
            src={provider.imgSrc}
            alt="Foto do Perfil"
            width={60}
            height={60}
            className="rounded-full"
            style={{ aspectRatio: "1/1", objectFit: "cover" }}
          />
          <div className="grid gap-1">
            <h2 className="text-lg font-bold">{provider.name}</h2>
            <div className="text-muted-foreground">
              <span className="font-medium">Localização:</span> {provider.location}
            </div>
            <div className="text-muted-foreground">
              <span className="font-medium">Avaliação:</span> {provider.rating} ★
            </div>
          </div>
        </div>
        <div className="flex flex-col text-muted-foreground">
          <div className="flex items-center gap-1 mb-1">
            <PhoneIcon className="w-4 h-4" />
            <span className="truncate">{provider.phone}</span>
          </div>
          <div className="flex items-center gap-1 mb-1">
            <MailOpenIcon className="w-4 h-4" />
            <span className="truncate">{provider.email}</span>
          </div>
          <div className="flex items-center gap-1">
            <WhatsappIcon className="w-4 h-4" />
            <span className="truncate">{provider.whatsapp}</span>
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
                <h3 className="text-lg font-semibold">Mais Detalhes do Serviço</h3>
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
              <p className="text-muted-foreground">{defaultProvider.description}</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            {servicePhotos.map((photo, index) => (
              <Image
                key={index}
                src={photo}
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
            <WhatsappIcon className="w-5 h-5 mr-2" />
            Entrar em contato no WhatsApp
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            <InstagramIcon className="w-5 h-5 mr-2" />
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
      <path d="M22 16.92v-2a1 1 0 0 0-1-1h-1.29a4.44 4.44 0 0 0-1.66-.82l-1.68-.28a1 1 0 0 0-1.07.72l-1.6 4.4a1 1 0 0 0 .65 1.26l3.48 1.15a8.9 8.9 0 0 1-3.6 3.69 1 1 0 0 0-.72 1.08l1.25 1.54a1 1 0 0 0 1.26.65l4.4-1.6a1 1 0 0 0 .72-1.07l-.28-1.68a4.44 4.44 0 0 0-.82-1.66H22a1 1 0 0 0 1-1z" />
      <path d="M2 8.4v2a1 1 0 0 0 1 1h1.29a4.44 4.44 0 0 0 1.66.82l1.68.28a1 1 0 0 0 1.07-.72l1.6-4.4a1 1 0 0 0-.65-1.26L6.65 4.65A8.9 8.9 0 0 1 10.1 1.96a1 1 0 0 0 .72-1.08L9.57-.64a1 1 0 0 0-1.26-.65L4.74 0.82a1 1 0 0 0-.72 1.07l.28 1.68a4.44 4.44 0 0 0 .82 1.66H2a1 1 0 0 0-1 1z" />
    </svg>
  );
}

function MailOpenIcon(props: any) {
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
      <path d="M22 12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" />
      <path d="M2 6l10 7 10-7" />
    </svg>
  );
}

function WhatsappIcon(props: any) {
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
      <path d="M21 15.5v-2a6 6 0 0 0-6-6h-8a6 6 0 0 0-6 6v2l-1.5 1.5v3l1.5 1.5v1.5h3L12 21l6-1.5h3v-1.5l1.5-1.5v-3L21 15.5zM4 12a8 8 0 0 1 8-8h8a8 8 0 0 1 8 8v2h-4a6 6 0 0 0-6 6v2H6v-2a6 6 0 0 0-6-6H0v-2z" />
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
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <line x1="16.5" y1="7.5" x2="16.5" y2="7.5" />
    </svg>
  );
}
