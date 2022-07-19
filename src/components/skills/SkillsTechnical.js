import React from "react"

import skills from "./skillsData"

import { BsCheck2Square } from "react-icons/bs"

function SkillsTechnical() {
    const technicalSkills = skills.technical

    const skillElements = technicalSkills.map(item => (
        <div className="skills__item" key={item.id}>
            <BsCheck2Square />
            <h4>{item.skill}</h4>
        </div>
    ))

    return (
        <div className="skills__container">
            <h3>Technical Skills</h3>
            <div className="skills__list">
                {skillElements}
            </div>
        </div>
    )
}

export default SkillsTechnical