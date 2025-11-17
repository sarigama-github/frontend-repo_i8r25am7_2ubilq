import { Briefcase } from 'lucide-react'

export default function Experience({ items = [] }) {
  return (
    <section id="experiencia" className="relative py-24 bg-[#0B1220] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold">Experiência</h2>
        <p className="mt-2 text-white/60 max-w-xl">Projetos reais com foco em impacto e métricas.</p>

        <div className="mt-10 grid gap-6">
          {items.map((exp, i) => (
            <div key={i} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <div className="p-6 flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="shrink-0 h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center"><Briefcase /></div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold text-lg">{exp.role}</h3>
                    <span className="text-white/50">•</span>
                    <span className="text-white/80">{exp.company}</span>
                    <span className="ml-auto text-sm text-white/60">{exp.period}</span>
                  </div>
                  <p className="mt-2 text-white/70 text-sm">{exp.summary}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
