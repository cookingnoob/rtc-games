import { createContext, useState } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [textInput, setTextInput] = useState('')

    const ContextValue = {
        user, setUser, textInput, setTextInput
    }

    return(
        <LoginContext.Provider value={ContextValue}>
            {children}
        </LoginContext.Provider>
    )
}


