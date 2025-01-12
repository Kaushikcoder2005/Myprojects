import React, { createContext,useState   } from 'react'

export const Context = createContext()



const ContextProvider =({children})=>{
    const [ShowComp, setshowComp] = useState(false)

    const allContext={
        ShowComp,
        setshowComp
    }

    return(
        <Context.Provider value={allContext}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider