import { useState } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('about')

  return (
    <div className="app-container">
      <header>
        <h1>Joycelyne Addo</h1>
        <nav>
          <ul>
            <li className={activeSection === 'about' ? 'active' : ''}>
              <button onClick={() => setActiveSection('about')}>About</button>
            </li>
            <li className={activeSection === 'experience' ? 'active' : ''}>
              <button onClick={() => setActiveSection('experience')}>Experience</button>
            </li>
            <li className={activeSection === 'projects' ? 'active' : ''}>
              <button onClick={() => setActiveSection('projects')}>Projects</button>
            </li>
            <li className={activeSection === 'education' ? 'active' : ''}>
              <button onClick={() => setActiveSection('education')}>Education</button>
            </li>
            <li className={activeSection === 'skills' ? 'active' : ''}>
              <button onClick={() => setActiveSection('skills')}>Skills</button>
            </li>
            <li className={activeSection === 'contact' ? 'active' : ''}>
              <button onClick={() => setActiveSection('contact')}>Contact</button>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        {activeSection === 'about' && (
          <section id="about">
            <h2>About Me</h2>
            <div className="profile-header">
              <div className="profile-text">
                <p>
                  Hello! I'm Joycelyne Addo, a tech professional with experience at leading companies 
                  including Google (YouTube), LinkedIn, and Amazon. I'm passionate about technology, 
                  data analysis, and creating impactful solutions.
                </p>
                <p>
                  Currently based in New York, I'm always interested in exploring innovative tech 
                  initiatives. With a strong educational background from Cornell University and 
                  experience in various tech roles, I bring a diverse skill set to any project.
                </p>
                <p>
                  For more detailed information about my professional background, 
                  please visit my <a href="https://www.linkedin.com/in/joycelyne-addo/" target="_blank" rel="noopener noreferrer">LinkedIn profile</a>.
                </p>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'experience' && (
          <section id="experience">
            <h2>Professional Experience</h2>
            
            <div className="experience-item">
              <h3>Google - YouTube</h3>
              <p className="experience-meta">Previous Role</p>
              <p>
                Contributed to YouTube's technology initiatives, applying my technical skills and 
                knowledge to enhance platform capabilities and user experience.
              </p>
            </div>
            
            <div className="experience-item">
              <h3>LinkedIn</h3>
              <p className="experience-meta">Previous Role</p>
              <p>
                Worked with LinkedIn's technology team, focusing on professional networking features 
                and data-driven solutions.
              </p>
            </div>
            
            <div className="experience-item">
              <h3>Amazon</h3>
              <p className="experience-meta">Previous Role</p>
              <p>
                Applied my technical expertise to contribute to Amazon's innovative technology solutions.
              </p>
            </div>
            
            <div className="experience-item">
              <h3>Cornell Blockchain</h3>
              <p>
                Participated in Cornell's blockchain initiatives, exploring cutting-edge technology 
                in the distributed ledger and cryptocurrency space.
              </p>
            </div>
            
            <div className="experience-item">
              <h3>Two Sigma</h3>
              <p className="experience-meta">New Seekers Summit Participant</p>
              <p>
                Participated in Two Sigma's New Seekers Summit, attending workshops and networking events 
                with data scientists and quantitative researchers to understand different career paths 
                in the quantitative research space.
              </p>
            </div>
          </section>
        )}

        {activeSection === 'projects' && (
          <section id="projects">
            <h2>Projects</h2>
            
            <div className="project-item">
              <div className="project-header">
                <h3>Guess That Function</h3>
                <div className="project-links">
                  <a href="https://guess-that-function.web.app/" target="_blank" rel="noopener noreferrer" className="project-link live-demo">
                    🚀 Live Demo
                  </a>
                </div>
              </div>
              <p className="project-meta">Interactive Mathematical Game</p>
              <div className="project-description">
                <p>
                  An engaging web-based mathematical game that challenges players to guess mathematical functions 
                  based on input-output test cases. Players analyze patterns in the data to deduce the underlying 
                  mathematical relationship.
                </p>
                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    <li>Interactive function guessing gameplay with real-time feedback</li>
                    <li>Support for various mathematical operations (basic arithmetic, powers, absolute values)</li>
                    <li>Hint system to guide players when they're stuck</li>
                    <li>Clean, modern UI with dark mode support</li>
                    <li>Statistics tracking for player performance</li>
                    <li>Comprehensive function format guide for user assistance</li>
                  </ul>
                </div>
                <div className="project-tech">
                  <h4>Technologies Used:</h4>
                  <div className="tech-tags">
                    <span className="tech-tag">JavaScript</span>
                    <span className="tech-tag">HTML/CSS</span>
                    <span className="tech-tag">Web Development</span>
                    <span className="tech-tag">Mathematical Logic</span>
                    <span className="tech-tag">Firebase Hosting</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'education' && (
          <section id="education">
            <h2>Education</h2>
            
            <div className="education-item">
              <h3>Cornell University</h3>
              <p className="education-meta">2021 - 2025</p>
              <p>
                Pursuing education in computer science and related fields, with a focus on 
                technology and data analysis.
              </p>
              <h4>Relevant Coursework:</h4>
              <ul className="course-list">
                <li>Data Structures and Algorithms (CS 2110)</li>
                <li>Discrete Structures (CS 2800)</li>
                <li>Intro to Machine Learning (CS 4780)</li>
              </ul>
            </div>
            
            <div className="education-item">
              <h3>High School Advanced Placement Courses</h3>
              <p>
                Completed numerous AP courses including:
              </p>
              <ul className="course-list">
                <li>AP Computer Science A</li>
                <li>AP Computer Science Principles</li>
                <li>AP Calculus BC</li>
                <li>AP Statistics</li>
                <li>AP Physics 1</li>
                <li>And many more</li>
              </ul>
            </div>
          </section>
        )}

        {activeSection === 'skills' && (
          <section id="skills">
            <h2>Skills</h2>
            <div className="skills-categories">
              <div className="skills-category">
                <h3>Technical Skills</h3>
                <ul className="skills-list">
                  <li>Data Analysis</li>
                  <li>Computer Science</li>
                  <li>Blockchain Technology</li>
                  <li>Quantitative Research</li>
                  <li>Software Development</li>
                </ul>
              </div>
              
              <div className="skills-category">
                <h3>Professional Skills</h3>
                <ul className="skills-list">
                  <li>Problem Solving</li>
                  <li>Team Collaboration</li>
                  <li>Communication</li>
                  <li>Leadership</li>
                  <li>Project Management</li>
                </ul>
              </div>
            </div>
            
            <div className="volunteer-section">
              <h3>Volunteer Experience</h3>
              <div className="volunteer-item">
                <h4>Girl Scout Ambassador</h4>
                <p>Girl Scouts of the USA (2014-2020)</p>
                <p>
                  Helped children in impoverished areas by donating resources (food/clothing drives, 
                  donating books, etc). Taught young girls about leadership, taking initiative, and 
                  girl power. Strengthened troop bonds through team bonding exercises to learn about 
                  female leaders and to develop leadership skills.
                </p>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'contact' && (
          <section id="contact">
            <h2>Contact Me</h2>
            <p>
              I'm always open to discussing new opportunities, technology initiatives, 
              and innovative projects. Feel free to reach out to me through my 
              <a href="https://www.linkedin.com/in/joycelyne-addo/" target="_blank" rel="noopener noreferrer"> LinkedIn profile</a>.
            </p>
            <div className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Your Email" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" placeholder="Your Message" rows={5}></textarea>
              </div>
              <button className="submit-btn">Send Message</button>
            </div>
          </section>
        )}
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Joycelyne Addo. All rights reserved.</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/joycelyne-addo/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </footer>
    </div>
  )
}

export default App
