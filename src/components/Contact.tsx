import { useState } from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, CheckCircle } from "lucide-react";

interface ContactForm {
    name: string;
    email: string;
    message: string;
}

const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "nielderto@gmail.com",
        href: "mailto:nielderto@gmail.com",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Taichung, Taiwan",
        href: null,
    },
    {
        icon: Phone,
        label: "Phone",
        value: "886 900351074",
        href: "tel:+886900351074",
    },
];

const socialLinks = [
    {
        icon: Github,
        label: "GitHub",
        href: "https://github.com/nielderto",
    },
    {
        icon: Linkedin,
        label: "LinkedIn",
        href: "https://linkedin.com/in/nielderto",
    },
    {
        icon: Twitter,
        label: "Twitter",
        href: "https://twitter.com/nieldert0",
    },
];

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
    const [formStatus, setFormStatus] = useState<FormStatus>('idle');

    const form = useForm<ContactForm>({
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    async function onSubmit(values: ContactForm) {
        setFormStatus('loading');
        try {
            const res = await fetch("https://formspree.io/f/movdogel", {
                method: "POST",
                headers: { 'Accept': 'application/json' },
                body: JSON.stringify(values),
            });
            
            if (res.ok) {
                form.reset();
                setFormStatus('success');
                toast.success("Message sent! I'll get back to you soon.");
                
                // Reset to idle after 3 seconds
                setTimeout(() => setFormStatus('idle'), 3000);
            } else {
                throw new Error("Failed to send message");
            }
        } catch (error) {
            setFormStatus('error');
            toast.error("Something went wrong. Please try again.");
            
            // Reset to idle after 3 seconds
            setTimeout(() => setFormStatus('idle'), 3000);
        }
    }

    const getButtonContent = () => {
        switch (formStatus) {
            case 'loading':
                return (
                    <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                        Sending...
                    </>
                );
            case 'success':
                return (
                    <>
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Sent!
                    </>
                );
            case 'error':
                return (
                    <>
                        <Send className="w-4 h-4 mr-2" />
                        Try Again
                    </>
                );
            default:
                return (
                    <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                    </>
                );
        }
    };

    const getButtonClassName = () => {
        const baseClasses = "w-full font-bold py-3 rounded-lg transition-all duration-300";
        
        switch (formStatus) {
            case 'loading':
                return `${baseClasses} bg-blue-600/70 cursor-not-allowed`;
            case 'success':
                return `${baseClasses} bg-green-600 hover:bg-green-700`;
            case 'error':
                return `${baseClasses} bg-red-600 hover:bg-red-700`;
            default:
                return `${baseClasses} bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500`;
        }
    };

    return (
        <section id="contact" className="min-h-screen py-20 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                        Get In Touch
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Let's discuss your project and bring your ideas to life.
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left Column - Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                            <div className="space-y-4">
                                {contactInfo.map((info, idx) => (
                                    <div key={idx} className="flex items-center space-x-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300">
                                        <div className="p-2 bg-blue-500/20 rounded-lg">
                                            <info.icon className="w-5 h-5 text-blue-400" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400 font-medium">{info.label}</p>
                                            {info.href ? (
                                                <a 
                                                    href={info.href}
                                                    className="text-white hover:text-blue-300 transition-colors"
                                                >
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <p className="text-white">{info.value}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-4">Follow Me</h3>
                            <div className="flex space-x-4">
                                {socialLinks.map((social, idx) => (
                                    <Button
                                        key={idx}
                                        variant="ghost"
                                        size="icon"
                                        className="w-12 h-12 text-white hover:bg-white/10 border border-white/20 hover:border-white/40 transition-all duration-300"
                                        onClick={() => window.open(social.href, '_blank')}
                                        aria-label={social.label}
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </Button>
                                ))}
                            </div>
                        </div>

                        {/* Availability */}
                        <div className="p-6 bg-green-500/10 border border-green-500/30 rounded-xl">
                            <div className="flex items-center space-x-3">
                                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                <div>
                                    <p className="text-green-400 font-semibold">Available for Projects</p>
                                    <p className="text-green-300/80 text-sm">Open to new opportunities</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div>
                        <Card className="border border-white/20 bg-white/5 backdrop-blur-sm">
                            <CardContent className="p-8">
                                <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
                                
                                <Form {...form}>
                                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <FormField
                                                control={form.control}
                                                name="name"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="text-white font-medium">Name</FormLabel>
                                                        <FormControl>
                                                            <Input 
                                                                placeholder="Your Name" 
                                                                {...field} 
                                                                className="bg-zinc-900/80 text-white border-white/20 focus:border-blue-400 hover:border-white/30 transition-all duration-300"
                                                                disabled={formStatus === 'loading'}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="email"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="text-white font-medium">Email</FormLabel>
                                                        <FormControl>
                                                            <Input 
                                                                placeholder="your.email@example.com" 
                                                                type="email" 
                                                                {...field} 
                                                                className="bg-zinc-900/80 text-white border-white/20 focus:border-blue-400 hover:border-white/30 transition-all duration-300"
                                                                disabled={formStatus === 'loading'}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        
                                        <FormField
                                            control={form.control}
                                            name="message"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-white font-medium">Message</FormLabel>
                                                    <FormControl>
                                                        <Textarea 
                                                            placeholder="Tell me about your project..." 
                                                            {...field} 
                                                            className="bg-zinc-900/80 text-white border-white/20 focus:border-blue-400 hover:border-white/30 transition-all duration-300 min-h-[120px] resize-none"
                                                            disabled={formStatus === 'loading'}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        
                                        <Button 
                                            type="submit" 
                                            className={getButtonClassName()}
                                            disabled={formStatus === 'loading'}
                                        >
                                            {getButtonContent()}
                                        </Button>
                                    </form>
                                </Form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}