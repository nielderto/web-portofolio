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
    projectName: "LinkFi",
    description: "A stripe kinda payment but built with cross-chain blockchain payments. ",
    contribution: "Designed and built the entire frontend user interface with React and Tailwind CSS, focusing on creating an intuitive payment flow that abstracts away blockchain complexity. Implemented dynamic routing with Tanstack Router for seamless navigation between payment steps. Built comprehensive analytics dashboard using Chart.js to display transaction metrics and user engagement data. Integrated Thirdweb SDK for cross-chain wallet connections and payment processing, ensuring compatibility across multiple blockchain networks. Managed complex application state with Zustand to handle user sessions, transaction status, and real-time payment updates.",
    technologies: ["React", "Tanstack Router", "Supabase", "Chart.js", "React Query", "React Hook Form", "Zustand", "Tailwind CSS", "Thirdweb"],
    links: "https://github.com/FOwen123/Chromion-2025"
  },
  {
    date: "2025",
    hackathon: "Lisk Builders Challenge",
    projectName: "OnPay",
    description: "A decentralized payment solution enabling seamless transactions with ENS integration for user-friendly addresses.",
    contribution: "Developed a fully responsive web application using Next.js with mobile-first design principles, ensuring optimal user experience across all devices. Created dynamic form handling with React Hook Form and Zod validation for secure payment input processing. Implemented ENS name resolution and wallet integration using Xellarkit, allowing users to send payments using human-readable addresses instead of complex wallet addresses. Built real-time transaction tracking with React Query for instant payment status updates. Designed and coded all UI components with Tailwind CSS, creating a clean, modern interface that makes decentralized payments feel as simple as traditional payment apps.",
    technologies: ["Next.js", "Tailwind CSS", "React Hook Form", "React Query", "Zod", "Xellarkit"],
    links: "https://devfolio.co/projects/onpay-8f52",
  },
  {
    date: "2025",
    hackathon: "ETHGlobal Taipei",
    projectName: "Betcha",
    description: "A platform where users can bet on with their friends on who can complete the bet",
    contribution: "Led frontend development for a social betting platform, architecting the React application structure and component hierarchy. Integrated RainbowKit for seamless multi-wallet connectivity, supporting MetaMask, WalletConnect, and other popular wallets. Built interactive bet creation forms using React Hook Form with comprehensive Zod validation to ensure data integrity for bet parameters and user inputs. Developed real-time bet tracking and friend invitation systems using React Query for efficient data fetching and caching. Created engaging UI animations and responsive design with Tailwind CSS to make the betting experience fun and engaging. Handled complex state management for active bets, user profiles, and friend connections across the entire application.",
    technologies: ["React", "Tailwind CSS", "React Hook Form", "React Query", "Zod", "RainbowKit"],
    links: "https://ethglobal.com/showcase/betcha-ax3oe"
  },
  {
    date: "2024",
    hackathon: "Taipei Blockchain Week Hackathon",
    projectName: "Daolingo",
    description: "Developed a blockchain-based solution addressing real-world problems in the Taiwanese ecosystem.",
    contribution: "Developed a gamified blockchain education platform, building the core user interface with React and implementing smart contract interactions for reward distribution and progress tracking. Created comprehensive user onboarding flows using React Hook Form with Zod validation to ensure proper user registration and profile setup. Integrated RainbowKit for wallet connectivity, enabling users to earn and claim blockchain-based rewards for completing educational modules. Built dynamic progress tracking and leaderboard systems using React Query for real-time updates of user achievements and community rankings. Designed responsive educational content layouts with Tailwind CSS, making blockchain concepts accessible and engaging for Taiwanese users. Handled complex state management for user progress, earned tokens, and educational content across multiple learning paths.",
    technologies: ["Blockchain", "Smart Contracts", "JavaScript", "React", "Tailwind CSS", "React Hook Form", "React Query", "Zod", "RainbowKit"],
    links: "https://dorahacks.io/buidl/20802",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="flex flex-col justify-center items-center min-h-screen pb-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">
        Hackathon Projects
      </h2>
      <div className="w-full max-w-4xl">
        <Timeline positions="left" className="relative">
          {experiences.map((exp, idx) => (
            <TimelineItem key={idx} status="done">
              <TimelineHeading 
                side="right" 
                variant="primary"
                className="text-white text-2xl font-bold"
              >
                {exp.projectName}
              </TimelineHeading>
              <TimelineDot status="done" className="bg-blue-500 border-blue-500" />
              <TimelineContent side="right" className="text-gray-300">
                {/* Hackathon Info */}
                <div className="mb-4 pb-3 border-b border-gray-600">
                  <p className="text-blue-400 font-medium text-lg">
                    {exp.hackathon}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {exp.date}
                  </p>
                </div>
                {/* What I Did */}
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2 text-lg">What I Did:</h4>
                  <p className="text-gray-300 leading-relaxed text-base">
                    {exp.contribution}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIdx) => (
                      <span 
                        key={techIdx}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30"
                      >
                        {tech}
                      </span>
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