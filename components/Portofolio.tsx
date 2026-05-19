"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  FileText,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

function CyclingText() {
  const duration = 8;
  const times = [0, 0.36, 0.44, 0.86, 0.94, 1];

  return (
    <span className="inline-block h-5 overflow-hidden text-sm text-muted-foreground">
      <motion.span
        className="flex flex-col"
        animate={{ y: ["0%", "0%", "-50%", "-50%", "0%", "0%"] }}
        transition={{ duration, times, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="flex h-5 items-center whitespace-nowrap">
          Web Developer &amp; Software Engineer
        </span>
        <span className="flex h-5 items-center whitespace-nowrap">
          Originally from Indonesia, based in Taiwan.
        </span>
      </motion.span>
    </span>
  );
}

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
  { name: "Git", ...techLogos["Git"] },
  { name: "Figma", ...techLogos["Figma"] },
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
    company: "Versatile.ID",
    href: "https://versatile.id",
    roles: [
      {
        title: "Frontend Developer",
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
    title: "OnPay",
    description: "A seamless, gas-free payment app bridging Web2 and Web3 using IDRX.",
    codeLink: "https://github.com/nielderto/OnPay",
    demoLink: "https://youtu.be/aYsm5ScMwxs?si=NVKFfHBbZIvJOanV",
  },
  {
    title: "LinkFi",
    description: "A cross-chain payment solution supporting all EVM-compatible chains with real-time analytics.",
    codeLink: "https://github.com/FOwen123/Chromion-2025",
    demoLink: "https://www.youtube.com/watch?v=hZikjbj44sM",
  },
  {
    title: "Curad",
    description: "A Reddit clone built to understand databases and backend fundamentals.",
    codeLink: "https://github.com/nielderto/Curad",
    demoLink: "",
  },
  {
    title: "Payment Links",
    description: "A fullstack app for creating and sharing payment links, built to learn backend fundamentals — HTTP, middleware, auth, JWT, and database operations using Neon.",
    codeLink: "https://github.com/nielderto/payment-links-backend",
    demoLink: "",
  },
];

// Social links
const socialLinks = [
  { icon: Github, href: "https://github.com/nielderto", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/nielderto", label: "LinkedIn" },
  { icon: Mail, href: "mailto:nielderto@gmail.com", label: "Email" },

];

function TechLogo({ name, logo, invert }: { name: string; logo: string; invert?: boolean }) {
  return (
    <div className="group relative flex items-center justify-center w-12 h-12 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
      <Image
        src={logo}
        alt={name}
        width={28}
        height={28}
        className={cn("object-contain", invert && "invert")}
      />
      <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs bg-popover border border-border rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
        {name}
      </span>
    </div>
  );
}


function ExperienceCard({
  experience,
  isLast,
}: {
  experience: Experience;
  isLast: boolean;
}) {
  // Calculate overall date range for the company
  const getOverallDateRange = () => {
    if (experience.roles.length === 0) return "";
    const firstRole = experience.roles[experience.roles.length - 1]; // Oldest role
    const lastRole = experience.roles[0]; // Most recent role
    const startDate = firstRole.dateRange.split(" - ")[0];
    const endDate = lastRole.dateRange.split(" - ")[1];
    return `${startDate} - ${endDate}`;
  };

  return (
    <div className="relative pb-8">
      {/* Vertical Timeline Line */}
      {!isLast && experience.logo && (
        <div className="absolute left-[27px] top-[56px] bottom-0 w-px bg-border" />
      )}
      
      {/* Company Name Row */}
      <div className="flex items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-4">
          {experience.logo && (
            <div className="relative w-14 h-14 rounded-full bg-black border border-border flex items-center justify-center p-2 flex-shrink-0">
              <Image
                src={experience.logo}
                alt={experience.company}
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
          )}
          <h3 className="text-xl font-bold">
            {experience.href ? (
              <Link
                href={experience.href}
                target="_blank"
                className="hover:underline"
              >
                {experience.company}
              </Link>
            ) : (
              experience.company
            )}
          </h3>
        </div>
        <span className="text-sm text-muted-foreground whitespace-nowrap">
          {getOverallDateRange()}
        </span>
      </div>

      {/* Content */}
      <div className={cn("space-y-4", experience.logo && "pl-20")}>

        {/* Roles */}
        {experience.roles.map((role, roleIndex) => (
          <div key={roleIndex} className="space-y-2">
            {role.title && (
              <p className="text-sm font-medium text-foreground">{role.title}</p>
            )}
            {role.bullets.length > 0 && (
              <ul className="list-disc list-outside ml-5 space-y-1.5 text-muted-foreground text-sm">
                {role.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex}>{bullet}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}


export type BibleVerse = {
  text: string;
  bookname: string;
  chapter: string;
  verse: string;
} | null;

export default function Portofolio({ bibleVerse }: { bibleVerse?: BibleVerse }) {
  return (
    <main className="container mx-auto px-4 py-12 max-w-xl mt-20 sm:mt-30">
      {/* Hero Section */}
      <motion.section
        className="space-y-6 mb-16"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div
          className="flex items-center justify-between gap-5"
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col">
            <h1 className="text-2xl md:text-3xl font-bold">
              <span className="group relative inline-grid cursor-pointer" style={{ gridTemplateAreas: "'stack'" }}>
                <span 
                  className="transition-all duration-300 group-hover:opacity-0 group-hover:scale-95"
                  style={{ gridArea: "stack" }}
                >
                  Otneil Xander Susanto
                </span>
                <span 
                  className="opacity-0 scale-105 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100"
                  style={{ gridArea: "stack" }}
                >
                  羅澤遠
                </span>
              </span>
            </h1>
            <CyclingText />
          </div>
          <Image
            src="/avatar2.jpeg"
            alt="Otneil Xander Susanto"
            width={80}
            height={80}
            className="rounded-full object-cover flex-shrink-0"
          />
        </motion.div>
        <motion.div
          className="flex items-center gap-4 pt-4"
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="text-foreground/60 hover:text-foreground transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6" />
              </Link>
            ))}
          </div>
          <Link
            href="/resume (1).pdf"
            target="_blank"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-foreground text-background rounded-md hover:bg-foreground/90 transition-colors"
          >
            <FileText className="w-4 h-4" />
            Resume
          </Link>
        </motion.div>
      </motion.section>

      {/* Recent Experience Section */}
      <motion.section
        className="space-y-6 mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2 className="text-2xl font-bold border-l-2 border-border pl-3" variants={fadeInUp} transition={{ duration: 0.5 }}>
          Experience
        </motion.h2>
        <motion.div className="relative" variants={fadeInUp} transition={{ duration: 0.5, delay: 0.1 }}>
          {experiences.map((exp, i) => (
            <ExperienceCard 
              key={i} 
              experience={exp} 
              isLast={i === experiences.length - 1}
            />
          ))}
        </motion.div>
      </motion.section>

      {/* Tech Stack Section */}
      <motion.section
        className="space-y-6 mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2 className="text-2xl font-bold border-l-2 border-border pl-3" variants={fadeInUp} transition={{ duration: 0.5 }}>
          Tech Stack
        </motion.h2>
        <motion.div
          className="flex flex-wrap gap-4 pb-4"
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {techStack.map((tech) => (
            <TechLogo key={tech.name} name={tech.name} logo={tech.logo} invert={tech.invert} />
          ))}
        </motion.div>
      </motion.section>

      {/* Recent Projects Section */}
      <motion.section
        className="space-y-6 mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2 className="text-2xl font-bold border-l-2 border-border pl-3" variants={fadeInUp} transition={{ duration: 0.5 }}>
          Projects
        </motion.h2>
        <motion.ul
          className="list-disc list-outside ml-5 space-y-2 text-muted-foreground"
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {projects.map((project, i) => (
            <li key={i}>
              <Link href={project.codeLink} target="_blank" className="text-foreground font-medium hover:underline">
                {project.title}
              </Link>
              {": "}
              {project.description}
            </li>
          ))}
        </motion.ul>
      </motion.section>

      {/* Education Section */}
      <motion.section
        className="space-y-6 mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2 className="text-2xl font-bold border-l-2 border-border pl-3" variants={fadeInUp} transition={{ duration: 0.5 }}>
          Education
        </motion.h2>
        <motion.div
          className="border border-border rounded-lg bg-card overflow-hidden p-6"
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-white flex items-center justify-center p-2">
              <Image
                src="/image.png"
                alt="Asia University"
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
            <div className="flex-1 space-y-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                <h3 className="text-xl font-semibold">Asia University</h3>
                <span className="text-sm text-muted-foreground">2023 - 2027</span>
              </div>
              <p className="text-muted-foreground text-sm">Bachelor of Computer Science and Information Engineering</p>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="pt-8 border-t border-border"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.5 }}
      >
        <p className="text-center text-muted-foreground text-sm mb-6">
          Thanks for visiting! 
        </p>
        {bibleVerse && (
          <div className="text-center mb-6">
            <p className="text-muted-foreground text-sm italic leading-relaxed">
              {bibleVerse.text}
            </p>
            <p className="text-muted-foreground/70 text-xs mt-2">
              — {bibleVerse.bookname} {bibleVerse.chapter}:{bibleVerse.verse}
            </p>
          </div>
        )}
      </motion.footer>
    </main>
  );
}
