export default function Footer() {
  return (
    <footer className="bg-white dark:bg-bg-dark pt-24 pb-12 px-6 border-t border-slate-200 dark:border-slate-800/50" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-display font-bold mb-8">Education</h2>
            <div className="flex gap-4">
              <div className="w-12 h-12 flex-shrink-0 rounded-2xl bg-secondary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary">school</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Bachelor of Science in Information Technology</h3>
                <p className="text-slate-500">STI College of Davao</p>
                <p className="text-slate-400 text-sm mt-1 italic">June 2021 — July 2025</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-display font-bold mb-8">Let&apos;s Connect</h2>
            <p className="text-slate-500 mb-8">Currently open to freelance opportunities and full-time positions. If you have a project or just want to say hi, feel free to reach out!</p>
            <div className="flex gap-4">
              <a className="p-4 rounded-2xl bg-slate-100 dark:bg-surface-dark hover:bg-secondary hover:text-white transition-all group" href="mailto:hello@example.com" aria-label="Email">
                <span className="material-symbols-outlined group-hover:scale-110 transition-transform">mail</span>
              </a>
              <a className="p-4 rounded-2xl bg-slate-100 dark:bg-surface-dark hover:bg-primary hover:text-white transition-all group" href="#" aria-label="Link">
                <span className="material-symbols-outlined group-hover:scale-110 transition-transform">link</span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-slate-200 dark:border-slate-800/50 gap-6">
          <p className="text-slate-400 text-sm">&copy; 2024 Charles Angelo B. Cuizon. Built with Professionalism &amp; Intent.</p>
          <div className="flex gap-8 text-sm font-medium text-slate-400">
            <a className="hover:text-primary transition-colors" href="#">Github</a>
            <a className="hover:text-primary transition-colors" href="#">LinkedIn</a>
            <a className="hover:text-primary transition-colors" href="#">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
