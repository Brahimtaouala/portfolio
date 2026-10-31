import { useEffect, useRef } from 'react'

// Réseau de points animés qui réagit à la souris
export default function Background() {
  const ref = useRef(null)

  useEffect(() => {
    const cv = ref.current
    const cx = cv.getContext('2d')
    let W, H, P = [], raf
    const m = { x: -999, y: -999 }

    const resize = () => {
      W = cv.width = innerWidth
      H = cv.height = innerHeight
      P = Array.from({ length: Math.min(80, ((W * H) / 18000) | 0) }, () => ({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.5, vy: (Math.random() - 0.5) * 0.5,
      }))
    }
    const move = (e) => { m.x = e.clientX; m.y = e.clientY }

    const draw = () => {
      cx.clearRect(0, 0, W, H)
      P.forEach((p, i) => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > W) p.vx *= -1
        if (p.y < 0 || p.y > H) p.vy *= -1
        cx.fillStyle = '#ff2a3d'
        cx.beginPath(); cx.arc(p.x, p.y, 1.6, 0, 7); cx.fill()
        for (let j = i + 1; j < P.length; j++) {
          const q = P[j], d = Math.hypot(p.x - q.x, p.y - q.y)
          if (d < 130) {
            cx.strokeStyle = `rgba(255,42,61,${0.35 * (1 - d / 130)})`
            cx.beginPath(); cx.moveTo(p.x, p.y); cx.lineTo(q.x, q.y); cx.stroke()
          }
        }
        const dm = Math.hypot(p.x - m.x, p.y - m.y)
        if (dm < 170) {
          cx.strokeStyle = `rgba(255,120,130,${0.6 * (1 - dm / 170)})`
          cx.beginPath(); cx.moveTo(p.x, p.y); cx.lineTo(m.x, m.y); cx.stroke()
        }
      })
      raf = requestAnimationFrame(draw)
    }

    resize(); draw()
    addEventListener('resize', resize)
    addEventListener('mousemove', move)
    return () => {
      cancelAnimationFrame(raf)
      removeEventListener('resize', resize)
      removeEventListener('mousemove', move)
    }
  }, [])

  return <canvas id="bg" ref={ref} />
}
