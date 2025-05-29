import { createFileRoute } from '@tanstack/react-router'
import HeroSection from '@/components/HeroSection'
import AboutMe from '@/components/AboutMe'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Skills from '@/components/Skills'

export const Route = createFileRoute('/')({
  component: App,
  pendingComponent: LoadingSpinner,
  errorComponent: ErrorBoundary,
})

function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="relative">
        {/* Spinning circle */}
        <div className="w-12 h-12 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
        
        {/* Pulsing background */}
        <div className="absolute inset-0 w-12 h-12 border-4 border-blue-500/10 rounded-full animate-pulse"></div>
      </div>
      
      <p className="mt-4 text-slate-300 text-lg">Loading portfolio...</p>
      
      {/* Progress dots */}
      <div className="flex space-x-1 mt-2">
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-75"></div>
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-150"></div>
      </div>
    </div>
  )
}

function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-red-400 mb-4">Oops! Something went wrong</h1>
        <p className="text-slate-300 mb-6">We encountered an error loading the portfolio.</p>
        <button 
          onClick={() => window.location.reload()} 
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
        >
          Try Again
        </button>
        <details className="mt-4 text-left">
          <summary className="cursor-pointer text-slate-400 hover:text-slate-300">Error Details</summary>
          <pre className="mt-2 p-4 bg-slate-800 rounded text-sm text-red-300 overflow-auto">
            {error.message}
          </pre>
        </details>
      </div>
    </div>
  )
}

function App() {  
  return (
    <>
      <HeroSection />
      <AboutMe />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </>
  )
}
