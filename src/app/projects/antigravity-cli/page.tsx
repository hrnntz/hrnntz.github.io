import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Antigravity CLI Tooling",
  description: "Implementación técnica de Antigravity CLI Tooling: Herramientas CLI open-source para configuración de agentes IA.",
  alternates: {
    canonical: '/projects/antigravity-cli',
  },
};

export default function AntigravityCliPage() {
  return (
    <article className="space-y-12">
      <header className="space-y-4">
        <div className="flex items-center space-x-2 text-sm font-mono text-foreground/60 mb-6">
          <Link href="/" className="hover:text-accent focus-visible:underline outline-none underline-offset-4">~/home</Link>
          <span>/</span>
          <span>projects</span>
          <span>/</span>
          <span className="text-foreground">antigravity-cli</span>
        </div>
        <h1 className="font-sans text-3xl font-bold tracking-tight">Antigravity CLI Tooling</h1>
        <p className="text-lg text-foreground/80">Herramientas CLI open-source para configuración de agentes IA</p>
      </header>

      <section className="space-y-4">
        <h2 className="font-sans text-xl font-semibold border-b border-border-color pb-2">El Problema</h2>
        <p className="text-foreground/80 leading-relaxed">
          Configurar servidores MCP y habilidades de agentes para Antigravity CLI requiere editar manualmente archivos de configuración JSON, encontrar los paquetes correctos y verificar vulnerabilidades de seguridad. Construí estas herramientas CLI para automatizar y asegurar ese proceso desde la terminal.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-sans text-xl font-semibold border-b border-border-color pb-2">Stack Tecnológico</h2>
        <ul className="flex flex-wrap gap-2">
          {["Node.js", "Commander", "Inquirer", "Google OSV API", "npm Registry API", "GitHub Actions", "node:test"].map((tech) => (
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
            <h3 className="font-sans font-semibold mb-2">1. Registro y Descubrimiento de Paquetes</h3>
            <p className="text-foreground/80 leading-relaxed text-sm">
              Implementé una búsqueda interactiva que consulta el registro de npm y la API de skills.sh, presenta los resultados con metadatos estructurados y maneja la instalación y configuración automáticamente en el sistema del usuario.
            </p>
          </div>

          <div>
            <h3 className="font-sans font-semibold mb-2">2. Auditoría de Seguridad en Tiempo Real</h3>
            <p className="text-foreground/80 leading-relaxed text-sm">
              Cada paquete es analizado contra la base de datos de vulnerabilidades OSV de Google (api.osv.dev) antes de su instalación, mostrando detalles de CVE directamente en la consola para garantizar la seguridad de los agentes IA.
            </p>
          </div>

          <div>
            <h3 className="font-sans font-semibold mb-2">3. Testing y CI/CD Multi-plataforma</h3>
            <p className="text-foreground/80 leading-relaxed text-sm">
              Escribí suites de pruebas unitarias con el test runner nativo de Node.js (node:test) y configuré flujos de trabajo en una matriz de GitHub Actions para verificar compatibilidad cruzada entre entornos Linux y Windows.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4 pt-8 border-t border-border-color">
        <p className="text-foreground/80 text-sm">
          Publicados en npm como <a href="https://www.npmjs.com/package/agy-mcp" target="_blank" rel="noopener noreferrer" className="text-foreground font-medium hover:text-accent focus-visible:underline outline-none underline-offset-4">agy-mcp</a> y <a href="https://www.npmjs.com/package/agy-skills" target="_blank" rel="noopener noreferrer" className="text-foreground font-medium hover:text-accent focus-visible:underline outline-none underline-offset-4">agy-skills</a>. Código fuente en <a href="https://github.com/hrnntz/antigravity-mcp-installer" target="_blank" rel="noopener noreferrer" className="text-foreground font-medium hover:text-accent focus-visible:underline outline-none underline-offset-4">GitHub</a>.
        </p>
      </section>
    </article>
  );
}
