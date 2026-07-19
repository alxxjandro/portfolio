const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-name">Alonso Alarcon</p>
      <p className="footer-meta">
        github.com/alxxjandro&nbsp;&nbsp;·&nbsp;&nbsp;
        <a href="mailto:alejandro33p@icloud.com" className="footer-link">
          email
        </a>
        &nbsp;&nbsp;·&nbsp;&nbsp;
        {new Date().getFullYear()}
      </p>
    </footer>
  )
}

export default Footer
