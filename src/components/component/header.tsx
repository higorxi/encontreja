'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ModalLogin } from './modal-login';
import { ModalServiceRegister } from './modal-service-register';
import { useAuth } from '@/contexts/AuthContext';
import Logo from '../ui/logo';
import LogoAlternative from '../ui/logo-alternative';

export function Header() {
  const { isAuthenticated } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [city, setCity] = useState('');
  const handlePostServiceClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const city1 = localStorage.getItem('userCity');
    if (city1) {
      setCity(city1);
    }
  }, []);

  return (
    <header className="relative bg-background">
      <div className="hidden lg:flex items-center justify-between px-8 py-4">
        <Logo />
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-AzulProfundo after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href="/#why"
              className="text-sm font-medium text-muted-foreground hover:text-black transition-colors duration-300 relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-AzulProfundo after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
              prefetch={false}
            >
              Quem somos
            </Link>
            <Link
              href="/#price"
              className="text-sm font-medium text-muted-foreground hover:text-black transition-colors duration-300 relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-AzulProfundo after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
              prefetch={false}
            >
              Planos
            </Link>
            {isAuthenticated ? (
              <Link
                href="meu-servico"
                className="text-sm font-medium text-muted-foreground hover:text-black transition-colors duration-300 relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-AzulProfundo after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
                prefetch={false}
              >
                Meu(s) Anuncios
              </Link>
            ) : null}
          </div>
          <Link href="/servicos" passHref>
            <Button className="flex items-center gap-1 px-4 py-2 text-sm font-medium bg-gray-50 text-AzulEscuro1 hover:bg-gray-5100 hover:text-AzulClaro2 rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105">
              Visualizar Serviços
              <p>{city ? 'em' : ''}</p>
              <p className="font-bold">{city ? `${city}` : ''}</p>
            </Button>
          </Link>
          <Button
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105"
            onClick={handlePostServiceClick}
          >
            <LogoAlternative logoType={2} className="w-4 h-4" />
            {isAuthenticated ? 'Postar Serviço' : 'Login'}
          </Button>
        </div>
      </div>

      <div className="lg:hidden flex items-center justify-between px-4 py-3">
        <Logo />
        <button className="p-2" onClick={toggleMenu}>
          <MenuIcon className="h-6 w-6" />
        </button>
      </div>

      {isMenuOpen && <div className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden" onClick={toggleMenu} />}

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black text-white transition-transform transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden z-50`}
      >
        <div className="p-4">
          <button className="text-white" onClick={toggleMenu}>
            <CloseIcon className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex flex-col items-start p-4 space-y-4">
          <Link href="/" className="text-white text-lg hover:text-gray-400" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/#why" className="text-white text-lg hover:text-gray-400" onClick={toggleMenu}>
            Quem somos
          </Link>
          <Link href="/#price" className="text-white text-lg hover:text-gray-400" onClick={toggleMenu}>
            Planos
          </Link>
          <Link href="/meu-servico" className="text-white text-lg hover:text-gray-400" onClick={toggleMenu}>
            Meu(s) Anuncios
          </Link>
          <Link href="/servicos" passHref>
            <Button
              className="px-4 py-2 text-black bg-white border border-white max-w-48 min-w-48"
              onClick={toggleMenu}
            >
              Visualizar Serviços
            </Button>
          </Link>
          <Button
            className="px-4 py-2 text-white bg-AzulProfundo max-w-48 min-w-48"
            onClick={() => {
              toggleMenu();
              handlePostServiceClick();
            }}
          >
            <LogoAlternative logoType={2} className="w-4 h-4 mr-2" />
            {isAuthenticated ? 'Postar Serviço' : 'Login'}
          </Button>
        </nav>
      </div>

      {isModalOpen && (
        <>{isAuthenticated ? <ModalServiceRegister onClose={closeModal} /> : <ModalLogin onClose={closeModal} />}</>
      )}
    </header>
  );
}

function MenuIcon(props: any) {
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
      <path d="M4 6h16M4 12h16M4 18h16" />
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
      <path d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}
