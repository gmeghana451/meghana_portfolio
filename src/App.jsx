import heroIllustration from "./assets/hero.png";
import "./App.css";

const skills = [
  {
    title: "Programming",
    items: ["Python", "JavaScript", "Java"],
  },
  {
    title: "AI & Machine Learning",
    items: ["Machine Learning", "Artificial Intelligence", "Generative AI", "Scikit-learn", "Pandas", "NumPy"],
  },
  {
    title: "Web Development",
    items: ["HTML", "CSS", "React", "Angular", "Flask", "REST APIs"],
  },
  {
    title: "Database & Tools",
    items: ["SQL", "Oracle SQL", "Git & GitHub", "VS Code", "Streamlit"],
  },
];

const projects = [
  {
    label: "Featured Project",
    title: "Customer Churn & Engagement Optimization",
    description:
      "Built an end-to-end machine learning pipeline to predict churn risk, segment customers, and surface retention strategies in a simple dashboard.",
    tags: ["Python", "Pandas", "Scikit-learn", "Logistic Regression", "Random Forest", "Streamlit"],
    stats: [
      { value: "7,043", label: "Customers analyzed" },
      { value: "3", label: "ML models compared" },
      { value: "3", label: "Risk segments" },
    ],
    featured: true,
  },
  {
    label: "M.Tech Project",
    title: "Software Defect Prediction in Edge-Cloud Systems",
    description:
      "Developed a machine learning approach for software defect prediction using NASA/PROMISE datasets and classification algorithms.",
    tags: ["Python", "Machine Learning", "Random Forest", "SVM", "Gradient Boosting"],
  },
  {
    label: "Machine Learning",
    title: "Cardiovascular Disease Prediction",
    description:
      "Developed a machine learning application to predict cardiovascular disease using Python, Flask, SQL and feature selection techniques.",
    tags: ["Python", "Flask", "SQL", "Machine Learning"],
  },
  {
    label: "AI Research",
    title: "AI-Generated Code Performance Analysis",
    description:
      "Exploring the performance, robustness and optimization of AI-generated code by comparing Python and Java implementations.",
    tags: ["Python", "Java", "Generative AI", "Code Analysis"],
  },
];

const experience = [
  {
    period: "3 Months",
    title: "Engineering Intern",
    organization: "Poorit Technology",
    description:
      "Worked on Angular, HTML, CSS and JavaScript-based test creation modules and dashboard features. Collaborated with REST APIs, agile workflows and code review activities.",
    tags: ["Angular", "HTML", "CSS", "JavaScript", "REST APIs"],
  },
  {
    period: "3 Months",
    title: "Engineering Intern",
    organization: "Hindustan Aeronautics Limited (HAL)",
    description:
      "Worked on an HR employee tracking application using ASP.NET and Oracle SQL. Gained practical exposure to enterprise application development and database systems.",
    tags: ["ASP.NET", "Oracle SQL", "Visual Studio", "SQL"],
  },
  {
    period: "2025",
    title: "M.Tech - Artificial Intelligence",
    organization: "Presidency University, Bengaluru",
    description:
      "Completed postgraduate studies in Artificial Intelligence with academic and project experience in Machine Learning, Data Science and AI.",
  },
  {
    period: "2019 - 2023",
    title: "B.E. - Computer Science & Engineering",
    organization: "ACS College of Engineering, Bengaluru",
    description:
      "Completed undergraduate studies in Computer Science and Engineering with a foundation in programming, databases, software development and computer science fundamentals.",
  },
];

function App() {
  return (
    <div className="portfolio-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Meghana G portfolio home">
          <span className="brand-mark">MG</span>
          <span>
            Meghana
            <strong>AI Portfolio</strong>
          </span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          className="button button-secondary"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=gmeghana451@gmail.com&su=Portfolio%20Inquiry"
          target="_blank"
          rel="noreferrer"
        >
          Hire Me
        </a>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy reveal">
            <p className="eyebrow">M.Tech Artificial Intelligence · AI/ML Fresher</p>
            <h1>
              Building polished AI experiences that feel useful, modern, and clear.
            </h1>
            <p className="hero-text">
              I am Meghana G, an AI-focused engineer who enjoys turning machine learning,
              data, and web interfaces into practical portfolio-ready solutions.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore Projects
              </a>
              <a className="button button-secondary" href="#contact">
                Contact Me
              </a>
            </div>

            <div className="hero-metrics">
              <div>
                <strong>2+</strong>
                <span>Internship experiences</span>
              </div>
              <div>
                <strong>4</strong>
                <span>Featured projects</span>
              </div>
              <div>
                <strong>AI/ML</strong>
                <span>Primary career focus</span>
              </div>
            </div>
          </div>

          <div className="hero-visual reveal">
            <div className="visual-card visual-card-glow">
              <img src={heroIllustration} alt="Abstract portfolio illustration" />
            </div>

            <div className="floating-card card-top">
              <span>Currently focused on</span>
              <strong>AI, ML, and product-minded web design</strong>
            </div>

            <div className="floating-card card-bottom">
              <span>Built with</span>
              <strong>Python · React · SQL · Streamlit</strong>
            </div>
          </div>
        </section>

        <section id="about" className="section reveal">
          <div className="section-heading">
            <p className="eyebrow">About Me</p>
            <h2>Strong technical foundation, practical project work, and a growing AI portfolio.</h2>
          </div>

          <div className="about-grid">
            <div className="about-panel">
              <p>
                I am an M.Tech Artificial Intelligence graduate with a background in Computer
                Science and Engineering. I am currently looking for entry-level opportunities in
                AI/ML, Data Science, or software development.
              </p>
              <p>
                Through academic projects and internships, I have gained practical exposure to
                Python, Machine Learning, SQL, web development, and application development.
              </p>
              <p>
                I enjoy learning new technologies, working with data, and building polished
                solutions that feel easy to use and easy to trust.
              </p>
            </div>

            <div className="about-highlights">
              <article>
                <strong>M.Tech</strong>
                <span>Artificial Intelligence</span>
              </article>
              <article>
                <strong>2</strong>
                <span>Internship experiences</span>
              </article>
              <article>
                <strong>AI/ML</strong>
                <span>Career focus</span>
              </article>
            </div>
          </div>
        </section>

        <section id="skills" className="section reveal">
          <div className="section-heading">
            <p className="eyebrow">Skills</p>
            <h2>A versatile toolkit for machine learning, web apps, and data-driven work.</h2>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <article className="skill-card" key={skill.title}>
                <h3>{skill.title}</h3>
                <div className="chip-row">
                  {skill.items.map((item) => (
                    <span className="chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section reveal">
          <div className="section-heading">
            <p className="eyebrow">Featured Work</p>
            <h2>Projects that show both technical depth and clear presentation.</h2>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className={`project-card ${project.featured ? "featured" : ""}`} key={project.title}>
                <p className="project-label">{project.label}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tech-list">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                {project.stats ? (
                  <div className="project-results">
                    {project.stats.map((stat) => (
                      <div key={stat.label}>
                        <strong>{stat.value}</strong>
                        <small>{stat.label}</small>
                      </div>
                    ))}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section reveal">
          <div className="section-heading">
            <p className="eyebrow">Experience & Education</p>
            <h2>A timeline that keeps the story readable and easy to scan.</h2>
          </div>

          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={`${item.title}-${item.period}`}>
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <p className="timeline-date">{item.period}</p>
                  <h3>{item.title}</h3>
                  <h4>{item.organization}</h4>
                  <p>{item.description}</p>

                  {item.tags ? (
                    <div className="tech-list">
                      {item.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-section reveal">
          <div className="section-heading center">
            <p className="eyebrow">Contact</p>
            <h2>Open to internships, entry-level roles, and project collaborations.</h2>
            <p className="contact-copy">
              If you want a candidate who can learn quickly, communicate clearly, and build
              practical AI or web experiences, reach out.
            </p>
          </div>

          <div className="contact-buttons">
            <a
              className="button button-primary"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=gmeghana451@gmail.com&su=Portfolio%20Inquiry"
              target="_blank"
              rel="noreferrer"
            >
              Email Me
            </a>
            <a className="button button-secondary" href="https://www.linkedin.com/in/meghana-g-619a65249/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="button button-secondary" href="https://github.com/gmeghana451" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;