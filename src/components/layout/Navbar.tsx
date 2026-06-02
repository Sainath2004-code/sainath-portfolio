import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { profile } from '../../data/portfolio'

const navItems = [
  ['Identity', '#identity'],
  ['Skills', '#skills'],
  ['Tools', '#tools'],
  ['Projects', '#projects'],
  ['Labs', '#labs'],
  ['Contact', '#contact'],
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <a className="brand" href="#hero" onClick={() => setOpen(false)}>
        <span className="brand-mark">SY</span>
        <span>{profile.name}</span>
      </a>
      <nav className={open ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
        {navItems.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
      </nav>
      <button className="nav-toggle" type="button" aria-label="Toggle navigation" onClick={() => setOpen((value) => !value)}>
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>
    </header>
  )
}
