import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "StreamHub",
  description: "Implementación técnica de StreamHub: App web de streaming multideporte.",
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
        <p className="text-lg text-foreground/80">App web de streaming multideporte</p>
      </header>

      <section className="space-y-4">
        <h2 className="font-sans text-xl font-semibold border-b border-border-color pb-2">El Problema</h2>
        <p className="text-foreground/80 leading-relaxed">
          Las transmisiones deportivas en vivo sufren constantemente de desincronización entre el feed de video y las fuentes de datos adicionales (marcadores, estadísticas). El requerimiento principal era construir un cliente web capaz de consumir múltiples fuentes en tiempo real (APIs de streams y API de ESPN) y orquestarlas sin saturar el cliente de peticiones redundantes ni perder la coherencia del estado a través de múltiples dispositivos.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-sans text-xl font-semibold border-b border-border-color pb-2">Stack Tecnológico</h2>
        <ul className="flex flex-wrap gap-2">
          {["React 19", "Vite", "React Router v7", "Tailwind CSS", "HeroUI", "Framer Motion", "Supabase", "PostgreSQL", "Vercel Serverless"].map((tech) => (
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
            <h3 className="font-sans font-semibold mb-2">1. Estrategia de Caché y Deduplicación</h3>
            <p className="text-foreground/80 leading-relaxed text-sm">
              Implementé un mecanismo de caché en memoria a nivel cliente para deduplicar requests HTTP simultáneos hacia las APIs de terceros. Esto mitigó el riesgo de alcanzar límites de <i>rate-limiting</i> durante picos de concurrencia, aislando los componentes del árbol de React que dependían del mismo recurso asíncrono.
            </p>
          </div>

          <div>
            <h3 className="font-sans font-semibold mb-2">2. Sincronización de Estado y RLS</h3>
            <p className="text-foreground/80 leading-relaxed text-sm">
              Sincronicé los historiales de visualización y favoritos a través de Supabase. Diseñé e implementé políticas de <i>Row Level Security</i> (RLS) en PostgreSQL para restringir el acceso a los datos a nivel de fila, asegurando que cada cliente solo pueda consultar o mutar los registros asociados al ID de su sesión autenticada.
            </p>
          </div>

          <div>
            <h3 className="font-sans font-semibold mb-2">3. Notificaciones Asíncronas Calibradas</h3>
            <p className="text-foreground/80 leading-relaxed text-sm">
              Desarrollé un sistema de notificaciones push donde el <i>delay</i> es calculado y calibrado a nivel de cliente individual. Este algoritmo compensa la varianza en el retraso del stream de video, evitando que las alertas tempranas del servidor corrompan la experiencia visual (spoilers) de la transmisión.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
