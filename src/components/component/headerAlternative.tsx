"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModalLogout } from "./modal-logout";
import { ModalConfig } from "./modal-config";
import { ModalProfile } from "./modal-profile";
import { ModalServiceRegister } from "./modal-service-register";
import { ModalLogin } from "./modal-login";
import { useAuth } from "@/contexts/AuthContext";
import Logo from "../ui/logo";
import LogoAlternative from "../ui/logo-alternative";

export function HeaderAlternative() {
  const { isAuthenticated } = useAuth()
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isProfileModalOpen, setProfileModalOpen] = useState(false);
  const [isSettingsModalOpen, setSettingsModalOpen] = useState(false);
  const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePostServiceClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleMenuToggle = () => setMenuOpen(!isMenuOpen);

  return (
    <header className="relative bg-background">
      {/* Desktop View */}
      <div className="hidden md:flex items-center justify-between px-8 py-4">
        <Logo/>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/"
              className="text-sm font-medium text-muted-foreground hover:text-black transition-colors duration-300 relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-AzulProfundo after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-muted-foreground hover:text-black transition-colors duration-300 relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-AzulProfundo after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
              prefetch={false}
            >
              Contato
            </Link>
          </div>
          <Button className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105" onClick={handlePostServiceClick}>
          <LogoAlternative logoType={2} className="w-4 h-4" />
            <span>{isAuthenticated ? 'Postar Serviço' : 'Login'}</span>
          </Button>

          {isAuthenticated && (
            <div className="relative hidden md:flex">
              <Button
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium"
                onClick={handleMenuToggle}
              >
                <ProfileIcon className="h-4 w-4" />
              </Button>
              {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-20">
                  <button
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    onClick={() => setProfileModalOpen(true)}
                  >
                    <UserIcon className="h-4 w-4" />
                    Perfil
                  </button>
                  <button
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    onClick={() => setSettingsModalOpen(true)}
                  >
                    <SettingsIcon className="h-4 w-4" />
                    Configurações
                  </button>
                  <button
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    onClick={() => setLogoutModalOpen(true)}
                  >
                    <LogoutIcon className="h-4 w-4" />
                    Sair
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex items-center justify-between px-4 py-3">
        <Logo/>
        <button
          className="p-2"
          onClick={handleMenuToggle}
        >
          <MenuIcon className="h-6 w-6" />
        </button>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={handleMenuToggle}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-800 text-white transition-transform transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden z-50`}
      >
        <div className="p-4">
          <button
            className="text-white"
            onClick={handleMenuToggle}
          >
            <CloseIcon className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex flex-col items-start p-4 space-y-4">
          <Link
            href="/"
            className="text-white text-lg hover:text-gray-400"
            onClick={handleMenuToggle}
          >
            Home
          </Link>
          <Link
            href="/#contact"
            className="text-white text-lg hover:text-gray-400"
            onClick={handleMenuToggle}
          >
            Contato
          </Link>
          <Button
            className="px-4 py-2 text-white bg-black border border-white"
            onClick={() => {
              handleMenuToggle();
              handlePostServiceClick();
            }}
          >
            <LogoAlternative logoType={2} className="w-4 h-4 mr-2" />
            {isAuthenticated ? 'Postar Serviço' : 'Login'}
          </Button>
          {isAuthenticated && (
            <>
              <button
                className="flex items-center gap-2 px-4 py-2 text-white text-lg hover:bg-gray-600 w-full text-left"
                onClick={() => {
                  handleMenuToggle();
                  setProfileModalOpen(true);
                }}
              >
                <UserIcon className="h-4 w-4" />
                Perfil
              </button>
              <button
                className="flex items-center gap-2 px-4 py-2 text-white text-lg hover:bg-gray-600 w-full text-left"
                onClick={() => {
                  handleMenuToggle();
                  setSettingsModalOpen(true);
                }}
              >
                <SettingsIcon className="h-4 w-4" />
                Configurações
              </button>
              <button
                className="flex items-center gap-2 px-4 py-2 text-white text-lg hover:bg-gray-600 w-full text-left"
                onClick={() => {
                  handleMenuToggle();
                  setLogoutModalOpen(true);
                }}
              >
                <LogoutIcon className="h-4 w-4" />
                Sair
              </button>
            </>
          )}
        </nav>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <>
          {isAuthenticated ? (
            <ModalServiceRegister onClose={closeModal}/>
          ) : (
            <ModalLogin onClose={closeModal}/>
          )}
        </>
      )}

      {isProfileModalOpen && (
        <ModalProfile onClose={() => setProfileModalOpen(false)} />
      )}
      {isSettingsModalOpen && (
        <ModalConfig onClose={() => setSettingsModalOpen(false)} />
      )}
      {isLogoutModalOpen && (
        <ModalLogout onClose={() => setLogoutModalOpen(false)} />
      )}
    </header>
  );
}

function MountainIcon(props: any) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function PlusIcon(props: any) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function ProfileIcon(props: any) {
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
      <circle cx="12" cy="7" r="4" />
      <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
    </svg>
  );
}

function UserIcon(props: any) {
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
      <path d="M12 14c4.418 0 8 2.686 8 6h-16c0-3.314 3.582-6 8-6z" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function SettingsIcon(props: any) {
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
      <path d="M4 12a8 8 0 0 1 16 0 8 8 0 0 1-16 0z" />
      <path d="M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10 10 10 0 0 1-10-10A10 10 0 0 1 12 2z" />
    </svg>
  );
}

function LogoutIcon(props: any) {
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
      <path d="M16 12H3M16 12l-4-4M16 12l-4 4M20 4H4v16h16V4z" />
    </svg>
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
