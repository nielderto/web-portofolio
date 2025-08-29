import { Badge } from "@/components/ui/badge";

export default function Skills() {
  return (
    <div className="flex flex-col items-center justify-center w-full px-4 py-8 md:py-12 mb-40 mt-20">
      <h1 className="text-4xl md:text-4xl font-bold mb-4 md:mb-6">skills</h1>
      <div className="flex flex-wrap gap-2 justify-center max-w-3xl">
        <Badge className="text-sm md:text-base px-3 py-1">HTML</Badge>
        <Badge className="text-sm md:text-base px-3 py-1">CSS</Badge>
        <Badge className="text-sm md:text-base px-3 py-1">JavaScript</Badge>
        <Badge className="text-sm md:text-base px-3 py-1">TypeScript</Badge>
        <Badge className="text-sm md:text-base px-3 py-1">React</Badge>
        <Badge className="text-sm md:text-base px-3 py-1">Next.js</Badge>
        <Badge className="text-sm md:text-base px-3 py-1">Tailwind CSS</Badge>
        <Badge className="text-sm md:text-base px-3 py-1">Git</Badge>
        <Badge className="text-sm md:text-base px-3 py-1">Vite</Badge>
        <Badge className="text-sm md:text-base px-3 py-1">Shadcn</Badge>
        <Badge className="text-sm md:text-base px-3 py-1">Zustand</Badge>
        <Badge className="text-sm md:text-base px-3 py-1">React Query</Badge>
        <Badge className="text-sm md:text-base px-3 py-1">Tanstack Router</Badge>
        <Badge className="text-sm md:text-base px-3 py-1">Supabase</Badge>
        <Badge className="text-sm md:text-base px-3 py-1">Vercel</Badge>
      </div>
    </div>
  );
}
