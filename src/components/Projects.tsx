import { Button } from "@/components/ui/button";
import { Card, CardContent} from "@/components/ui/card";
import { Github, ExternalLink, Calendar } from "lucide-react";

const projects = [
    {
        title: "Onpay",
        description: "OnPay is a seamless, gas-free payment app designed to simplify transactions for everyone. Built with a clean, user-friendly interface, OnPay bridges the gap between Web2 and Web3, making it easy for anyone to send and receive payments using IDRX.",
        image: "onpay.png",
        link: "https://onpay-seamless.vercel.app/",
        github: "https://github.com/nielderto/OnPay",
        tech: ["React", "Web3", "TypeScript", "Blockchain","Xellar"],
        year: "2025",
        status: "Live"
    },
    {
        title: "Betcha",
        description: "Betcha is a fun and social Web3 running bet app where you and your friends can place friendly crypto bets on fitness challenges — powered by Strava, Polygon, and signed run proofs.",
        image: "betcha.png",
        link: "https://youtu.be/rKsd3i3iVhM?si=Tk4MFg0LM2zdAzZ_",
        github: "https://github.com/FOwen123/ETHGlobalTaipei2025",
        tech: ["React", "Polygon", "Strava API", "Web3", "RainbowKit",],
        year: "2025",
        status: "Demo"
    },
]

export default function Projects() {
    return (
        <section id="projects" className="flex flex-col items-center justify-center min-h-screen py-20 px-6 relative">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="relative z-10 w-full max-w-6xl">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                        Featured Projects
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        A showcase of my recent work in web development and blockchain technology
                    </p>
                </div>
                
                <div className="flex flex-col gap-8">
                    {projects.map((project, idx) => (
                        <Card 
                            key={idx} 
                            className="group border border-white/20 bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden hover:border-white/40 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10"
                        >
                            <CardContent className="p-0">
                                <div className="flex flex-col lg:flex-row items-center">
                                    {/* Content Side */}
                                    <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                                project.status === 'Live' 
                                                    ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                                                    : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                                            }`}>
                                                {project.status}
                                            </span>
                                            <div className="flex items-center text-gray-400 text-sm">
                                                <Calendar className="w-4 h-4 mr-1" />
                                                {project.year}
                                            </div>
                                        </div>

                                        <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-blue-100 transition-colors">
                                            {project.title}
                                        </h3>
                                        
                                        <p className="text-gray-300 text-base leading-relaxed mb-6">
                                            {project.description}
                                        </p>

                                        {/* Tech Stack */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.tech.map((tech, techIdx) => (
                                                <span 
                                                    key={techIdx}
                                                    className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm text-gray-300 hover:bg-white/20 transition-colors"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex flex-row gap-3">
                                            <Button 
                                                className="group/btn bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                                                onClick={() => window.open(project.link, '_blank')}
                                            >
                                                <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                                                View Project
                                            </Button>
                                            <Button
                                                variant="ghost"
                                                className="text-white hover:bg-white/10 border border-white/30 hover:border-white/50 hover:scale-105 transition-all duration-300"
                                                onClick={() => window.open(project.github, '_blank')}
                                                aria-label="View on GitHub"
                                            >
                                                <Github className="w-5 h-5" />
                                            </Button>
                                        </div>
                                    </div>
                                    
                                    {/* Image Side */}
                                    <div className="flex-1 flex items-center justify-center w-full lg:w-auto p-8 lg:p-12">
                                        <div className="relative group/image">
                                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover/image:blur-2xl transition-all duration-500 opacity-50 group-hover/image:opacity-75"></div>
                                            <div className="relative bg-zinc-900/90 backdrop-blur-sm rounded-2xl p-6 border border-white/10 group-hover/image:border-white/20 transition-all duration-500 hover:scale-105">
                                                <img 
                                                    src={project.image} 
                                                    alt={project.title}
                                                    className="max-h-64 max-w-full object-contain rounded-lg shadow-2xl transition-transform duration-500 group-hover/image:scale-105"
                                                    loading="lazy"
                                                    onError={(e) => {
                                                        e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzIyMjIyMiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Qcm9qZWN0IEltYWdlPC90ZXh0Pjwvc3ZnPg==';
                                                    }}
                                                />
                                            </div>
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
                        variant="outline" 
                        className="border-white/30 text-white hover:bg-white/10 hover:border-white/50"
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