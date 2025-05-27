import { Button } from "@/components/ui/button";
import { Card, CardContent} from "@/components/ui/card";
import { Github } from "lucide-react";

const projects = [
    {
        title: "Onpay",
        description: "OnPay is a seamless, gas-free payment app designed to simplify transactions for everyone. Built with a clean, user-friendly interface, OnPay bridges the gap between Web2 and Web3, making it easy for anyone to send and receive payments using IDRX. Whether you're new to crypto or a seasoned user, OnPay delivers smooth, instant payments without the complexity of traditional blockchain fees.",
        image: "onpay.png",
        link: "https://onpay-seamless.vercel.app/",
        github: "https://github.com/nielderto/OnPay",
    },
    {
        title: "Betcha",
        description: "Betcha is a fun and social Web3 running bet app where you and your friends can place friendly crypto bets on fitness challenges — powered by Strava, Polygon, and signed run proofs.",
        image: "betcha.png",
        link: "https://youtu.be/rKsd3i3iVhM?si=Tk4MFg0LM2zdAzZ_",
        github: "https://github.com/FOwen123/ETHGlobalTaipei2025",
    },
]

export default function Projects() {
    return (
        <section id="projects" className="flex flex-col items-center justify-center min-h-screen py-20 px-6">
            <h1 className="text-5xl font-bold text-center mb-16 text-white">Projects</h1>
            
            <div className="flex flex-col gap-8 w-full max-w-6xl">
                {projects.map((project, idx) => (
                    <Card key={idx} className="border border-white/20 bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-300">
                        <CardContent className="p-0">
                            <div className="flex flex-col md:flex-row items-center h-auto md:h-80">
                                <div className="flex-1 p-8 flex flex-col justify-center h-full">
                                    <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                                    <p className="text-gray-300 text-base leading-relaxed mb-6">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-row gap-3">
                                        <Button 
                                            className="w-fit bg-white/10 hover:bg-white/20 text-white border border-white/30"
                                            onClick={() => window.open(project.link, '_blank')}
                                        >
                                            View Project
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="text-white hover:bg-white/10 border border-white/30"
                                            onClick={() => window.open(project.github, '_blank')}
                                            aria-label="View on GitHub"
                                        >
                                            <Github className="w-5 h-5" />
                                        </Button>
                                    </div>
                                </div>
                                
                                <div className="flex-1 flex items-center justify-center w-full md:w-auto mt-6 md:mt-0">
                                    <div className="bg-zinc-900/80 rounded-2xl p-6 flex items-center justify-center w-fit mx-auto">
                                        <img 
                                            src={project.image} 
                                            alt={project.title}
                                            className="max-h-60 max-w-md object-contain rounded-lg shadow-lg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}