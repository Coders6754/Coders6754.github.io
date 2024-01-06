
import greenParadise from "./projectImages/GreenParadise.png"
import cycle from "./projectImages/Cycle.png"
import skincare from "./projectImages/Skinstore.png"
import "./Project.css"


const data = [
    {
        img: cycle,
        projectTitle: "Cyclestore",
        techStack: ["React", "Redux", "CSS", "Firebase", "RazorPay"],
        description: " Electronic-Cycle-clone is a fully functional e-commerce website designed for Cycle enthusiasts. It offers a wide variety of Cycles, making it easy for users to browse, select, and purchase their favorite Cycles online.",
        githubLink: "https://github.com/Coders6754/Electronic_Cycle_Collab.git",
        appLink: "https://phenomenal-crisp-d9f0f8.netlify.app/"
    },
    {
        img: greenParadise,
        projectTitle: "Green Paradise",
        techStack: ["HTML", "CSS", "JavaScript", "Firebase", "RazorPay"],
        description: "Green Paradise is a fully functional e-commerce website designed for plant enthusiasts. It offers a wide variety of plants and gardening supplies, making it easy for users to browse, select, and purchase their favorite plants online.",
        githubLink: "https://github.com/Coders6754/Green-Paradise.git",
        appLink: "https://enchanting-klepon-de18e6.netlify.app/"
    },
    {
        img: skincare,
        projectTitle: "Skinstore",
        techStack: ["HTML", "CSS", "JavaScript",],
        description: "SkinStore is an online marketplace that offers a vast catalog of beauty products comprising skincare, haircare, self-care, makeup, and body categories.",
        githubLink: "https://github.com/Coders6754/Skinstore-clone.git",
        appLink: "https://high-fruit.netlify.app//"
    },
    {
        img: cycle,
        projectTitle: "Cyclestore",
        techStack: ["React", "Redux", "CSS", "Firebase", "RazorPay"],
        description: " Electronic-Cycle-clone is a fully functional e-commerce website designed for Cycle enthusiasts. It offers a wide variety of Cycles, making it easy for users to browse, select, and purchase their favorite Cycles online.",
        githubLink: "https://github.com/Coders6754/Electronic_Cycle_Collab.git",
        appLink: "https://phenomenal-crisp-d9f0f8.netlify.app/"
    },
]




function Projects() {
    return (
        <div id='projects'>
            <h1>Projects</h1>

            {
                data.map((e, index) => {
                    return (

                        index % 2 == 0 ? (
                            <div className="project-card proCard1" key={index}>
                                <div className='projectImg'>
                                    <img src={e.img} alt="" />
                                </div>
                                <div className='projectDetails'>
                                    <h2 className="project-title">{index + 1 + ". " + e.projectTitle}</h2>
                                    <div className="project-tech-stack">
                                        {
                                            e.techStack.map((ele, ind) => {
                                                return (
                                                    <span key={ind}>{ele}</span>
                                                )
                                            })
                                        }
                                    </div>
                                    <p className="project-description">{e.description}</p>
                                    <div className='projectButtons'>
                                        <a href={e.githubLink}className="project-github-link">Github</a>
                                        <a href={e.appLink} className="project-deployed-link">Live</a>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="project-card proCard2" key={index}>
                                <div className='projectDetails'>
                                    <h2 className="project-title">{index + 1 + ". " + e.projectTitle}</h2>
                                    <div className="project-tech-stack">
                                        {
                                            e.techStack.map((ele, ind) => {
                                                return (
                                                    <span key={ind}>{ele}</span>
                                                )
                                            })
                                        }
                                    </div>
                                    <p className="project-description">{e.description}</p>
                                    <div className='projectButtons'>
                                        <a href={e.githubLink} className="project-github-link">Github</a>
                                        <a href={e.appLink} className="project-deployed-link"> Live </a>
                                    </div>
                                </div>
                                <div className='projectImg'>
                                    <img src={e.img} alt="" />
                                </div>
                            </div>
                        )
                    )
                })
            }
        </div>
    )
}

export default Projects