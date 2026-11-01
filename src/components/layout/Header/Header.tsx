import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/logos/logo.png'
import { routePaths } from '../../../routes/routePaths'
import { Navbar } from '../Navbar/Navbar'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isMenuOpen) return

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  return (
    <header className="site-header">
      <Link className="brand" to={routePaths.home} aria-label="Maendeleo Asilia home">
        <img className="brand-logo" src={logo} alt="" />
        <span className="brand-name">Maendeleo <span>Asilia</span></span>
      </Link>
      <button
        ref={menuButtonRef}
        className="menu-toggle"
        type="button"
        aria-label={isMenuOpen ? 'Close main menu' : 'Open main menu'}
        aria-expanded={isMenuOpen}
        aria-controls="main-navigation"
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>
      <Navbar isOpen={isMenuOpen} onNavigate={() => setIsMenuOpen(false)} />
      <Link className="cart-link" to={routePaths.cart} aria-label="Shopping cart">
        <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
        </svg>
        <span className="cart-label">Cart</span>
      </Link>
    </header>
  )
}
