import React, { useState } from "react"

import { BsPersonCircle, BsListCheck, BsFolderCheck } from "react-icons/bs"
import { FaHome } from "react-icons/fa"
import { FiMail } from "react-icons/fi"

function Navbar(){
    const [activeNavIcon, setActiveNavIcon] = useState('#')

    function isIconActive(value){
        return activeNavIcon === value 
            ? "navbar__item active"
            : "navbar__item"
    }

    function handleNavIconChange(value) {
        setActiveNavIcon(value)
    }

    return (
        <nav className="navbar">
            <a
                href="#"
                className={isIconActive('#')}
                onClick={() => handleNavIconChange('#')}
            >
                <FaHome size={28}/>
            </a>
            <a
                href="#about"
                className={isIconActive('#about')}
                onClick={() => handleNavIconChange('#about')}
            >
                <BsPersonCircle size={28}/>
            </a>
            <a
                href="#skills"
                className={isIconActive(`#skills`)}
                onClick={() => handleNavIconChange(`#skills`)}
            >
                <BsListCheck size={28}/>
            </a>
            <a
                href="#projects"
                className={isIconActive('#projects')}
                onClick={() => handleNavIconChange('#projects')}
            >
                <BsFolderCheck size={28}/>
            </a>
            <a
                href="#contact"
                className={isIconActive('#contact')}
                onClick={() => handleNavIconChange('#contact')}
            >
                <FiMail size={28}/>
            </a>
        </nav>
    )
}

export default Navbar