import React, {createContext, useState} from 'react'

// initial context
export const SmpInput = createContext()

export default function SmpProvider(props) {

    // state
    const [isSmp, setIsSmp] = useState(false)
  
    return (
    <SmpInput.Provider value={[isSmp, setIsSmp]}>
        {props.children}
    </SmpInput.Provider>
  )
}
