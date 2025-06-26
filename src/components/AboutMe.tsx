export default function AboutMe() {
    return (
        <section id="about" className="flex flex-col justify-center items-center min-h-screen pb-20 gap-8">
            <div className="flex flex-col justify-start gap-4 w-full px-4 md:w-1/2">
                <h1 className="text-4xl md:text-5xl font-bold">About Me</h1>
                <p className="text-slate-300 text-base md:text-lg">Hi, I'm Neil a passionate developer currently studying at Asia University in Taiwan. I'm focused on building thoughtful, user-friendly web and blockchain applications. With experience in full-stack development, smart contracts, and modern frameworks like React and Next.js, I enjoy turning ideas into real, functional products. I'm constantly learning, collaborating, and refining my skills to create clean, efficient code and intuitive user experiences. Whether it's crafting frontend designs or deploying secure smart contracts, I aim to build solutions that make an impact. </p>
            </div>

            <div className="w-full px-4 md:w-1/2">
                <img
                    src={`/tpeblockchain.jpg`}
                    alt="pictures of me in hackathon"
                    className="w-full aspect-video object-cover rounded-xl border-2 border-zinc-700/50 shadow-lg"
                />
            </div>
        </section>
    )
}