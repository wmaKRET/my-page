import React, { useContext } from "react"

import { Context } from "../../Context"

import { BsPersonCircle, BsListCheck, BsFolderCheck } from "react-icons/bs"
import { FaHome } from "react-icons/fa"
import { FiMail } from "react-icons/fi"

function NavIcon({section}){
    const { activeNavIcon, handleNavIconChange } = useContext(Context)
    
    function whichIcon(icon){
        switch(icon) {
            case "FaHome":
                return <FaHome size={28} />
            case "BsPersonCircle":
                return <BsPersonCircle size={28} />
            case "BsListCheck":
                return <BsListCheck size={28} />
            case "BsFolderCheck":
                return <BsFolderCheck size={28} />
            case "FiMail":
                return <FiMail size={28} />
            default:
                return null
        }
    }

    function isIconActive(value) {
        return activeNavIcon === value
            ? "navbar__item active"
            : "navbar__item"
    }

    return (
        <a
            key={section.id}
            href={section.url}
            className={isIconActive(section.url)}
            onClick={() => handleNavIconChange(section.id)}
        >
            {whichIcon(section.icon)}
        </a>
    )
}

export default NavIcon