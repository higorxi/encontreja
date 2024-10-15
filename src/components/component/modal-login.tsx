import { useEffect, useState } from 'react';
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
import { InputDateOfBirth } from './input-date-of-birth';
import { toast } from 'react-toastify';
import { useAuth } from '@/contexts/AuthContext';
import { RegistrationDetails, useCadastro } from '@/contexts/SignupContext';
import { SearchIcon } from 'lucide-react';
import { formatCPF } from '@/utils/cpf';
import { validateEmail } from '@/utils/email';
import axios from 'axios';
import { updateUserProfilePhotoURL } from '@/service/userService';
import InputMask from 'react-input-mask';

export function ModalLogin({ onClose }: any) {
  const { loginAuth } = useAuth();
  const { registerUser } = useCadastro();
  const [showPassword, setShowPassword] = useState(false);
  const [inputValueLogin, setInputValueLogin] = useState('');
  const [inputValuePassword, setInputValuePassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidCPF, setIsValidCPF] = useState(true);
  const [image, setImage] = useState<File | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [cep, setCep] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [openRecoveryPassword, setOpenRecoveryPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const metadata = JSON.stringify({
    description: `Uma imagem de perfil do usuário: ${name}`,
    category: "perfil",
    tags: ["foto", "perfil"]
  });

  useEffect(() => {
    if (image instanceof File) {
      const objectUrl = URL.createObjectURL(image);
      setImageSrc(objectUrl);

      return () => URL.revokeObjectURL(objectUrl);
    } else {
      setImageSrc(image);
    }
  }, [image]);


  useEffect(() => {
    if(cep.length === 8){
      handleSearch()
    }
  }, [cep]);


  const handleSearch = async () => {
    if (cep.length === 8 || cep.length === 9) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        if (data.erro) {
          toast.error('CEP não encontrado');
          setCity('');
          setState('');
        } else {
          setCity(data.localidade);
          setState(data.uf);
        }
      } catch (error) {
        toast.error('Erro ao buscar o CEP');
        console.error(error);
      }
    } else {
      toast.error('CEP inválido');
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCpf(formatCPF(value));

    const onlyNumbers = value.replace(/\D/g, '');
    setIsValidCPF(onlyNumbers.length === 11);
  };


  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleImageRemove = () => {
    setImage(null);
  };

  const handleUpload = async () => {
    if (!image) {
      alert('Por favor, selecione uma imagem antes de enviar.');
      return;
    }

    const formData = new FormData();
    formData.append('file', image); 
    formData.append('metadata', metadata); 

    try {
      const response = await axios.post('/api/uploadImageProfile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Imagem enviada com sucesso:', response.data);
      return response.data.result.variants[0]
    } catch (error) {
      console.error('Erro ao enviar a imagem:', error);
    }
  };
  

  const handleLogin = async () => {
    if (!isValidEmail) {
      toast.error('Email inválido');
      return;
    }
    setLoading(true);
    try {
      let email, password;
      email = inputValueLogin.toLowerCase();
      password = inputValuePassword;
      const data = { email, password };
      const response = await loginAuth(data);
      if (response) {
        toast.success('Login bem-sucedido!');
        onClose();
      } else {
        toast.error('Erro ao fazer login, tente novamente');
        throw new Error('');
      }
    } catch (error) {
      toast.error('Erro ao fazer login.');
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async () => {
    if (!isValidEmail || !isValidCPF) {
      toast.error('CPF ou Email inválido, revise os dados');
      return;
    }
    setLoading(true);
    try {
      const data = { name, email, gender: { id: Number(gender) }, phone, document: cpf, city, password };
      const response = await registerUser(data as RegistrationDetails);
      if (response) {
        const urlImage = await handleUpload();
        await updateUserProfilePhotoURL(cpf, urlImage)
        toast.success('Cadastro bem-sucedido!');
        onClose();
      } else {
        toast.error('Erro ao salvar foto de perfil, você poderá atualizar posteriormente nas configurações');
        throw new Error('Erro ao salvar e/ou atualizar foto de perfil');
      }
    } catch (error) {
      toast.error('Erro ao fazer cadastro.');
    } finally {
      setLoading(false);
    }
  };

  const isFormLoginValid = inputValueLogin !== '' && inputValuePassword !== '';

  const isFormRegisterValid = name !== '' && email !== '' && gender !== '' && phone !== '' && cpf !== '' && city !== '' && password !== '' && image !== null;

  return (
    <>
      <Dialog defaultOpen onOpenChange={onClose}>
        <DialogContent className="sm:max-w-[855px] sm:min-h-[525px]">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Registrar</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <div className="space-y-14 p-6">
                <div className="space-y-4">
                  <Label htmlFor="email">Email*</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="joaobatista@encontreja.com"
                    value={inputValueLogin}
                    disabled={loading ? true : false}
                    onChange={(e) => {
                      setInputValueLogin(e.target.value);
                      setIsValidEmail(validateEmail(e.target.value));
                    }}
                    className={`pr-10 ${
                      !isValidEmail && inputValueLogin.length !== 0
                        ? 'border-red-500'
                        : isValidEmail && inputValueLogin.length > 2
                        ? 'border-green-300'
                        : ''
                    }`}
                    required
                  />
                </div>
                <div className="space-y-4 relative">
                  <Label htmlFor="password">Senha*</Label>
                  <div className="relative">
                    <Input
                      disabled={loading ? true : false}
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="********"
                      className="pr-10"
                      value={inputValuePassword}
                      onChange={(e) => setInputValuePassword(e.target.value)}
                      required
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
                <Button onClick={handleLogin} className="w-full" disabled={!isFormLoginValid || loading}>
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <span className="ml-2 flex items-center">
                        <span className="dot-blink"></span>
                        <span className="dot-blink"></span>
                        <span className="dot-blink"></span>
                      </span>
                    </div>
                  ) : (
                    'Login'
                  )}
                </Button>
                <p className="text-center text-sm  cursor-pointer">
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
                    Foto do perfil*
                  </Label>
                  {image ? (
                    <>
                      {imageSrc && (
                        <Image
                          src={imageSrc}
                          alt="User Image"
                          className="w-full h-full object-cover rounded-lg"
                          width={200}
                          height={200}
                        />
                      )}
                      <button
                        type="button"
                        className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md"
                        onClick={() => handleImageRemove()}
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
                          onChange={(e) => handleImageChange(e)}
                          className="absolute inset-0 opacity-0 cursor-pointer"
                          required={true}
                        />
                      </label>
                    </>
                  ) : (
                    <div
                      className="flex flex-col items-center justify-center w-full h-full border-dashed border-2 border-gray-300 rounded-lg"
                      onDrop={(e) => handleDrop(e)}
                      onDragOver={(e) => e.preventDefault()}
                    >
                      <span className="text-gray-500 text-center">Arraste e solte sua imagem aqui</span>
                      <label htmlFor="image-upload-0" className="mt-2 cursor-pointer text-blue-500">
                        Carregar imagem
                        <input
                          id="image-upload-0"
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleImageChange(e)}
                          className="absolute inset-0 opacity-0 cursor-pointer"
                          required={true}
                        />
                      </label>
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo*</Label>
                    <Input
                      id="name"
                      placeholder="João Batista"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email*</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="joaobatista@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone*</Label>
                    <InputMask
                      mask="(99) 99999-9999"
                      id="whatsapp"
                      type="tel"
                      placeholder="(11) 99999-9999"
                      className="w-full p-2 border rounded"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cpf">CPF*</Label>
                    <Input
                      id="cpf"
                      type="text"
                      placeholder="000.000.000-00"
                      value={cpf}
                      onChange={handleInputChange}
                      className={`pr-10 ${!isValidCPF ? 'border-red-500' : ''}`}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Senha*</Label>
                    <Input
                      id="password"
                      type="text"
                      placeholder="*******"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="gender">Gênero*</Label>
                    <Select value={gender} onValueChange={setGender}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o Gênero" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">Masculino</SelectItem>
                        <SelectItem value="2">Feminino</SelectItem>
                        <SelectItem value="3">Outros</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="birthdate">Data de nascimento*</Label>
                    <InputDateOfBirth
                      showLabel={false}
                      value={birthdate}
                      onChange={(e) => setBirthdate(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2 grid gap-4">
                    <div className="grid gap-2 space-y-2">
                      <Label htmlFor="zipcode">CEP*</Label>
                      <div className="relative w-full">
                        <Input
                          id="zipcode"
                          placeholder="12345-678"
                          value={cep}
                          maxLength={9}
                          onChange={(e) => setCep(e.target.value)}
                          className="w-full"
                        />
                        <Button
                          type="button"
                          size="icon"
                          className="absolute right-2 top-1/2 -translate-y-1/2"
                          onClick={handleSearch}
                        >
                          <SearchIcon className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    {city && (
                      <>
                        <div className="grid gap-2">
                          <Label htmlFor="city">Cidade*</Label>
                          <Input id="city" placeholder="Anápolis" value={city} readOnly className="w-full" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="city">Estado*</Label>
                          <Input id="state" placeholder="Goiás" value={state} readOnly className="w-full" />
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <Button onClick={handleRegister} className="w-full" disabled={!isFormRegisterValid || loading}>
                {loading ? (
                  <div className="flex items-center justify-center">
                    <span className="ml-2 flex items-center">
                      <span className="dot-blink"></span>
                      <span className="dot-blink"></span>
                      <span className="dot-blink"></span>
                    </span>
                  </div>
                ) : (
                  'Cadastrar'
                )}
              </Button>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
      {openRecoveryPassword && <RecoveryPassword onClose={() => setOpenRecoveryPassword(false)} />}
    </>
  );
}
