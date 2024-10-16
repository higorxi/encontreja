'use client';

import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { DetailsServiceProvider } from './details-service-provider';
import usePageTitle from '@/Hooks/usePageTittle';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { ModalSearchCity } from './modal-search-city';
import { FaSearch } from "react-icons/fa";
import { getAnuncios } from '@/service/advertisementService';

export function Advertisements() {
  const [locationFilter, setLocationFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');
  const [selectedProvider, setSelectedProvider] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cityModalOpen, setCityModalOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);
  const [hasMore, setHasMore] = useState(true);
  usePageTitle('Serviços - EncontreJA');
  const [userCity, setUserCity] = useState('');
  const [permissionModalOpen, setPermissionModalOpen] = useState(false);
  const [serviceProviders, setServiceProviders] = useState([])

  useEffect(() => {
    const storedCity = localStorage.getItem('userCity');
    if (storedCity) {
      setUserCity(storedCity);
      setLocationFilter(storedCity.toLowerCase().replace(/ /g, '-'));
      fetchServiceProviders(storedCity);
    } else {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            const city = await fetchCityName(latitude, longitude);
            if (city) {
              setUserCity(city);
              setLocationFilter(city.toLowerCase().replace(/ /g, '-'));
              localStorage.setItem('userCity', city);
              fetchServiceProviders(city);
            }
          },
          (error) => {
            console.log('Permissão negada ou ocorreu um erro ao acessar a localização:', error.message);
            setPermissionModalOpen(true);
          }
        );
      } else {
        console.log('Geolocalização não é suportada pelo seu navegador.');
      }
    }
  }, []);

  async function fetchCityName(latitude: number, longitude: number) {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
      );
      const data = await response.json();

      if (data && data.address && data.address.city) {
        return data.address.city;
      } else {
        console.log('Cidade não encontrada');
        return null;
      }
    } catch (error) {
      console.error('Erro ao buscar a cidade:', error);
      return null;
    }
  }

  async function fetchServiceProviders(city: string) {
    try {
      const response = await getAnuncios(city);
      setServiceProviders(response.content);
    } catch (error) {
      console.error('Erro ao buscar provedores de serviço:', error);
    }
  }

  const loadMore = () => {
    const newVisibleCount = visibleCount + 6;

    if (newVisibleCount >= serviceProviders.length) {
      setHasMore(false);
    }

    setVisibleCount(newVisibleCount);
  };

  const openProviderModal = (provider: any) => {
    setSelectedProvider(provider);
    setIsModalOpen(true);
  };

  const closeProviderModal = () => {
    setIsModalOpen(false);
    setSelectedProvider({});
  };

  const handleCityModalClose = () => {
    setCityModalOpen(false);
  };

  const handleCityChange = (newCity: string) => {
    setUserCity(newCity);
    setLocationFilter(newCity.toLowerCase().replace(/ /g, '-'));
    localStorage.setItem('userCity', newCity);
    fetchServiceProviders(newCity);
    setCityModalOpen(false);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 lg:mb-10">
        <div className="grid gap-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-center sm:text-left">
            Encontre o provedor de serviços perfeito
          </h1>
          <p className="text-muted-foreground text-center sm:text-left">
          Navegue em nosso diretório de profissionais confiáveis ​​em sua área.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4 sm:mt-0">
          <Button variant="orange" onClick={() => setCityModalOpen(true)}>
            {userCity || 'Selecione sua cidade'}
          </Button>
          <Select onValueChange={(value) => setTypeFilter(value)}>
            <SelectTrigger className="w-full sm:w-40 ">
              <SelectValue placeholder="Tipo de Serviço" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="descubra">
                <div className="flex items-center">
                  <strong>Descreva seu problema</strong>
                  <FaSearch  className="ml-2" />
                </div>
              </SelectItem>
              {['Cleaning', 'Landscaping', 'Plumbing', 'Electrician', 'Handyman'].map((type) => (
                <SelectItem key={type} value={type.toLowerCase()}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select onValueChange={(value) => setRatingFilter(value)}>
            <SelectTrigger className="w-full sm:w-40">
              <SelectValue placeholder="Avaliação" />
            </SelectTrigger>
            <SelectContent>
              {['5 estrelas', '4 estrelas', '3 estrelas', '2 estrelas', '1 estrelas'].map((rating) => (
                <SelectItem key={rating} value={rating.replace(/ estrelas| estrelas/g, '')}>
                  {rating}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
        {serviceProviders.slice(0, visibleCount).map((provider: any) => (
          <div
            key={provider.name}
            className="bg-gray-100 p-2 rounded-lg shadow-sm overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105"
            onClick={() => openProviderModal(provider)}
          >
            <div className="aspect-square rounded-lg overflow-hidden">
              <Image
                src={provider.user.profilePhotoUrl}
                alt="Prestador de serviço"
                width={400}
                height={400}
                className="w-full h-full object-cover"
                style={{ aspectRatio: '400/400', objectFit: 'cover' }}
              />
            </div>
            <div className="p-4 sm:p-6 ">
              <div className="flex items-center justify-between mb-2">
                <div className="text-lg font-semibold">{provider.user.name}</div>
                <div className="flex items-center gap-1 text-sm text-primary">
                  {Array.from({ length: 5 }, (_, index) => (
                    <StarIcon
                      key={index}
                      className={`w-4 h-4 ${
                        index < Math.floor(5) ? 'fill-primary' : 'fill-muted stroke-muted-foreground'
                      }`}
                    />
                  ))}
                  <span>(5)</span>
                </div>
              </div>
              <div className="text-muted-foreground mb-4">{provider.user.city}, {provider.user.uf}</div>
              <p className="text-sm leading-relaxed">{provider.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center mt-8 sm:mt-10 lg:mt-12">
        {hasMore && serviceProviders.length > 0 ? (
          <Button variant="outline" onClick={loadMore} disabled={serviceProviders.length === 0}>
            Carregar Mais
          </Button>
        ) : (
          <p className="text-muted-foreground">Não há mais provedores para carregar.</p>
        )}
      </div>

      {isModalOpen && selectedProvider && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 modal-overlay">
            <DetailsServiceProvider dataServiceProvider={selectedProvider} onClose={closeProviderModal} />
        </div>
      )}

      {cityModalOpen && <ModalSearchCity onSelectCity={handleCityChange} onClose={handleCityModalClose} />}
      <PermissionModal
        isOpen={permissionModalOpen}
        onClose={() => setPermissionModalOpen(false)}
        onSelectCity={() => {
          setPermissionModalOpen(false);
          setCityModalOpen(true);
        }}
      />
    </div>
  );
}

function StarIcon(props: any) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function PermissionModal({
  isOpen,
  onClose,
  onSelectCity,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSelectCity: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
      <div
        className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-semibold mb-4 text-center">Permissão de Localização Necessária</h2>
        <p className="mb-4 text-center">
          Precisamos do acesso à sua localização para melhorar a experiência do usuário. Por favor, ative a localização
          manualmente no seu navegador.
        </p>
        <div className="mb-4">
          <Image
            src="/placeholder.svg"
            alt="Como ativar a localização"
            width={300}
            height={200}
            className="w-full h-auto"
          />
        </div>
        <div className="flex flex-col gap-4 w-full">
          <Button onClick={onSelectCity} className="w-full">
            Selecionar cidade manualmente
          </Button>
        </div>
      </div>
    </div>
  );
}
