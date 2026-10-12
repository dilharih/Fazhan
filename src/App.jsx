import { useState } from 'react'
import { education, experiences, leadership, projects, skills } from './data/portfolio.js'
import ProjectCard from './components/ProjectCard.jsx'
import SectionHeading from './components/SectionHeading.jsx'
import './App.css'

const currentYear = new Date().getFullYear()

const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
]

function ArrowIcon({ diagonal = false }) {
  return (
    <svg
      aria-hidden="true"
      className={diagonal ? 'arrow-icon arrow-icon-diagonal' : 'arrow-icon'}
      fill="none"
      viewBox="0 0 20 20"
    >
      <path d="M3.5 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
    </svg>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Fazhan P — home" onClick={closeMenu}>
        <span className="brand-mark">F<span>.</span></span>
        <span className="brand-name">Fazhan P.</span>
      </a>
      <button
        aria-controls="primary-navigation"
        aria-expanded={menuOpen}
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
        onClick={() => setMenuOpen((open) => !open)}
        type="button"
      >
        <span />
        <span />
      </button>
      <nav
        aria-label="Primary navigation"
        className={`primary-navigation${menuOpen ? ' is-open' : ''}`}
        id="primary-navigation"
      >
        {navigation.map((item) => (
          <a href={item.href} key={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
        <a className="nav-contact" href="#contact" onClick={closeMenu}>
          Let&apos;s talk <ArrowIcon diagonal />
        </a>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section aria-labelledby="hero-title" className="hero section-shell" id="home">
      <div className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-dot" /> Computer Science &amp; Engineering</p>
        <h1 id="hero-title">Thoughtful software.<br /><span>Meaningful impact.</span></h1>
        <p className="hero-description">
          I&apos;m Fazhan, a computer science engineer interested in building useful software
          across frontend development, machine learning, and natural language processing.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            Explore my work <ArrowIcon />
          </a>
          <a className="button button-text" href="#contact">Get in touch <ArrowIcon /></a>
        </div>
        <div className="hero-meta">
          <span className="location-mark" aria-hidden="true">↗</span>
          <span>Based in Kozhikode, Kerala, India</span>
          <span className="meta-divider" />
          <span>English &amp; Malayalam</span>
        </div>
      </div>

      <div aria-label="Portfolio focus areas: software, machine learning, and responsible problem solving" className="hero-art">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="art-caption"><span>SELECTED FOCUS</span><span>01 — 03</span></div>
        <div className="art-monogram">F<span>.</span></div>
        <div className="art-note art-note-top"><span className="note-icon note-icon-code">&lt;/&gt;</span><span>Software<br />development</span></div>
        <div className="art-note art-note-right"><span className="note-icon note-icon-ai">AI</span><span>Applied machine<br />learning</span></div>
        <div className="art-note art-note-bottom"><span className="note-icon note-icon-data">✳</span><span>Data-informed<br />problem solving</span></div>
        <span className="art-stamp">BUILD<br />WITH<br />PURPOSE</span>
      </div>

      <div className="hero-foot">
        <span>Curious by nature. Practical by design.</span>
        <a href="#about">Scroll to explore <span aria-hidden="true">↓</span></a>
      </div>
    </section>
  )
}

function About() {
  return (
    <section aria-labelledby="about-title" className="section-shell section-block about-section" id="about">
      <SectionHeading
        eyebrow="A little about me"
        number="01"
        title={<>From curious ideas<br />to <span>working solutions.</span></>}
        id="about-title"
      />
      <div className="about-content">
        <p className="about-lead">
          I enjoy working where software meets real-world challenges—turning data, thoughtful
          engineering, and a clear understanding of the problem into something people can use.
        </p>
        <div className="about-details">
          <p>
            With a foundation in computer science and hands-on experience across frontend
            development and AI, I&apos;ve worked on projects in resume analysis, learning
            recommendations, and intelligent decision-making for smart farming.
          </p>
          <p>
            I value collaborative teams, clear communication, and learning by building. I&apos;m
            especially interested in open-source development, applied AI, and cybersecurity.
          </p>
        </div>
        <div className="about-principles">
          <div><span>01</span><h3>Start with the problem</h3><p>Understand the need before choosing the tools.</p></div>
          <div><span>02</span><h3>Build with care</h3><p>Make practical, considered engineering decisions.</p></div>
          <div><span>03</span><h3>Keep learning</h3><p>Stay curious, share ideas, and improve together.</p></div>
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section aria-labelledby="projects-title" className="projects-section section-block" id="projects">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Selected projects"
          number="02"
          title={<>A couple of ideas, <span>put to work.</span></>}
          id="projects-title"
          aside="Applied machine learning, NLP, and decision support—built around real problems."
        />
        <div className="project-grid">
          {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section aria-labelledby="experience-title" className="section-shell section-block experience-section" id="experience">
      <SectionHeading
        eyebrow="Experience & involvement"
        number="03"
        title={<>Learning by doing, <span>growing together.</span></>}
        id="experience-title"
      />
      <div className="experience-layout">
        <div className="timeline">
          <p className="column-label">INTERNSHIPS &amp; WORKSHOPS</p>
          {experiences.map((item) => (
            <article className="timeline-item" key={item.title}>
              <div className="timeline-marker" />
              <div className="timeline-heading">
                <div><h3>{item.title}</h3><p className="timeline-organization">{item.organization}</p></div>
                <span className="timeline-date">{item.date}</span>
              </div>
              <p className="timeline-description">{item.description}</p>
              <div className="tag-list">
                {item.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
        <aside className="leadership-panel">
          <p className="column-label">LEADERSHIP</p>
          <h3>Good work is a team effort.</h3>
          <p className="leadership-intro">Helping people and ideas come together beyond the classroom.</p>
          {leadership.map((item) => (
            <div className="leadership-item" key={item.event}>
              <span className="leadership-year">{item.year}</span>
              <div><h4>{item.role}</h4><p>{item.event}</p><span>{item.description}</span></div>
            </div>
          ))}
          <div className="leadership-symbol" aria-hidden="true">↗</div>
        </aside>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section aria-labelledby="skills-title" className="skills-section section-block" id="skills">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Tools of the trade"
          number="04"
          title={<>A foundation for <span>what&apos;s next.</span></>}
          id="skills-title"
          aside="A growing toolkit grounded in computer science fundamentals and hands-on project work."
        />
        <div className="skills-grid">
          {skills.map((group, index) => (
            <article className="skill-card" key={group.category}>
              <span className="skill-index">0{index + 1}</span>
              <h3>{group.category}</h3>
              <div className="tag-list">
                {group.items.map((item) => <span className="tag" key={item}>{item}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Education() {
  return (
    <section aria-labelledby="education-title" className="section-shell section-block education-section" id="education">
      <SectionHeading
        eyebrow="Education & learning"
        number="05"
        title={<>Grounded in learning, <span>ready to grow.</span></>}
        id="education-title"
      />
      <div className="education-layout">
        <div className="education-list">
          {education.map((item) => (
            <article className="education-item" key={item.institution}>
              <span className="education-period">{item.period}</span>
              <div><h3>{item.degree}</h3><p>{item.institution}</p></div>
              {item.result && <span className="education-result">{item.result}</span>}
            </article>
          ))}
        </div>
        <aside className="certifications">
          <p className="column-label">CERTIFICATIONS &amp; COURSES</p>
          <ul>
            <li><span>01</span>Fundamentals of Cybersecurity <small>NIT Calicut</small></li>
            <li><span>02</span>Python Programming <small>Add-on course</small></li>
            <li><span>03</span>Machine Learning and Artificial Intelligence <small>Online course</small></li>
            <li><span>04</span>Getting Started with Artificial Intelligence <small>IBM SkillsBuild</small></li>
          </ul>
        </aside>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section aria-labelledby="contact-title" className="contact-section" id="contact">
      <div className="section-shell contact-inner">
        <div className="contact-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> Have a project or opportunity?</p>
          <h2 id="contact-title">Let&apos;s make<br /><span>something useful.</span></h2>
          <p>I&apos;m always glad to connect with people working on thoughtful software and applied AI.</p>
        </div>
        <div className="contact-links">
          <a className="contact-link contact-link-email" href="mailto:fazhanputh@gmail.com">
            <span><small>EMAIL ME</small><strong>fazhanputh@gmail.com</strong></span><ArrowIcon diagonal />
          </a>
          <a className="contact-link" href="https://www.linkedin.com/in/fazhan-p-a84702322/" rel="noreferrer" target="_blank">
            <span><small>CONNECT ON LINKEDIN</small><strong>linkedin.com/in/fazhan-p</strong></span><ArrowIcon diagonal />
          </a>
          <a className="contact-link" href="tel:+918129570903">
            <span><small>CALL</small><strong>+91 81295 70903</strong></span><ArrowIcon diagonal />
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer section-shell">
      <a className="brand footer-brand" href="#home"><span className="brand-mark">F<span>.</span></span><span className="brand-name">Fazhan P.</span></a>
      <p>Designed with intention. Built with React.</p>
      <a className="back-to-top" href="#home">Back to top ↑</a>
      <span className="copyright">© {currentYear} Fazhan P.</span>
    </footer>
  )
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
