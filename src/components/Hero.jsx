import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-b from-[#0B1220] to-[#0F172A] text-white pt-24">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center relative z-10">
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-indigo-300/80 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Frontend • Landing Pages
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Eu construo interfaces web incríveis e landing pages que convertem
            </h1>
            <p className="mt-5 text-white/70 text-lg max-w-xl">
              Especialista em React, animações e performance. Experiência com marcas e startups, focado em design consistente e resultados.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projetos" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white text-gray-900 font-semibold hover:bg-white/90">
                Ver projetos
              </a>
              <a href="#contato" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white/10 border border-white/20 hover:bg-white/15">
                Solicitar landing page
              </a>
            </div>
          </motion.div>
        </div>

        <div className="h-[480px] md:h-[560px] lg:h-[640px] w-full relative">
          <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/10 bg-white/5">
            <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-50" />
          </div>
        </div>
      </div>
    </section>
  )
}
