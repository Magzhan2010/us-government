import Fade from '../components/Fade'
import SectionHeader from '../components/SectionHeader'
import { TIMELINE } from '../data'

export default function History() {
  return (
    <section id="history" className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24">
      <Fade>
        <SectionHeader tag="Хронология" title="АҚШ тарихы" />
      </Fade>

      <div className="relative">
        {/* Vertical line */}
        <div
          className="absolute left-12 top-0 bottom-0 w-px hidden md:block"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(79,142,247,0.4) 8%, rgba(79,142,247,0.4) 92%, transparent)' }}
        />

        <div className="flex flex-col gap-7">
          {TIMELINE.map((t, i) => (
            <Fade key={t.year} delay={i * 70}>
              <div className="flex gap-10 items-start">
                {/* Dot + Year */}
                <div className="hidden md:flex flex-col items-center flex-shrink-0 w-24">
                  <div className="w-3.5 h-3.5 rounded-full bg-blue-500 animate-pulse-glow z-10 shadow-[0_0_16px_rgba(79,142,247,0.6)]" />
                  <span className="text-blue-400 text-xl font-black mt-2 leading-none">{t.year}</span>
                </div>

                {/* Card */}
                <div className="flex-1 bg-white/3 border border-white/8 rounded-xl px-8 py-7 cursor-pointer transition-all duration-300 hover:bg-blue-500/7 hover:border-blue-400/30 hover:shadow-lg hover:shadow-blue-900/20">
                  <span className="md:hidden text-blue-400 text-lg font-black block mb-2">{t.year}</span>
                  <h3 className="text-white text-xl font-bold mb-2">{t.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{t.desc}</p>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  )
}
