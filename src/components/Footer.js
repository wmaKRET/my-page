import React from "react"

import { FaHome, FaLinkedin, FaGithub } from "react-icons/fa"

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__title">wmaKRET</p>
            <div className="footer__socials">
                <a
                    href="#"
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