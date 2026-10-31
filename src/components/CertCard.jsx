import { useRef } from 'react'

// Carte certificat avec effet 3D au survol
export default function CertCard({ cert, onOpen }) {
  const img = useRef(null)
  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    img.current.style.transform = `rotateY(${x * 14}deg) rotateX(${-y * 14}deg) scale(1.03)`
  }
  const leave = () => { img.current.style.transform = '' }
  return (
    <div className="card cert" onClick={() => onOpen(cert.img)} onMouseMove={move} onMouseLeave={leave}>
      <img ref={img} src={cert.img} alt={cert.title} />
      <h3>{cert.title}</h3>
      <p>{cert.sub}</p>
    </div>
  )
}
