import React from "react"

import ProjectCard from "./ProjectCard"

import projectsData from "./projectsData"

function Projects() {
    const projectElements = projectsData.map(project => (
        <ProjectCard key={project.id} project={project} />
    ))
    return (
        <section className="projects" id="projects">
            <h5>my</h5>
            <h2>mini-Projects</h2>
            <div className="projects__container">
                {projectElements}
            </div>
        </section>
    )
}

export default Projects