import Counter from '../components/Counter'
import Fade from '../components/Fade'
import { STATS } from '../data'

export default function Stats() {
  return (
    <div className="relative z-10 border-y border-blue-500/12 bg-blue-500/4">
      <div className="max-w-5xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {STATS.map((s, i) => (
          <Fade key={s.label} delay={i * 80}>
            <div className="text-5xl md:text-6xl font-black text-blue-400 leading-none mb-2">
              <Counter to={s.to} />
            </div>
            <div className="text-white/40 text-xs font-semibold tracking-[0.25em] uppercase">{s.label}</div>
          </Fade>
        ))}
      </div>
    </div>
  )
}
