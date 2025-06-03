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
                <h3>Professional Summary</h3>
                <p>
                  Proficient in backend development using Python, Java, and C++, with a strong foundation in 
                  database management, API design, and scalable system architecture. Adept at optimizing 
                  performance and ensuring data integrity in large-scale applications. Seeking a backend 
                  software engineering role to leverage my technical skills and drive impactful solutions.
                </p>
                <p>
                  Currently pursuing a Bachelor of Science in Computer Science with a Minor in Applied Mathematics 
                  at Cornell University, College of Engineering. I have gained valuable experience through internships 
                  at leading tech companies including Google (YouTube), LinkedIn, and Amazon, where I've worked on 
                  machine learning, data engineering, and large-scale system optimization.
                </p>
                <p>
                  Based in Potomac, MD, I'm passionate about creating innovative solutions that make a meaningful 
                  impact. My experience spans from developing ML classifiers that improved video recommendation 
                  accuracy by 25% to building scalable backend services and optimizing data pipelines.
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
              <h3>Google - YouTube Teens</h3>
              <p className="experience-meta">Software Engineering Intern | Jun. - Sep. 2024</p>
              <ul>
                <li>Developed a machine learning classifier using Python and TensorFlow, increasing video recommendation accuracy by 25%</li>
                <li>Engineered scalable backend services with C++ and Python, integrating PostgreSQL databases to manage large-scale data efficiently</li>
                <li>Collaborated with a team of 10 engineers to deploy TensorFlow models into production, boosting overall system performance by 15%</li>
              </ul>
            </div>
            
            <div className="experience-item">
              <h3>LinkedIn - Infrequent Members</h3>
              <p className="experience-meta">Software Engineering Intern | May - Aug. 2024</p>
              <ul>
                <li>Automated data ingestion processes with robust Python scripts, reducing data generation time by 50% and improving accuracy by 40%</li>
                <li>Led migration of legacy dashboard systems to a modern platform using Scala and Azkaban, enhancing user interaction efficiency by 20% for 500+ daily active users</li>
                <li>Designed and maintained data pipelines in Azkaban, ensuring 99.9% data integrity and seamless automation across reporting tools</li>
                <li>Implemented monitoring solutions to proactively resolve data flow issues, minimizing downtime and ensuring consistent data delivery</li>
              </ul>
            </div>
            
            <div className="experience-item">
              <h3>Amazon - Alexa AI NLU</h3>
              <p className="experience-meta">Software Development Engineer Intern | May - Aug. 2023</p>
              <ul>
                <li>Optimized video analysis and comparison frameworks, integrating them into the Alexa production pipeline and enhancing reliability by 30%</li>
                <li>Developed advanced error detection systems using Perceptual Hashing, Root-Mean-Squared Error, Fast Fourier Transform, and MD5 Checksum, increasing defect identification accuracy by 35%</li>
                <li>Utilized Python, Java, and Jupyter Notebook along with Amazon internal tools to streamline development processes</li>
              </ul>
            </div>
            
            <div className="experience-item">
              <h3>Virtu Financial</h3>
              <p className="experience-meta">Quantitative Trading Intern | Jan. 2023</p>
              <ul>
                <li>Delivered the winning capstone project, involving developing trading strategies, analyzing outputs, and presenting synthesized results</li>
                <li>Used linear regressions, lasso regression, ridge regression, simulations, and Python to model the trading strategy</li>
              </ul>
            </div>
          </section>
        )}

        {activeSection === 'projects' && (
          <section id="projects">
            <h2>Projects</h2>
            
            <div className="project-item">
              <div className="project-header">
                <h3>Spacify: Intelligent Inventory Assistant</h3>
                <div className="project-links">
                  <span className="project-meta">Oct. 2024</span>
                </div>
              </div>
              <p className="project-meta">AI-Powered Inventory Management System</p>
              <div className="project-description">
                <p>
                  Designed and implemented an intelligent inventory management system integrating AI-powered 
                  image recognition and secure backend storage to identify and manage household items efficiently.
                </p>
                <div className="project-features">
                  <h4>Key Achievements:</h4>
                  <ul>
                    <li>Optimized system performance by reducing latency and securely handling large-scale user data</li>
                    <li>Enhanced user experience and promoted sustainable living practices</li>
                    <li>Led technical innovation by integrating Pinata and Salesforce technologies</li>
                    <li>Laid groundwork for future marketplace expansion with analytics, reminders, and user insights</li>
                  </ul>
                </div>
                <div className="project-tech">
                  <h4>Technologies Used:</h4>
                  <div className="tech-tags">
                    <span className="tech-tag">Swift</span>
                    <span className="tech-tag">Node.js</span>
                    <span className="tech-tag">Python</span>
                    <span className="tech-tag">Salesforce</span>
                    <span className="tech-tag">AI/ML</span>
                    <span className="tech-tag">Pinata</span>
                  </div>
                </div>
              </div>
            </div>

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

            <div className="project-item">
              <div className="project-header">
                <h3>Wave Portal</h3>
                <div className="project-links">
                  <span className="project-meta">Jul. 2022</span>
                </div>
              </div>
              <p className="project-meta">Decentralized Blockchain Application</p>
              <div className="project-description">
                <p>
                  Created a full-stack decentralized application allowing users to connect their MetaMask wallet 
                  and submit "waves" to the Ethereum Blockchain, demonstrating proficiency in blockchain development.
                </p>
                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    <li>Developed smart contracts in Solidity to store timestamps, public addresses, and messages</li>
                    <li>Ensured secure and immutable data storage on the blockchain</li>
                    <li>Built frontend using React and JavaScript with blockchain integration</li>
                    <li>Integrated with MetaMask wallet for seamless user experience</li>
                  </ul>
                </div>
                <div className="project-tech">
                  <h4>Technologies Used:</h4>
                  <div className="tech-tags">
                    <span className="tech-tag">Solidity</span>
                    <span className="tech-tag">React</span>
                    <span className="tech-tag">JavaScript</span>
                    <span className="tech-tag">HTML</span>
                    <span className="tech-tag">Foundry</span>
                    <span className="tech-tag">Ethereum</span>
                    <span className="tech-tag">Blockchain</span>
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
              <h3>Cornell University, College of Engineering</h3>
              <p className="education-meta">Ithaca, NY</p>
              <p><strong>Bachelor of Science, Computer Science</strong></p>
              <p><strong>Minor: Applied Mathematics</strong></p>
              <h4>Relevant Coursework:</h4>
              <ul className="course-list">
                <li>Discrete Structures and Algorithms</li>
                <li>Computer System Organization and Programming</li>
                <li>Object-Oriented Programming and Data Structures</li>
                <li>Intro to Computing Using Python</li>
                <li>Data Structures and Functional Programming</li>
                <li>Analysis of Algorithms</li>
                <li>Foundations of Artificial Intelligence</li>
                <li>Mathematical Modeling</li>
                <li>Random Signals in Communications and Signal Processing</li>
                <li>Systems Programming</li>
              </ul>
            </div>
          </section>
        )}

        {activeSection === 'skills' && (
          <section id="skills">
            <h2>Skills</h2>
            <div className="skills-categories">
              <div className="skills-category">
                <h3>Programming Languages</h3>
                <ul className="skills-list">
                  <li>Python</li>
                  <li>Java</li>
                  <li>C++</li>
                  <li>JavaScript</li>
                  <li>Scala</li>
                  <li>Solidity</li>
                  <li>Swift</li>
                </ul>
              </div>
              
              <div className="skills-category">
                <h3>Technologies & Frameworks</h3>
                <ul className="skills-list">
                  <li>TensorFlow</li>
                  <li>React</li>
                  <li>Node.js</li>
                  <li>PostgreSQL</li>
                  <li>Azkaban</li>
                  <li>Jupyter Notebook</li>
                  <li>Blockchain/Ethereum</li>
                </ul>
              </div>

              <div className="skills-category">
                <h3>Specializations</h3>
                <ul className="skills-list">
                  <li>Backend Development</li>
                  <li>Machine Learning</li>
                  <li>Data Engineering</li>
                  <li>Database Management</li>
                  <li>API Design</li>
                  <li>System Architecture</li>
                  <li>Performance Optimization</li>
                </ul>
              </div>

              <div className="skills-category">
                <h3>Tools & Platforms</h3>
                <ul className="skills-list">
                  <li>Salesforce</li>
                  <li>Pinata</li>
                  <li>Foundry & Forge</li>
                  <li>Amazon Internal Tools</li>
                  <li>Firebase</li>
                  <li>Git/Version Control</li>
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
