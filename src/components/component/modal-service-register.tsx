import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { useEffect, useState } from 'react';
import { AiOutlineDelete, AiOutlineReload } from 'react-icons/ai';
import Image from 'next/image';
import InputMask from 'react-input-mask';
import { createAnuncio, listServices, updateAnuncioPhotosURL } from '@/service/advertisementService';
import { advertisementDetails } from '@/@types/advertisement';
import { toast } from 'react-toastify';
import InfoIcon from './infoIcon';
import axios from 'axios';
import { Service } from '@/@types/interfaces/Service';
import { useUser } from '@/contexts/AuthContext';

export function ModalServiceRegister({ onClose }: any) {
  const user = useUser();
  const [images, setImages] = useState<(File | null)[]>([null, null, null]);
  const [imagePreviews, setImagePreviews] = useState<(string | null)[]>([null, null, null]);
  const [selectedService, setSelectedService] = useState({
    id: '',
    description: ''
  });
  const [services, setServices] = useState<Service[]>([]);
  const [hasServiceLocation, setHasServiceLocation] = useState(false);
  const [linkWebsitePortfolio, setLinkWebsitePortfolio] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [serviceLocation, setServiceLocation] = useState('');
  const [paymentMethods, setPaymentMethods] = useState({
    card: false,
    pix: false,
    cash: false,
  });
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const metadata = JSON.stringify({
    description: `Imagens do serviço de: ${user?.name}`,
    category: 'servico',
    tags: ['foto', 'servico'],
  });

  async function fetchServices() {
    try {
      const response = await listServices();
      setServices(response);
    } catch (error) {
      console.error('Erro ao buscar provedores de serviço:', error);
    }
  }

  useEffect(() => {
    fetchServices();
  }, []);

  const handleImageChange = (e: any, index: number) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImages((prevImages) => {
        const updatedImages = [...prevImages];
        updatedImages[index] = file;
        return updatedImages;
      });
      setImagePreviews((prevPreviews) => {
        const updatedPreviews = [...prevPreviews];
        updatedPreviews[index] = imageUrl;
        return updatedPreviews;
      });
    }
  };

  const handleDrop = (e: any, index: number) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImages((prevImages) => {
        const updatedImages = [...prevImages];
        updatedImages[index] = file;
        return updatedImages;
      });
      setImagePreviews((prevPreviews) => {
        const updatedPreviews = [...prevPreviews];
        updatedPreviews[index] = imageUrl;
        return updatedPreviews;
      });
    }
  };

  const handleImageRemove = (index: number) => {
    setImages((prevImages) => {
      const updatedImages = [...prevImages];
      updatedImages[index] = null;
      return updatedImages;
    });
    setImagePreviews((prevPreviews) => {
      const updatedPreviews = [...prevPreviews];
      updatedPreviews[index] = null;
      return updatedPreviews;
    });
  };

  const handleServiceLocationChange = () => {
    setHasServiceLocation((prev) => !prev);
  };

  const handlePaymentMethodChange = (method: keyof typeof paymentMethods) => {
    setPaymentMethods((prev) => ({ ...prev, [method]: !prev[method] }));
  };

  const handleUpload = async () => {
    if (!images || images.length === 0) {
      alert('Por favor, selecione pelo menos uma imagem antes de enviar.');
      return;
    }

    const uploadPromises = images.map(async (image: any) => {
      const formData = new FormData();
      formData.append('file', image);
      formData.append('metadata', metadata);

      try {
        const response = await axios.post('/api/uploadImageAdvertisement', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        return response.data[0];
      } catch (error) {
        console.error('Erro ao enviar a imagem:', error);
        throw error;
      }
    });

    try {
      const results = await Promise.all(uploadPromises);
      console.log('Todas as imagens foram enviadas com sucesso:', results);
    } catch (error) {
      console.error('Erro ao enviar as imagens:', error);
    }
  };

  const handleRegisterAD = async () => {
    setLoading(true);
    try {
      const data = {
        user: { document: user?.document },
        title,
        description,
        price: 1,
        whatsappNumber,
        acceptPix: paymentMethods.pix,
        acceptCard: paymentMethods.card,
        acceptMoney: paymentMethods.cash,
        hasServiceLocation: hasServiceLocation,
        serviceLocation,
        linkWebsitePortfolio,
        servicesAvailable: selectedService
      };
      const response = await createAnuncio(data as advertisementDetails);
      if (response) {
        const urlImages = await handleUpload();
        //await updateAnuncioPhotosURL('ID DO SERVIÇO', urlImages);
        toast.success('Anuncio criado com sucesso');
        onClose();
      } else {
        toast.error("Erro ao salvar imagens do serviço, atualize em 'Meu anuncio(s)' ");
        throw new Error("Erro ao salvar imagens do serviço, atualize em 'Meu anuncio(s)'");
      }
    } catch (error) {
      toast.error('Erro ao criar anuncio, tente novamente!');
    } finally {
      setLoading(false);
    }
  };

  const handleServiceChange = (id: string) => {
    const selected = services.find(service => service.id === id);
    if (selected) {
      setSelectedService({
        id: selected.id,
        description: selected.description
      });
    }
  };

  return (
    <Dialog defaultOpen onOpenChange={onClose}>
      <DialogContent className="max-w-full max-h-full sm:max-w-[1300px] sm:max-h-[550px] flex flex-col p-4 min-h-[550px]">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-2">
          <div>
            <DialogTitle className="text-xl">Registrar Seu Serviço</DialogTitle>
            <DialogDescription>Preencha o formulário abaixo para registrar seu serviço.</DialogDescription>
          </div>
        </div>
        <div className="flex-1 overflow-auto py-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="relative flex-1 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg h-48"
                    onDrop={(e) => handleDrop(e, index)}
                    onDragOver={(e) => e.preventDefault()}
                  >
                    {image ? (
                      <>
                        <Image
                          src={imagePreviews[index]!} // Exibe a prévia da imagem
                          alt={`Imagem do Serviço ${index + 1}`}
                          className="w-full h-full object-cover rounded-lg"
                          width={500}
                          height={300}
                        />
                        <button
                          type="button"
                          className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md"
                          onClick={() => handleImageRemove(index)}
                        >
                          <AiOutlineDelete className="text-red-500" />
                        </button>
                        <label
                          htmlFor={`image-upload-${index}`}
                          className="absolute bottom-2 right-2 bg-white p-1 rounded-full shadow-md cursor-pointer"
                        >
                          <AiOutlineReload className="text-black" />
                          <input
                            id={`image-upload-${index}`}
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleImageChange(e, index)}
                            className="absolute inset-0 opacity-0 cursor-pointer"
                          />
                        </label>
                      </>
                    ) : (
                      <div
                        className="flex flex-col items-center justify-center w-full h-full"
                        onDrop={(e) => handleDrop(e, index)}
                        onDragOver={(e) => e.preventDefault()}
                      >
                        <span className="text-gray-500 text-center">
                          Arraste e solte aqui ou clique para selecionar
                        </span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleImageChange(e, index)}
                          className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                        <Button className="mt-2 bg-LaranjaEscuro1">Escolher Foto</Button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="p-4 border rounded-lg bg-gray-50">
                <Label htmlFor="title" className="mb-2 block text-gray-700">
                  Titulo*
                </Label>
                <Input
                  id="title"
                  type="title"
                  value={title}
                  placeholder="Descreva seu serviço..."
                  className="w-full p-2 border rounded"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="p-4 border rounded-lg bg-gray-50">
                <Label htmlFor="description" className="mb-2 block text-gray-700">
                  Descrição do Serviço*
                </Label>
                <Textarea
                  id="description"
                  rows={3}
                  value={description}
                  placeholder="Descreva seu serviço..."
                  className="w-full h-24 resize-none"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col gap-4">
                <div className="flex-1 min-w-[250px]">
                  <div className="flex items-center mb-2">
                    <Label htmlFor="service" className="mr-2">
                      Serviço*
                    </Label>
                    <InfoIcon
                      message="Você poderá atualizar com mais de 1 tipo de serviço assinando os planos Mensais ou Anual."
                      title="Serviços"
                    />
                  </div>
                  <Select value={selectedService.id} onValueChange={handleServiceChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o tipo de serviço" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service.id} value={service.id}>
                          {service.description}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex">
                  <div className="flex-1 min-w-[250px]">
                    <Label>Métodos de Pagamento*</Label>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center">
                        <Switch
                          id="card"
                          checked={paymentMethods.card}
                          onCheckedChange={() => handlePaymentMethodChange('card')}
                        />
                        <Label htmlFor="card" className="ml-2">
                          Cartão
                        </Label>
                      </div>
                      <div className="flex items-center">
                        <Switch
                          id="pix"
                          checked={paymentMethods.pix}
                          onCheckedChange={() => handlePaymentMethodChange('pix')}
                        />
                        <Label htmlFor="pix" className="ml-2">
                          Pix
                        </Label>
                      </div>
                      <div className="flex items-center">
                        <Switch
                          id="cash"
                          checked={paymentMethods.cash}
                          onCheckedChange={() => handlePaymentMethodChange('cash')}
                        />
                        <Label htmlFor="cash" className="ml-2">
                          Dinheiro
                        </Label>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 min-w-[250px] space-y-2">
                    <Label htmlFor="opening-hours-start" className="block text-gray-700">
                      Horário de Funcionamento*
                    </Label>
                    <div className="flex gap-4 items-center">
                      <div className="flex flex-col">
                        <span className="text-sm text-gray-600">Abertura</span>
                        <Input
                          id="opening-hours-start"
                          type="time"
                          defaultValue="09:00"
                          className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <span className="text-gray-500 font-medium">-</span>
                      <div className="flex flex-col">
                        <span className="text-sm text-gray-600">Fechamento</span>
                        <Input
                          id="opening-hours-end"
                          type="time"
                          defaultValue="18:00"
                          className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex space-x-4">
                  <div className="flex-1 min-w-[250px]">
                    <Label htmlFor="whatsapp">WhatsApp*</Label>
                    <InputMask
                      mask="(99) 99999-9999"
                      id="whatsapp"
                      type="tel"
                      placeholder="(11) 99999-9999"
                      className="w-full p-2 border rounded"
                      value={whatsappNumber}
                      onChange={(e) => setWhatsappNumber(e.target.value)}
                    />
                  </div>

                  <div className="flex-1 min-w-[250px]">
                    <Label htmlFor="portfolio">Link do Site/Portfólio</Label>
                    <Input
                      id="portfolio"
                      type="url"
                      placeholder="https://meuportfolio.com"
                      className="w-full p-2 border rounded"
                      value={linkWebsitePortfolio}
                      onChange={(e) => setLinkWebsitePortfolio(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center">
                  <Switch
                    id="has-service-location"
                    checked={hasServiceLocation}
                    onCheckedChange={handleServiceLocationChange}
                  />
                  <Label htmlFor="pix" className="ml-2">
                    Tem local de atendimento
                  </Label>
                </div>
                <div className="flex-1 min-w-[250px]">
                  {hasServiceLocation && (
                    <>
                      <Label htmlFor="address">Endereço de atendimento</Label>
                      <Input
                        id="address"
                        type="text"
                        placeholder="Rua 1, Quadra 1, Lote 1.."
                        value={serviceLocation}
                        onChange={(e) => setServiceLocation(e.target.value)}
                      />
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-4 border-t border-gray-300 pt-4">
          <Button
            className="w-64 flex items-center gap-1 px-4 py-2 text-sm font-medium bg-gray-50 text-AzulEscuro1 hover:bg-gray-100 hover:text-AzulClaro2 rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105"
            onClick={onClose}
          >
            Fechar
          </Button>
          <Button
            className="w-64 flex items-center gap-1 px-4 py-2 text-sm font-medium bg-AzulEscuro1 text-gray-50 hover:bg-AzulEscuro2 rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105"
            onClick={handleRegisterAD}
            type="submit"
          >
            Registrar Serviço
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
