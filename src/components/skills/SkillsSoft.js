import React from "react"

import { BsCheck2Square } from "react-icons/bs"

function SkillsSoft() {
    return (
        <div className="skills__container">
            <h3>Soft Skills</h3>
            <div className="skills__list">
                <div className="skills__item">
                    <BsCheck2Square />
                    <h4>Communication</h4>
                </div>
                <div className="skills__item">
                    <BsCheck2Square />
                    <h4>Teamwork</h4>
                </div>
                <div className="skills__item">
                    <BsCheck2Square />
                    <h4>Problem solving</h4>
                </div>
                <div className="skills__item">
                    <BsCheck2Square />
                    <h4>Critical thinking</h4>
                </div>
                <div className="skills__item">
                    <BsCheck2Square />
                    <h4>Organizational skills</h4>
                </div>
                <div className="skills__item">
                    <BsCheck2Square />
                    <h4>Time management</h4>
                </div>
            </div>
        </div>
    )
}

export default SkillsSoft
