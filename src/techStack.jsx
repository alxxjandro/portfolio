import {
  SiTypescript,
  SiJavascript,
  SiCplusplus,
  SiPython,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiPrisma,
  SiJest,
  SiGit,
  SiDocker,
  SiLinux,
  SiFigma,
  SiPostman,
  SiPostgresql,
  SiMysql,
  SiVite,
  SiGooglecloud,
  SiEslint,
  SiPrettier,
} from 'react-icons/si'
import { DiMsqlServer } from 'react-icons/di'

const TechStack = () => {
  const stacks = [
    {
      title: 'Languages',
      icons: [
        { icon: <SiTypescript title="TypeScript" />, label: 'TypeScript' },
        { icon: <SiJavascript title="JavaScript" />, label: 'JavaScript' },
        { icon: <SiCplusplus title="C++" />, label: 'C++' },
        { icon: <SiPython title="Python" />, label: 'Python' },
      ],
    },
    {
      title: 'Web Development',
      icons: [
        { icon: <SiReact title="React" />, label: 'React' },
        { icon: <SiNodedotjs title="Node.js" />, label: 'Node.js' },
        { icon: <SiExpress title="Express" />, label: 'Express' },
        { icon: <SiTailwindcss title="Tailwind" />, label: 'Tailwind' },
        { icon: <SiJest title="Jest" />, label: 'Jest' },
        { icon: <SiVite title="Vite" />, label: 'Vite' },
      ],
    },
    {
      title: 'Tools',
      icons: [
        { icon: <SiGit title="Git" />, label: 'Git' },
        { icon: <SiDocker title="Docker" />, label: 'Docker' },
        { icon: <SiLinux title="Linux" />, label: 'Linux' },
        { icon: <SiEslint title="ESLint" />, label: 'ESLint' },
        { icon: <SiPrettier title="Prettier" />, label: 'Prettier' },
        { icon: <SiPostman title="REST APIs" />, label: 'Postman' },
        { icon: <SiFigma title="Figma" />, label: 'Figma' },
      ],
    },
    {
      title: 'Databases',
      icons: [
        { icon: <SiPostgresql title="PostgreSQL" />, label: 'PostgreSQL' },
        { icon: <SiMysql title="MySQL" />, label: 'MySQL' },
        { icon: <DiMsqlServer title="T-SQL" />, label: 'T-SQL' },
      ],
    },
  ]

  return (
    <section className="techWrapper">
      <div className="techHeader">
        <h1>
          My <span>Tech </span> Stack
        </h1>
        <p>
          Tools, languages, and frameworks I use to build fast and scalable
          applications.
        </p>
        <div className="greenDivider"></div>
      </div>

      <div className="techStackContainer">
        {stacks.map((group) => (
          <div key={group.title} className="stackCard">
            <h3>{group.title}</h3>
            <div className="stackIcons">
              {group.icons.map(({ icon, label }) => (
                <div key={label} className="iconWrapper">
                  {icon}
                  <p>{label}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
export default TechStack
