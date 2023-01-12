import React, {useEffect, useState, useContext} from 'react'
import { Route, Routes} from 'react-router-dom'
import DashboardSd from './pages/DashboardSd'
import Sd from './pages/Sd'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import {auth, database} from './firebase'
import {FormSekolah, FormSekolah2} from './components/FormSekolah'
import {UserSekolah} from './user/SekolahProvider'
import {UserAdmin} from './user/AdminProvider'
import {InputPeserta} from './user/InputProvider'
import {SmpInput} from './user/SmpProvider'
import {UserSet} from './user/User'

export default function App() {

  // const [user, setUser] = useState()

  // global state
  const [isSekolah, setIsSekolah] = useContext(UserSekolah)
  const [isAdmin, setIsAdmin] = useContext(UserAdmin)
  const [isInput, setIsInput] = useContext(InputPeserta)
  const [isSmp, setIsSmp] = useContext(SmpInput)
  const [user, setUser] = useContext(UserSet)
  
  useEffect(()=>{
    setUser(JSON.parse(localStorage.getItem('user')))
    
  },[])

  // console.info(user)
  

  return (
    <>
      {!user ? ( //if jika bukan admin, maka route ini yang ditampilkan
        <>
          <Routes>
              <Route path='/' element={<DashboardSd />} />
          </Routes>
        </>
      ) : ( //if jika admin, route ini yang ditampilkan
        <>
          <Routes>
              <Route path='/' element={<Sd />} />
          </Routes>
        </>
      )}      
    </>
  )
}
