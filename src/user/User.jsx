import React, {useState, createContext} from 'react'

// inisial context
export const UserSet = createContext()

export default function User(props) {
    // state
    const [user, setUser] = useState(false)

  return (
    <UserSet.Provider value={[user, setUser]}>
        {props.children}
    </UserSet.Provider>
  )
}
