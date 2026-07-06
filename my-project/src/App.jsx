import './App.css'

function App() {
  return (
    <div className="portfolio">
      <nav className="site-nav">
        <div className="nav-left">
          <div className="logo">Sarah J. Mathias</div>
        </div>
        <div className="nav-right">
          <a className="nav-link" href="#projects">Projects</a>
          <a className="nav-link" href="#certs">Certifications</a>
          <a className="nav-link" href="#contact">Contact</a>
          <a className="nav-link" href="https://www.linkedin.com/in/sarah-jenial-mathias-3274ba290" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="btn btn-primary" href="/resume.pdf" target="_blank" rel="noreferrer">Download Resume</a>
        </div>
      </nav>

      <header className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Portfolio</p>
          <div className="hero-row">
            <h1>SARAH JENIAL MATHIAS</h1>
            <div className="avatar">SJ</div>
          </div>

          <p className="subtitle">
            B.Tech Computer Science student building web applications, APIs,
            and data-driven tools. Experienced with FastAPI, React, and
            PostgreSQL.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="/resume.pdf" target="_blank" rel="noreferrer">Download Resume</a>
            <a className="btn btn-outline" href="https://github.com/jenial619" target="_blank" rel="noreferrer">View GitHub</a>
            <a className="btn btn-outline" href="https://www.linkedin.com/in/sarah-jenial-mathias-3274ba290" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>

          <p className="objective">
            To become a successful professional in computer science through
            dedicated effort, continuous learning, and contributions to
            organizational growth.
          </p>
        </div>

        <aside className="hero-card">
          <div className="card-header">Resume Snapshot</div>
          <div className="stat-grid">
            <div>
              <strong>9.42</strong>
              <span>CGPA</span>
            </div>
            <div>
              <strong>2023–2027</strong>
              <span>B.Tech</span>
            </div>
            <div>
              <strong>React • FastAPI</strong>
              <span>Web stack</span>
            </div>
          </div>
        </aside>
      </header>

      <main>
        <section id="education" className="section section--split">
          <div>
            <h2>Education</h2>
            <div className="card">
              <h3>B.Tech in Computer Science and Engineering</h3>
              <p>NMAM Institute of Technology, Nitte</p>
              <p>CGPA: 9.33</p>
            </div>
            <div className="card">
              <h3>Pre-University (PU)</h3>
              <p>PoornaPrajna PU College, Udupi</p>
              <p>93.33%</p>
            </div>
            <div className="card">
              <h3>Secondary School (10th)</h3>
              <p>St. Francis English Medium School, Mudarangadi</p>
              <p>92.64%</p>
            </div>
          </div>
          <div>
            <h2>Technical Skills</h2>
            <div className="skill-list">
              <span>C</span>
              <span>C++</span>
              <span>Python</span>
              <span>Java</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React.js</span>
              <span>NodeJS</span>
              <span>Spring Boot</span>
              <span>PostgreSQL</span>
              <span>MongoDB</span>
              <span>GitHub</span>
              <span>Postman</span>
              <span>Figma</span>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <h2>Internships & Projects</h2>
          <div className="project-grid">
            <article className="project-card">
              <h3>Optimization of Electricity Usage</h3>
              <p>
                Researched classroom energy consumption and evaluated
                alternatives for a more efficient usage system.
              </p>
              <p className="project-meta">Internship: Jan 14 – Apr 14, 2024</p>
            </article>
            <article className="project-card">
              <h3>Web Development Intern</h3>
              <p>
                Built PostgreSQL-backed APIs with FastAPI and an interactive
                frontend using React.js and Tailwind CSS.
              </p>
              <p className="project-meta">Optimum Codes LLP · Jun 2 – Aug 2, 2025</p>
            </article>
            <article className="project-card">
              <h3>SHOPWAVE Mart Management</h3>
              <p>
                Developed a full-stack mart system with Node.js and MongoDB
                Atlas, including order tracking and email billing.
              </p>
            </article>
            <article className="project-card">
              <h3>QuizUp Online Quiz App</h3>
              <p>
                Created a topic-driven quiz platform using Spring Boot,
                PostgreSQL, and Gemini API integration.
              </p>
            </article>
            <article className="project-card">
              <h3>Diabetes Care</h3>
              <p>
                Built an ML pipeline in Jupyter Notebook for diabetes risk
                prediction using data preprocessing, feature selection, and
                classification metrics.
              </p>
            </article>
            <article className="project-card">
              <h3>Courier Management System</h3>
              <p>
                Full-stack shipment management application with React,
                Spring Boot, and PostgreSQL for booking, tracking, and status
                control.
              </p>
            </article>
          </div>
        </section>

        <section id="certs" className="section section--two-column">
          <div>
            <h2>Certifications</h2>
            <ul className="bullet-list">
              <li>Technology Business Interaction — NMAM Institute of Technology</li>
              <li>Learn Ethical Hacking from Scratch — Udemy</li>
              <li>Network Support and Security — Cisco Networking Academy</li>
            </ul>
          </div>
          <div>
            <h2>Extracurricular</h2>
            <ul className="bullet-list">
              <li>Webinar: Data Analysis and Machine Learning — NMAMIT (2025)</li>
              <li>Webinar: Web3 using Tezos (2024)</li>
              <li>Workshop: Build your own Generative AI Model — NextWave (2024)</li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <div>© {new Date().getFullYear()} Sarah Jenial Mathias</div>
        <div className="footer-links">
          <a href="mailto:sarahmathias375@gmail.com">sarahmathias375@gmail.com</a>
          <span style={{margin: '0 8px'}}>|</span>
          <a href="https://www.linkedin.com/in/sarah-jenial-mathias-3274ba290" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </footer>
    </div>
  )
}

export default App
