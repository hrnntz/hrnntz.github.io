import ProjectCard from "@/components/project-card";
import SkillsList from "@/components/skills-list";

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Bio Section */}
      <section className="space-y-6 pt-4">
        <div className="space-y-2">
          <h1 className="font-sans text-3xl font-bold tracking-tight">Hernán</h1>
          <p className="text-lg text-foreground font-medium">
            Estudiante de Ingeniería de Sistemas — Universidad de Córdoba, Montería.
          </p>
        </div>
        <p className="text-foreground/80 max-w-2xl leading-relaxed">
          Trabajo principalmente en el ecosistema JavaScript/TypeScript construyendo aplicaciones full-stack de principio a fin. Me interesa la resolución de problemas de infraestructura, estado, concurrencia de datos y la creación de interfaces técnicas precisas.
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
        <div className="flex flex-wrap items-center gap-6 pt-2">
          <div className="flex items-center space-x-6">
            <a 
              href="mailto:hola@hrnntz.me"
              className="text-sm font-medium hover:text-accent focus-visible:underline outline-none underline-offset-4"
            >
              Email
            </a>
            <a 
              href="https://github.com/hrnntz"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-medium hover:text-accent focus-visible:underline outline-none underline-offset-4"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
