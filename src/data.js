import me from './assets/me.jpg'
import nse1 from './assets/nse1.jpg'
import ngfw from './assets/ngfw.jpg'
import cisco from './assets/cisco.jpg'

export const photo = me

export const links = [
  ['top', 'Accueil'], ['about', 'À propos'], ['exp', 'Expérience'], ['edu', 'Formation'],
  ['skills', 'Compétences'], ['certs', 'Certifications'], ['proj', 'Projets'], ['contact', 'Contact'],
]

export const roles = [
  'Technicien en Réseaux Informatiques & Sécurité',
  'Fortinet NSE 1 Certified',
  'FortiGate · FortiManager · FortiAnalyzer',
]

export const qualities = ['Rigueur', "Esprit d'équipe", 'Autonomie', 'Curiosité', 'Résolution de problèmes']

export const experience = [
  {
    title: "Stage de fin d'études (PFE) — Office National des Pêches",
    date: 'Avril 2026 – Juin 2026',
    points: [
      ['FortiGate', 'politiques de sécurité, NAT, VPN IPsec/SSL, filtrage Web/IPS'],
      ['FortiManager', 'centralisation des règles, ADOMs, déploiement'],
      ['FortiAnalyzer', 'analyse des logs, rapports'],
      ['Infrastructure', 'VLAN, tests de connectivité, diagnostic'],
    ],
  },
  { title: 'Stage — Adaptive IT', date: '2025 · 2 mois' },
  { title: 'Stage — Maya Group', date: '1 mois' },
]

export const education = [
  { title: 'Bachelor (Licence)', date: 'EST El Kelâa des Sraghna · 2026 – Présent' },
  { title: 'DUT Réseaux Informatiques et Sécurité', date: 'EST Guelmim · 2024 – 2026' },
  { title: 'Baccalauréat Sciences Physiques', date: '2023 – 2024' },
]

export const skills = [
  ['Réseaux & Sécurité', ['TCP/IP', 'VLAN', 'ACL', 'NAT', 'VPN IPsec/SSL', 'RADIUS', 'FortiGate', 'FortiManager', 'FortiAnalyzer', 'Cisco']],
  ['Systèmes', ['Linux', 'Windows Server', 'AD DS · GPO', 'VMware', 'VirtualBox', 'DNS · DHCP']],
  ['Outils', ['GNS3', 'Packet Tracer', 'Wireshark', 'Nmap']],
]

export const levels = [
  ['Réseaux & Fortinet', 85],
  ['Systèmes', 75],
  ['Programmation (Python, Java, PHP)', 70],
]

export const certs = [
  { img: nse1, title: 'Fortinet NSE 1', sub: 'Août 2026 – Août 2028 · ID 4686044868TB' },
  { img: ngfw, title: 'Intro to Next Generation Firewall 1.0', sub: 'Août 2026 · Fortinet Training Institute' },
  { img: cisco, title: 'Cisco Networking Basics', sub: 'Septembre 2026 · Cisco Networking Academy' },
]

export const projects = [
  { icon: '🛡️', title: "NIDS basé sur l'IA", text: "Conception et déploiement d'un système de détection d'intrusion qui identifie les comportements malveillants par Machine Learning.", link: '' },
  { icon: '🌐', title: 'Réseau informatique sécurisé', text: "Services d'entreprise (DNS, DHCP, Mail, Web) avec haute disponibilité et sécurité des flux.", link: '' },
  { icon: '🔑', title: 'Serveur RADIUS (AAA)', text: "Serveur AAA pour centraliser et sécuriser l'accès aux équipements réseau.", link: '' },
  { icon: '💻', title: 'Site web dynamique', text: 'HTML, CSS, JavaScript et PHP.', link: '' },
]

export const contacts = [
  { name: 'LinkedIn', href: 'https://linkedin.com/in/brahim-taouala', ext: true,
    d: 'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3zM9.5 9.5h3.8v1.6c.6-1 1.9-1.9 3.9-1.9 4 0 4.8 2.6 4.8 6V21h-4v-5c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V21h-4z' },
  { name: 'GitHub', href: 'https://github.com/Brahimtaouala', ext: true,
    d: 'M12 .5a11.5 11.5 0 0 0-3.6 22.4c.6.1.8-.2.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.3 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.2c0 .4.2.7.8.6A11.5 11.5 0 0 0 12 .5z' },
  { name: 'brahimtaouala121212@gmail.com', href: 'mailto:brahimtaouala121212@gmail.com',
    d: 'M2 5h20v14H2zm2 2v.5l8 5 8-5V7zm16 3-8 5-8-5V17h16z' },
  { name: '0754-337828', href: 'tel:+212754337828',
    d: 'M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1z' },
]
