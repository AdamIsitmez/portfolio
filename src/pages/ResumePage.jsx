function downloadResume() {
    window.location.href = "https://drive.google.com/uc?export=download&id=1bveb9Fu-ZmVhrokzApU4YWq8WqMVHwW5";
}

export default function ResumePage() {
    return (
        <div className="content bebas-neue-h1">
            <div className="title">
                <h1>Resume</h1>
            </div>
            <div onClick={downloadResume} className="download">
                <span>Download Resume</span>
            </div>
            <div className="skills">
                <h2>Skills</h2>
                <div className="skills-list">
                    <p>Node.js</p>
                    <p>Express.js</p>
                    <p>React</p>
                    <p>MongoDB</p>
                    <p>MySQL</p>
                    <p>Github</p>
                    <p>HTML and CSS</p>
                </div>
            </div>
        </div>
    )
}