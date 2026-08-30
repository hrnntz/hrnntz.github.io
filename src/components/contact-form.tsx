"use client";

import { useState, useRef } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const data = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        setErrorMsg(json.error ?? "Algo salió mal.");
        setStatus("error");
        return;
      }

      setStatus("success");
      formRef.current?.reset();
    } catch {
      setErrorMsg("Error de red. Verifica tu conexión.");
      setStatus("error");
    }
  }

  const isLoading = status === "loading";

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="space-y-4 max-w-xl"
      noValidate
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label htmlFor="name" className="text-sm font-medium">
            Nombre
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            disabled={isLoading}
            placeholder="Tu nombre"
            className="w-full rounded-md border border-border-color bg-transparent px-3 py-2 text-sm outline-none placeholder:text-foreground/40 focus-visible:ring-1 focus-visible:ring-accent disabled:opacity-50"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            disabled={isLoading}
            placeholder="tu@email.com"
            className="w-full rounded-md border border-border-color bg-transparent px-3 py-2 text-sm outline-none placeholder:text-foreground/40 focus-visible:ring-1 focus-visible:ring-accent disabled:opacity-50"
          />
        </div>
      </div>

      <div className="space-y-1">
        <label htmlFor="message" className="text-sm font-medium">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          disabled={isLoading}
          placeholder="Cuéntame en qué puedo ayudarte."
          className="w-full rounded-md border border-border-color bg-transparent px-3 py-2 text-sm outline-none resize-none placeholder:text-foreground/40 focus-visible:ring-1 focus-visible:ring-accent disabled:opacity-50"
        />
      </div>

      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={isLoading}
          className="text-sm font-medium px-4 py-2 rounded-md border border-border-color hover:border-accent hover:text-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed outline-none focus-visible:ring-1 focus-visible:ring-accent"
        >
          {isLoading ? "Enviando…" : "Enviar mensaje"}
        </button>

        {status === "success" && (
          <p className="text-sm text-foreground/70">
            Mensaje enviado. Te respondo pronto.
          </p>
        )}

        {status === "error" && (
          <p className="text-sm text-red-500" role="alert">
            {errorMsg}
          </p>
        )}
      </div>
    </form>
  );
}
