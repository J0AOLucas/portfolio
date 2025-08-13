import styles from './App.module.css';
import Header from './components/Header/Header';
import ProjectCard from './components/ProjectCard/ProjectCard';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.home}>
        <div className={styles.top_page}>
          <div className={styles.title}>
            <h1 className={styles.title_text}>Hi,<br />
                My name is <br />
              <span className={styles.name}>João Lucas</span><br />
              I build the future
            </h1>
          </div>
          <img src="./src/assets/images/jl_image.JPG" alt="Joao Lucas" />
        </div>
        <div className={styles.tech_stack}>
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
          <div className={styles.projects}>
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
        </div>
      </div>
    </div>
  );
}

export default App;
