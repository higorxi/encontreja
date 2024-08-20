"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModalLogout } from "./modal-logout";

export function HeaderAlternative({ isLoggedIn = true }) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isProfileModalOpen, setProfileModalOpen] = useState(false);
  const [isSettingsModalOpen, setSettingsModalOpen] = useState(false);
  const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen(!isMenuOpen);

  return (
    <header className="flex items-center justify-between px-4 py-3 bg-background shadow-sm">
      <Link href="#" className="flex items-center gap-2" prefetch={false}>
        <MountainIcon className="h-6 w-6" />
        <span className="text-lg font-semibold">Acme Inc</span>
      </Link>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground hover:text-primary-foreground transition-colors duration-300 relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="/servicos"
            className="text-sm font-medium text-muted-foreground hover:text-primary-foreground transition-colors duration-300 relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
            prefetch={false}
          >
            Contato
          </Link>
        </div>
        <Button className="flex items-center gap-2 px-4 py-2 text-sm font-medium">
          <PlusIcon className="h-4 w-4" />
          Postar Serviço
        </Button>

        {isLoggedIn && (
          <div className="relative">
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

      {/* Modais */}
      {isProfileModalOpen && (
        <Modal title="Perfil" onClose={() => setProfileModalOpen(false)}>
          <p>Conteúdo do Modal de Perfil</p>
        </Modal>
      )}
      {isSettingsModalOpen && (
        <Modal title="Configurações" onClose={() => setSettingsModalOpen(false)}>
          <p>Conteúdo do Modal de Configurações</p>
        </Modal>
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

function Modal({ title, onClose, children }: any) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-white rounded-lg shadow-lg p-6 w-96">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="text-lg font-semibold mb-4">{title}</h2>
        {children}
      </div>
    </div>
  );
}
