export type TeamMember = {
  id: string
  name: string
  role: string
  image: string
  bio: string
  focus: string[]
  quote: string
}

export const TEAM: TeamMember[] = [
  {
    id: 'AV-T001',
    name: 'Rodolfo',
    role: 'Co-founder · Product & Vision',
    image: '/images/team-rodolfo.png',
    bio: 'Placeholder bio. Rodolfo spent years between auction houses and editorial desks, watching irreplaceable letters, catalogs and records fade in forgotten folders. ARCHIVIART is his answer.',
    focus: ['Product strategy', 'Institutional partnerships', 'Curatorial research'],
    quote: 'Every document is a piece of memory. It deserves to last.',
  },
  {
    id: 'AV-T002',
    name: 'Mario',
    role: 'Co-founder · Engineering',
    image: '/images/team-mario.png',
    bio: 'Placeholder bio. Mario designs the systems underneath the archive — the preservation pipeline, OCR and AI indexing engine that turn fragile paper into searchable, long-lasting records.',
    focus: ['Platform architecture', 'OCR & AI indexing', 'Data integrity'],
    quote: 'Good software disappears so the work can speak.',
  },
  {
    id: 'AV-T003',
    name: 'Rino',
    role: 'Co-founder · Design & Brand',
    image: '/images/team-rino.png',
    bio: 'Placeholder bio. Rino brings a background in exhibition design and typography, shaping an interface that feels less like a database and more like walking through a well-hung gallery.',
    focus: ['Interface design', 'Brand identity', 'Exhibition systems'],
    quote: 'Every catalogue is, secretly, a work of art.',
  },
]
