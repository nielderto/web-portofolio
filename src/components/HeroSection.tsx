import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { DownloadIcon } from "lucide-react";
import { GithubLogo, LinkedinLogo, TwitterLogo } from "phosphor-react";

export default function HeroSection() {
  return (
    <section id="about" className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center gap-4 w-full px-4 md:w-1/2">
        <img
          src={`/avatar2.jpeg`}
          alt="Neil, a passionate web developer and university student from Taiwan"
          className="w-32 h-32 rounded-full border-4 border-zinc-800 shadow-2xl"
        />
                    <div className="flex flex-col gap-2 justify-center items-center text-center">
          <h2 className="text-4xl md:text-5xl font-bold">Hey, Neil here! <span className="wave-emoji">👋</span></h2>
        </div>
        <p className="text-slate-300 text-center text-base md:text-lg">
          aspiring frontend developer,  
          building modern web apps and exploring blockchain technology.
        </p>
        <a href="/resume (1).pdf" 
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
            aria-label="Visit Neil's GitHub profile"
          >
            <GithubLogo size={24} weight="bold" />
          </a>
          <a
            href="https://www.linkedin.com/in/nielderto"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white transition-transform duration-200 hover:scale-110"
            aria-label="Visit Neil's LinkedIn profile"
          >
            <LinkedinLogo size={24} weight="bold" />
          </a>
          <a
            href="https://x.com/nieldert0"
            rel="noopener noreferrer"
            target="_blank"
            className="text-white hover:text-white transition-transform duration-200 hover:scale-110"
            aria-label="Visit Neil's Twitter profile"
          >
            <TwitterLogo size={24} weight="bold" />
          </a>
        </div>
      </div>
    </section>
  );
}
