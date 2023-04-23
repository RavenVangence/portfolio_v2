import { FaGithub, FaRegEye } from "react-icons/fa"

type projectData = {
    projectName: string,
    imgUrl: string,
    liveUrl: string,
    githubUrl: string
}; 

function Project(data: projectData) {

    const {projectName,imgUrl, liveUrl, githubUrl} = data;

    return (
        <div className="project-ind-container">
            <h2>{projectName}</h2>
            <figure>
                <img src={imgUrl} alt={projectName} className="project-img"/>
            </figure>
            <div>
                <button className="project-btn">
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer"><FaGithub className="gl-icons"/></a>
                </button>
                <button className="project-btn">
                    <a href={liveUrl} target="_blank" rel="noopener noreferrer"><FaRegEye className="gl-icons"/></a>
                </button>
                
            </div>
        </div>
    )
}

export default Project;