import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PandaAI",
  description: "Implementación técnica de PandaAI: App móvil con IA para niños.",
  alternates: {
    canonical: '/projects/panda-ai',
  },
};

export default function PandaAIPage() {
  return (
    <article className="space-y-12">
      <header className="space-y-4">
        <div className="flex items-center space-x-2 text-sm font-mono text-foreground/60 mb-6">
          <Link href="/" className="hover:text-accent focus-visible:underline outline-none underline-offset-4">~/home</Link>
          <span>/</span>
          <span>projects</span>
          <span>/</span>
          <span className="text-foreground">panda-ai</span>
        </div>
        <h1 className="font-sans text-3xl font-bold tracking-tight">PandaAI</h1>
        <p className="text-lg text-foreground/80">App móvil con inteligencia artificial para niños</p>
      </header>

      <section className="space-y-4">
        <h2 className="font-sans text-xl font-semibold border-b border-border-color pb-2">El Problema</h2>
        <p className="text-foreground/80 leading-relaxed">
          Este proyecto de innovación universitario, desarrollado en colaboración con un equipo, requería un ecosistema concurrente: desde el manejo de interfaces fluidas en el dispositivo hasta la persistencia de perfiles de usuario en el servidor. Mi rol se centró en la arquitectura del backend, la integración del pipeline de voz y el desarrollo del cliente móvil. El desafío de infraestructura radicaba en conectar el entorno móvil (React Native) con un backend relacional transaccional y desplegarlo en un entorno serverless optimizado en costos.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-sans text-xl font-semibold border-b border-border-color pb-2">Stack Tecnológico</h2>
        <ul className="flex flex-wrap gap-2">
          {["React Native", "TypeScript", "Node.js", "Express", "TypeORM", "PostgreSQL", "Render", "Neon"].map((tech) => (
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
            <h3 className="font-sans font-semibold mb-2">1. Arquitectura Relacional de la API REST</h3>
            <p className="text-foreground/80 leading-relaxed text-sm">
              Diseñé la capa de persistencia en PostgreSQL sobre Neon, mapeándola a través de TypeORM. Implementé una API REST en Node.js (Express) para abstraer la lógica de negocio, incluyendo registro y autenticación de usuarios, manteniendo integridad referencial a nivel de base de datos.
            </p>
          </div>

          <div>
            <h3 className="font-sans font-semibold mb-2">2. Resolución de Aislamiento de Red</h3>
            <p className="text-foreground/80 leading-relaxed text-sm">
              Durante el desarrollo con un dispositivo físico, la red WiFi presentaba aislamiento de AP (AP isolation), lo que impedía la conexión hacia la API local. Resolví este bloqueo instrumentando un túnel reverso vía USB mediante <code>adb reverse tcp:PORT tcp:PORT</code>, permitiendo al dispositivo rutear el tráfico directamente hacia el localhost de la máquina de desarrollo.
            </p>
          </div>

          <div>
            <h3 className="font-sans font-semibold mb-2">3. Depuración del Metro Bundler</h3>
            <p className="text-foreground/80 leading-relaxed text-sm">
              Identifiqué y resolví bugs de resolución asíncrona dentro del Metro bundler en React Native, originados por dependencias transitivas conflictivas. Esto estabilizó la fase de construcción de la aplicación y garantizó la viabilidad del empaquetado para despliegues posteriores.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
