'use client';
import Link from 'next/link';
import { FaPhone } from 'react-icons/fa';

export function ContactSection() {
  return (
    <section className="py-16" style={{ marginTop: '2rem' }}>
      <div className="container px-4 md:px-8 mx-auto text-center">
        <h2 className="text-3xl font-bold  tracking-tighter sm:text-5xl mb-2">Ficou com alguma dúvida?</h2>
        <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Basta clicar no botão abaixo para entrar em contato com nossa equipe de suporte.
        </p>
        <Link
        href="/contato"
        className="inline-flex h-10 items-center justify-center bg-AmareloGastronômica px-8 text-lg text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105 mt-6"
        prefetch={false}
      >
        <FaPhone className="w-5 h-5 mr-2" />
        Entrar em contato
      </Link>
      </div>

    </section>
  );
}
