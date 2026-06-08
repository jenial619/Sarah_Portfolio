import './App.css'

function App() {
  return (
    <div className="portfolio">
      <header className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Portfolio</p>
          <h1>SARAH JENIAL MATHIAS</h1>
          <p className="subtitle">
            B.Tech Computer Science student building web applications, APIs, and
            data-driven tools for modern workflows.
          </p>
          <div className="contact-links">
            <a href="mailto:sarahmathias375@gmail.com">sarahmathias375@gmail.com</a>
            <span>•</span>
            <a href="tel:+919148743479">+91-9148743479</a>
            <span>•</span>
            <a href="https://github.com/jenial619" target="_blank" rel="noreferrer">github.com/jenial619</a>
            <span>•</span>
            <a href="https://linkedin.com/in/sarah-jenial-mathias" target="_blank" rel="noreferrer">linkedin.com/in/sarah-jenial-mathias</a>
          </div>
          <p className="objective">
            To become a successful professional in computer science through
            dedicated effort, continuous learning, and contributions to
            organizational growth.
          </p>
        </div>
        <div className="hero-card">
          <div className="card-header">
            <span>Resume Snapshot</span>
          </div>
          <div className="stat-grid">
            <div>
              <strong>9.33</strong>
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
        </div>
      </header>

      <main>
        <section className="section section--split">
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

        <section className="section">
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

        <section className="section section--two-column">
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
    </div>
  )
}

export default App
