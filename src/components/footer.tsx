import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border-color py-8 mt-auto" id="contact">
      <div className="container mx-auto px-4 max-w-3xl flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm font-mono text-foreground/70">
          &copy; {new Date().getFullYear()} Hernán. Creado con rigor.
        </p>
        <ul className="flex items-center space-x-6 text-sm font-medium">
          <li>
            <a 
              href="mailto:hola@hrnntz.me" 
              className="hover:text-accent focus-visible:underline outline-none underline-offset-4"
              aria-label="Enviar correo a Hernán"
            >
              Email
            </a>
          </li>
          <li>
            <a 
              href="https://github.com/hrnntz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-accent focus-visible:underline outline-none underline-offset-4"
              aria-label="Perfil de GitHub de Hernán"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
