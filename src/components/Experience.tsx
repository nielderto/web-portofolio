const experiences = [
  {
    date: "2025",
    hackathon: "Lisk Builders Challenge",
  },
  {
    date: "2025",
    hackathon: "ETHGlobal Taipei",
  },
  {
    date: "2024",
    hackathon: "Taipei Blockchain Week Hackathon",
  }
];

export default function Experience() {
  return (
    <section id="experience" className="flex flex-col justify-center items-center min-h-screen pb-20 px-6">
      <h2 className="text-5xl font-bold text-center mb-12 text-white">
        Hackathons
      </h2>
      <div className="flex flex-col gap-8 w-full max-w-3xl">
        {experiences.map((exp, idx) => (
          <div key={idx} className="group flex items-center justify-between py-6 px-8 rounded-xl hover:bg-white/5 transition-all duration-300 border border-white/10 hover:border-white/20">
              <span className="text-xl font-medium text-white group-hover:text-white/90 transition-colors duration-300">
              {exp.hackathon}
            </span>
            <span className="min-w-[120px] text-sm font-bold text-gray-800 bg-white/90 rounded-full px-5 py-2 text-center shadow-lg">
              {exp.date}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}