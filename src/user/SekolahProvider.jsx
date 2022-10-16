import React, {createContext, useState} from 'react'


// membuat context
export const UserSekolah = createContext()

export default function SekolahProvider(props) {
  
    // state
    const [isSekolah, setIsSekolah] = useState(false)
  
    return (
    <UserSekolah.Provider value={[isSekolah, setIsSekolah]}>
        {props.children}
    </UserSekolah.Provider>
  )
}
