import Image from "next/image";

export default function Hero() {
  return (
    <header className="pt-40 pb-20 px-6" id="home">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl lg:text-7xl font-display font-extrabold mb-6 leading-tight text-slate-900 dark:text-white">
            Charles Angelo <span className="text-primary">B. Cuizon</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-lg leading-relaxed">
            A passionate <span className="text-secondary font-semibold">Full Stack Web Developer</span> crafting high-performance, scalable web applications with modern tech stacks.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              className="bg-primary text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:shadow-lg hover:shadow-primary/20 transition-all"
              href="#projects"
            >
              View Projects
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
            <div className="flex items-center gap-4 px-4">
              <a className="text-slate-400 hover:text-secondary transition-colors" href="#" aria-label="Terminal">
                <span className="material-symbols-outlined text-3xl">terminal</span>
              </a>
              <a className="text-slate-400 hover:text-secondary transition-colors" href="#" aria-label="Code">
                <span className="material-symbols-outlined text-3xl">code</span>
              </a>
            </div>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-4 hero-glow rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
          <div className="relative glass-card p-4 rounded-3xl overflow-hidden border border-white/5">
            <Image
              src="/img/Gemini_Generated_Image_ygpk5tygpk5tygpk.png"
              alt="Charles Angelo Cuizon working on a Full Stack Web application"
              width={600}
              height={600}
              className="rounded-2xl w-full h-[600px] object-cover grayscale opacity-80 object-[0%_40%] group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              priority
              unoptimized
            />
            <div className="absolute bottom-8 left-8 right-8 glass-card p-6 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#4c776d]/70 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-white">verified</span>
                </div>
                <div>
                  {/* <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">Experience</p> */}
                  <p className="text-lg font-bold text-white">Full Stack Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
