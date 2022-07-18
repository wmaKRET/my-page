import React, { useState } from "react"

import { BsPersonCircle, BsListCheck, BsFolderCheck } from "react-icons/bs"
import { FaHome } from "react-icons/fa"
import { FiMail } from "react-icons/fi"

function Navbar(){
    const [activeNavIcon, setActiveNavIcon] = useState('#')

    function handleNavIconChange(value) {
        setActiveNavIcon(value)
    }

    return (
        <nav className="navbar">
            <a
                href="#"
                className={activeNavIcon === '#' 
                            ? "navbar__item active"
                            : "navbar__item"}
                onClick={() => handleNavIconChange("#")}
            >
                <FaHome size={28}/>
            </a>
            <a
                href="#about"
                className={activeNavIcon === '#about' 
                            ? "navbar__item active"
                            : "navbar__item"}
                onClick={() => handleNavIconChange('#about')}
            >
                <BsPersonCircle size={28}/>
            </a>
            <a
                href="#skills"
                className={activeNavIcon === '#skills' 
                            ? "navbar__item active"
                            : "navbar__item"}
                onClick={() => handleNavIconChange(`#skills`)}
            >
                <BsListCheck size={28}/>
            </a>
            <a
                href="#projects"
                className={activeNavIcon === '#projects' 
                            ? "navbar__item active"
                            : "navbar__item"}
                onClick={() => handleNavIconChange('#projects')}
            >
                <BsFolderCheck size={28}/>
            </a>
            <a
                href="#contact"
                className={activeNavIcon === '#contact' 
                            ? "navbar__item active"
                            : "navbar__item"}
                onClick={() => handleNavIconChange('#contact')}
            >
                <FiMail size={28}/>
            </a>
        </nav>
    )
}

export default Navbar