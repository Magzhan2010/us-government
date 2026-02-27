export default function Hero() {
  return (
    <section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6 pt-28 pb-20 overflow-hidden">

      {/* Radial glow bg */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(79,142,247,0.12) 0%, transparent 70%)' }} />

      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-100"
        style={{
          backgroundImage: `linear-gradient(rgba(79,142,247,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(79,142,247,0.04) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Orbit outer */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/10 pointer-events-none animate-spin-slow"
        style={{ width: 520, height: 520 }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_10px_#4f8ef7]" />
      </div>

      {/* Orbit inner */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/5 pointer-events-none animate-spin-reverse"
        style={{ width: 360, height: 360 }}
      />

      {/* Scan line */}
      <div
        className="absolute left-0 right-0 h-px pointer-events-none animate-scan"
        style={{ background: 'linear-gradient(90deg,transparent,rgba(79,142,247,0.35),transparent)' }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Eagle */}
        <div
          className="text-8xl mb-8 animate-float"
          style={{ filter: 'drop-shadow(0 0 40px rgba(79,142,247,0.55))' }}
        >
          🦅
        </div>

        <p className="text-blue-400 text-xs font-bold tracking-[0.45em] uppercase mb-5">
          Америка Құрама Штаттарының Федералдық Үкіметі
        </p>

        <h1
          className="font-black text-white leading-[1.05] mb-7 tracking-tight"
          style={{ fontSize: 'clamp(3.2rem, 8vw, 7.5rem)' }}
        >
          Американдық <br />
          <span className="text-blue-400">Үкімет</span>
        </h1>

        <p
          className="text-white/55 max-w-xl mx-auto mb-12 leading-relaxed"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}
        >
          Өкілеттіктерді бөлу принциптеріне негізделген билік жүйесі,{' '}
          <strong className="text-white font-bold">1789</strong> жылдан бері АҚШ халқын таныстырады
        </p>

        <a
          href="#branches"
          className="inline-flex items-center gap-3 px-10 py-4 bg-blue-500 hover:bg-blue-400 text-white font-bold text-sm tracking-widest uppercase rounded-xl transition-all duration-300 hover:scale-105 glow-blue hover:shadow-blue-400/50 hover:shadow-2xl"
        >
          Зерттеу <span className="text-lg">→</span>
        </a>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-900 to-transparent pointer-events-none" />
    </section>
  )
}
