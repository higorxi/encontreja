"use client"
import { useState } from "react";
import Link from "next/link";
import { FaPhone } from "react-icons/fa";

export function ContactSection() {
  return (
    <section className="w-full bg-background py-12 md:py-24 lg:py-32 flex items-center justify-center">
      <div className="text-center max-w-4xl px-4">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Ficou com alguma dúvida?
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Basta clicar no botão abaixo para entrar em contato com nossa equipe de suporte.
          </p>
        </div>
        <Link
          href="/contato"
          className={`inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 mt-6 `}
          prefetch={false}
        >
          <FaPhone className="w-5 h-5 mr-2" />
          Entrar em contato
        </Link>
      </div>
    </section>
  );
}
