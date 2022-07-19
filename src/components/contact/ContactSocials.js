import React from "react"

import { FaLinkedin, FaGithub } from "react-icons/fa"

function ContactSocials() {
    return (
        <div className="contact__socials">
            <a
                href="https://www.linkedin.com/in/wojciech-kret/"
                target="_blank"
            >
                <FaLinkedin size={42} />
            </a>
            <a
                href="https://github.com/wmaKRET"
                target="_blank"
            >
                <FaGithub size={42} />
            </a>
        </div>
    )
}

export default ContactSocials