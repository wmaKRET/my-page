import React from "react"

import { BsCheck2Square } from "react-icons/bs"

function Skills() {
    return (
        <section className="skills" id="skills">
            <h5>technical and soft</h5>
            <h2>Skills</h2>
            <div className="skills__content">
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
            </div>
        </section>
    )
}

export default Skills