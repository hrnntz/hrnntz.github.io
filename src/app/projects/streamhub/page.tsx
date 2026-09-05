import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "StreamHub",
  description: "Detalles técnicos de StreamHub: Agregador de eventos deportivos en vivo y estadísticas.",
  alternates: {
    canonical: '/projects/streamhub',
  },
};

export default function StreamHubPage() {
  return (
    <article className="space-y-12">
      <header className="space-y-4">
        <div className="flex items-center space-x-2 text-sm font-mono text-foreground/60 mb-6">
          <Link href="/" className="hover:text-accent focus-visible:underline outline-none underline-offset-4">~/home</Link>
          <span>/</span>
          <span>projects</span>
          <span>/</span>
          <span className="text-foreground">streamhub</span>
        </div>
        <h1 className="font-sans text-3xl font-bold tracking-tight">StreamHub</h1>
        <p className="text-lg text-foreground/80">Agregador de transmisiones deportivas y marcadores en tiempo real</p>
      </header>

      <section className="space-y-4">
        <h2 className="font-sans text-xl font-semibold border-b border-border-color pb-2">El Problema</h2>
        <p className="text-foreground/80 leading-relaxed">
          Ver deportes en vivo por internet suele ser incómodo: las páginas de streaming están llenas de anuncios invasivos y el video llega con retraso frente a las notificaciones móviles, arruinando los goles antes de verlos. Quería construir una interfaz limpia que combinara transmisiones de video con estadísticas en vivo de ESPN, manteniendo un reproductor flotante que no se reinicie al navegar.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-sans text-xl font-semibold border-b border-border-color pb-2">Stack Tecnológico</h2>
        <ul className="flex flex-wrap gap-2">
          {["React 19", "Vite", "React Router 7", "Tailwind CSS", "HeroUI", "Framer Motion", "Supabase", "PostgreSQL", "Vercel Edge Functions"].map((tech) => (
            <li key={tech} className="text-sm font-mono bg-border-color/30 border border-border-color px-3 py-1.5">
              {tech}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="font-sans text-xl font-semibold border-b border-border-color pb-2">Implementación Técnica</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="font-sans font-semibold mb-2">1. Caché en Memoria y Emparejamiento Aproximado</h3>
            <p className="text-foreground/80 leading-relaxed text-sm">
              Para evitar saturar las APIs de terceros y no superar límites de peticiones, implementé una capa de caché en memoria que comparte respuestas entre componentes sin hacer fetches repetidos. Además, como las fuentes de video y las de estadísticas no comparten identificadores comunes, programé un algoritmo de emparejamiento aproximado (fuzzy matching) que asocia partidos por nombres de equipos y horarios de juego.
            </p>
          </div>

          <div>
            <h3 className="font-sans font-semibold mb-2">2. Persistencia y Seguridad con Supabase</h3>
            <p className="text-foreground/80 leading-relaxed text-sm">
              Sincronicé los equipos favoritos y el historial de navegación mediante Supabase. Diseñé políticas de Row Level Security (RLS) en PostgreSQL para garantizar que cada usuario solo pueda consultar y modificar sus propios registros, protegiendo las credenciales mediante funciones serverless en Vercel.
            </p>
          </div>

          <div>
            <h3 className="font-sans font-semibold mb-2">3. Notificaciones Anti-Spoiler Calibradas</h3>
            <p className="text-foreground/80 leading-relaxed text-sm">
              Cada transmisión tiene un retraso distinto frente a la señal original de televisión. Diseñé un sistema de alertas push donde el desfase se calibra según la latencia de la fuente de video. Las notificaciones se programan con cron jobs y se retardan automáticamente para llegar justo después de que la jugada se ve en pantalla.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4 pt-8 border-t border-border-color">
        <p className="text-foreground/80 text-sm">
          Proyecto personal desarrollado como Progressive Web App (PWA) e implementado sobre la red Edge de Vercel.
        </p>
      </section>
    </article>
  );
}
