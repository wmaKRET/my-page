import React, { useState, useEffect } from "react"

const Context = React.createContext()

function ContextProvider({ children }){
    const URL = "https://raw.githubusercontent.com/wmaKRET/my-page/master/src/sections.JSON"

    const [sections, setSections] = useState([])
    const [activeNavIcon, setActiveNavIcon] = useState('#')

    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(data => setSections(data))
            .catch(error => console.log(error))
    }, [])

    function handleNavIconChange(section) {
        setActiveNavIcon(section)
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