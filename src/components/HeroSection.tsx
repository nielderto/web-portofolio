import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { DownloadIcon } from "lucide-react";
import { GithubLogo, LinkedinLogo, TwitterLogo } from "phosphor-react";

export default function HeroSection() {
  return (
    <section id="about" className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center gap-4 w-1/2">
        <img
          src={`/avatar2.jpeg`}
          alt="Neil"
          className="w-32 h-32 rounded-full border-4 border-zinc-800"
        />
        <div className="flex flex-col gap-2">
          <h2 className="text-4xl font-bold">Otneil (neil for short)</h2>
        </div>
        <p className="text-slate-300 text-center">
          Passionate about turning ideas into interactive digital experiences.
          I'm a university student building the future one pixel at a time —
          blending code, design, and creativity to make the web a more beautiful
          place.
        </p>
        <a href="/resume.pdf" 
        download
        className="inline-block">
        <ShimmerButton>
          <span className="flex items-center gap-2">
            <DownloadIcon className="bg-black text-white" />
            <p className="text-white">Resume</p>
          </span>
        </ShimmerButton>
        </a>
        <div className="flex flex-row gap-4">
          <a
            href="https://github.com/nielderto"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white transition-transform duration-200 hover:scale-110"
          >
            <GithubLogo size={24} weight="bold" />
          </a>
          <a
            href="www.linkedin.com/in/nielderto"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white transition-transform duration-200 hover:scale-110"
          >
            <LinkedinLogo size={24} weight="bold" />
          </a>
          <a
            href="https://x.com/nieldert0"
            rel="noopener noreferrer"
            target="_blank"
            className="text-white hover:text-white transition-transform duration-200 hover:scale-110"
          >
            <TwitterLogo size={24} weight="bold" />
          </a>
        </div>
      </div>
    </section>
  );
}
