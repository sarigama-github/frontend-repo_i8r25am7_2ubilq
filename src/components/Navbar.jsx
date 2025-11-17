import { useState } from 'react'
import { Menu, X, Mail, Github, Linkedin } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  const NavLinks = () => (
    <>
      <button onClick={() => scrollTo('projetos')} className="px-3 py-2 rounded hover:bg-white/10">Projetos</button>
      <button onClick={() => scrollTo('experiencia')} className="px-3 py-2 rounded hover:bg-white/10">Experiência</button>
      <button onClick={() => scrollTo('servicos')} className="px-3 py-2 rounded hover:bg-white/10">Serviços</button>
      <button onClick={() => scrollTo('contato')} className="px-3 py-2 rounded hover:bg-white/10">Contato</button>
    </>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl text-white">
          <div className="flex items-center justify-between px-4 sm:px-6 py-3">
            <a href="#" className="font-semibold tracking-tight text-white/90">&lt;SeuNome /&gt;</a>

            <nav className="hidden md:flex items-center gap-1 text-sm">
              <NavLinks />
              <a href="#contato" className="ml-2 inline-flex items-center gap-2 bg-white text-gray-900 px-3 py-2 rounded-lg hover:bg-white/90">
                <Mail size={16} /> Contato
              </a>
            </nav>

            <button className="md:hidden p-2 rounded hover:bg-white/10" onClick={() => setOpen(!open)}>
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4 border-t border-white/10">
              <div className="flex flex-col gap-2 text-sm">
                <NavLinks />
                <div className="flex items-center gap-3 pt-2">
                  <a href="mailto:seuemail@exemplo.com" className="inline-flex items-center gap-2 bg-white text-gray-900 px-3 py-2 rounded-lg hover:bg-white/90">
                    <Mail size={16} /> Fale comigo
                  </a>
                  <a href="https://github.com/" target="_blank" className="p-2 rounded hover:bg-white/10" rel="noreferrer"><Github size={18} /></a>
                  <a href="https://linkedin.com/in/" target="_blank" className="p-2 rounded hover:bg-white/10" rel="noreferrer"><Linkedin size={18} /></a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
