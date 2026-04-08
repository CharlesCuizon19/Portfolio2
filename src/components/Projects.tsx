import Image from "next/image";

export default function Projects() {
  return (
    <section className="py-24 px-6" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-display font-bold mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group relative overflow-hidden rounded-3xl bg-slate-200 dark:bg-surface-dark aspect-video border border-slate-200 dark:border-slate-800">
            <Image src="/img/ManPro.png" alt="ManPro Payroll Dashboard" width={800} height={450} className="w-full h-auto object-fit transition-transform duration-500 group-hover:scale-110 opacity-60 group-hover:opacity-100" unoptimized />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-2xl font-bold text-white mb-2">ManPro Payroll HRMS</h3>
              <p className="text-slate-300 mb-4 line-clamp-2">Enterprise-grade payroll solution with automated calculations.</p>
              <div className="flex gap-2">
                <span className="text-xs font-bold px-2 py-1 bg-white/10 text-white rounded backdrop-blur-sm border border-white/10">React</span>
                <span className="text-xs font-bold px-2 py-1 bg-white/10 text-white rounded backdrop-blur-sm border border-white/10">Laravel</span>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-3xl bg-slate-200 dark:bg-surface-dark aspect-video border border-slate-200 dark:border-slate-800">
            <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuB08LBoeC5Wb1ee_3TU7UhRyXA6EqfvmBUhgk87-AxN2-0gEx65hv-c-HBIAWC_ra0QtudUc-vG8UQbkjOAaNKpXoNaZ2ZK3VOXmtCdYq08SEjqGZ_UCsNNW9ldC_wN23GMMeQu4v96q7pcGtJPgm52Suc53xYP5zt0kO15XYowvXoGoyPv59JJ0NPTc5WeuCLP_mHi-JsqHvfHd91E8ILRcldlBkYnGP2vhtusqZr4nmizLSKGtMIoBTd_sEbnERQHJbNvtHk2bk4" alt="GPS Vehicle Tracking System" width={800} height={450} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-60 group-hover:opacity-100" unoptimized />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-2xl font-bold text-white mb-2">GPS Vehicle Tracker</h3>
              <p className="text-slate-300 mb-4 line-clamp-2">Real-time geolocation monitoring system with geofencing.</p>
              <div className="flex gap-2">
                <span className="text-xs font-bold px-2 py-1 bg-white/10 text-white rounded backdrop-blur-sm border border-white/10">Leaflet.js</span>
                <span className="text-xs font-bold px-2 py-1 bg-white/10 text-white rounded backdrop-blur-sm border border-white/10">PHP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
