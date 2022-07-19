import React, { useState, useEffect, useContext } from "react"

import NavIcon from "./NavIcon"
import { Context } from "../../Context"

import { FaLinkedin, FaGithub, FaArrowAltCircleUp, FaArrowAltCircleDown } from "react-icons/fa"

function Navbar() {
    const [animateOnMount, setAnimateOnMount] = useState(false)
    const [prevSection, setPrevSection] = useState('#')
    const [currentSection, setCurrentSection] = useState('#')
    const [nextSection, setNextSection] = useState('#about')
    const { sections, activeNavIcon, handleNavIconChange } = useContext(Context)

    useEffect(() => {
        setTimeout(() => {
            setAnimateOnMount(true)
        }, 1)
        setCurrentSection(activeNavIcon)
    }, [])

    useEffect(() => {
        setCurrentSection(activeNavIcon)
    }, [activeNavIcon])

    useEffect(() => {
        const activeSection = sections.filter(section => section.url === currentSection)
        const activeSectionID = activeSection.length > 0
            ? activeSection[0].id
            : 0
        if (activeSectionID === 0) setPrevSection('#')
        else setPrevSection(sections[activeSectionID - 1].url)
        if (activeSectionID === 0) setNextSection('#about')
        else if (activeSectionID === 4) setNextSection('#contact')
        else setNextSection(sections[activeSectionID + 1].url)
    }, [currentSection])

    function animateSidePanels(panel) {
        return animateOnMount
            ? `navbar__${panel} load`
            : `navbar__${panel}`
    }

    const iconElements = sections.map(section => (
        <NavIcon key={section.id} section={section} />
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
                    href={prevSection}
                    onClick={() => handleNavIconChange(prevSection)}
                >
                    <FaArrowAltCircleUp />
                </a>
                <a
                    href={nextSection}
                    onClick={() => handleNavIconChange(nextSection)}
                >
                    <FaArrowAltCircleDown />
                </a>
            </div>
        </nav>
    )
}

export default Navbar