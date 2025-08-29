import { GithubLogo, LinkedinLogo, MapPin } from "phosphor-react";
import { FilePdf } from "phosphor-react";

export default function HeroSection() {
  return (
    <section id="about" className="flex flex-col justify-center items-center min-h-screen py-8">
      <div className="flex flex-col justify-center items-start gap-4 w-full max-w-2xl px-4">
        <div className="flex flex-row gap-4 items-center w-full">
          <img
            src={`/avatar2.jpeg`}
            alt="Neil, a passionate web developer and university student from Taiwan"
            className="w-16 h-16 rounded-full border-2 border-zinc-700 shadow-lg flex-shrink-0"
          />
          <div className="flex flex-col gap-1 flex-1">
            <h2 className="text-xl font-bold text-white">Hey, I'm Neil <span className="wave-emoji">👋</span></h2>
            <div className="flex flex-row gap-1 items-center">
              <MapPin size={14} weight="bold" className="text-slate-400" />
              <span className="text-slate-400 text-sm">
                Taiwan, Taichung
              </span>
            </div>
          </div>
        </div>

        {/* Description below */}
        <div className="w-full">
          <p className="text-slate-300 text-sm leading-relaxed">
            I'm an aspiring web developer experienced in making web dApps and focusing on user experience.
          </p>
        </div>

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
            href="/resume (1).pdf"
            rel="noopener noreferrer"
            target="_blank"
            className="text-white hover:text-white transition-transform duration-200 hover:scale-110"
            aria-label="Visit Neil's Twitter profile"
          >
            <FilePdf size={24} weight="bold" />
          </a>
        </div>
      </div>
    </section>
  );
}
