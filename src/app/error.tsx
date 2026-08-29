"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6 text-center">
      <h1 className="font-sans text-4xl font-bold text-foreground">Error</h1>
      <p className="font-mono text-foreground/80">
        &gt;_ Un proceso falló inesperadamente.
      </p>
      <button
        onClick={() => reset()}
        className="mt-8 px-6 py-2 border border-foreground hover:bg-foreground hover:text-background transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent outline-none font-sans font-medium text-sm"
      >
        Reintentar proceso
      </button>
    </div>
  );
}
