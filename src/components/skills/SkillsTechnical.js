import React from "react"

import { BsCheck2Square } from "react-icons/bs"

function SkillsTechnical() {
    const technicalSkillsArray = [
        'React',
        'Javascript',
        'Sass',
        'CSS',
        'HTML',
        'Git'
    ]

    const skillElements = technicalSkillsArray.map(skill => (
        <div className="skills__item">
            <BsCheck2Square />
            <h4>{skill}</h4>
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