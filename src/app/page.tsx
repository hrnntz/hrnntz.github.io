
import ProjectCard from "@/components/project-card";
import SkillsList from "@/components/skills-list";
import ContactForm from "@/components/contact-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Bio Section */}
      <section className="space-y-6 pt-4">
        <div className="space-y-2">
          <h1 className="font-sans text-3xl font-bold tracking-tight">Hernán Arteaga</h1>
          <p className="text-lg text-foreground font-medium">
            Estudiante de Ingeniería de Sistemas — Universidad de Córdoba, Montería.
          </p>
        </div>
        <p className="text-foreground/80 max-w-2xl leading-relaxed">
          Estoy en segundo semestre de Ingeniería de Sistemas en la Universidad de Córdoba. Trabajo con TypeScript, React y Node.js construyendo aplicaciones full-stack. Tengo paquetes publicados en npm (agy-mcp, agy-skills), hablo inglés a nivel C1, y busco oportunidades junior o de pasantía.
        </p>
      </section>

      {/* Projects Section */}
      <section className="space-y-8" id="projects">
        <h2 className="font-sans text-2xl font-semibold tracking-tight">Proyectos en Producción</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard 
            title="StreamHub"
            slug="streamhub"
            description="App web de streaming multideporte que combina datos en vivo con transmisiones HTTP."
            stack={["React 19", "Supabase", "Vercel Serverless"]}
          />
          <ProjectCard 
            title="PandaAI"
            slug="panda-ai"
            description="App móvil con inteligencia artificial conectada a una API REST relacional."
            stack={["React Native", "Node.js", "PostgreSQL"]}
          />
          <div className="md:col-span-2">
            <ProjectCard 
              title="Antigravity CLI Tooling"
              slug="antigravity-cli"
              description="Herramientas CLI open-source publicadas en npm para configurar servidores MCP y skills de agentes IA."
              stack={["Node.js", "npm Registry", "GitHub Actions"]}
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="space-y-8" id="skills">
        <h2 className="font-sans text-2xl font-semibold tracking-tight">Habilidades y Evidencia</h2>
        <SkillsList />
      </section>

      {/* Contact Section */}
      <section className="space-y-6 pt-8 border-t border-border-color">
        <h2 className="font-sans text-2xl font-semibold tracking-tight">Contacto</h2>
        <p className="text-foreground/80 max-w-xl leading-relaxed">
          Puedes contactarme para consultas técnicas o si buscas a alguien para un proyecto freelance.
        </p>
        <ContactForm />
        <div className="flex items-center space-x-6 pt-2">
          <a
            href="mailto:hola@hrnntz.me"
            className="text-sm font-medium hover:text-accent focus-visible:underline outline-none underline-offset-4"
            aria-label="Enviar correo a Hernán"
          >
            Email
          </a>
          <a
            href="https://github.com/hrnntz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium hover:text-accent focus-visible:underline outline-none underline-offset-4"
            aria-label="Perfil de GitHub de Hernán"
          >
            GitHub
          </a>
        </div>
      </section>
    </div>
  );
}
