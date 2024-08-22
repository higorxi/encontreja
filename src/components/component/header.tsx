"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModalLogin } from "./modal-login";
import { ModalServiceRegister } from "./modal-service-register";

export function Header({ isAuthenticated = true }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handlePostServiceClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative bg-background shadow-sm">
      {/* Desktop View */}
      <div className="hidden lg:flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
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
              href="/"
              className="text-sm font-medium text-muted-foreground hover:text-primary-foreground transition-colors duration-300 relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
              prefetch={false}
            >
              Quem somos
            </Link>
            <Link
              href="/"
              className="text-sm font-medium text-muted-foreground hover:text-primary-foreground transition-colors duration-300 relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
              prefetch={false}
            >
              Planos
            </Link>
          </div>
          <Link href="/servicos" passHref>
            <Button className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-white text-black border hover:bg-gray-200 hover:text-gray-900">
              Visualizar Serviços
            </Button>
          </Link>
          <Button
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium"
            onClick={handlePostServiceClick}
          >
            <PlusIcon className="h-4 w-4" />
            Postar Serviço
          </Button>
        </div>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="text-lg font-semibold">Acme Inc</span>
        </Link>
        <button
          className="p-2"
          onClick={toggleMenu}
        >
          <MenuIcon className="h-6 w-6" />
        </button>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden"
          onClick={toggleMenu}
        />
      )}

      {/* Menu Lateral */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-800 text-white transition-transform transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden z-50`}
      >
        <div className="p-4">
          <button
            className="text-white"
            onClick={toggleMenu}
          >
            <CloseIcon className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex flex-col items-start p-4 space-y-4">
          <Link
            href="/"
            className="text-white text-lg hover:text-gray-400"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="/"
            className="text-white text-lg hover:text-gray-400"
            onClick={toggleMenu}
          >
            Quem somos
          </Link>
          <Link
            href="/"
            className="text-white text-lg hover:text-gray-400"
            onClick={toggleMenu}
          >
            Planos
          </Link>
          <Link href="/servicos" passHref>
            <Button className="px-4 py-2 text-white bg-black border border-white" onClick={toggleMenu}>
              Visualizar Serviços
            </Button>
          </Link>
          <Button
            className="px-4 py-2 text-white"
            onClick={() => {
              toggleMenu();
              handlePostServiceClick();
            }}
          >
            <PlusIcon className="h-4 w-4" />
            Postar Serviço
          </Button>
        </nav>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <>
          {isAuthenticated ? (
            <ModalServiceRegister onClose={closeModal} />
          ) : (
            <ModalLogin onClose={closeModal} />
          )}
        </>
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
