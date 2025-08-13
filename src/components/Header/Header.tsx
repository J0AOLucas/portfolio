import styles from './Header.module.css';
import GitLogo from '../../assets/icons/github.svg';
import LinkedinLogo from '../../assets/icons/linkedin.svg';

function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav_bar}>
                <ul className={styles.nav_list}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Tech Stack</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
                <div className={styles.social_media}>
                    <a href="https://www.linkedin.com/in/joaolucasbyui/" target="_blank"><img src={LinkedinLogo} alt="Linkedin Logo" /></a>
                    <a href="https://github.com/J0AOLucas" target="_blank"><img src={GitLogo} alt="GitHub logo" /></a>
                </div>
            </nav>
        </header>
    )
}

export default Header;