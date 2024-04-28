import "./styles.css";

export default function projectCards() {
    return (
        <div className="projects">
            <a href="https://elevate-task-manager-4dc7b75f392c.herokuapp.com/" target="_blank">
                <div className="project-card elevate">
                    <p>Elevate: Task Management App</p>
                </div>
            </a>
            <a href="https://tech-blog-app44-1d0ef2d7753f.herokuapp.com/" target="_blank">
                <div className="project-card tech-blog">
                    <p>Tech Blog</p>
                </div>
            </a>
            <a href="https://adamisitmez.github.io/I-Choose-You/" target="_blank">
                <div className="project-card pokemon">
                    <p>I Choose You: Pokemon Game</p>
                </div>
            </a>
            <a href="https://note-taker-00011-0cf806888b87.herokuapp.com/" target="_blank">
                <div className="project-card note-taker">
                    <p>Note Taker</p>
                </div>
            </a>
            <a href="https://adamisitmez.github.io/weather-app/" target="_blank">
                <div className="project-card weather-app">
                    <p>Weather App</p>
                </div>
            </a>
        </div>


    )
}