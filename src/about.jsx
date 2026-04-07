const props = [
  { key: 'role',     val: 'Frontend Developer' },
  { key: 'status',   val: 'Student', dim: true },
  { key: 'focuses',  val: 'web-dev · mobile · design' },
  { key: 'location', val: 'Chihuahua, MX', dim: true },
  { key: 'hobbies',  val: 'running · cooking · coding', dim: true },
]

const About = () => (
  <section id="about" className="about">
    <div className="container">

      {/* Left — statement + meta */}
      <div className="about-left">
        <span className="section-label">// about</span>

        <p className="about-statement">
          Frontend<br />
          Developer.<br />
          CS Student.
        </p>

        <p className="about-meta">
          Chihuahua, MX&nbsp;&nbsp;·&nbsp;&nbsp;2025
        </p>
      </div>

      {/* Right — property table */}
      <div className="about-right">
        <span className="about-section-num" aria-hidden="true">01</span>

        <div className="about-props">
          {props.map(({ key, val, dim }) => (
            <div key={key} className="about-prop">
              <span className="about-prop-key">{key}</span>
              <span className={`about-prop-val${dim ? ' dim' : ''}`}>{val}</span>
            </div>
          ))}
        </div>

        <p className="about-note">
          Currently open to internships and collaborations.
        </p>
      </div>

    </div>
  </section>
)

export default About
