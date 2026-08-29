import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hrnntz.me"),
  title: {
    default: "Hernán | Estudiante de Ingeniería de Sistemas",
    template: "%s | Hernán",
  },
  description: "Portafolio técnico de Hernán. Proyectos web y móviles construidos con React, Node.js y bases de datos relacionales.",
  openGraph: {
    title: "Hernán | Estudiante de Ingeniería de Sistemas",
    description: "Portafolio técnico de Hernán. Proyectos web y móviles construidos con React, Node.js y bases de datos relacionales.",
    url: "https://hrnntz.me",
    siteName: "Hernán Portfolio",
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hernán | Estudiante de Ingeniería de Sistemas",
    description: "Portafolio técnico de Hernán. Proyectos web y móviles construidos con React, Node.js y bases de datos relacionales.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Hernán",
  url: "https://hrnntz.me",
  sameAs: [
    "https://github.com/hrnntz"
  ],
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: "Universidad de Córdoba"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-background text-foreground min-h-screen flex flex-col selection:bg-accent selection:text-white">
        <Header />
        <main className="flex-1 container mx-auto px-4 max-w-3xl py-12">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
