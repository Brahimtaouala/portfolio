import { useEffect, useState } from 'react'
import Background from './components/Background.jsx'
import CertCard from './components/CertCard.jsx'
import { Typing, Counter, Reveal, useActive } from './components/hooks.jsx'
import {
  photo, links, roles, qualities, experience, education,
  skills, levels, certs, projects, contacts,
} from './data.js'

const ids = links.map(([id]) => id)
const CV = `${import.meta.env.BASE_URL}CV_Brahim_Taouala.pdf`

export default function App() {
  const active = useActive(ids)
  const [menu, setMenu] = useState(false)
  const [zoom, setZoom] = useState(null)

  useEffect(() => {
    const esc = (e) => e.key === 'Escape' && setZoom(null)
    addEventListener('keydown', esc)
    return () => removeEventListener('keydown', esc)
  }, [])

  return (
    <>
      <Background />
      <button className="mt" aria-label="Menu" onClick={() => setMenu(!menu)}>☰</button>

      <nav className={menu ? 'o' : ''}>
        <div className="logo">
          <svg viewBox="0 0 24 28">
            <path d="M12 1 2 5v8c0 7 4 12 10 14 6-2 10-7 10-14V5z" fill="none" stroke="#ff2a3d" strokeWidth="2" />
            <path d="M8 12l4 4 5-7" fill="none" stroke="#ff2a3d" strokeWidth="2" />
          </svg>
          <div>Brahim Taouala<small>Cybersecurity</small></div>
        </div>
        {links.map(([id, label], i) => (
          <a key={id} href={`#${id}`} className={i === active ? 'on' : ''} onClick={() => setMenu(false)}>{label}</a>
        ))}
        <div className="quote">Security is not a product, <b>it's a process.</b></div>
      </nav>

      <main>
        <section className="hero" id="top">
          <div>
            <p className="hi">› Bonjour, je suis</p>
            <h1 className="glitch" data-t="Brahim Taouala">Brahim <span>Taouala</span></h1>
            <div className="role"><Typing words={roles} /></div>
            <p className="lead">
              Diplômé du DUT Réseaux Informatiques et Sécurité de l'EST Guelmim, actuellement en Bachelor à l'EST
              d'El Kelâa des Sraghna. Passionné par la cybersécurité, je mets mes compétences au service de la
              sécurité des systèmes et des réseaux.
            </p>
            <a className="btn cv" href={CV} download="CV_Brahim_Taouala.pdf">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style={{ verticalAlign: -2, marginRight: 8 }}><path d="M12 3v10.6l3.8-3.8 1.4 1.4-6.2 6.2-6.2-6.2 1.4-1.4 3.8 3.8V3zM4 19h16v2H4z" /></svg>
              Télécharger mon CV
            </a>
            <a className="btn o" href="#contact">Me contacter</a>
            <a className="btn o" href="#proj">Mes projets</a>
            <div className="stats">
              <div><b><Counter to={3} /></b><small>Stages</small></div>
              <div><b><Counter to={3} /></b><small>Certifications</small></div>
              <div><b><Counter to={projects.length} /></b><small>Projets</small></div>
            </div>
          </div>
          <div className="photo">
            <img src={photo} alt="Brahim Taouala" />
            <span className="tag" style={{ top: '6%', right: '-4%' }}>FortiGate</span>
            <span className="tag" style={{ bottom: '14%', left: '-8%', animationDelay: '1s' }}>Think. Secure. Build.</span>
            <span className="tag" style={{ bottom: '2%', right: '4%', animationDelay: '2s' }}>NSE 1 ✓</span>
          </div>
        </section>

        <Reveal id="about">
          <h2>À propos de moi</h2>
          <div className="card">
            <p>
              Rigoureux, motivé et curieux, je suis technicien en réseaux informatiques et sécurité. J'ai effectué
              trois stages (ONP, Adaptive IT, Maya Group) avec une expérience pratique sur FortiGate, FortiManager et
              FortiAnalyzer. Certifié Fortinet NSE 1 et Cisco Networking Basics.
            </p>
            <div className="chips" style={{ marginTop: 12 }}>
              {qualities.map((q) => <span key={q}>{q}</span>)}
            </div>
          </div>
        </Reveal>

        <Reveal id="exp">
          <h2>Expérience professionnelle</h2>
          <div className="tl">
            {experience.map((e) => (
              <div key={e.title}>
                <h3>{e.title}</h3>
                <em>{e.date}</em>
                {e.points && (
                  <ul className="card" style={{ marginTop: 8, listStylePosition: 'inside' }}>
                    {e.points.map(([k, v]) => <li key={k}><b>{k} :</b> {v}</li>)}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal id="edu">
          <h2>Formation</h2>
          <div className="tl">
            {education.map((e) => (
              <div key={e.title}><h3>{e.title}</h3><em>{e.date}</em></div>
            ))}
          </div>
        </Reveal>

        <Reveal id="skills">
          <h2>Compétences</h2>
          <div className="grid">
            {skills.map(([title, items]) => (
              <div className="card" key={title}>
                <h3>{title}</h3>
                <div className="chips">{items.map((s) => <span key={s}>{s}</span>)}</div>
              </div>
            ))}
            <div className="card">
              <h3>Niveau</h3>
              {levels.map(([name, w]) => (
                <div key={name}>
                  <small>{name}</small>
                  <div className="bar"><i style={{ '--w': `${w}%` }} /></div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal id="certs">
          <h2>Certifications</h2>
          <div className="grid">
            {certs.map((c) => <CertCard key={c.title} cert={c} onOpen={setZoom} />)}
          </div>
        </Reveal>

        <Reveal id="proj">
          <h2>Mes projets</h2>
          <div className="grid proj">
            {projects.map((p) => (
              <div className="card" key={p.title}>
                <div className="ic">{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                {p.link && <a className="btn o" style={{ marginTop: 12 }} href={p.link} target="_blank" rel="noopener noreferrer">Voir sur GitHub</a>}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal id="contact">
          <h2>Contact</h2>
          <div className="soc">
            {contacts.map((c) => (
              <a key={c.name} href={c.href} {...(c.ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                <svg viewBox="0 0 24 24"><path d={c.d} /></svg>{c.name}
              </a>
            ))}
          </div>
          <a className="btn cv" style={{ marginTop: 22 }} href={CV} download="CV_Brahim_Taouala.pdf">Télécharger mon CV (PDF)</a>
        </Reveal>

        <footer>
          <span>© 2026 Brahim Taouala. Tous droits réservés.</span>
          <span>Marrakech, Maroc</span>
        </footer>
      </main>

      <div id="lb" className={zoom ? 's' : ''} onClick={() => setZoom(null)}>
        {zoom && <img src={zoom} alt="Certificat" />}
      </div>
    </>
  )
}
