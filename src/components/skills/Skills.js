import React from "react"

import SkillsTechnical from "./SkillsTechnical"
import SkillsSoft from "./SkillsSoft"

function Skills() {
    return (
        <section className="skills" id="skills">
            <h5>technical and soft</h5>
            <h2>Skills</h2>
            <div className="skills__content">
                <SkillsTechnical />
                <SkillsSoft />
            </div>
        </section>
    )
}

export default Skills