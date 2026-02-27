import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import Stats from './sections/Stats'
import Branches from './sections/Branches'
import Congress from './sections/Congress'
import Powers from './sections/Powers'
import Gallery from './sections/Gallery.tsx'
import History from './sections/History'

export default function App() {
  return (
    <div className="min-h-screen bg-navy-900 text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <Branches />
      <Congress />
      <Powers />
      <Gallery />
      <History />

      {/* USA Flag stripe */}
      <div className="relative z-10 flex h-1">
        <div className="flex-1 bg-red-600" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-blue-800" />
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-navy-950 border-t border-blue-500/8 text-center py-8 px-6">
        <div className="text-5xl mb-4" style={{ filter: 'drop-shadow(0 0 20px rgba(79,142,247,0.5))' }}>🦅</div>
        <p className="text-blue-400 text-xl font-black tracking-[0.3em] uppercase mb-2">Developed by Zhenis Magzhan</p>
        <p className="text-white/30 text-base mb-8">«Көптен — бір» · Америка Құрама Штаттарының ұраны</p>
        <div className="w-10 h-px bg-blue-500/25 mx-auto mb-6" />
        <p className="text-white/15 text-xs font-semibold tracking-[0.25em] uppercase">
          © Американдық Үкімет · Сайт макеті
        </p>
      </footer>
    </div>
  )
}
