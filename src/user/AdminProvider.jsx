import React, {createContext, useState} from 'react'


// initial context
export const UserAdmin = createContext()

export default function AdminProvider(props) {
  
    // state
    const [isAdmin, setIsAdmin] = useState(false)  
  
    return (
    <UserAdmin.Provider value={[isAdmin, setIsAdmin]}>
        {props.children}
    </UserAdmin.Provider>
  )
}
