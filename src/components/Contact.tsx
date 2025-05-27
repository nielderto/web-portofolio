import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("Sending...");
        // Using Formspree for email delivery
        const res = await fetch("https://formspree.io/f/movdogel", {
            method: "POST",
            headers: { 'Accept': 'application/json' },
            body: JSON.stringify({
                name: form.name,
                email: form.email,
                message: form.message,
            })
        });
        if (res.ok) {
            setStatus("Message sent!");
            setForm({ name: "", email: "", message: "" });
            toast.success("Message sent! I'll get back to you soon.");
        } else {
            setStatus("Something went wrong. Please try again.");
            toast.error("Something went wrong. Please try again.");
        }
    };

    return (
        <section id="contact" className="flex flex-col items-center justify-center min-h-screen py-20 px-6">
            <div className="w-full max-w-2xl">
                <div className="flex flex-col justify-start">
                    <h1 className="text-5xl font-bold mb-6 text-white text-left">Contact</h1>
                    <p className="text-lg text-gray-300 mb-10 max-w-xl text-left">
                        Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear from you. I'm always open to discussing new ideas, creative opportunities, or potential partnerships. Drop me a message and I'll get back to you as soon as possible!
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 w-full flex flex-col gap-6 border border-white/10">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="p-3 rounded-lg bg-zinc-900/80 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:border-blue-400"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="p-3 rounded-lg bg-zinc-900/80 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:border-blue-400"
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="p-3 rounded-lg bg-zinc-900/80 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:border-blue-400"
                    />
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
                        disabled={status === "Sending..."}
                    >
                        {status === "Sending..." ? "Sending..." : "Send Message"}
                    </button>
                    {status && <p className="text-center text-white mt-2">{status}</p>}
                </form>
            </div>
        </section>
    );
}