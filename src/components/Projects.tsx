import { Button } from "@/components/ui/button";
import { Card, CardContent} from "@/components/ui/card";
import { Github, ExternalLink, Calendar } from "lucide-react";

const projects = [
    {
        title: "Onpay",
        description: "OnPay is a seamless, gas-free payment app designed to simplify transactions for everyone. Built with a clean, user-friendly interface, OnPay bridges the gap between Web2 and Web3, making it easy for anyone to send and receive payments using IDRX.",
        image: "onpay.png",
        link: "https://onpay-seamless.vercel.app/",
        demo: "https://youtu.be/aYsm5ScMwxs?si=FpaMHjMAfNLvRx0B", 
        github: "https://github.com/nielderto/OnPay",
        year: "2025",
        status: "Live",
        technologies: ["Next.js", "Tailwind CSS", "React Hook Form", "React Query", "Zod", "Xellarkit"]
    },
    {
        title: "Betcha",
        description: "Betcha is a fun and social Web3 running bet app where you and your friends can place friendly crypto bets on fitness challenges — powered by Strava, Polygon, and signed run proofs.",
        image: "betcha.png",
        link: "https://youtu.be/rKsd3i3iVhM?si=Tk4MFg0LM2zdAzZ_",
        github: "https://github.com/FOwen123/ETHGlobalTaipei2025",
        year: "2025",
        status: "Demo",
        technologies: ["React", "Tailwind CSS", "React Hook Form", "React Query", "Zod", "RainbowKit"]
    },
    {
        title: "LinkFi",
        description: "LinkFi is a payment similar to stripe but built with cross-chain blockchain payments, it has a few features that enable users to pay cross-chain aslong as it is EVM supported.",
        image: "linkfi.png",
        link: "https://www.youtube.com/watch?v=hZikjbj44sM",
        github: "https://github.com/FOwen123/Chromion-2025",
        year: "2025",
        status: "Demo",
        technologies: ["React", "Tanstack Router", "Supabase", "Chart.js", "React Query", "React Hook Form", "Zustand", "Tailwind CSS", "Thirdweb"]
    }
]

export default function Projects() {
    return (
        <section id="projects" className="flex flex-col items-center justify-center min-h-screen py-20 px-6">
            <div className="w-full max-w-4xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold mb-4 text-white">
                        Featured Projects
                    </h1>
                    <p className="text-gray-400 text-lg">
                        A showcase of my recent work in web development and blockchain technology
                    </p>
                </div>
                
                <div className="flex flex-col gap-12">
                    {projects.map((project, idx) => (
                        <Card 
                            key={idx} 
                            className="border border-white/20 bg-white/5 rounded-lg overflow-hidden hover:border-white/30 transition-colors duration-300"
                        >
                            <CardContent className="p-0">
                                <div className="flex flex-col">
                                    {/* Image Side */}
                                    <div className="w-full border-b border-white/10 bg-zinc-800/30 flex items-center justify-center">
                                        <img 
                                            src={project.image} 
                                            alt={project.title}
                                            className="w-full h-48 md:h-64 object-contain p-4"
                                            loading="lazy"
                                            onError={(e) => {
                                                e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzIyMjIyMiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Qcm9qZWN0IEltYWdlPC90ZXh0Pjwvc3ZnPg==';
                                            }}
                                        />
                                    </div>
                                    
                                    {/* Content Side */}
                                    <div className="flex-1 p-8">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                                project.status === 'Live' 
                                                    ? 'bg-green-500/20 text-green-400' 
                                                    : 'bg-blue-500/20 text-blue-400'
                                            }`}>
                                                {project.status}
                                            </span>
                                            <div className="flex items-center text-gray-400 text-sm">
                                                <Calendar className="w-4 h-4 mr-1" />
                                                {project.year}
                                            </div>
                                        </div>

                                        <h3 className="text-2xl font-bold text-white mb-4">
                                            {project.title}
                                        </h3>
                                        
                                        <p className="text-gray-300 leading-relaxed mb-6">
                                            {project.description}
                                        </p>

                                        {/* Technologies Used */}
                                        <div className="mb-6">
                                            <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {project.technologies.map((tech, techIdx) => (
                                                    <span 
                                                        key={techIdx}
                                                        className="px-3 py-1 bg-gray-500/20 text-gray-300 rounded-full text-sm font-medium border border-gray-500/30"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex gap-3 flex-wrap">
                                            {project.status === 'Live' ? (
                                                // Live project buttons: Live Site + Demo + Code
                                                <>
                                                    <Button 
                                                        className="bg-white hover:bg-gray-200 text-black"
                                                        onClick={() => window.open(project.link, '_blank')}
                                                    >
                                                        <ExternalLink className="w-4 h-4 mr-2" />
                                                        Live Site
                                                    </Button>
                                                    <Button 
                                                        className="bg-white hover:bg-gray-200 text-black"
                                                        onClick={() => window.open(project.demo, '_blank')}
                                                    >
                                                        <ExternalLink className="w-4 h-4 mr-2" />
                                                        Demo
                                                    </Button>
                                                    <Button
                                                        className="bg-white hover:bg-gray-200 text-black"
                                                        onClick={() => window.open(project.github, '_blank')}
                                                    >
                                                        <Github className="w-4 h-4 mr-2" />
                                                        Code
                                                    </Button>
                                                </>
                                            ) : (
                                                // Demo project buttons: Demo + Code
                                                <>
                                                    <Button 
                                                        className="bg-white hover:bg-gray-200 text-black"
                                                        onClick={() => window.open(project.link, '_blank')}
                                                    >
                                                        <ExternalLink className="w-4 h-4 mr-2" />
                                                        Demo
                                                    </Button>
                                                    <Button
                                                        className="bg-white hover:bg-gray-200 text-black"
                                                        onClick={() => window.open(project.github, '_blank')}
                                                    >
                                                        <Github className="w-4 h-4 mr-2" />
                                                        Code
                                                    </Button>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Call to action */}
                <div className="text-center mt-16">
                    <p className="text-gray-400 mb-4">Want to see more of my work?</p>
                    <Button 
                        className="bg-white hover:bg-gray-200 text-black"
                        onClick={() => window.open('https://github.com/nielderto', '_blank')}
                    >
                        <Github className="w-4 h-4 mr-2" />
                        View All Projects on GitHub
                    </Button>
                </div>
            </div>
        </section>
    )
}