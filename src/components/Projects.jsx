import { motion } from 'framer-motion'
import { Globe, ArrowUpRight } from 'lucide-react'

export default function Projects({ items = [] }) {
  return (
    <section id="projetos" className="relative py-24 bg-[#0F172A] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Projetos em Destaque</h2>
            <p className="mt-2 text-white/60 max-w-xl">Landing pages performáticas e interfaces ricas, com foco em conversão e UX.</p>
          </div>
          <a href="#contato" className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-gray-900 font-semibold hover:bg-white/90">
            Solicitar um orçamento
          </a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p, i) => (
            <motion.a
              key={i}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="aspect-[16/10] bg-gradient-to-br from-indigo-500/20 to-cyan-500/20" />
              <div className="p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h3 className="font-semibold">{p.title}</h3>
                    <p className="text-sm text-white/60">{p.tags?.join(' • ')}</p>
                  </div>
                  <div className="shrink-0 inline-flex items-center gap-1 px-2 py-1 rounded bg-white text-gray-900 text-xs">
                    <Globe size={14} /> Live
                  </div>
                </div>
                <p className="mt-3 text-sm text-white/70 line-clamp-2">{p.desc}</p>
                <div className="mt-3 inline-flex items-center gap-1 text-indigo-300 group-hover:text-white">
                  Visitar <ArrowUpRight size={16} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
