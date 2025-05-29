import { useState } from "react";
import { List, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="font-[Inter] border-b border-zinc-800">
      <div className="max-w-5xl mx-auto flex flex-row justify-between items-center px-6 py-6">
        <h1 className="text-2xl font-bold">neil<span className="text-blue-500">.</span>dev</h1>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <List size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
          <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
          <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
          <a href="#experience" className="hover:text-blue-500 transition-colors">Experience</a>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-[72px] left-0 right-0 bg-black border-b border-zinc-800 md:hidden">
            <div className="flex flex-col px-6 py-4 gap-4">
              <a href="#contact" className="hover:text-blue-500 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
              <a href="#about" className="hover:text-blue-500 transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#projects" className="hover:text-blue-500 transition-colors" onClick={() => setIsMenuOpen(false)}>Projects</a>
              <a href="#experience" className="hover:text-blue-500 transition-colors" onClick={() => setIsMenuOpen(false)}>Experience</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
