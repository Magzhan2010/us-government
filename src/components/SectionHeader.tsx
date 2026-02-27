interface SectionHeaderProps {
  tag: string
  title: string
}

export default function SectionHeader({ tag, title }: SectionHeaderProps) {
  return (
    <>
      <p className="text-blue-400 text-xs font-bold tracking-[0.4em] uppercase mb-3">{tag}</p>
      <h2 className="text-white font-black leading-tight mb-4" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}>
        {title}
      </h2>
      <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-orange-500 mb-14 rounded-full" />
    </>
  )
}
