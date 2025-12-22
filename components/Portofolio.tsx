"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  FileText,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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

// Country flags mapping (emoji)
const countryFlags: Record<string, string> = {
  "Indonesian": "🇮🇩",
  "Taiwan": "🇹🇼",
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

// Experience data
const experiences = [
  {
    title: "Frontend Developer Intern",
    company: "Versatile.ID",
    dateRange: "Oct 2025 - Present",
    status: "Working",
    techIcons: ["Next.js", "TypeScript", "React", "TailwindCSS", "Shadcn/ui", "Motion", "Bun"],
    bullets: [
      "Built and developed the company's official website from the ground up using Next.js, TypeScript, and TailwindCSS, delivering a modern and responsive user experience.",
      "Designed and implemented the UI/UX of the website, creating intuitive interfaces with smooth animations using Framer Motion and shadcn/ui components.",
    ],
  },
];

// Projects data
const projects = [
  {
    title: "OnPay",
    description:
      "OnPay is a seamless, gas-free payment app designed to simplify transactions for everyone. Built with a clean, user-friendly interface, OnPay bridges the gap between Web2 and Web3, making it easy for anyone to send and receive payments using IDRX.",
    image: "/onpay.png",
    techIcons: ["Next.js", "TailwindCSS", "React Hook Form", "React Query", "Zod", "Xellarkit"],
    codeLink: "https://github.com/nielderto/OnPay",
    demoLink: "https://youtu.be/aYsm5ScMwxs?si=NVKFfHBbZIvJOanV",
  },
  {
    title: "LinkFi",
    description:
      "LinkFi is a payment solution similar to Stripe but built with cross-chain blockchain payments. It features capabilities that enable users to pay cross-chain as long as it is EVM supported.",
    image: "/linkfi.png",
    techIcons: ["React", "Tanstack Router", "Supabase", "Chart.js", "React Query", "React Hook Form", "Zustand", "TailwindCSS", "Thirdweb"],
    codeLink: "https://github.com/FOwen123/Chromion-2025",
    demoLink: "https://www.youtube.com/watch?v=hZikjbj44sM",
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

function SmallTechLogo({ name }: { name: string }) {
  const tech = techLogos[name];
  if (!tech) return null;
  
  return (
    <div className="group relative flex items-center justify-center w-8 h-8 rounded-full bg-muted/50">
      <Image
        src={tech.logo}
        alt={name}
        width={18}
        height={18}
        className={cn("object-contain", tech.invert && "invert")}
      />
      <span className="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-1 text-xs bg-popover border border-border rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
        {name}
      </span>
    </div>
  );
}

function AnimatedTechText({ 
  name, 
  forwardDelay,
  reverseDelay,
}: { 
  name: string; 
  forwardDelay: number;
  reverseDelay: number;
}) {
  const tech = techLogos[name];
  if (!tech) return <span>{name}</span>;
  
  // Total animation duration for the sequence
  const totalDuration = 5;
  
  // Convert delays to percentages of total duration (0.12 = smoother transition)
  const forwardStart = forwardDelay / totalDuration;
  const forwardEnd = forwardStart + 0.12;
  const reverseStart = reverseDelay / totalDuration;
  const reverseEnd = reverseStart + 0.12;
  
  const textOpacity = [1, 1, 0, 0, 1, 1];
  const logoOpacity = [0, 0, 1, 1, 0, 0];
  const logoScale = [0.8, 0.8, 1, 1, 0.8, 0.8];
  const times = [0, forwardStart, forwardEnd, reverseStart, reverseEnd, 1];
  
  return (
    <motion.span 
      className="relative inline-grid place-items-center"
      style={{ gridTemplateAreas: "'stack'" }}
    >
      {/* Text - fades out when logo appears */}
      <motion.span
        className="text-foreground font-medium"
        style={{ gridArea: "stack" }}
        initial={{ opacity: 1 }}
        whileInView={{
          opacity: textOpacity,
        }}
        viewport={{ once: true }}
        transition={{
          duration: totalDuration,
          delay: 3,
          times: times,
          ease: "easeInOut",
        }}
      >
        {name}
      </motion.span>
      {/* Logo - stacked on same grid area */}
      <motion.span
        className="flex items-center justify-center"
        style={{ gridArea: "stack" }}
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{
          opacity: logoOpacity,
          scale: logoScale,
        }}
        viewport={{ once: true }}
        transition={{
          duration: totalDuration,
          delay: 3,
          times: times,
          ease: "easeInOut",
        }}
      >
        <Image
          src={tech.logo}
          alt={name}
          width={22}
          height={22}
          className={cn("object-contain", tech.invert && "invert")}
        />
      </motion.span>
    </motion.span>
  );
}

function AnimatedFlagText({ 
  name, 
  forwardDelay,
  reverseDelay,
}: { 
  name: string; 
  forwardDelay: number;
  reverseDelay: number;
}) {
  const flag = countryFlags[name];
  if (!flag) return <span>{name}</span>;
  
  // Total animation duration for the sequence
  const totalDuration = 4;
  
  // Convert delays to percentages of total duration (0.12 = smoother transition)
  const forwardStart = forwardDelay / totalDuration;
  const forwardEnd = forwardStart + 0.12;
  const reverseStart = reverseDelay / totalDuration;
  const reverseEnd = reverseStart + 0.12;
  
  const textOpacity = [1, 1, 0, 0, 1, 1];
  const flagOpacity = [0, 0, 1, 1, 0, 0];
  const flagScale = [0.8, 0.8, 1, 1, 0.8, 0.8];
  const times = [0, forwardStart, forwardEnd, reverseStart, reverseEnd, 1];
  
  return (
    <motion.span 
      className="relative inline-grid place-items-center"
      style={{ gridTemplateAreas: "'stack'" }}
    >
      {/* Text - fades out when flag appears */}
      <motion.span
        className="text-foreground font-medium"
        style={{ gridArea: "stack" }}
        initial={{ opacity: 1 }}
        whileInView={{
          opacity: textOpacity,
        }}
        viewport={{ once: true }}
        transition={{
          duration: totalDuration,
          delay: 7,
          times: times,
          ease: "easeInOut",
        }}
      >
        {name}
      </motion.span>
      {/* Flag emoji - stacked on same grid area */}
      <motion.span
        className="flex items-center justify-center text-lg"
        style={{ gridArea: "stack" }}
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{
          opacity: flagOpacity,
          scale: flagScale,
        }}
        viewport={{ once: true }}
        transition={{
          duration: totalDuration,
          delay: 7,
          times: times,
          ease: "easeInOut",
        }}
      >
        {flag}
      </motion.span>
    </motion.span>
  );
}

function ExperienceCard({
  experience,
}: {
  experience: (typeof experiences)[0];
}) {
  return (
    <div className="border border-border rounded-lg bg-card overflow-hidden p-6">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
        <div className="space-y-3">
          <div>
            <h3 className="text-xl font-semibold">{experience.title}</h3>
            <span className="text-sm text-muted-foreground md:hidden">
              {experience.dateRange}
            </span>
          </div>
          <div className="flex items-center gap-4 text-muted-foreground">
            <span className="text-white">{experience.company}</span>
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            {experience.techIcons.map((tech, i) => (
              <SmallTechLogo key={i} name={tech} />
            ))}
          </div>
        </div>
        <span className="hidden md:block text-sm text-muted-foreground whitespace-nowrap">
          {experience.dateRange}
        </span>
      </div>
      {experience.bullets.length > 0 && (
        <div className="mt-4 pt-4 border-t border-border">
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            {experience.bullets.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <div className="border border-border rounded-lg bg-card overflow-hidden">
      <div className="relative aspect-video">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="text-muted-foreground">{project.description}</p>
        <div className="flex flex-wrap gap-2 pb-4">
          {project.techIcons.map((tech, i) => (
            <SmallTechLogo key={i} name={tech} />
          ))}
        </div>
        <div className="border-t border-border pt-4 flex items-center justify-between">
          <Link
            href={project.codeLink}
            className="inline-flex items-center gap-2 text-foreground hover:underline"
          >
            <Github className="w-5 h-5" />
            <span>Code</span>
          </Link>
          <Link
            href={project.demoLink}
            className="inline-flex items-center gap-2 text-foreground hover:underline"
          >
            <ExternalLink className="w-5 h-5" />
            <span>Demo</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Portofolio() {
  const [bibleVerse, setBibleVerse] = useState<{ text: string; bookname: string; chapter: string; verse: string } | null>(null);

  useEffect(() => {
    const fetchBibleVerse = async () => {
      try {
        const response = await fetch("https://labs.bible.org/api/?passage=votd&type=json");
        const data = await response.json();
        if (data && data[0]) {
          setBibleVerse(data[0]);
        }
      } catch (error) {
        console.error("Failed to fetch Bible verse:", error);
      }
    };
    fetchBibleVerse();
  }, []);

  return (
    <main className="container mx-auto px-4 py-12 max-w-xl mt-20 sm:mt-30">
      {/* Hero Section */}
      <motion.section
        className="space-y-6 mb-16"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold"
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          Otneil Xander Susanto
        </motion.h1>
        <motion.p className="text-lg" variants={fadeInUp} transition={{ duration: 0.5, delay: 0.1 }}>
          --&gt; Frontend Developer Intern at{" "}
          <Link href="https://versatile.id" className="underline hover:text-foreground/80">
            Versatile.ID
          </Link>
        </motion.p>
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

      {/* About Me Section */}
      <motion.section
        className="space-y-4 mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2 className="text-2xl font-bold" variants={fadeInUp} transition={{ duration: 0.5 }}>
          About Me
        </motion.h2>
        <motion.div
          className="space-y-4 text-muted-foreground leading-relaxed"
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p>
            I&apos;m a passionate Web Developer currently interning at{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-foreground font-medium">Versatile.ID</span>
              <svg
                className="absolute -inset-x-4 -inset-y-2 w-[calc(100%+32px)] h-[calc(100%+16px)]"
                viewBox="0 0 120 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M10 20C10 12 20 6 60 6C100 6 110 12 110 20C110 28 100 34 60 34C20 34 10 28 10 20"
                  stroke="#3B82F6"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ 
                    pathLength: [0, 1, 0],
                    opacity: [0, 1, 1]
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 2.4,
                    delay: 0.5,
                    ease: "easeInOut",
                    times: [0, 0.5, 1],
                  }}
                  style={{
                    filter: "url(#crayon-texture)",
                  }}
                />
                <defs>
                  <filter id="crayon-texture" x="-20%" y="-20%" width="140%" height="140%">
                    <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="3" result="noise" />
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" xChannelSelector="R" yChannelSelector="G" />
                  </filter>
                </defs>
              </svg>
            </span>
            , where I work on building modern web3 apps. I have a strong foundation 
            in <AnimatedTechText name="JavaScript" forwardDelay={0} reverseDelay={3.5} />, <AnimatedTechText name="TypeScript" forwardDelay={0.5} reverseDelay={3} />, and <AnimatedTechText name="React" forwardDelay={1} reverseDelay={2.5} /> ecosystem. Also mastering backend technologies to
            improve my skills and knowledge and build more complex projects/applications.
          </p>
          <p>
            For more information about me, I&apos;m a <AnimatedFlagText name="Indonesian" forwardDelay={0} reverseDelay={2.5} /> student in Asia University located in <AnimatedFlagText name="Taiwan" forwardDelay={0.5} reverseDelay={2} />, 
            majoring in Computer Science and Information Engineering. 
          </p>
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
        <motion.h2 className="text-2xl font-bold" variants={fadeInUp} transition={{ duration: 0.5 }}>
          Experience
        </motion.h2>
        <motion.div className="space-y-4" variants={fadeInUp} transition={{ duration: 0.5, delay: 0.1 }}>
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} experience={exp} />
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
        <motion.h2 className="text-2xl font-bold" variants={fadeInUp} transition={{ duration: 0.5 }}>
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
        <motion.h2 className="text-2xl font-bold" variants={fadeInUp} transition={{ duration: 0.5 }}>
          Projects
        </motion.h2>
        <motion.div className="space-y-6" variants={fadeInUp} transition={{ duration: 0.5, delay: 0.1 }}>
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </motion.div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        className="space-y-6 mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2 className="text-2xl font-bold" variants={fadeInUp} transition={{ duration: 0.5 }}>
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
