import { useState } from 'react'

interface PhotoSlotProps {
  label: string
  className?: string
}

export default function PhotoSlot({ label, className = '' }: PhotoSlotProps) {
  const [src, setSrc] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (ev) => setSrc(ev.target?.result as string)
    reader.readAsDataURL(file)
  }

  return (
    <div className={`relative overflow-hidden rounded-2xl border-2 border-dashed border-blue-500/25 bg-white/3 group cursor-pointer transition-all duration-300 hover:border-blue-400/60 hover:bg-blue-500/8 ${className}`}>
      <input
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="absolute inset-0 opacity-0 cursor-pointer z-20 w-full h-full"
      />
      {src ? (
        <img src={src} alt={label} className="w-full h-full object-cover" />
      ) : (
        <div className="flex flex-col items-center justify-center h-full gap-3 select-none py-10">
          <span className="text-5xl opacity-25 group-hover:opacity-50 transition-opacity duration-300">📷</span>
          <p className="text-blue-400/70 text-xs font-semibold tracking-[0.25em] uppercase">{label}</p>
          <p className="text-white/25 text-xs">Жүктеу үшін басыңыз</p>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  )
}
