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
    default: "Hernán Arteaga | Desarrollador Full-Stack & Estudiante de Ingeniería de Sistemas",
    template: "%s | Hernán Arteaga",
  },
  description: "Portafolio técnico de Hernán Arteaga. Proyectos web y móviles construidos con React, Node.js y bases de datos relacionales. Tengo paquetes publicados en npm y hablo inglés a nivel C1.",
  keywords: [
    "Hernán Arteaga",
    "hrnntz",
    "Hernan Arteaga",
    "Desarrollador Full-Stack",
    "Full-Stack Developer",
    "Software Engineer",
    "Ingeniería de Sistemas",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "Supabase",
    "Universidad de Córdoba",
    "Montería",
    "Colombia",
  ],
  authors: [{ name: "Hernán Arteaga", url: "https://hrnntz.me" }],
  creator: "Hernán Arteaga",
  publisher: "Hernán Arteaga",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Hernán Arteaga | Desarrollador Full-Stack & Estudiante de Ingeniería de Sistemas",
    description: "Portafolio técnico de Hernán Arteaga. Proyectos web y móviles construidos con React, Node.js y bases de datos relacionales. Tengo paquetes publicados en npm y hablo inglés a nivel C1.",
    url: "https://hrnntz.me",
    siteName: "Hernán Arteaga Portfolio",
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hernán Arteaga | Desarrollador Full-Stack & Estudiante de Ingeniería de Sistemas",
    description: "Portafolio técnico de Hernán Arteaga. Proyectos web y móviles construidos con React, Node.js y bases de datos relacionales. Tengo paquetes publicados en npm y hablo inglés a nivel C1.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://hrnntz.me/#website",
      url: "https://hrnntz.me",
      name: "Hernán Arteaga | Portafolio",
      description: "Portafolio técnico de Hernán Arteaga. Proyectos web y móviles construidos con React, Node.js y bases de datos relacionales.",
      publisher: {
        "@id": "https://hrnntz.me/#person",
      },
      inLanguage: "es",
    },
    {
      "@type": "Person",
      "@id": "https://hrnntz.me/#person",
      name: "Hernán Arteaga",
      alternateName: ["hrnntz", "Hernan Arteaga"],
      url: "https://hrnntz.me",
      image: "https://hrnntz.me/opengraph-image",
      jobTitle: "Full-Stack Developer",
      description: "Desarrollador Full-Stack y estudiante de Ingeniería de Sistemas en la Universidad de Córdoba con experiencia en React, Node.js y TypeScript.",
      sameAs: [
        "https://github.com/hrnntz",
        "https://linkedin.com/in/hrnntz",
        "https://www.npmjs.com/~hrnntz",
      ],
      knowsAbout: [
        "TypeScript",
        "JavaScript",
        "React",
        "Next.js",
        "Node.js",
        "Express",
        "React Native",
        "PostgreSQL",
        "Supabase",
        "Full-Stack Development",
        "Software Engineering",
      ],
      affiliation: {
        "@type": "CollegeOrUniversity",
        name: "Universidad de Córdoba",
      },
    },
  ],
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
