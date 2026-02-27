import Fade from '../components/Fade'
import SectionHeader from '../components/SectionHeader'
import { BRANCHES } from '../data'

export default function Branches() {
  return (
    <section id="branches" className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24">
      <Fade>
        <SectionHeader tag="Билік құрылымы" title="Биліктің үш тармағы" />
      </Fade>

      <div className="grid md:grid-cols-3 gap-6">
        {BRANCHES.map((b, i) => (
          <Fade key={b.title} delay={i * 100}>
            <div className={`relative overflow-hidden rounded-2xl border p-8 h-full cursor-pointer transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/40 ${b.cardClass}`}>
              {/* Tag top-right */}
              <span className={`absolute top-5 right-5 text-[10px] font-bold tracking-[0.3em] uppercase opacity-50 ${b.accentClass}`}>
                {b.tag}
              </span>

              {/* Icon */}
              <div className="text-5xl mb-6">{b.icon}</div>

              {/* Title */}
              <h3 className="text-white text-2xl font-black mb-1">{b.title}</h3>
              <p className={`text-xs font-semibold tracking-[0.25em] uppercase mb-5 opacity-60 ${b.accentClass}`}>
                {b.sub}
              </p>
              <p className="text-white/60 text-base leading-relaxed">{b.desc}</p>

              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 right-0 h-[2px] opacity-40 bg-gradient-to-r ${b.accentClass === 'text-blue-400' ? 'from-blue-400' : b.accentClass === 'text-orange-400' ? 'from-orange-400' : 'from-white/50'} to-transparent`} />
            </div>
          </Fade>
        ))}
      </div>
    </section>
  )
}
