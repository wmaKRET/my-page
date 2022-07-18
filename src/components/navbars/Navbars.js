import React, { useState, useEffect, useContext } from "react"

import NavIcon from "./NavIcon"
import { Context } from "../../Context"

import { FaLinkedin, FaGithub, FaArrowAltCircleUp, FaArrowAltCircleDown } from "react-icons/fa"

function Navbar() {
    const [pageHasLoaded, setPageIsLoaded] = useState(false)
    const { sections, activeNavIcon, handleNavIconChange } = useContext(Context)

    useEffect(() => {
        setTimeout(() => {
            setPageIsLoaded(true)
        }, 1)
    }, [])

    function animateSidePanels(panel) {
        return pageHasLoaded
            ? `navbar__${panel} load`
            : `navbar__${panel}`
    }

    const iconElements = sections.map(section => (
        <NavIcon key={section.id} section={section}/>
    ))

    return (
        <nav className="navbar">
            <div className="navbar__panel">
                {iconElements}
            </div>
            <div className={animateSidePanels('socials')}>
                <a
                    href="https://www.linkedin.com/in/wojciech-kret/"
                    target="_blank"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://github.com/wmaKRET"
                    target="_blank"
                >
                    <FaGithub />
                </a>
            </div>
            <div className={animateSidePanels('scroll')}>
                <a
                    href=""
                >
                    <FaArrowAltCircleUp />
                </a>
                <a
                    href=""
                >
                    <FaArrowAltCircleDown />
                </a>
            </div>
        </nav>
    )
}

export default Navbar