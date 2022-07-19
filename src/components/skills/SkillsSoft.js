import React from "react"

import skills from "./skillsData"

import { BsCheck2Square } from "react-icons/bs"

function SkillsSoft() {
    const softSkills = skills.soft

    const skillElements = softSkills.map(item => (
        <div className="skills__item" key={item.id}>
            <BsCheck2Square />
            <h4>{item.skill}</h4>
        </div>
    ))

    return (
        <div className="skills__container">
            <h3>Soft Skills</h3>
            <div className="skills__list">
                {skillElements}
            </div>
        </div>
    )
}

export default SkillsSoft
