import { useState } from 'react'
import { Mail } from 'lucide-react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Enviando...')

    try {
      const form = new FormData(e.currentTarget)
      const data = Object.fromEntries(form.entries())
      // Placeholder: normalmente você integraria com um backend/CRM.
      await new Promise(r => setTimeout(r, 800))
      setStatus('Recebi sua mensagem! Vou te responder em breve.')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('Ocorreu um erro. Tente novamente.')
    }
  }

  return (
    <section id="contato" className="relative py-24 bg-[#0B1220] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Vamos construir algo incrível</h2>
            <p className="mt-3 text-white/70 max-w-xl">Me conte sobre sua ideia de landing page ou uma vaga de frontend. Respondo em poucas horas.</p>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-white/60">Tempo médio de resposta</p>
                <p className="text-lg font-semibold mt-1">menos de 24h</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-white/60">Disponibilidade</p>
                <p className="text-lg font-semibold mt-1">Freelance e CLT/PJ</p>
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="grid gap-4">
              <input name="nome" required placeholder="Seu nome" className="rounded-lg bg-white/10 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-white/30" />
              <input type="email" name="email" required placeholder="Seu email" className="rounded-lg bg-white/10 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-white/30" />
              <input name="assunto" placeholder="Assunto" className="rounded-lg bg-white/10 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-white/30" />
              <textarea name="mensagem" required rows="5" placeholder="Me conte mais sobre o projeto ou vaga" className="rounded-lg bg-white/10 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-white/30" />
              <button className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-gray-900 font-semibold hover:bg-white/90">
                <Mail size={18} /> Enviar mensagem
              </button>
              {status && <p className="text-sm text-white/70">{status}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
