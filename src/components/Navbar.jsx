import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <a href="#hero" className="navbar__logo">DUCATI</a>
      <ul className="navbar__links">
        <li><a href="#story">Story</a></li>
        <li><a href="#specs">Monster 937</a></li>
        <li><a href="#specs" className="navbar__cta">Configure</a></li>
      </ul>
    </nav>
  )
}
