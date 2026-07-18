/**
 * Alonso Alarcon
 * Portfolio - 2026
 */

const links = [
  { label: 'About', href: '#about' },
  { label: 'Tech', href: '#tech' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'GitHub', href: 'https://github.com/alxxjandro', external: true },
]

const Navbar = () => (
  <nav className="nav">
    <a href="#hero" className="nav-brand">AA</a>
    <ul className="nav-links">
      {links.map(({ label, href, external }) => (
        <li key={label}>
          {external ? (
            <a href={href} target="_blank" rel="noopener noreferrer">{label}</a>
          ) : (
            <a href={href}>{label}</a>
          )}
        </li>
      ))}
    </ul>
  </nav>
)

export default Navbar
