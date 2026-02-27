import Fade from '../components/Fade'
import SectionHeader from '../components/SectionHeader'
import { POWERS } from '../data'

export default function Powers() {
  return (
    <section id="powers" className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24">
      <Fade>
        <SectionHeader tag="Конгресстің өкілеттіктері" title="Негізгі функциялар" />
      </Fade>

      <div className="grid md:grid-cols-2 gap-4">
        {POWERS.map((p, i) => (
          <Fade key={p.n} delay={(i % 4) * 70}>
            <div className="group flex gap-5 items-start p-7 rounded-2xl border border-white/8 bg-white/3 cursor-pointer transition-all duration-300 hover:bg-blue-500/8 hover:border-blue-400/35 hover:shadow-lg hover:shadow-blue-900/30">
              <span className="text-3xl mt-0.5 group-hover:scale-110 transition-transform duration-300">{p.icon}</span>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-sm font-black text-blue-500/30">{p.n}</span>
                  <h4 className="text-white text-lg font-bold">{p.title}</h4>
                </div>
                <p className="text-white/50 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  )
}
