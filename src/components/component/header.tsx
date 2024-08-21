"use client"
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModalLogin } from "./modal-login";
import { ModalServiceRegister } from "./modal-service-register";

export function Header({ isAuthenticated = true }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePostServiceClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className="flex items-center justify-between px-4 py-3 bg-background shadow-sm">
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
            Preços
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