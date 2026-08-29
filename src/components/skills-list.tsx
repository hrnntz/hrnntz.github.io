interface SkillCategory {
  title: string;
  skills: {
    name: string;
    evidence: string;
  }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React 19 & Next.js", evidence: "Implementación de App Router y hooks en este portafolio y StreamHub." },
      { name: "React Native", evidence: "Desarrollo y resolución de bugs con Metro bundler en PandaAI." },
      { name: "Tailwind CSS & HeroUI", evidence: "Diseño de sistemas consistentes e interfaces en ambos proyectos." },
    ],
  },
  {
    title: "Backend & Datos",
    skills: [
      { name: "PostgreSQL & TypeORM", evidence: "Modelado relacional y API REST implementada para PandaAI." },
      { name: "Supabase (Auth, RLS, Realtime)", evidence: "Sincronización segura de estados y notificaciones en StreamHub." },
      { name: "Node.js & Express", evidence: "Orquestación del backend y endpoints de PandaAI." },
    ],
  },
  {
    title: "Infraestructura & Integración",
    skills: [
      { name: "Vercel Serverless", evidence: "Despliegue y ejecución de funciones asíncronas en StreamHub." },
      { name: "Render & Neon", evidence: "Hosting de backend y base de datos serverless para PandaAI." },
      { name: "Networking (adb reverse)", evidence: "Resolución de aislamiento de red durante pruebas locales en Android." },
    ],
  },
];

export default function SkillsList() {
  return (
    <div className="space-y-8">
      {skillCategories.map((category) => (
        <section key={category.title}>
          <h3 className="font-sans font-semibold text-base mb-4 border-b border-border-color pb-2">
            {category.title}
          </h3>
          <ul className="space-y-4">
            {category.skills.map((skill) => (
              <li key={skill.name} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 text-sm">
                <span className="font-semibold whitespace-nowrap min-w-[220px]">{skill.name}</span>
                <span className="text-foreground/80 leading-relaxed">{skill.evidence}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
