import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from '@/contexts/AuthContext';
import { CadastroProvider } from '@/contexts/SignupContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'EncontreJÁ',
  description: 'Encontre os melhores provedores de serviços na sua região',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <AuthProvider>
          <CadastroProvider>
            {children}
            <Analytics />
            <SpeedInsights />
            <ToastContainer />
          </CadastroProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
