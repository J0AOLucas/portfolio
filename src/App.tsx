import styles from './App.module.css';
import Header from './components/Header/Header';
import ProjectCard from './components/ProjectCard/ProjectCard';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.home}>
        <div id="home" className={styles.top_page}>
          <div className={styles.title}>
            <h1 className={styles.title_text}>Hi,<br />
                My name is <br />
              <span className={styles.name}>João Lucas</span><br />
              I build the future
            </h1>
          </div>
          <img src="./src/assets/images/jl_image.JPG" alt="Joao Lucas" />
        </div>
        <div id="tech" className={styles.tech_stack}>
          <h1>My Tech Stack</h1>
          <h2>Technologies I've been working with recently</h2>
          <div className={styles.tech_logos}>
            <img src="./src/assets/icons/html-logo.svg" alt="html logo" />
            <img src="./src/assets/icons/css-logo.svg" alt="css logo" />
            <img src="./src/assets/icons/js-logo.svg" alt="js logo" />
            <img src="./src/assets/icons/react-logo.svg" alt="react logo" />
            <img src="./src/assets/icons/ruby-logo.svg" alt="ruby logo" />
            <img src="./src/assets/icons/python-logo.svg" alt="python logo" />
            <div>
              <img src="./src/assets/icons/tailwind-logo.svg" alt="tailwind logo" />
              <img src="./src/assets/icons/git-logo.svg" alt="git logo" />
              <img src="./src/assets/icons/spring-logo.svg" alt="spring logo" />
              <img src="./src/assets/icons/postgres-logo.svg" alt="postgres logo" />
              <img src="./src/assets/icons/github-logo.svg" alt="github logo" />
            </div>
          </div>
          <div id="about" className={styles.tech_stack}>
            <h1>About me</h1>
            <div className={styles.about_me_text}>
              <p>I'm João Lucas, a Computer Science student at Brigham Young University - Idaho, passionate about solving real-world problems through technology.</p>
              
              <p>I'm currently working as a Web Analytics Programmer at BYU-I, where I combine technical skills and analytical thinking to improve digital experiences and data-driven decisions.</p>
              
              <p>Previously, I worked as a Software Development Supervisor at Ikli Tecnologia in Brazil, where I led a team of four developers and was responsible for creating, maintaining, and integrating APIs using Ruby. I also coordinated professional development for the team and drove innovation within the company's systems.</p>
              
              <p>I hold a degree in Data Science from Unipê, completed with a 100% scholarship. My background includes projects in data analysis, visualization, and machine learning—both academic and real-world.</p>
              
              <p>I'm known for being proactive and independent — I don't wait to be told what to do. I pursue learning daily and build personal projects focused on solving real pain points, not just practice apps. Outside of work and studies, I enjoy learning new languages, playing soccer, hiking, and playing musical instruments.</p>
              
              <p>Looking ahead, my goal is to join a company where I can contribute as much as possible, invest in my career, and grow within the organization for many years, always staying at the forefront of technology.</p>
            </div>
          </div>
          <div id="career" className={styles.career}>
            <h1>Career Timeline</h1>
            <h2>My professional journey</h2>
            <div className={styles.timeline}>
              <div className={styles.timeline_item}>
                <div className={styles.timeline_content}>
                  <div className={styles.timeline_date}>April 2025 - Present (6 months)</div>
                  <div className={styles.timeline_company}>Brigham Young University - Idaho</div>
                  <div className={styles.timeline_position}>Web Analytics Integration Programmer</div>
                  <div className={styles.timeline_location}>Idaho, United States</div>
                  <div className={styles.timeline_description}>
                    <p>Developing web analytics integration solutions, combining technical skills with analytical thinking to improve digital experiences and data-driven decisions.</p>
                    <ul>
                      <li>Created a Node.js application with API integration to connect with Element451 platform</li>
                      <li>Built HTML and CSS interfaces to display data for university directors and other clients</li>
                      <li>Facilitated data access and streamlined reporting processes for improved efficiency</li>
                      <li>Reduced time-to-insight for stakeholders through automated data visualization</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={styles.timeline_item}>
                <div className={styles.timeline_content}>
                  <div className={styles.timeline_date}>January 2024 - February 2025 (1 year 2 months)</div>
                  <div className={styles.timeline_company}>Ikli Tecnologia</div>
                  <div className={styles.timeline_position}>Software Engineering Manager</div>
                  <div className={styles.timeline_location}>João Pessoa, Paraíba, Brazil</div>
                  <div className={styles.timeline_description}>
                    <p>Led a software team that delivered a kiosk platform deployed in 500+ stores nationwide, serving over 1M users.</p>
                    <ul>
                      <li>Introduced new payment solutions, increasing transaction volume by 25% and contributing 72% of total revenue</li>
                      <li>Championed best engineering practices (CI/CD, code reviews), reducing production incidents by 20%</li>
                      <li>Contributed to core backend and frontend codebase using Ruby on Rails and React</li>
                      <li>Led strategic initiatives and cross-functional team collaboration</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={styles.timeline_item}>
                <div className={styles.timeline_content}>
                  <div className={styles.timeline_date}>August 2023 - December 2023 (5 months)</div>
                  <div className={styles.timeline_company}>Ikli Tecnologia</div>
                  <div className={styles.timeline_position}>Software Engineering Supervisor</div>
                  <div className={styles.timeline_location}>João Pessoa, Paraíba, Brazil</div>
                  <div className={styles.timeline_description}>
                    <p>Supervised software engineers, maintained internal tools, and developed web features using Ruby and React.</p>
                    <ul>
                      <li>Built dashboards to monitor engineering KPIs and team performance, enabling real-time bottleneck resolution</li>
                      <li>Implemented Agile/Scrum methodologies, achieving 95% tracking accuracy on deliverables</li>
                      <li>Maintained and evolved internal systems and tools</li>
                      <li>Provided technical guidance and mentorship to team members</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={styles.timeline_item}>
                <div className={styles.timeline_content}>
                  <div className={styles.timeline_date}>September 2022 - December 2022 (4 months)</div>
                  <div className={styles.timeline_company}>Ikli Tecnologia</div>
                  <div className={styles.timeline_position}>Data Analyst</div>
                  <div className={styles.timeline_location}>João Pessoa, Paraíba, Brazil</div>
                  <div className={styles.timeline_description}>
                    <p>Extracted and cleaned data using SQL, Python, and Power BI, generating actionable business insights.</p>
                    <ul>
                      <li>Collaborated with marketing, finance, and operations to build tailored dashboards and visual reports</li>
                      <li>Ensured data privacy compliance with LGPD and GDPR standards</li>
                      <li>Automated reporting processes for improved efficiency and accuracy</li>
                      <li>Generated high-impact insights to support strategic decision-making</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={styles.timeline_item}>
                <div className={styles.timeline_content}>
                  <div className={styles.timeline_date}>April 2022 - December 2022 (9 months)</div>
                  <div className={styles.timeline_company}>Ikli Tecnologia</div>
                  <div className={styles.timeline_position}>No-Code Developer</div>
                  <div className={styles.timeline_location}>João Pessoa, Paraíba, Brazil</div>
                  <div className={styles.timeline_description}>
                    <p>Built internal platforms using Bubble and no-code tools, improving workflows and system automation.</p>
                    <ul>
                      <li>Launched a chatbot that automated ticket resolution, reducing support volume by 37%</li>
                      <li>Deployed an online credit system for service purchases, increasing revenue by 10% over in-person channels</li>
                      <li>Improved internal workflows through no-code platform development</li>
                      <li>Enhanced system automation and operational efficiency</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={styles.timeline_item}>
                <div className={styles.timeline_content}>
                  <div className={styles.timeline_date}>March 2022 - December 2022 (10 months)</div>
                  <div className={styles.timeline_company}>60 Minutes Laundry</div>
                  <div className={styles.timeline_position}>Junior No-Code Developer</div>
                  <div className={styles.timeline_location}>João Pessoa, Paraíba, Brazil</div>
                  <div className={styles.timeline_description}>
                    <p>Creating systems and websites aimed at 60 Minutes Laundry customers using the Bubble.IO tool.</p>
                    <ul>
                      <li>Connections with payment API (Pay)</li>
                      <li>Integration with the company's own system</li>
                      <li>Developing customized solutions for customers</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={styles.timeline_item}>
                <div className={styles.timeline_content}>
                  <div className={styles.timeline_date}>December 2021 - February 2022 (3 months)</div>
                  <div className={styles.timeline_company}>Ikli Tecnologia</div>
                  <div className={styles.timeline_position}>Help Desk Technician</div>
                  <div className={styles.timeline_location}>João Pessoa, Paraíba, Brazil</div>
                  <div className={styles.timeline_description}>
                    <p>Resolved software/hardware issues, maintained SLAs, and improved support documentation.</p>
                    <ul>
                      <li>Developed training materials in English and Spanish, improving foreign-language customer service</li>
                      <li>Implemented internal solutions that cut cross-departmental support tasks by 40-80%</li>
                      <li>Maintained service level agreements and improved support processes</li>
                      <li>Provided technical support for software and hardware issues</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="projects" className={styles.projects}>
            <h1>Projects</h1>
            <h2>Things I've built so far</h2>
            <div className={styles.project_cards}>
              <ProjectCard title="Water System" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos." image="./src/assets/images/project-background.png" link="https://www.google.com" live_link="https://www.google.com" technologies="React, Tailwind, TypeScript" />
              <ProjectCard title="Water System" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos." image="./src/assets/images/project-background.png" link="https://www.google.com" live_link="https://www.google.com" technologies="React, Tailwind, TypeScript" />
              <ProjectCard title="Water System" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos." image="./src/assets/images/project-background.png" link="https://www.google.com" live_link="https://www.google.com" technologies="React, Tailwind, TypeScript" />
              <ProjectCard title="Water System" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos." image="./src/assets/images/project-background.png" link="https://www.google.com" live_link="https://www.google.com" technologies="React, Tailwind, TypeScript" />
              <ProjectCard title="Water System" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos." image="./src/assets/images/project-background.png" link="https://www.google.com" live_link="https://www.google.com" technologies="React, Tailwind, TypeScript" />
              <ProjectCard title="Water System" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos." image="./src/assets/images/project-background.png" link="https://www.google.com" live_link="https://www.google.com" technologies="React, Tailwind, TypeScript" />
            </div>
          </div>
          <div id="contact" className={styles.contact}>
            <h1>Get In Touch</h1>
            <h2>Let's work together</h2>
            <div className={styles.contact_content}>
              <p>lucasrpg.silva@gmail.com</p>
              <p>(208) 948-7861</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
