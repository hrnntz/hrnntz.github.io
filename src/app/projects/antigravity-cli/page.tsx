import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Antigravity CLI Tooling — Paquetes Open Source en npm",
  description: "Detalles técnicos de Antigravity CLI Tooling: Herramientas CLI interactivas publicadas en npm (agy-mcp, agy-skills) para instalar y auditar herramientas de IA con Google OSV por Hernán Arteaga.",
  alternates: {
    canonical: "/projects/antigravity-cli",
  },
  openGraph: {
    title: "Antigravity CLI Tooling | Hernán Arteaga",
    description: "Herramientas de terminal open-source para instalar y auditar herramientas de IA publicadas en npm.",
    url: "https://hrnntz.me/projects/antigravity-cli",
    type: "article",
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
        <p className="text-lg text-foreground/80">Herramientas de terminal open-source para instalar y auditar herramientas de IA</p>
      </header>

      <section className="space-y-4">
        <h2 className="font-sans text-xl font-semibold border-b border-border-color pb-2">El Problema</h2>
        <p className="text-foreground/80 leading-relaxed">
          Configurar servidores MCP o habilidades en Antigravity CLI suele requerir buscar repositorios a mano, editar archivos JSON de configuración y adivinar si el paquete que estás instalando tiene dependencias vulnerables. Creé dos herramientas CLI interactivas para buscar, auditar vulnerabilidades y configurar todo directamente desde la terminal.
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
            <h3 className="font-sans font-semibold mb-2">1. Búsqueda Interactiva y Configuración Automática</h3>
            <p className="text-foreground/80 leading-relaxed text-sm">
              Construí un asistente interactivo en terminal con Inquirer y Commander. El CLI consulta el registro de npm y la API de skills.sh, muestra descripciones y versiones en vivo, y escribe la configuración requerida en los archivos JSON locales del usuario sin necesidad de edición manual.
            </p>
          </div>

          <div>
            <h3 className="font-sans font-semibold mb-2">2. Auditoría de Seguridad con Google OSV</h3>
            <p className="text-foreground/80 leading-relaxed text-sm">
              Antes de confirmar la instalación de cualquier herramienta, el CLI consulta la base de datos abierta de vulnerabilidades de Google (api.osv.dev). Si existen CVEs reportados para ese paquete, muestra el detalle y la gravedad en consola para alertar al usuario antes de ejecutar código externo.
            </p>
          </div>

          <div>
            <h3 className="font-sans font-semibold mb-2">3. Pruebas Nativas y CI/CD Multi-Plataforma</h3>
            <p className="text-foreground/80 leading-relaxed text-sm">
              En lugar de agregar dependencias pesadas de testing, escribí la suite de pruebas unitarias con el módulo nativo <code>node:test</code> de Node.js. Configuré GitHub Actions con una matriz para ejecutar los tests automáticamente en Linux y Windows en cada commit o pull request.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4 pt-8 border-t border-border-color">
        <p className="text-foreground/80 text-sm">
          Publicados en npm como <a href="https://www.npmjs.com/package/antigravity-mcp-installer" target="_blank" rel="noopener noreferrer" className="text-foreground font-medium hover:text-accent focus-visible:underline outline-none underline-offset-4">antigravity-mcp-installer</a> y <a href="https://www.npmjs.com/package/antigravity-skills-installer" target="_blank" rel="noopener noreferrer" className="text-foreground font-medium hover:text-accent focus-visible:underline outline-none underline-offset-4">antigravity-skills-installer</a> (comandos de terminal <code>agy-mcp</code> y <code>agy-skills</code>). Código en <a href="https://github.com/hrnntz/antigravity-mcp-installer" target="_blank" rel="noopener noreferrer" className="text-foreground font-medium hover:text-accent focus-visible:underline outline-none underline-offset-4">GitHub</a>.
        </p>
      </section>
    </article>
  );
}
