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

interface ContactForm {
    name: string;
    email: string;
    message: string;
}

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<ContactForm>({
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    async function onSubmit(values: ContactForm) {
        setIsSubmitting(true);
        try {
            const res = await fetch("https://formspree.io/f/movdogel", {
                method: "POST",
                headers: { 'Accept': 'application/json' },
                body: JSON.stringify(values),
            });
            
            if (res.ok) {
                form.reset();
                toast.success("Message sent! I'll get back to you soon.");
            } else {
                throw new Error("Failed to send message");
            }
        } catch (error) {
            toast.error("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <section id="contact" className="flex flex-col items-center justify-center min-h-screen py-20 px-6">
            <div className="w-full max-w-2xl">
                <div className="flex flex-col justify-start">
                    <h1 className="text-5xl font-bold mb-6 text-white text-left">Contact</h1>
                    <p className="text-lg text-gray-300 mb-10 max-w-xl text-left">
                        Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear from you. I'm always open to discussing new ideas, creative opportunities, or potential partnerships. Drop me a message and I'll get back to you as soon as possible!
                    </p>
                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 w-full flex flex-col gap-6 border border-white/10">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-white">Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Your Name" {...field} className="bg-zinc-900/80 text-white border-white/10" />
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
                                    <FormLabel className="text-white">Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Your Email" type="email" {...field} className="bg-zinc-900/80 text-white border-white/10" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-white">Message</FormLabel>
                                    <FormControl>
                                        <Textarea 
                                            placeholder="Your Message" 
                                            {...field} 
                                            className="bg-zinc-900/80 text-white border-white/10 min-h-[120px]"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button 
                            type="submit" 
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                    </form>
                </Form>
            </div>
        </section>
    );
}