import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export const metadata = {
  title: 'Poyos Crispy Chicken - Franquia de Frango Frito',
  icons: '/favicon.png',
  description: 'Descubra a oportunidade de trazer a franquia Poyos Crispy Chicken para sua cidade. Oferecemos o melhor frango crocante com modelo de gestão a distância e suporte completo ao franqueado.',
  keywords: [
    'Poyos Crispy Chicken',
    'franquia de frango frito',
    'franquia de alimentação',
    'oportunidade de negócio',
    'franquia de fast food',
    'frango crocante'
  ],
  openGraph: {
    type: 'website',
    url: 'https://franquias.poyos.com.br',
    title: 'Poyos Crispy Chicken - Franquia de Frango Frito',
    description: 'Junte-se à Poyos Crispy Chicken e traga o melhor frango crocante para sua cidade! Modelo de franquia com gestão a distância e suporte completo.',
    images: [
      {
        url: 'https://opengraph.b-cdn.net/production/images/e5a0d969-61a6-4dc1-8ccb-c608431da58d.png?token=-YhJ78CHry_AWi-NZk7_Af40KXHnMDBBNV-iNGfsbAs&height=1200&width=1200&expires=33266489744',
        width: 1200,
        height: 630,
        alt: 'Logo Poyos Crispy Chicken',
      },
    ],
    site_name: 'Poyos Crispy Chicken',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Poyos Crispy Chicken - Franquia de Frango Frito',
    description: 'Franquia de frango frito com modelo inovador e suporte completo. Torne-se um franqueado Poyos Crispy Chicken!',
    image: 'https://opengraph.b-cdn.net/production/images/e5a0d969-61a6-4dc1-8ccb-c608431da58d.png?token=-YhJ78CHry_AWi-NZk7_Af40KXHnMDBBNV-iNGfsbAs&height=1200&width=1200&expires=33266489744',
  },

  robots: 'index, follow',
  canonical: 'https://franquias.poyos.com.br',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt_BR" className="scroll-smooth overflow-x-hidden">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <Script
          src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/48da2f9d-10ce-45ee-82e2-fd4c5a83c86a-loader.js"
          strategy="afterInteractive"
        />
        <GoogleTagManager gtmId="G-PVN13S2G6B" />
        <GoogleAnalytics gaId="G-PVN13S2G6B" />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
