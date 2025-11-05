import {
  Timeline,
  TimelineContent,
  TimelineDot,
  TimelineHeading,
  TimelineItem,
  TimelineLine,
} from "@/components/ui/timeline";

const experiences = [
  {
    date: "2025",
    hackathon: "Chromion ",
    description: "A stripe kinda payment but built with cross-chain blockchain payments. ",
    contribution: "• Built the entire frontend with Tanstack Router, Tailwind for the styling, Shadcn for the components\n• Created intuitive payment flows and analytics dashboard with Chart.js\n• Integrated Thirdweb SDK for cross-chain wallet connections\n• Used Supabase for the database",
    technologies: ["React", "Tanstack Router", "Supabase", "Chart.js", "React Query", "React Hook Form", "Zustand", "Tailwind CSS", "Thirdweb"],
    links: "https://devfolio.co/projects/linkfi-d2c9"
  },
  {
    date: "2025",
    hackathon: "Lisk Builders Challenge",
    description: "A decentralized payment solution enabling seamless transactions with ENS integration for user-friendly addresses.",
    contribution: "• Developed responsive web app with Next.js\n• Built form handling with React Hook Form & Zod validation\n• Implemented ENS integration with Xellarkit for human-readable addresses\n• Added real-time transaction tracking",
    technologies: ["Next.js", "Tailwind CSS", "React Hook Form", "React Query", "Zod", "Xellarkit"],
    links: "https://devfolio.co/projects/onpay-8f52",
  },
  {
    date: "2025",
    hackathon: "ETHGlobal Taipei",
    description: "A platform where users can bet on with their friends on who can complete the bet",
    contribution: "• Led frontend development with React\n• Integrated RainbowKit for multi-wallet connectivity\n• Built bet creation forms with React Hook Form & Zod validation\n• Implemented real-time tracking with React Query",
    technologies: ["React", "Tailwind CSS", "React Hook Form", "React Query", "Zod", "RainbowKit"],
    links: "https://ethglobal.com/showcase/betcha-ax3oe"
  },
  {
    date: "2024",
    hackathon: "Taipei Blockchain Week Hackathon",
    description: "Developed a blockchain-based solution addressing real-world problems in the Taiwanese ecosystem.",
    contribution: "• Built gamified blockchain education platform with React\n• Implemented smart contract interactions for rewards\n• Created user onboarding with React Hook Form & Zod\n• Integrated RainbowKit for wallet connectivity",
    technologies: ["Blockchain", "Smart Contracts", "JavaScript", "React", "Tailwind CSS", "React Hook Form", "React Query", "Zod", "RainbowKit"],
    links: "https://dorahacks.io/buidl/20802",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="flex flex-col justify-center items-center min-h-screen pb-20 px-6">
      <div className="w-full max-w-2xl">
        <h2 className="text-3xl font-bold font-jetbrains-mono text-gray-300 inline-block relative mb-12">
          HACKATHONS
          <span className="absolute left-0 bottom-0 h-[1px] bg-gray-400 w-[120%]"></span>
        </h2>
        <Timeline positions="left" className="relative">
          {experiences.map((exp, idx) => (
            <TimelineItem key={idx} status="done">
              <TimelineHeading 
                side="right" 
                variant="primary"
                className="text-white text-2xl font-bold"
              >
                {exp.hackathon}
              </TimelineHeading>
              <TimelineDot status="done" className="bg-blue-500 border-blue-500" />
              <TimelineContent side="right" className="text-gray-300">
                
                <div className="mb-4 border-b border-gray-600 mt-4"></div>
        
                {/* What I Did */}
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2 text-lg">Contributions:</h4>
                  <div className="text-gray-300 leading-relaxed text-base">
                    {exp.contribution.split('\n').map((line, index) => (
                      <p key={index} className="text-gray-300 leading-relaxed text-base">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
 
               {/* Link */}
                <a 
                  href={exp.links}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white hover:text-blue-400 transition-colors duration-300 bg-white/10 hover:bg-white/20 rounded-lg px-4 py-2"
                >
                  View Project
                  <svg 
                    className="w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </TimelineContent>
              {idx < experiences.length - 1 && <TimelineLine done />}
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  );
}