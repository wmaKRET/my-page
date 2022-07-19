import React from "react"

import { BsCheck2Square } from "react-icons/bs"

function SkillsSoft() {
    const softSkillsArray = [
        'Communication',
        'Teamwork',
        'Problem solving',
        'Critical thinking',
        'Organizational skills',
        'Time management'
    ]

    const skillElements = softSkillsArray.map(skill => (
        <div className="skills__item">
            <BsCheck2Square />
            <h4>{skill}</h4>
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
