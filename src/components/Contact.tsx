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
import { Send, CheckCircle } from "lucide-react";

interface ContactForm {
    name: string;
    email: string;
    message: string;
}

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
        const baseClasses = "w-full font-bold py-3 rounded-lg transition-all duration-300 text-white";
        
        switch (formStatus) {
            case 'loading':
                return `${baseClasses} bg-blue-600/70 cursor-not-allowed`;
            case 'success':
                return `${baseClasses} bg-green-600 hover:bg-green-700`;
            case 'error':
                return `${baseClasses} bg-red-600 hover:bg-red-700`;
            default:
                return `${baseClasses} bg-blue-600 hover:bg-blue-500`;
        }
    };

    return (
        <section id="contact" className="min-h-screen flex flex-col justify-center items-center py-20 px-6">
            <div className="w-full max-w-4xl">
                {/* Title */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-8">
                        Contact Me
                    </h1>
                </div>
                
                {/* Contact Form */}
                <div className="rounded-xl p-8 max-w-4xl mx-auto">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            {/* Name and Email in one row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                                                    className="bg-zinc-800/80 text-white border-white/20 focus:border-blue-400 hover:border-white/30 transition-all duration-300"
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
                                                    className="bg-zinc-800/80 text-white border-white/20 focus:border-blue-400 hover:border-white/30 transition-all duration-300"
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
                                                placeholder="Leave a feedback about the site, career opportunities, or anything else!" 
                                                {...field} 
                                                className="bg-zinc-800/80 text-white border-white/20 focus:border-blue-400 hover:border-white/30 transition-all duration-300 min-h-[120px] resize-none"
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
                </div>
            </div>
        </section>
    );
}