import React from "react"

import ProjectCard from "./ProjectCard"

function Projects(){
    return (
        <section className="projects" id="projects">
            <h5>my</h5>
            <h2>Projects</h2>
            <div className="projects__container">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </section>
    )
}

export default Projects