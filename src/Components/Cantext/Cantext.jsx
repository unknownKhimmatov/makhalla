import { createContext, useEffect, useState } from "react";

export const Context = createContext()
export const ContextProvider = ({ children }) => {
    let parses = window.localStorage.getItem("color")
    const [dark, setDark] = useState(!true)
    useEffect(() => {
        if (dark !== false) {
            window.localStorage.setItem("width", dark)
        } else {
            window.localStorage.removeItem("width")
        }
    }, [dark])
    return (
        <Context.Provider value={{ dark, setDark }}>
            {children}
        </Context.Provider>
    )
}