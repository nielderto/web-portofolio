import { Badge } from "@/components/ui/badge";

export default function Skills() {
  return (
    <div className="flex flex-col items-center w-full px-4 py-8 md:py-12 mb-40 mt-20">
      <div className="w-full max-w-2xl">
        <div className="text-left mb-12">
          <h2 className="text-3xl font-bold font-jetbrains-mono text-gray-300 inline-block relative">
            TECH STACK
            <span className="absolute left-0 bottom-0 h-[1px] bg-gray-400 w-[120%]"></span>
          </h2>
        </div>
        <div className="flex flex-wrap gap-2 items-center justify-start">
          <Badge className="text-sm md:text-base px-3 py-1">TypeScript</Badge>
          <Badge className="text-sm md:text-base px-3 py-1">React</Badge>
          <Badge className="text-sm md:text-base px-3 py-1">Next.js</Badge>
          <Badge className="text-sm md:text-base px-3 py-1">Tailwind CSS</Badge>
          <Badge className="text-sm md:text-base px-3 py-1">React Query</Badge>
          <Badge className="text-sm md:text-base px-3 py-1">Zustand</Badge>
          <Badge className="text-sm md:text-base px-3 py-1">Shadcn</Badge>
          <Badge className="text-sm md:text-base px-3 py-1">Supabase</Badge>
          <Badge className="text-sm md:text-base px-3 py-1">Git</Badge>
        </div>
      </div>
    </div>
  );
}
