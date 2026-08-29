import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  stack: string[];
  slug: string;
}

export default function ProjectCard({ title, description, stack, slug }: ProjectCardProps) {
  return (
    <article className="relative border border-border-color p-5 hover:border-foreground transition-colors group bg-background">
      <div className="flex justify-between items-baseline mb-3">
        <h3 className="font-sans font-semibold text-lg group-hover:text-accent transition-colors">
          <Link 
            href={`/projects/${slug}`} 
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background"
          >
            <span className="absolute inset-0" aria-hidden="true" />
            {title}
          </Link>
        </h3>
        <span className="text-xs text-foreground/50 font-mono transition-transform group-hover:translate-x-1">→</span>
      </div>
      <p className="text-sm text-foreground/80 mb-5">{description}</p>
      <ul className="flex flex-wrap gap-2 mt-auto">
        {stack.map((tech) => (
          <li key={tech} className="text-xs font-mono bg-border-color/30 border border-border-color px-2 py-1">
            {tech}
          </li>
        ))}
      </ul>
    </article>
  );
}
