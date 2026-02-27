import Counter from '../components/Counter'
import Fade from '../components/Fade'
import SectionHeader from '../components/SectionHeader'

const senateStats = [{ n: 100, l: 'Сенатор' }, { n: 6, l: 'Жыл мерзім' }, { n: 50, l: 'Штат' }]
const houseStats  = [{ n: 435, l: 'Мүше' }, { n: 2, l: 'Жыл мерзім' }, { n: 25, l: 'Жас мин.' }]

interface HouseCardProps {
  ghost: string
  icon: string
  color: 'blue' | 'orange'
  title: string
  sub: string
  p1: React.ReactNode
  p2: string
  stats: { n: number; l: string }[]
}

function ChamberCard({ ghost, icon, color, title, sub, p1, p2, stats }: HouseCardProps) {
  const accent = color === 'blue' ? 'text-blue-400' : 'text-orange-400'
  const bg     = color === 'blue' ? 'bg-blue-500/10 border-blue-500/15' : 'bg-orange-500/8 border-orange-500/15'
  const statBg = color === 'blue' ? 'bg-blue-500/10 border-blue-500/20' : 'bg-orange-500/8 border-orange-500/15'
  const num    = color === 'blue' ? 'text-blue-400' : 'text-orange-400'
  const border = color === 'blue' ? 'border-blue-500/25 hover:border-blue-400/50' : 'border-orange-500/20 hover:border-orange-400/45'

  return (
    <div className={`relative overflow-hidden rounded-2xl border bg-white/4 p-8 lg:p-10 h-full transition-all duration-400 hover:shadow-2xl hover:shadow-black/30 ${border}`}>
      {/* Ghost letter */}
      <div className="absolute -top-6 -right-3 text-[11rem] font-black leading-none select-none pointer-events-none opacity-[0.04]">
        {ghost}
      </div>

      <div className="text-5xl mb-6">{icon}</div>
      <h3 className={`text-3xl font-black text-white mb-1`}>{title}</h3>
      <p className={`text-xs font-semibold tracking-[0.3em] uppercase mb-6 ${accent} opacity-70`}>{sub}</p>
      <p className="text-white/65 text-base leading-relaxed mb-3">{p1}</p>
      <p className="text-white/45 text-sm leading-relaxed mb-8">{p2}</p>

      <div className="grid grid-cols-3 gap-3">
        {stats.map((s) => (
          <div key={s.l} className={`rounded-xl p-4 text-center border ${statBg}`}>
            <div className={`text-3xl font-black ${num}`}><Counter to={s.n} /></div>
            <div className="text-white/35 text-[10px] font-semibold tracking-[0.2em] uppercase mt-1">{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Congress() {
  return (
    <section id="congress" className="relative z-10 bg-blue-500/3 border-y border-blue-500/10 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Fade>
          <SectionHeader tag="АҚШ Парламенті" title="АҚШ Конгресі" />
        </Fade>

        <div className="grid md:grid-cols-2 gap-8">
          <Fade>
            <ChamberCard
              ghost="I"
              icon="🏛️"
              color="blue"
              title="Сенат"
              sub="The Senate · Жоғарғы палата"
              p1={<>100 сенатор — әр штаттан екіден. Олар <strong className="text-white">6 жылдық</strong> мерзімге сайланады, әр 2 жылда ротация болады.</>}
              p2="Халықаралық шарттарды ратификациялайды, федералдық судьялардың кандидатурасын бекітеді, импичмент істерін қарайды."
              stats={senateStats}
            />
          </Fade>
          <Fade delay={120}>
            <ChamberCard
              ghost="II"
              icon="🏠"
              color="orange"
              title="Өкілдер палатасы"
              sub="House of Representatives · Төменгі палата"
              p1={<>435 мүше. Өкілдік штаттың халық санына <strong className="text-white">пропорционалды</strong>. Сайлау әр 2 жылда өтеді.</>}
              p2="Салықтар мен шығыстар туралы заң жобаларын бастаудың және импичмент рәсімін қозғаудың ерекше құқығы бар."
              stats={houseStats}
            />
          </Fade>
        </div>
      </div>
    </section>
  )
}
