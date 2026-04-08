export default function Experience() {
  return (
    <section className="py-24 px-6 bg-slate-100 dark:bg-white/[0.01]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-display font-bold mb-12">Work Experience</h2>
        <div className="space-y-12">
          {/* Current Role */}
          <div className="relative pl-8 border-l-2 border-secondary/30">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-secondary"></div>
            <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
              <div>
                <h3 className="text-2xl font-bold">Full Stack Web Developer</h3>
                <p className="text-secondary font-medium">Infinity Hub Digital Marketing</p>
              </div>
              <span className="px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-bold border border-secondary/20">Dec 2025 - Present</span>
            </div>
            <ul className="space-y-3 text-slate-600 dark:text-slate-400">
              <li className="flex gap-3"><span className="text-secondary">•</span> Maintained and enhanced ManPro Payroll (Subscription-Based System)</li>
              <li className="flex gap-3"><span className="text-secondary">•</span> Supported ManPro Payroll HRMS for enterprise clients</li>
              <li className="flex gap-3"><span className="text-secondary">•</span> Implemented optimized multi-tenant architecture</li>
            </ul>
          </div>
          {/* R Web Solutions Role */}
          <div className="relative pl-8 border-l-2 border-slate-300 dark:border-slate-800">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-300 dark:bg-slate-700"></div>
            <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
              <div>
                <h3 className="text-2xl font-bold">Full Stack Web Developer</h3>
                <p className="text-slate-500 font-medium">R Web Solutions, Corp.</p>
              </div>
              <span className="px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 text-sm font-bold border border-slate-200 dark:border-slate-700">Aug – Nov 2025</span>
            </div>
            <ul className="space-y-3 text-slate-600 dark:text-slate-400 mb-5">
              <li className="flex gap-3"><span className="text-slate-400">•</span> Developed and maintained full-stack web applications using LaraBlade (Laravel + Blade) and Tailwind CSS.</li>
            </ul>
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Key Projects Delivered:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              <a href="https://icos-pilipinas.com" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 rounded text-xs hover:text-secondary hover:border-secondary transition-colors">IC-OS Pilipinas</a>
              <span className="px-3 py-1 bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 rounded text-xs">List In Here</span>
              <a href="https://cytodefence.com.ph" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 rounded text-xs hover:text-secondary hover:border-secondary transition-colors">Cyto Defence</a>
              <a href="https://goldenkeyapp.com" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 rounded text-xs hover:text-secondary hover:border-secondary transition-colors">Golden Key</a>
              <a href="https://architexphil.com" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 rounded text-xs hover:text-secondary hover:border-secondary transition-colors">Architex</a>
              <a href="https://silidcuadrado.com" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 rounded text-xs hover:text-secondary hover:border-secondary transition-colors">Silid Cuadrado</a>
              <span className="px-3 py-1 bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 rounded text-xs">Prime Doctors</span>
              <a href="https://8dragonsheartfoundation.com" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 rounded text-xs hover:text-secondary hover:border-secondary transition-colors">8DragonsHeartFoundation</a>
            </div>
          </div>
          {/* Internship Role */}
          <div className="relative pl-8 border-l-2 border-slate-300 dark:border-slate-800">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-300 dark:bg-slate-700"></div>
            <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
              <div>
                <h3 className="text-2xl font-bold">Frontend &amp; Backend Developer (Internship)</h3>
                <p className="text-slate-500 font-medium">Infinity Hub Digital Marketing</p>
              </div>
              <span className="px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 text-sm font-bold border border-slate-200 dark:border-slate-700">Feb 2025 – May 2025</span>
            </div>
            <ul className="space-y-3 text-slate-600 dark:text-slate-400">
              <li className="flex gap-3"><span className="text-slate-400">•</span> Developed a Vehicle Tracking System with real-time GPS monitoring</li>
              <li className="flex gap-3"><span className="text-slate-400">•</span> Project Link: <a className="text-primary underline hover:text-secondary transition-colors" href="https://tracker.manpromanagement.com" target="_blank" rel="noopener noreferrer">tracker.manpromanagement.com</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
