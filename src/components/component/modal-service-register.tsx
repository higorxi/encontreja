import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { useState } from "react";
import { AiOutlineDelete, AiOutlineReload } from "react-icons/ai";

export function ModalServiceRegister({ onClose }: any) {
  const [images, setImages] = useState([null, null, null]);
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedPaymentMethods, setSelectedPaymentMethods] = useState([]);
  const [physicalSpace, setPhysicalSpace] = useState(false);
  const [paymentMethods, setPaymentMethods] = useState({
    card: false,
    pix: false,
    cash: false,
  });

  const handleImageChange = (e: any, index: any) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImages(prevImages => {
          const updatedImages = [...prevImages];
          updatedImages[index] = reader.result;
          return updatedImages;
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: any, index: any) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImages(prevImages => {
          const updatedImages = [...prevImages];
          updatedImages[index] = reader.result;
          return updatedImages;
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageRemove = (index: any) => {
    setImages(prevImages => {
      const updatedImages = [...prevImages];
      updatedImages[index] = null;
      return updatedImages;
    });
  };

  const handleSelectChange = (e: any, setter: any) => {
    const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
    setter(selectedOptions);
  };

  const handlePhysicalSpaceChange = () => {
    setPhysicalSpace(prev => !prev);
  };

  const handlePaymentMethodChange = (method: any) => {
    setPaymentMethods(prev => ({ ...prev, [method]: !prev[method] }));
  };

  return (
    <Dialog defaultOpen onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[1300px] sm:max-h-[600px] flex flex-col">
        <div className="flex justify-between items-center p-4 border-b">
          <div>
          <DialogTitle>Registrar Seu Serviço</DialogTitle>
          <DialogDescription>Preencha o formulário abaixo para registrar seu serviço.</DialogDescription>
          </div>          
        </div>
        <div className="flex-1 overflow-auto p-6">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Coluna da esquerda */}
            <div className="space-y-4">
              <div className="flex gap-4 w-full h-48">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="relative flex-1 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg"
                    onDrop={(e) => handleDrop(e, index)}
                    onDragOver={(e) => e.preventDefault()}
                  >
                    {image ? (
                      <>
                        <img
                          src={image}
                          alt={`Imagem do Serviço ${index + 1}`}
                          className="w-full h-full object-cover rounded-lg"
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
                        <Button className="mt-2">Escolher Foto</Button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="p-4 border rounded-lg bg-gray-50">
                <Label htmlFor="description">Descrição do Serviço</Label>
                <Textarea
                  id="description"
                  rows={3}
                  placeholder="Descreva seu serviço..."
                  className="w-full h-24 resize-none"
                />
              </div>
            </div>
            {/* Coluna da direita */}
            <div className="space-y-4">
              <div className="flex flex-col gap-4">
                <div className="flex-1 min-w-[250px]">
                  <Label htmlFor="service">Serviço</Label>
                  <Select
                    id="service"
                    multiple
                    onChange={(e) => handleSelectChange(e, setSelectedServices)}
                  >
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
                <div className="flex-1 min-w-[250px]">
                  <Label>Método de Pagamento</Label>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center">
                      <Switch
                        id="card"
                        checked={paymentMethods.card}
                        onCheckedChange={() => handlePaymentMethodChange('card')}
                      />
                      <Label htmlFor="card" className="ml-2">Cartão</Label>
                    </div>
                    <div className="flex items-center">
                      <Switch
                        id="pix"
                        checked={paymentMethods.pix}
                        onCheckedChange={() => handlePaymentMethodChange('pix')}
                      />
                      <Label htmlFor="pix" className="ml-2">Pix</Label>
                    </div>
                    <div className="flex items-center">
                      <Switch
                        id="cash"
                        checked={paymentMethods.cash}
                        onCheckedChange={() => handlePaymentMethodChange('cash')}
                      />
                      <Label htmlFor="cash" className="ml-2">Dinheiro</Label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex-1 min-w-[250px]">
                  <Label htmlFor="opening-hours-start">Horário de Funcionamento</Label>
                  <div className="flex gap-2">
                    <Input id="opening-hours-start" type="time" placeholder="Início" />
                    <span>-</span>
                    <Input id="opening-hours-end" type="time" placeholder="Fim" />
                  </div>
                </div>
                <div className="flex-1 min-w-[250px]">
                  <Label htmlFor="whatsapp">WhatsApp</Label>
                  <Input id="whatsapp" type="tel" placeholder="+1 (555) 555-5555" />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex-1 min-w-[250px]">
                  <Label htmlFor="price-range-start">Faixa de Preço</Label>
                  <div className="flex gap-2">
                    <Input id="price-range-start" type="number" placeholder="Início" min={0} />
                    <span>-</span>
                    <Input id="price-range-end" type="number" placeholder="Fim" min={0} />
                  </div>
                </div>
                <div className="flex-1 min-w-[250px]">
                  <Label htmlFor="physical-space">Espaço Físico</Label>
                  <div className="flex items-center">
                    <Switch
                      id="physical-space"
                      checked={physicalSpace}
                      onCheckedChange={handlePhysicalSpaceChange}
                    />
                    <Label htmlFor="physical-space" className="ml-2">Disponível</Label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 border-t flex justify-between">
          <Button type="button" variant="outline" onClick={onClose}>Fechar</Button>
          <Button type="submit">Registrar Serviço</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
