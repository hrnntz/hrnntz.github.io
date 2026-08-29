import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6 text-center">
      <h1 className="font-sans text-5xl font-bold text-foreground">404</h1>
      <p className="font-mono text-foreground/80">
        &gt;_ Error: Ruta no encontrada.
      </p>
      <Link 
        href="/"
        className="mt-8 px-6 py-2 border border-foreground hover:bg-foreground hover:text-background transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent outline-none font-sans font-medium text-sm"
      >
        Regresar a ~/home
      </Link>
    </div>
  );
}
