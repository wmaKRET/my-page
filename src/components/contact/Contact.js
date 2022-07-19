import React from "react"

import ContactForm from "./ContactForm"
import ContactSocials from "./ContactSocials"

function Contact(){
    return (
        <section className="contact" id="contact">
            <h5>how to</h5>
            <h2>Contact Me</h2>
            <div className="contact__content">
                <div className="contact__email">
                    <h5>email</h5>
                    <h4>wkret91.2@gmail.com</h4>
                    <a href="mailto:wkret91.2@gmail.com">Send e-mail</a>
                </div>
                <ContactForm />
            </div>
            <ContactSocials />
        </section>
    )
}

export default Contact