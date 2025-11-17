import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Services from './components/Services'
import Contact from './components/Contact'

const projects = [
  {
    title: 'SaaS Booster',
    desc: 'Landing page para SaaS B2B com testes A/B e taxa de conversão +34%.',
    tags: ['Next.js', 'Tailwind', 'Framer Motion', 'SEO'],
    link: 'https://example.com',
  },
  {
    title: 'App Mobile Fitness',
    desc: 'Site de lançamento com animações suaves e coleta de leads integrada.',
    tags: ['React', 'Tailwind', 'Forms', 'Analytics'],
    link: 'https://example.com',
  },
  {
    title: 'E-commerce D2C',
    desc: 'Página de produto high-converting com foco em storytelling e prova social.',
    tags: ['React', 'UI', 'CRO', 'Performance'],
    link: 'https://example.com',
  },
]

const experience = [
  {
    role: 'Frontend Developer',
    company: 'Agência Criativa',
    period: '2022 — Atual',
    summary:
      'Desenvolvimento de interfaces escaláveis em React, componentes acessíveis e integração com CMS e APIs.',
  },
  {
    role: 'Freelancer',
    company: 'Landing Pages e Websites',
    period: '2020 — 2022',
    summary:
      'Projetos de ponta a ponta: briefing, UI/UX, implementação, deploy e otimização de SEO e performance.',
  },
]

export default function App() {
  return (
    <div className="bg-[#0B1220]">
      <Navbar />
      <main>
        <Hero />
        <Projects items={projects} />
        <Experience items={experience} />
        <Services />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-[#0B1220]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-white/60 text-sm flex flex-col sm:flex-row gap-2 items-center justify-between">
          <p>© {new Date().getFullYear()} Seu Nome — Frontend & Landing Pages</p>
          <div className="flex items-center gap-4">
            <a className="hover:text-white" href="#projetos">Projetos</a>
            <a className="hover:text-white" href="#experiencia">Experiência</a>
            <a className="hover:text-white" href="#servicos">Serviços</a>
            <a className="hover:text-white" href="#contato">Contato</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
