"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Tech logos mapping for reuse
const techLogos: Record<string, { logo: string; invert?: boolean }> = {
  "JavaScript": { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  "TypeScript": { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  "React": { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  "Next.js": { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", invert: true },
  "Node.js": { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  "Express": { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", invert: true },
  "TailwindCSS": { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  "shadcn/ui": { logo: "https://avatars.githubusercontent.com/u/139895814?s=200&v=4" },
  "Shadcn/ui": { logo: "https://avatars.githubusercontent.com/u/139895814?s=200&v=4" },
  "Motion": { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg" },
  "Bun": { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bun/bun-original.svg" },
  "Zustand": { logo: "https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg" },
  "PostgreSQL": { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  "MongoDB": { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  "Git": { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  "Figma": { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  "GitHub": { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", invert: true },
  "Prisma": { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg", invert: true },
  "Redis": { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  "Docker": { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  "Azure": { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
  "Temporal": { logo: "https://avatars.githubusercontent.com/u/56493103?s=200&v=4" },
  "Keycloak": { logo: "https://www.keycloak.org/resources/images/icon.svg" },
  "Versatile.ID": { logo: "https://versatile.id/favicon.ico", invert: true },
  "React Hook Form": { logo: "https://avatars.githubusercontent.com/u/53986236?s=200&v=4" },
  "React Query": { logo: "https://avatars.githubusercontent.com/u/72518640?s=200&v=4" },
  "Zod": { logo: "https://avatars.githubusercontent.com/u/95297378?s=200&v=4" },
  "Xellarkit": { logo: "https://xellar.co/favicon.ico" },
  "Tanstack Router": { logo: "https://avatars.githubusercontent.com/u/72518640?s=200&v=4" },
  "Supabase": { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
  "Chart.js": { logo: "https://www.chartjs.org/img/chartjs-logo.svg" },
  "Neon": { logo: "https://cdn.simpleicons.org/neon" },
  "Clerk": { logo: "https://cdn.simpleicons.org/clerk" },
  "Drizzle": { logo: "https://cdn.simpleicons.org/drizzle" },
  "Thirdweb": { logo: "https://thirdweb.com/favicon.ico" },
};

// Tech stack data - unified list with logo URLs from devicon
const techStack = [
  { name: "JavaScript", ...techLogos["JavaScript"] },
  { name: "TypeScript", ...techLogos["TypeScript"] },
  { name: "React", ...techLogos["React"] },
  { name: "Next.js", ...techLogos["Next.js"] },
  { name: "Node.js", ...techLogos["Node.js"] },
  { name: "Express", ...techLogos["Express"] },
  { name: "TailwindCSS", ...techLogos["TailwindCSS"] },
  { name: "shadcn/ui", ...techLogos["shadcn/ui"] },
  { name: "Zustand", ...techLogos["Zustand"] },
  { name: "PostgreSQL", ...techLogos["PostgreSQL"] },
  { name: "MongoDB", ...techLogos["MongoDB"] },
  { name: "Neon", ...techLogos["Neon"] },
  { name: "Supabase", ...techLogos["Supabase"] },
  { name: "Drizzle", ...techLogos["Drizzle"] },
  { name: "Clerk", ...techLogos["Clerk"] },
  { name: "Git", ...techLogos["Git"] },
  { name: "Docker", ...techLogos["Docker"] },
  { name: "GitHub", ...techLogos["GitHub"] },
];

type Experience = {
  company: string;
  href?: string;
  logo?: string;
  roles: {
    title?: string;
    dateRange: string;
    bullets: string[];
  }[];
};

// Experience data - company-centric with multiple roles
const experiences: Experience[] = [
  {
    company: "Hostinginside",
    roles: [{ title: "Software Engineer", dateRange: "", bullets: [] }],
  },
  {
    company: "Versatile.ID",
    href: "https://versatile.id",
    roles: [
      {
        title: "Frontend Engineer",
        dateRange: "Oct 2025 - Present",
        bullets: [
          "Maintained a clean codebase and improved the website's speed and SEO.",
          "Built scalable dashboard interfaces with complex state management and real-time data visualization.",
          "Took the company's first official website from zero to production.",
        ],
      },
    ],
  },
];

// Projects data
const projects = [
  {
    title: "Tekmerion",
    description: "",
    codeLink: "",
    demoLink: "https://tekmerion.lol",
  },
  {
    title: "IDX Screener Tool",
    description: "",
    codeLink: "",
    demoLink: "",
    previews: [
      { type: "pdf" as const, src: "/accumulation-report.pdf", label: "Accumulation report" },
      { type: "pdf" as const, src: "/shareholder-report.pdf", label: "Shareholder report" },
      { type: "image" as const, src: "/heatmap.png", label: "Heatmap" },
      { type: "image" as const, src: "/commodity-rotation.png", label: "Commodity rotation" },
      { type: "video" as const, src: "/alert.mov", label: "Alert demo" },
    ],
  },
];

// Social links
const socialLinks = [
  { icon: Github, href: "https://github.com/nielderto", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/nielderto", label: "LinkedIn" },
  { icon: Mail, href: "mailto:nielderto@gmail.com", label: "Email" },

];

type Preview = { type: "image" | "pdf" | "video"; src: string; label: string };

function ProjectPreview({
  previews,
  hovered,
  onExpand,
}: {
  previews: Preview[];
  hovered: boolean;
  onExpand: (previews: Preview[]) => void;
}) {
  return (
    <span className="absolute left-0 top-full z-10 mt-2 block">
      <AnimatePresence>
        {hovered && (
          <motion.span
            className="flex flex-wrap gap-2 max-w-[calc(100vw-2rem)]"
            initial={{ opacity: 0, y: -4, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.97 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {previews.map((preview) => (
              <button
                key={preview.src}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onExpand([preview]);
                }}
                title={`${preview.label}, click to expand`}
                className="relative w-[72px] h-[96px] sm:w-[90px] sm:h-[120px] overflow-hidden rounded-md border border-border bg-muted cursor-pointer"
              >
                {preview.type === "image" ? (
                  <Image src={preview.src} alt={preview.label} fill className="object-cover" />
                ) : preview.type === "video" ? (
                  <video
                    src={preview.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover pointer-events-none"
                  />
                ) : (
                  <object
                    data={`${preview.src}#toolbar=0&view=FitH`}
                    type="application/pdf"
                    className="w-full h-full pointer-events-none"
                    aria-label={preview.label}
                  />
                )}
              </button>
            ))}
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}

type Project = {
  title: string;
  description: string;
  codeLink: string;
  demoLink: string;
  previews?: Preview[];
};
function PreviewModal({ previews, onClose }: { previews: Preview[]; onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6 outline-none"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      tabIndex={-1}
      ref={(el) => el?.focus()}
      onKeyDown={(e) => e.key === "Escape" && onClose()}
    >
      <motion.div
        className="flex flex-wrap gap-4 max-w-5xl max-h-[85vh] overflow-auto"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.9, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 12 }}
        transition={{ type: "spring", stiffness: 300, damping: 26 }}
      >
        {previews.map((preview) => (
          <div key={preview.src} className="space-y-2">
            {preview.type === "image" ? (
              <Image
                src={preview.src}
                alt={preview.label}
                width={600}
                height={800}
                className="max-h-[75vh] max-w-[90vw] w-auto rounded-md border border-border object-contain"
              />
            ) : preview.type === "video" ? (
              <video
                src={preview.src}
                controls
                muted
                autoPlay
                loop
                playsInline
                className="max-h-[75vh] max-w-[90vw] w-auto rounded-md border border-border"
              />
            ) : (
              <object
                data={preview.src}
                type="application/pdf"
                className="w-[500px] max-w-[90vw] h-[75vh] rounded-md border border-border"
                aria-label={preview.label}
              />
            )}
            <p className="text-center text-xs text-muted-foreground">{preview.label}</p>
          </div>
        ))}
      </motion.div>
      <button
        type="button"
        onClick={onClose}
        aria-label="Close preview"
        className="absolute top-6 right-6 text-white/80 hover:text-white text-2xl leading-none"
      >
        ×
      </button>
    </motion.div>
  );
}
export type BibleVerse = {
  text: string;
  bookname: string;
  chapter: string;
  verse: string;
} | null;

const fade = { variants: fadeInUp, transition: { duration: 0.5 } };

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-3 font-mono text-sm text-foreground">
      <span className="mr-2 text-muted-foreground">$</span>
      {children}
    </h2>
  );
}

function ProjectRow({
  project,
  onExpand,
}: {
  project: Project;
  onExpand: (previews: Preview[]) => void;
}) {
  const [hovered, setHovered] = useState(false);
  const href = project.codeLink || project.demoLink;

  return (
    <li
      className="relative"
      onMouseEnter={project.previews ? () => setHovered(true) : undefined}
      onMouseLeave={project.previews ? () => setHovered(false) : undefined}
      onClick={project.previews ? () => setHovered((h) => !h) : undefined}
    >
      <span className="absolute -left-[29px] top-[7px] h-2 w-2 rounded-full border border-muted-foreground/60 bg-background" />
      <div className="flex items-baseline justify-between gap-4">
        <span className="text-foreground">{project.title}</span>
        <span className="flex items-center gap-3 font-mono text-xs text-muted-foreground">
          {project.demoLink && project.codeLink && (
            <Link href={project.demoLink} target="_blank" className="hover:text-foreground">
              demo
            </Link>
          )}
          {href ? (
            <Link href={href} target="_blank" className="inline-flex items-center gap-1 hover:text-foreground">
              {project.codeLink ? "github" : new URL(href).hostname}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          ) : project.previews ? (
            <span>preview</span>
          ) : null}
        </span>
      </div>
      {project.description && (
        <p className="mt-0.5 max-w-prose text-sm text-muted-foreground">{project.description}</p>
      )}
      {project.previews && (
        <ProjectPreview previews={project.previews} hovered={hovered} onExpand={onExpand} />
      )}
    </li>
  );
}

export default function Portofolio({ bibleVerse }: { bibleVerse?: BibleVerse }) {
  const [activePreviews, setActivePreviews] = useState<Preview[] | null>(null);

  return (
    <main className="mx-auto max-w-2xl px-4 pt-16 pb-16 sm:pt-20 sm:pb-24">
      <AnimatePresence>
        {activePreviews && (
          <PreviewModal previews={activePreviews} onClose={() => setActivePreviews(null)} />
        )}
      </AnimatePresence>

      <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
        {/* Header */}
        <motion.header {...fade} className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Image
              src="/avatar2.jpeg"
              alt="Otneil Xander Susanto"
              width={56}
              height={56}
              className="h-14 w-14 rounded-full object-cover"
            />
            <div className="flex flex-col gap-0.5">
              <h1 className="group relative inline-grid cursor-default font-medium text-foreground" style={{ gridTemplateAreas: "'stack'" }}>
                <span className="transition-opacity duration-300 group-hover:opacity-0" style={{ gridArea: "stack" }}>
                  Otneil Xander Susanto
                </span>
                <span className="opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ gridArea: "stack" }}>
                  羅澤遠
                </span>
              </h1>
              <p className="text-muted-foreground">Software engineer</p>
            </div>
          </div>
          <nav className="flex items-center gap-2.5 text-muted-foreground">
            {socialLinks.map((l) => (
              <Link key={l.label} href={l.href} target="_blank" aria-label={l.label} className="-m-1.5 rounded-md p-1.5 transition-colors hover:text-foreground">
                <l.icon className="h-5 w-5" />
              </Link>
            ))}
          </nav>
        </motion.header>

        {/* Intro */}
        <motion.p {...fade} className="mt-10 text-lg leading-snug tracking-[-0.011em] text-pretty text-foreground">
          based in taiwan, currently working @ hostinginside SWE.
        </motion.p>

        {/* Terminal sections */}
        <motion.div {...fade} className="mt-10 space-y-10">
          <section>
            <SectionLabel>cat experience</SectionLabel>
            <ol className="relative ml-1 space-y-5 border-l border-muted-foreground/30 pl-6">
              {experiences.map((e, i) => {
                const now = i === 0;
                return (
                  <li key={e.company} className="relative">
                    <span
                      className={cn(
                        "absolute -left-[29px] top-[7px] h-2 w-2 rounded-full border border-muted-foreground/60 bg-background",
                        now && "border-foreground bg-foreground"
                      )}
                    />
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="text-foreground">{e.roles[0].title}</span>
                      <span className="font-mono text-xs text-muted-foreground">{now ? "now" : "prev"}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {e.href ? (
                        <Link href={e.href} target="_blank" className="hover:text-foreground">
                          {e.company}
                        </Link>
                      ) : (
                        e.company
                      )}
                    </p>
                  </li>
                );
              })}
            </ol>
          </section>

          <section>
            <SectionLabel>cat education</SectionLabel>
            <div className="flex items-baseline justify-between gap-4">
              <div>
                <p className="text-foreground">Asia University</p>
                <p className="text-sm text-muted-foreground">Bachelor of Computer Science and Information Engineering</p>
              </div>
              <span className="shrink-0 font-mono text-xs text-muted-foreground">2023 – 2027</span>
            </div>
          </section>
        </motion.div>
      </motion.div>

      {/* Projects */}
      <motion.section
        className="mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        {...fade}
      >
        <SectionLabel>ls projects</SectionLabel>
        <ul className="relative ml-1 space-y-5 border-l border-muted-foreground/30 pl-6">
          {projects.map((project) => (
            <ProjectRow key={project.title} project={project} onExpand={setActivePreviews} />
          ))}
        </ul>
      </motion.section>

      {/* Stack */}
      <motion.section
        className="mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        {...fade}
      >
        <SectionLabel>ls stack</SectionLabel>
        <div className="flex flex-wrap gap-x-3 gap-y-4">
          {techStack.map((tech) => (
            <Image
              key={tech.name}
              src={tech.logo}
              alt={tech.name}
              title={tech.name}
              unoptimized
              width={24}
              height={24}
              className={cn("h-6 w-6 object-contain", tech.invert && "dark:invert")}
            />
          ))}
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="mt-16 flex flex-col gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row sm:justify-between">
        {bibleVerse ? (
          <p className="max-w-md italic leading-relaxed">
            {bibleVerse.text}{" "}
            <span className="not-italic text-muted-foreground/70">
              — {bibleVerse.bookname} {bibleVerse.chapter}:{bibleVerse.verse}
            </span>
          </p>
        ) : (
          <p>Thanks for visiting.</p>
        )}
      </footer>
    </main>
  );
}
