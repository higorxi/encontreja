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
    <Card className="w-full max-w-6xl mx-auto">
      <div className="flex items-start justify-between gap-6 p-6 bg-muted rounded-t-lg">
        <div className="flex items-center gap-6">
          <Image
            src={provider.imgSrc}
            alt="Profile Picture"
            width={80}
            height={80}
            className="rounded-full"
            style={{ aspectRatio: "1/1", objectFit: "cover" }}
          />
          <div className="grid gap-2">
            <h2 className="text-xl font-bold">{provider.name}</h2>
            <div className="text-muted-foreground">
              <span className="font-medium">Location:</span> {provider.location}
            </div>
            <div className="text-muted-foreground">
              <span className="font-medium">Rating:</span> {provider.rating} ★
            </div>
          </div>
        </div>
        <div className="flex flex-col text-muted-foreground">
          <div className="flex items-center gap-2 mb-2">
            <PhoneIcon className="w-5 h-5" />
            <span className="truncate">{provider.phone}</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <MailOpenIcon className="w-5 h-5" />
            <span className="truncate">{provider.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <WhatsappIcon className="w-5 h-5" />
            <span className="truncate">{provider.whatsapp}</span>
          </div>
        </div>
      </div>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Service Details Column */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Service Details */}
              <div className="grid gap-4">
                <h3 className="text-lg font-semibold">Service Details</h3>
                <div className="grid gap-2 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <BriefcaseIcon className="w-5 h-5" />
                    <span>Plumbing Services</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <HomeIcon className="w-5 h-5" />
                    <span>Home Visits</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ClockIcon className="w-5 h-5" />
                    <span>Mon-Fri, 9am - 5pm</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Available:</span> Yes
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Price Range:</span> {defaultProvider.details.priceRange}
                  </div>
                </div>
              </div>
              <div className="grid gap-4">
                <h3 className="text-lg font-semibold">Mais Detalhes do Serviço</h3>
                <div className="grid gap-2 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Disponível:</span>
                    <span>{defaultProvider.details.available ? "Sim" : "Não"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Faixa de Preço:</span>
                    <span>{defaultProvider.details.priceRange}</span>
                  </div>
                </div>
              </div>
            </div>
            <Separator className='mt-4'/>
            <div className="grid gap-2 mt-4">
              <h3 className="text-lg font-semibold">About</h3>
              <p className="text-muted-foreground">{provider.description}</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {servicePhotos.map((photo, index) => (
              <Image
                key={index}
                src={photo}
                alt={`Service Photo ${index + 1}`}
                width={150}  // provide width
                height={150} // provide height
                className="w-full h-auto rounded-lg object-cover"
                style={{ height: "150px", objectFit: "cover" }}
              />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
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
      <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h1.4L11 8l3.6-1.6L20 8.4" />
      <path d="M3 6h18M3 10l9 5 9-5" />
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
      <path d="M22 16.92v-3a2 2 0 0 0-2-2h-1.07a2 2 0 0 0-1.9 1.38l-1.27 4.75a2 2 0 0 0 1.53 2.37l2.12.71a2 2 0 0 0 2.37-1.53l.5-1.89a2 2 0 0 0-1.38-2.36zM12 3a9 9 0 0 0 0 18c4.97 0 9-4.03 9-9S16.97 3 12 3zM4.28 8.71A2 2 0 0 0 5.57 7l1.22-1.21A2 2 0 0 0 7 5.57l2.52.51A2 2 0 0 0 10 7a2 2 0 0 0 0 .57l-.5 2.5A2 2 0 0 0 11 11l-1.71 1.71a2 2 0 0 0-1.09-1.41l-.86-.35a2 2 0 0 0-1.48.35L4.28 8.71z" />
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
      <path d="M19 18.09l-1.74-1.73c-.39-.39-.78-.55-1.09-.55-.29 0-.67.16-1.04.55l-1.11 1.11a.99.99 0 0 1-.66.27c-.09 0-.18-.02-.27-.03a9.95 9.95 0 0 1-3.21-.75 8.99 8.99 0 0 1-5.88-5.88c-.5-1.4-.76-2.81-.76-4.22s.26-2.81.76-4.22a8.99 8.99 0 0 1 5.88-5.88c1.41-.5 2.82-.76 4.22-.76 1.4 0 2.81.26 4.22.76a8.99 8.99 0 0 1 5.88 5.88c.5 1.41.76 2.82.76 4.22s-.26 2.81-.76 4.22a8.99 8.99 0 0 1-5.88 5.88c-1.41.5-2.82.76-4.22.76-.29 0-.67-.16-1.04-.55l-1.11-1.11a.99.99 0 0 1-1.09-.28zM12 2.99c-2.21 0-4.38.65-6.22 1.84a7.94 7.94 0 0 0-4.35 4.35C1.29 10.62.64 12.79.64 15c0 1.81.37 3.64 1.1 5.32a7.96 7.96 0 0 0 4.29 4.29c1.68.73 3.51 1.1 5.32 1.1 1.43 0 2.83-.28 4.15-.82a7.94 7.94 0 0 0 4.35-4.35c1.19-1.84 1.84-3.98 1.84-6.22s-.65-4.38-1.84-6.22a7.94 7.94 0 0 0-4.35-4.35A7.94 7.94 0 0 0 12 2.99zM15.65 14.5l-1.33 1.33a.99.99 0 0 1-1.37 0l-1.09-1.1a.99.99 0 0 1 0-1.37l1.33-1.33a.99.99 0 0 1 1.37 0l1.09 1.1a.99.99 0 0 1 0 1.37z" />
    </svg>
  );
}
