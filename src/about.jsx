/**
 * Alonso Alarcon
 * Portfolio - 2026
 */

const props = [
  { key: 'current role', val: 'SWE Intern @ Oracle' },
  { key: 'school', val: 'Student @ Tec de Monterrey' },
  { key: 'focuses', val: 'full-stack · dev-ops · cloud' },
  { key: 'languages', val: 'Spanish · English' },
]

const About = () => (
  <section id="about" className="about">
    <div className="container">
      <div className="about-left">
        <span className="section-label">// About me</span>

        <p className="about-statement">
          Software Engineer.
          <br />
          CS Student.
        </p>

        <p className="about-meta">
          Guadalajara, MX &nbsp;&nbsp;·&nbsp;&nbsp; {new Date().getFullYear()}
        </p>
      </div>

      <div className="about-right">
        <span className="about-section-num" aria-hidden="true">
          01
        </span>
        <div className="about-props">
          {props.map(({ key, val }, index) => (
            <div key={key} className={`about-prop about-prop-${index}`}>
              <span className="about-prop-key">{key}</span>
              <span className="about-prop-val">{val}</span>
            </div>
          ))}
        </div>

        <p className="about-note">
          Currently open to internships, freelance work and fulltime positions.
        </p>
      </div>
    </div>
  </section>
)

export default About
