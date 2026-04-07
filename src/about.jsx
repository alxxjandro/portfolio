const props = [
  { key: 'name',     val: 'Alonso' },
  { key: 'role',     val: 'Frontend Developer' },
  { key: 'status',   val: 'Student', accent: true },
  { key: 'focuses',  val: 'web-dev · mobile · design' },
  { key: 'location', val: 'Chihuahua, MX', accent: true },
  { key: 'hobbies',  val: 'running · cooking · coding', accent: true },
]

const About = () => (
  <section id="about" className="about">
    <div className="container">
      <div className="about-left">
        <span className="section-label">// about</span>
      </div>
      <div className="about-right">
        <div className="about-props">
          {props.map(({ key, val, accent }) => (
            <div key={key} className="about-prop">
              <span className="about-prop-key">{key}</span>
              <span className={`about-prop-val${accent ? ' accent' : ''}`}>{val}</span>
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
