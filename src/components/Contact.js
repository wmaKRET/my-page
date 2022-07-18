import React from "react"

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
                <form className="contact__form">
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Name"
                        required
                    />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email"
                    />
                    <textarea 
                        name="message"
                        placeholder="Message... (required)"
                        required
                    />
                    <button
                        type="submit"
                        className="btn"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact