import React from "react"

function ContactForm() {
    return (
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
    )
}

export default ContactForm