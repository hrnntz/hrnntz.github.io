import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PandaAI",
  description: "Detalles técnicos de PandaAI: App móvil con interacción de voz y backend en Node.js.",
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
        <p className="text-lg text-foreground/80">Plataforma interactiva para niños con voz en tiempo real y panel parental</p>
      </header>

      <section className="space-y-4">
        <h2 className="font-sans text-xl font-semibold border-b border-border-color pb-2">El Problema</h2>
        <p className="text-foreground/80 leading-relaxed">
          En este proyecto universitario en equipo, queríamos construir un juguete interactivo con voz y una app móvil para que los padres puedan configurar rutinas y monitorear la actividad de sus hijos. Mi responsabilidad principal fue programar la API REST en Node.js, modelar la base de datos con TypeORM y conectar el cliente móvil en React Native. El reto era lograr que el procesamiento de audio fuera rápido y que todo el backend fuera reproducible localmente con Docker.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-sans text-xl font-semibold border-b border-border-color pb-2">Stack Tecnológico</h2>
        <ul className="flex flex-wrap gap-2">
          {["React Native", "Expo SDK 54", "TypeScript", "Node.js", "Express 5", "TypeORM", "PostgreSQL", "Socket.io", "Docker Compose", "Groq Whisper", "ElevenLabs"].map((tech) => (
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
            <h3 className="font-sans font-semibold mb-2">1. API REST y Base de Datos Relacional</h3>
            <p className="text-foreground/80 leading-relaxed text-sm">
              Modelé las entidades en PostgreSQL (usuarios, perfiles infantiles, rutinas y registros de uso) usando TypeORM para manejar las migraciones de esquema. La API corre sobre Express 5 con validación estricta de payloads mediante Zod y autenticación por tokens JWT.
            </p>
          </div>

          <div>
            <h3 className="font-sans font-semibold mb-2">2. Pipeline de Voz e Interacción en Tiempo Real</h3>
            <p className="text-foreground/80 leading-relaxed text-sm">
              Conecté Groq Whisper para transcripción de audio ultrarrápida y ElevenLabs para sintetizar respuestas de voz con un tono adecuado para niños. La comunicación entre la app móvil y el servidor se apoya en WebSockets (Socket.io) para transmitir eventos y estado sin sobrecargar peticiones HTTP.
            </p>
          </div>

          <div>
            <h3 className="font-sans font-semibold mb-2">3. Depuración en Dispositivos Físicos y Docker</h3>
            <p className="text-foreground/80 leading-relaxed text-sm">
              Al probar la app en un teléfono físico, la red WiFi local aislaba las conexiones entre dispositivos. Para solucionarlo, configuré un reenvío de puertos por USB con <code>adb reverse tcp:3000 tcp:3000</code>, permitiendo al teléfono consumir la API local de mi máquina sin fricción. Además, empaqueté la API y PostgreSQL en un <code>docker-compose.yml</code> para que cualquier integrante del equipo pudiera levantar el entorno en un solo comando.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4 pt-8 border-t border-border-color">
        <p className="text-foreground/80 text-sm">
          Proyecto de innovación universitario. Código fuente disponible en <a href="https://github.com/hrnntz/smart-toy" target="_blank" rel="noopener noreferrer" className="text-foreground font-medium hover:text-accent focus-visible:underline outline-none underline-offset-4">GitHub</a>.
        </p>
      </section>
    </article>
  );
}
