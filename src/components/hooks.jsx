import { useEffect, useRef, useState } from 'react'

// Effet machine à écrire
export function Typing({ words }) {
  const [text, setText] = useState('')
  useEffect(() => {
    let ri = 0, ci = 0, del = false, t
    const tick = () => {
      const w = words[ri]
      ci += del ? -1 : 1
      setText(w.slice(0, ci))
      let d = del ? 25 : 55
      if (!del && ci === w.length) { del = true; d = 1800 }
      else if (del && ci === 0) { del = false; ri = (ri + 1) % words.length; d = 300 }
      t = setTimeout(tick, d)
    }
    tick()
    return () => clearTimeout(t)
  }, [words])
  return <><span>{text}</span><i /></>
}

// Compteur animé
export function Counter({ to }) {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (n >= to) return
    const t = setTimeout(() => setN(n + 1), 450)
    return () => clearTimeout(t)
  }, [n, to])
  return <>{n}</>
}

// Apparition au scroll
export function Reveal({ as: Tag = 'section', className = '', children, ...rest }) {
  const ref = useRef(null)
  const [on, setOn] = useState(false)
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setOn(true); io.disconnect() }
    }, { threshold: 0.12 })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [])
  return <Tag ref={ref} className={`rv ${on ? 'on-v' : ''} ${className}`} {...rest}>{children}</Tag>
}

// Section active dans la navigation
export function useActive(ids) {
  const [active, setActive] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      let k = 0
      ids.forEach((id, i) => {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top < innerHeight * 0.4) k = i
      })
      setActive(k)
    }
    addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => removeEventListener('scroll', onScroll)
  }, [ids])
  return active
}
