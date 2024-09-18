import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { useState } from 'react';
import { AiOutlineDelete, AiOutlineReload } from 'react-icons/ai';
import Image from 'next/image';
import InputMask from 'react-input-mask';

export function ModalServiceRegister({ onClose }: any) {
  const [images, setImages] = useState<(string | ArrayBuffer | null)[]>([null, null, null]);
  const [selectedServices, setSelectedServices] = useState<string>('');
  const [serviceLocation, setServiceLocation] = useState(false);
  const [paymentMethods, setPaymentMethods] = useState({
    card: false,
    pix: false,
    cash: false,
  });

  const handleImageChange = (e: any, index: number) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setImages((prevImages) => {
            const updatedImages = [...prevImages];
            updatedImages[index] = reader.result;
            return updatedImages;
          });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: any, index: number) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setImages((prevImages) => {
            const updatedImages = [...prevImages];
            updatedImages[index] = reader.result;
            return updatedImages;
          });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageRemove = (index: number) => {
    setImages((prevImages) => {
      const updatedImages = [...prevImages];
      updatedImages[index] = null;
      return updatedImages;
    });
  };

  const handleSelectChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    setter: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option: HTMLOptionElement) => option.value);
    setter(selectedOptions);
  };

  const handleServiceLocationChange = () => {
    setServiceLocation((prev) => !prev);
  };

  const handlePaymentMethodChange = (method: keyof typeof paymentMethods) => {
    setPaymentMethods((prev) => ({ ...prev, [method]: !prev[method] }));
  };

  return (
    <Dialog defaultOpen onOpenChange={onClose}>
      <DialogContent className="max-w-full max-h-full sm:max-w-[1300px] sm:max-h-[550px] flex flex-col p-4 min-h-[550px]">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-4">
          <div>
            <DialogTitle>Registrar Seu Serviço</DialogTitle>
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
                          src={image as string}
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
                            type="button"
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
                <Label htmlFor="description" className="mb-2 block text-gray-700">
                  Descrição do Serviço
                </Label>
                <Textarea
                  id="description"
                  rows={3}
                  placeholder="Descreva seu serviço..."
                  className="w-full h-24 resize-none"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col gap-4">
                <div className="flex-1 min-w-[250px]">
                  <Label htmlFor="service">Serviço</Label>
                  <Select value={selectedServices} onValueChange={setSelectedServices}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione os serviços" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="service1">Serviço 1</SelectItem>
                      <SelectItem value="service2">Serviço 2</SelectItem>
                      <SelectItem value="service3">Serviço 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className='flex'>
                <div className="flex-1 min-w-[250px]">
                  <Label>Método de Pagamento</Label>
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
                    Horário de Funcionamento
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
                    <Label htmlFor="whatsapp">WhatsApp</Label>
                    <InputMask
                      mask="(99) 99999-9999"
                      id="whatsapp"
                      type="tel"
                      placeholder="(11) 99999-9999"
                      className="w-full p-2 border rounded"
                    />
                  </div>

                  <div className="flex-1 min-w-[250px]">
                    <Label htmlFor="portfolio">Link do Site/Portfólio</Label>
                    <Input
                      id="portfolio"
                      type="url"
                      placeholder="https://meuportfolio.com"
                      className="w-full p-2 border rounded"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center">
                  <Switch
                    id="has-service-location"
                    checked={serviceLocation}
                    onCheckedChange={handleServiceLocationChange}
                  />
                  <Label htmlFor="pix" className="ml-2">
                    Tem local de atendimento
                  </Label>
                </div>
                <div className="flex-1 min-w-[250px]">
                  {serviceLocation && (
                    <>
                      <Label htmlFor="address">Endereço de atendimento</Label>
                      <Input id="address" type="text" placeholder="Rua 1, Quadra 1, Lote 1.." />
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <DialogFooter className="flex justify-end mt-4 space-x-2">
          <Button variant="outline" onClick={onClose}>
            Fechar
          </Button>
          <Button type="submit" className="bg-AzulProfundo text-white">
            Salvar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
