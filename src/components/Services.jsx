import { Rocket, Palette, Layers, Sparkles } from 'lucide-react'

const services = [
  {
    icon: Rocket,
    title: 'Landing pages que convertem',
    desc: 'Estratégia, copy e interface otimizadas para captar leads e vender mais.',
  },
  {
    icon: Palette,
    title: 'Design system e UI',
    desc: 'Componentes consistentes, acessíveis e fáceis de escalar.',
  },
  {
    icon: Layers,
    title: 'Integrações',
    desc: 'Analytics, SEO, formulários, CRM, automações e APIs.',
  },
  {
    icon: Sparkles,
    title: 'Interações e animações',
    desc: 'Microinterações com Framer Motion e experiências cativantes.',
  },
]

export default function Services() {
  return (
    <section id="servicos" className="relative py-24 bg-[#0F172A] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold">Como posso ajudar</h2>
        <p className="mt-2 text-white/60 max-w-xl">Do zero ao ar: desenho, desenvolvo e publico.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center">
                <s.icon />
              </div>
              <h3 className="mt-4 font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
