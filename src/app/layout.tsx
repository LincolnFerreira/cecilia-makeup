
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Cecilia Sousa | Maquiadora & Brow Specialist',
  description: 'Maquiadora Profissional e Especialista em Brow Lamination, Lash Lifting e Design Estratégico em São Caetano do Sul. +1000 transformações com técnica e elegância.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Belleza&family=Alegreya:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased selection:bg-primary/20">
        {children}
      </body>
    </html>
  );
}
