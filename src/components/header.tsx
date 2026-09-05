import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-border-color py-6 mt-4">
      <div className="container mx-auto px-4 max-w-3xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <Link href="/" className="font-sans font-bold text-xl hover:text-accent focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-accent outline-none">
            Hernán Arteaga
          </Link>
          <p className="text-sm mt-1 text-foreground/80">Estudiante de Ingeniería de Sistemas / Software Engineer</p>
        </div>
        <nav>
          <ul className="flex items-center space-x-6 text-sm font-medium">
            <li>
              <Link href="/#projects" className="hover:text-accent focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent outline-none">
                Proyectos
              </Link>
            </li>
            <li>
              <Link href="/#skills" className="hover:text-accent focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent outline-none">
                Skills
              </Link>
            </li>
            <li>
              <a href="https://linkedin.com/in/hrnntz" target="_blank" rel="noopener noreferrer" className="hover:text-accent focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent outline-none">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="/Resume_General.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-accent focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent outline-none">
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
