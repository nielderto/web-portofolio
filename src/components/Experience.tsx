const experiences = [
  {
    date: "2025",
    hackathon: "Lisk Builders Challenge",
    links: "https://devfolio.co/projects/onpay-8f52",
  },
  {
    date: "2025",
    hackathon: "ETHGlobal Taipei",
    links: "https://ethglobal.com/showcase/betcha-ax3oe"
  },
  {
    date: "2024",
    hackathon: "Taipei Blockchain Week Hackathon",
    links: "https://dorahacks.io/buidl/20802",
  }
];

export default function Experience() {
  return (
    <section id="experience" className="flex flex-col justify-center items-center min-h-screen pb-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">
        Hackathons
      </h2>
      <div className="flex flex-col gap-8 w-full max-w-3xl">
        {experiences.map((exp, idx) => (
          <div key={idx} className="group flex items-center justify-between py-6 px-8 rounded-xl hover:bg-white/5 transition-all duration-300 border border-white/10 hover:border-white/20">
            <a 
              href={exp.links}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-medium text-white group-hover:text-white/90 transition-colors duration-300 hover:text-blue-400 cursor-pointer flex items-center gap-2"
            >
              {exp.hackathon}
              <svg 
                className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <span className="min-w-[120px] text-sm font-bold text-gray-800 bg-white/90 rounded-full px-5 py-2 text-center shadow-lg">
              {exp.date}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}