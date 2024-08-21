"use client";

import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";
import serviceProviders from "@/lib/providers";
import { DetailsServiceProvider } from "./details-service-provider";
import usePageTitle from "@/Hooks/usePageTittle";

export function Advertisements() {
  const [locationFilter, setLocationFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);
  const [hasMore, setHasMore] = useState(true);
  usePageTitle('Serviços - EncontreJA');

  const filteredProviders = serviceProviders.filter(provider => {
    const locationMatch = locationFilter ? provider.location.toLowerCase().includes(locationFilter) : true;
    const typeMatch = typeFilter ? provider.type === typeFilter : true;
    const ratingMatch = ratingFilter ? provider.rating >= parseFloat(ratingFilter) : true;

    return locationMatch && typeMatch && ratingMatch;
  });

  const loadMore = () => {
    const newVisibleCount = visibleCount + 6;

    if (newVisibleCount >= filteredProviders.length) {
      setHasMore(false);
    }

    setVisibleCount(newVisibleCount);
  };

  const openModal = (provider: any) => {
    setSelectedProvider(provider);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProvider(null);
  };

  const handleClickOutside = (event: any) => {
    if (event.target.classList.contains('modal-overlay')) {
      closeModal();
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 lg:mb-10">
        <div className="grid gap-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-center sm:text-left">Encontre o provedor de serviços perfeito</h1>
          <p className="text-muted-foreground text-center sm:text-left">Browse our directory of trusted professionals in your area.</p>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4 sm:mt-0">
          <Select onValueChange={(value) => setLocationFilter(value)}>
            <SelectTrigger className="w-full sm:w-40">
              <SelectValue placeholder="Localização" />
            </SelectTrigger>
            <SelectContent>
              {["San Francisco", "Los Angeles", "New York", "Chicago", "Miami"].map(location => (
                <SelectItem key={location} value={location.toLowerCase().replace(/ /g, '-')}>{location}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select onValueChange={(value) => setTypeFilter(value)}>
            <SelectTrigger className="w-full sm:w-40">
              <SelectValue placeholder="Tipo de Serviço" />
            </SelectTrigger>
            <SelectContent>
              {["Cleaning", "Landscaping", "Plumbing", "Electrician", "Handyman"].map(type => (
                <SelectItem key={type} value={type.toLowerCase()}>{type}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select onValueChange={(value) => setRatingFilter(value)}>
            <SelectTrigger className="w-full sm:w-40">
              <SelectValue placeholder="Avaliação" />
            </SelectTrigger>
            <SelectContent>
              {["5 stars", "4 stars", "3 stars", "2 stars", "1 star"].map(rating => (
                <SelectItem key={rating} value={rating.replace(/ stars| star/g, '')}>{rating}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
        {filteredProviders.slice(0, visibleCount).map(provider => (
          <div
            key={provider.name}
            className="bg-background rounded-lg shadow-sm overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105"
            onClick={() => openModal(provider)}
          >
            <div className="aspect-square">
              <Image
                src={provider.imgSrc}
                alt="Service Provider"
                width={400}
                height={400}
                className="w-full h-full object-cover"
                style={{ aspectRatio: "400/400", objectFit: "cover" }}
              />
            </div>
            <div className="p-4 sm:p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="text-lg font-semibold">{provider.name}</div>
                <div className="flex items-center gap-1 text-sm text-primary">
                  {Array.from({ length: 5 }, (_, index) => (
                    <StarIcon
                      key={index}
                      className={`w-4 h-4 ${index < Math.floor(provider.rating) ? "fill-primary" : "fill-muted stroke-muted-foreground"}`}
                    />
                  ))}
                  <span>({provider.rating.toFixed(1)})</span>
                </div>
              </div>
              <div className="text-muted-foreground mb-4">{provider.location}</div>
              <p className="text-sm leading-relaxed">{provider.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center mt-8 sm:mt-10 lg:mt-12">
        {hasMore ? (
          <Button variant="outline" onClick={loadMore}>Load More</Button>
        ) : (
          <p className="text-muted-foreground">Não há mais provedores para carregar.</p>
        )}
      </div>

      {isModalOpen && selectedProvider && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 modal-overlay"
          onClick={handleClickOutside}
        >
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <DetailsServiceProvider
              dataServiceProvider={selectedProvider}
              onClose={closeModal}
            />
          </div>
        </div>
      )}
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
