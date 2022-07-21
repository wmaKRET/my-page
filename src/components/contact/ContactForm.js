import React, { useState } from "react"

function ContactForm() {
    const [contactData, setContactData] = useState(emptyContactData())

    function emptyContactData() {
        return {
            name: '',
            email: '',
            message: ''
        }
    }

    function handleChange(event) {
        const { name, value } = event.target
        setContactData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    function handleSubmit(event) {
        event.preventDefault()
        // You got me! ;) it is not really sending a message
        // on real page we could for example use EmailJS :)
        console.log(`From ${contactData.email}`)
        console.log(`${contactData.name} wrote: ${contactData.message}`)
        setContactData(emptyContactData())
        window.alert('Thanks for the message!')
    }

    return (
        <form onSubmit={handleSubmit} className="contact__form">
            <input
                type="text"
                name="name"
                value={contactData.name}
                onChange={handleChange}
                placeholder="Name"
                required
            />
            <input
                type="email"
                name="email"
                value={contactData.email}
                onChange={handleChange}
                placeholder="Email"
            />
            <textarea
                name="message"
                value={contactData.message}
                onChange={handleChange}
                placeholder="Message"
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