export default function Skills() {
  return (
    <section className="py-24 px-6" id="skills">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold mb-4">Technical Expertise</h2>
          <div className="h-1.5 w-20 bg-secondary rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {[
            { tag: "javascript", title: "Frontend", items: ["ReactJS", "JavaScript", "TailwindCSS"], cls: "text-primary", gridSpan: "md:col-span-1 lg:col-span-2" },
            { tag: "dns", title: "Backend", items: ["PHP", "Laravel", "REST APIs"], cls: "text-secondary", gridSpan: "md:col-span-1 lg:col-span-2" },
            { tag: "database", title: "Database", items: ["MySQL", "Multi-Tenant"], cls: "text-accent-slate", gridSpan: "md:col-span-1 lg:col-span-2" },
            { tag: "terminal", title: "DevOps & Deployment", items: ["Cloudways", "Server Mgmt"], cls: "text-secondary", gridSpan: "md:col-span-1 lg:col-span-2 lg:col-start-2" },
            { tag: "architecture", title: "Architecture", items: ["BPMN", "Figma"], cls: "text-primary", gridSpan: "md:col-span-2 md:w-[calc(50%-1rem)] md:justify-self-center lg:w-full lg:col-span-2" }
          ].map((s, i) => (
            <div key={i} className={`p-8 rounded-3xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 shadow-sm hover-lift ${s.gridSpan}`}>
              <span className={`material-symbols-outlined text-4xl mb-6 ${s.cls}`}>{s.tag}</span>
              <h3 className="text-xl font-bold mb-4">{s.title}</h3>
              <div className="flex flex-wrap gap-2">
                {s.items.map((item, j) => (
                  <span key={j} className="px-3 py-1 rounded-full bg-slate-50 dark:bg-slate-800/50 text-xs font-semibold">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
