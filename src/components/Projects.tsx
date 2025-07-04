import { ExternalLink, Github, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
    {
        id: 1,
        title: "Onpay",
        description: "OnPay is a seamless, gas-free payment app designed to simplify transactions for everyone. Built with a clean, user-friendly interface, OnPay bridges the gap between Web2 and Web3, making it easy for anyone to send and receive payments using IDRX.",
        image: "/onpay.png",
        status: "Live",
        year: "2025",
        technologies: ["Next.js", "Tailwind CSS", "React Hook Form", "React Query", "Zod", "Xellarkit"],
        liveUrl: "https://onpay-seamless.vercel.app/",
        demoUrl: "https://youtu.be/aYsm5ScMwxs?si=FpaMHjMAfNLvRx0B",
        github: "https://github.com/nielderto/OnPay"
    },
    {
        id: 2,
        title: "Betcha",
        description: "Betcha is a fun and social Web3 running bet app where you and your friends can place friendly crypto bets on fitness challenges — powered by Strava, Polygon, and signed run proofs.",
        image: "/betcha.png",
        status: "Demo",
        year: "2025",
        technologies: ["React", "Tailwind CSS", "React Hook Form", "React Query", "Zod", "RainbowKit"],
        demoUrl: "https://youtu.be/rKsd3i3iVhM?si=Tk4MFg0LM2zdAzZ_",
        github: "https://github.com/FOwen123/ETHGlobalTaipei2025"
    },
    {
        id: 3,
        title: "LinkFi",
        description: "LinkFi is a payment similar to stripe but built with cross-chain blockchain payments, it has a few features that enable users to pay cross-chain aslong as it is EVM supported.",
        image: "/linkfi.png",
        status: "Demo",
        year: "2025",
        technologies: ["React", "Tanstack Router", "Supabase", "Chart.js", "React Query", "React Hook Form", "Zustand", "Tailwind CSS", "Thirdweb"],
        demoUrl: "https://www.youtube.com/watch?v=hZikjbj44sM",
        github: "https://github.com/FOwen123/Chromion-2025"
    }
]

export default function Projects() {
    return (
        <section id="projects" className="py-12 px-4">
            <div className="w-full max-w-sm sm:max-w-2xl lg:max-w-3xl mx-auto">
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold">
                        featured projects
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group relative overflow-hidden rounded-lg border border-gray-800 transition-all duration-300 hover:border-gray-700"
                            style={{ backgroundColor: "#121212" }}
                        >
                            {/* Project Image */}
                            <div className="relative overflow-hidden h-40 sm:h-48">
                                <img
                                    src={project.image || "/placeholder.svg"}
                                    alt={`${project.title} preview`}
                                    className="w-full h-full object-contain p-3 sm:p-4 transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-4 sm:p-5">
                                {/* Title */}
                                <h3 className="text-lg font-semibold mb-2" style={{ color: "#EDEDED" }}>
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm leading-relaxed mb-4 opacity-90 text-gray-300">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-4">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-1 text-xs rounded bg-gray-800 text-gray-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Actions */}
                                <div className="flex flex-wrap gap-2">
                                    {project.liveUrl && (
                                        <Button
                                            size="sm"
                                            className="bg-white text-black hover:bg-gray-200 text-xs px-3 py-1.5"
                                            asChild
                                        >
                                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                                <Globe  className="w-3 h-3 mr-1" />
                                                Website
                                            </a>
                                        </Button>
                                    )}
                                    {project.demoUrl && (
                                        <Button
                                            size="sm"
                                            className="bg-white text-black hover:bg-gray-200 text-xs px-3 py-1.5"
                                            asChild
                                        >
                                            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="w-3 h-3 mr-1" />
                                                Demo
                                            </a>
                                        </Button>
                                    )}
                                    {project.github && (
                                        <Button
                                            size="sm"
                                            className="bg-white text-black hover:bg-gray-200 text-xs px-3 py-1.5"
                                            asChild
                                        >
                                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                <Github className="w-3 h-3 mr-1" />
                                                Github
                                            </a>
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}