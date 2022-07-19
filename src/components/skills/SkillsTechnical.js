import React from "react"

import { BsCheck2Square } from "react-icons/bs"

function SkillsTechnical() {
    return (
        <div className="skills__container">
            <h3>Technical Skills</h3>
            <div className="skills__list">
                <div className="skills__item">
                    <BsCheck2Square />
                    <h4>React</h4>
                </div>
                <div className="skills__item">
                    <BsCheck2Square />
                    <h4>Javascript</h4>
                </div>
                <div className="skills__item">
                    <BsCheck2Square />
                    <h4>Sass</h4>
                </div>
                <div className="skills__item">
                    <BsCheck2Square />
                    <h4>CSS</h4>
                </div>
                <div className="skills__item">
                    <BsCheck2Square />
                    <h4>HTML</h4>
                </div>
                <div className="skills__item">
                    <BsCheck2Square />
                    <h4>Git</h4>
                </div>
            </div>
        </div>
    )
}

export default SkillsTechnical