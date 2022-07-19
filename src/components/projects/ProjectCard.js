import React from "react"

import projectimg from "../../assets/projectimg.png"

function ProjectCard(){
    return (
        <div className="card">
            <h2 className="card__title">project title</h2>
            <img 
                src={projectimg} 
                className="card__img"
                alt="project screenshot" 
            />
            <p className="card__description">Short description</p>
            <div className="card__btns">
                <a className="card__btn">github</a>
                <a className="card__btn">gh pages</a>
            </div>
        </div>
    )
}

export default ProjectCard