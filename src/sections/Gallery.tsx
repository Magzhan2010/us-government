// Gallery.tsx
// Суреттерді қосу үшін src-ті өзгерт, мысалы: src="/images/capitol.jpg"

export default function Gallery() {
  return (
    <section id="gallery" className="relative z-10 bg-blue-500/3 border-y border-blue-500/10 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Тақырып */}
        <p className="text-blue-400 text-xs font-bold tracking-[.4em] uppercase mb-3">Photo</p>
        <h2 className="text-white font-black leading-tight mb-4 text-5xl md:text-6xl">Фотосуреттер</h2>
        <div className="w-12 h-[3px] rounded-full bg-gradient-to-r from-blue-500 to-orange-500 mb-14" />

        {/* Тор */}
        <div
          className="grid grid-cols-3 gap-5"
          style={{ gridTemplateRows: "320px 260px" }}
        >

          {/* ФОТО 1 — үлкен, 2 баған */}
          <div className="col-span-2 rounded-2xl overflow-hidden">
            <img
              src="/images/us1.png"
              alt="Фото 1"
              className="w-full h-full object-cover"
            />
          </div>

          {/* ФОТО 2 */}
          <div className="rounded-2xl overflow-hidden">
            <img
              src="/images/us2.jpg"
              alt="Фото 2"
              className="w-full h-full object-cover"
            />
          </div>

          {/* ФОТО 3 */}
          <div className="rounded-2xl overflow-hidden">
            <img
              src="/images/us3.webp"
              alt="Фото 3"
              className="w-full h-full object-cover"
            />
          </div>

          {/* ФОТО 4 */}
          <div className="rounded-2xl overflow-hidden">
            <img
              src="/images/us4.avif"
              alt="Фото 4"
              className="w-full h-full object-cover"
            />
          </div>

          {/* ФОТО 5 */}
          <div className="rounded-2xl overflow-hidden">
            <img
              src="/images/us5.png"
              alt="Фото 5"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
