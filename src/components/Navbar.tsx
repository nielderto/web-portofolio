export default function Navbar() {
  return (
    <nav className="font-[Inter] border-b border-zinc-800">
      <div className="max-w-5xl mx-auto flex flex-row justify-between items-center px-6 py-6">
        <h1 className="text-2xl font-bold">neil<span className="text-blue-500">.</span>dev</h1>
        <div className="flex gap-4">
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
        </div>
      </div>
    </nav>
  )
}
