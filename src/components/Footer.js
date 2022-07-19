import React, { useContext } from "react"

import { Context } from "../Context"

import { FaHome, FaLinkedin, FaGithub } from "react-icons/fa"

function Footer() {
    const { handleNavIconChange } = useContext(Context)
    return (
        <footer className="footer">
            <p className="footer__title">wmaKRET</p>
            <div className="footer__socials">
                <a
                    href="#"
                    onClick={() => handleNavIconChange('#')}
                >
                    <FaHome size={28}/>
                </a>
                <a
                    href="https://www.linkedin.com/in/wojciech-kret/"
                    target="_blank"
                >
                    <FaLinkedin size={28}/>
                </a>
                <a
                    href="https://github.com/wmaKRET"
                    target="_blank"
                >
                    <FaGithub size={28}/>
                </a>
            </div>
        </footer>
    )
}

export default Footer