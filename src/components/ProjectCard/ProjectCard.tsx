import styles from './ProjectCard.module.css';

interface CardProps {
    title: string;
    description: string;
    image: string;
    link: string;
    technologies: string;
    live_link: string;
}

function ProjectCard({ title, description, image, link, live_link, technologies }: CardProps) {
    return (
        <div className={styles.project_card}>
            <div className={styles.project_card_image}>
                <img src={image} alt="Project Background" />
            </div>
            <div className={styles.project_card_content}>
                <h4>{title}</h4>
                <p>{description}</p>
                <h5>Technologies: <span>{technologies}</span></h5>
                <div className={styles.project_card_link}>
                    <div>
                        <img src={new URL('../../assets/icons/chain.svg', import.meta.url).toString()} alt="Link Icon" />
                        <a href={live_link} target="_blank" rel="noopener noreferrer">Live Preview</a>
                    </div>
                    <div>
                        <img src={new URL('../../assets/icons/github-small.svg', import.meta.url).toString()} alt="Link Icon" />
                        <a href={link} target="_blank" rel="noopener noreferrer">View Code</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;