import { ArrowRight } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "Onpay",
        description: "OnPay is a seamless, gas-free payment app designed to simplify transactions for everyone. Built with a clean, user-friendly interface, OnPay bridges the gap between Web2 and Web3, making it easy for anyone to send and receive payments using IDRX.",
        image: "/onpay.png",
        technologies: ["Next.js", "Tailwind CSS", "React Hook Form", "React Query", "Zod", "Xellarkit"],
        liveUrl: "https://onpay-seamless.vercel.app/",
    },
    {
        id: 2,
        title: "Betcha",
        description: "Betcha is a fun and social Web3 running bet app where you and your friends can place friendly crypto bets on fitness challenges — powered by Strava, Polygon, and signed run proofs.",
        image: "/betcha.png",
        technologies: ["React", "Tailwind CSS", "React Hook Form", "React Query", "Zod", "RainbowKit"],
        demoUrl: "https://youtu.be/rKsd3i3iVhM?si=Tk4MFg0LM2zdAzZ_",
    },
    {
        id: 3,
        title: "LinkFi",
        description: "LinkFi is a payment similar to stripe but built with cross-chain blockchain payments, it has a few features that enable users to pay cross-chain aslong as it is EVM supported.",
        image: "/linkfi.png",
        technologies: ["React", "Tanstack Router", "Supabase", "Chart.js", "React Query", "React Hook Form", "Zustand", "Tailwind CSS", "Thirdweb"],
        demoUrl: "https://www.youtube.com/watch?v=hZikjbj44sM",
    }
]

export default function Projects() {
    return (
        <section 
            id="projects" 
            className="py-12 px-4 mb-20 relative"
        >
            <div className="w-full max-w-2xl mx-auto">
                {/* Heading */}
                <div className="text-left mb-12">
                    <h2 className="text-3xl font-bold font-jetbrains-mono text-gray-300 inline-block relative">
                        PROJECTS
                        <span className="absolute left-0 bottom-0 h-[1px] bg-gray-400 w-[120%]"></span>
                    </h2>
                </div>

                {/* Projects List */}
                <div className="space-y-0">
                    {projects.map((project, index) => {
                        const url = project.liveUrl || project.demoUrl
                        return (
                            <div key={project.id}>
                                <div className="flex flex-col md:flex-row gap-6 py-6 group">
                                    {/* Project Image */}
                                    <div className="w-full md:w-60 h-auto md:h-60 aspect-square bg-black flex items-center justify-center overflow-hidden">
                                        <img 
                                            src={project.image || "/placeholder.svg"} 
                                            alt={`${project.title} preview`}
                                            className="w-full h-full object-contain p-2"
                                        />
                                    </div>

                                    {/* Description and Tech Stack */}
                                    <div className="flex-1 relative">
                                        <p className="text-sm leading-relaxed text-gray-300 pr-0 md:pr-12 mb-3">
                                            {project.description}
                                        </p>
                                        
                                        {/* Tech Stack */}
                                        <div className="flex flex-wrap gap-1.5 mb-4">
                                            {project.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-2 py-1 text-xs rounded bg-gray-800 text-gray-400 border border-gray-700"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        
                                        {/* Arrow Icon */}
                                        {url && (
                                            <a 
                                                href={url} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="absolute bottom-0 right-0 w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center text-gray-400 hover:border-gray-300 hover:text-gray-300 transition-colors group-hover:bg-gray-800/50"
                                            >
                                                <ArrowRight className="w-3 h-3" />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Separator */}
                                {index < projects.length - 1 && (
                                    <div className="border-t border-gray-700"></div>
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}