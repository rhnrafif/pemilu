import React, {createContext, useState} from 'react'

// inisial context
export const InputPeserta = createContext()

export default function InputProvider(props) {
  
    // state
    const [isInput, setIsInput] = useState(false)
  
    return (
    <InputPeserta.Provider value={[isInput, setIsInput]}>
        {props.children}
    </InputPeserta.Provider>
  )
}
