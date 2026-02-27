import { useState, useEffect } from 'react'
import { useInView } from '../hooks/useInView'

interface CounterProps {
  to: number
}

export default function Counter({ to }: CounterProps) {
  const [val, setVal] = useState(0)
  const [ref, visible] = useInView()

  useEffect(() => {
    if (!visible) return
    let cur = 0
    const step = Math.max(1, Math.ceil(to / 60))
    const id = setInterval(() => {
      cur = Math.min(cur + step, to)
      setVal(cur)
      if (cur >= to) clearInterval(id)
    }, 16)
    return () => clearInterval(id)
  }, [visible, to])

  return <span ref={ref}>{val}</span>
}
