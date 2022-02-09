import githubIcon from '../github.svg'
import './styles/Footer.css'

const Footer = () => (
    <footer>
        <div className="social-media">
            <a href="https://github.com/pablofernandez99" target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} width="100%" alt="GitHub Icon"/>
            </a>
        </div>
        <p className="by"><a href="https://github.com/pablofernandez99" target="_blank" rel="noopener noreferrer">By Pablo Fernández 2021</a></p>
    </footer>
)

export default Footer