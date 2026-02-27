import { useInView } from '../hooks/useInView'

interface FadeProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export default function Fade({ children, delay = 0, className = '' }: FadeProps) {
  const [ref, visible] = useInView()
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.7s ${delay}ms ease, transform 0.7s ${delay}ms ease`,
      }}
    >
      {children}
    </div>
  )
}
