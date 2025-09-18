import { useState } from 'react';
import styles from './Header.module.css';
import GitLogo from '../../assets/icons/github.svg';
import LinkedinLogo from '../../assets/icons/linkedin.svg';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const headerHeight = 80;
            const elementPosition = element.offsetTop - headerHeight;
            
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
        setIsMenuOpen(false);
    };

    return (
        <header className={styles.header}>
            <nav className={styles.nav_bar}>
                <div className={styles.logo}>
                    <span>João Lucas</span>
                </div>
                
                <ul className={`${styles.nav_list} ${isMenuOpen ? styles.nav_list_open : ''}`}>
                    <li><button onClick={() => scrollToSection('home')}>Home</button></li>
                    <li><button onClick={() => scrollToSection('about')}>About</button></li>
                    <li><button onClick={() => scrollToSection('tech')}>Tech Stack</button></li>
                    <li><button onClick={() => scrollToSection('career')}>Career</button></li>
                    <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
                    <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
                </ul>
                
                <div className={styles.social_media}>
                    <a href="https://www.linkedin.com/in/joaolucasbyui/" target="_blank" rel="noopener noreferrer">
                        <img src={LinkedinLogo} alt="Linkedin Logo" />
                    </a>
                    <a href="https://github.com/J0AOLucas" target="_blank" rel="noopener noreferrer">
                        <img src={GitLogo} alt="GitHub logo" />
                    </a>
                </div>
                
                <button 
                    className={`${styles.menu_toggle} ${isMenuOpen ? styles.menu_toggle_open : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </nav>
        </header>
    )
}

export default Header;