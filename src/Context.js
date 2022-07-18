import React, { useState, useEffect } from "react"

const Context = React.createContext()

function ContextProvider({ children }){
    const URL = "../sections.JSON"

    const [sections, setSections] = useState([])
    const [activeNavIcon, setActiveNavIcon] = useState('#')

    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(data => setSections(data))
            .catch(error => console.log(error))
    }, [])

    function handleNavIconChange(sectionID) {
        setActiveNavIcon(sectionID)
    }

    return (
        <Context.Provider
            value={{
                sections,
                activeNavIcon,
                handleNavIconChange
            }}
        >
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context}