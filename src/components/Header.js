import React from "react"

import MyPhoto from "../assets/me.png"
import CV from "../assets/cv.pdf"

function Header() {
    return (
        <section className="header">
            <h5>Hello! My name is</h5>
            <h2>Wojciech Kret</h2>
            <h5 className="h2margin">and currently I am looking for a job as a Frontend Developer</h5>
            <div className="header__content">
                <div className="header__img">
                    <img 
                            className="header__img-photo" 
                            src={MyPhoto} 
                            alt="my photo" 
                    />
                    <div className="header__img-shadowtop"></div>
                    <div className="header__img-shadowbottom"></div>
                </div>
                <div className="header__panel">
                    <a className="btn btn-primary" href={CV}>CV</a>
                    <a className="btn" href="#contact">Contact Me</a>
                </div>
            </div>
        </section>
    )
}

export default Header