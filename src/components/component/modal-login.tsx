import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectTrigger, SelectValue, SelectItem, SelectContent } from '@/components/ui/select';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AiOutlineDelete, AiOutlineReload } from 'react-icons/ai';
import Image from 'next/image';
import { RecoveryPassword } from './recovery-password';

const formatCPF = (cpf: string) => {
  return cpf
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
    .substring(0, 14);
};

export function ModalLogin({ onClose }: any) {
  const [showPassword, setShowPassword] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isValidCPF, setIsValidCPF] = useState(true);
  const [images, setImages] = useState<(string | ArrayBuffer | null)[]>([null, null, null]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cpf, setCpf] = useState('');
  const [gender, setGender] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [cep, setCep] = useState('');
  const [openRecoveryPassword, setOpenRecoveryPassword] = useState(false)
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCpf(formatCPF(value));

    const onlyNumbers = value.replace(/\D/g, '');
    setIsValidCPF(onlyNumbers.length === 11);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const file = e.target.files?.[0];
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

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, index: number) => {
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

  return (
    <>
    <Dialog defaultOpen onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[855px] sm:min-h-[525px]">
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <div className="space-y-14 p-6">
              {' '}
              <div className="space-y-4">
                <Label htmlFor="cpf">CPF</Label>
                <Input
                  id="cpf"
                  type="text"
                  placeholder="000.000.000-00"
                  value={inputValue}
                  onChange={handleInputChange}
                  className={`pr-10 ${!isValidCPF ? 'border-red-500' : ''}`}
                />
              </div>
              <div className="space-y-4 relative">
                <Label htmlFor="password">Senha</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="********"
                    className="pr-10"
                  />
                  <Button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 flex items-center px-3"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </Button>
                </div>
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
              <p className="text-center text-sm">
                <a onClick={() => setOpenRecoveryPassword(true)} className="text-blue-500">
                  Esqueceu sua senha?
                </a>
              </p>
            </div>
          </TabsContent>
          <TabsContent value="register">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4">
              <div className="flex flex-col items-center justify-center p-4 relative">
                <Label htmlFor="profile-pic" className="mb-2">
                  Profile Picture
                </Label>
                {images[0] ? (
                  <>
                    <Image
                      src={images[0] as string}
                      alt="User Image"
                      className="w-full h-full object-cover rounded-lg"
                      width={200}
                      height={200}
                    />
                    <button
                      type="button"
                      className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md"
                      onClick={() => handleImageRemove(0)}
                    >
                      <AiOutlineDelete className="text-red-500" />
                    </button>
                    <label
                      htmlFor="image-upload-0"
                      className="absolute bottom-2 right-2 bg-white p-1 rounded-full shadow-md cursor-pointer"
                    >
                      <AiOutlineReload className="text-black" />
                      <input
                        id="image-upload-0"
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageChange(e, 0)}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                      />
                    </label>
                  </>
                ) : (
                  <div
                    className="flex flex-col items-center justify-center w-full h-full border-dashed border-2 border-gray-300 rounded-lg"
                    onDrop={(e) => handleDrop(e, 0)}
                    onDragOver={(e) => e.preventDefault()}
                  >
                    <span className="text-gray-500 text-center">Drag and drop here or click to select</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageChange(e, 0)}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                    <Button className="mt-2">Choose Photo</Button>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome</Label>
                  <Input id="name" placeholder="João Batista" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="joaobatista@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(00) 00000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cpf">CPF</Label>
                  <Input
                    id="cpf"
                    type="text"
                    placeholder="000.000.000-00"
                    value={cpf}
                    onChange={handleInputChange}
                    className={`pr-10 ${!isValidCPF ? 'border-red-500' : ''}`}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="gender">Gênero</Label>
                  <Select value={gender} onValueChange={setGender}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="birthdate">Data de nascimento</Label>
                  <Input id="birthdate" type="date" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="specialty">Especialidade</Label>
                  <Select value={specialty} onValueChange={setSpecialty}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione sua especialidade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Eletricista</SelectItem>
                      <SelectItem value="female">Pedreiro</SelectItem>
                      <SelectItem value="other">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cep">CEP</Label>
                  <Input id="cep" placeholder="00000-000" value={cep} onChange={(e) => setCep(e.target.value)} />
                </div>
              </div>
            </div>
            <Button className="w-full mt-4">Cadastrar</Button>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
    {openRecoveryPassword && (
        <RecoveryPassword onClose={() => setOpenRecoveryPassword(false)}/>
      )}
    </>
  );
}
