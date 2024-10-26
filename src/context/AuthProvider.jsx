import React, { createContext, useEffect, useLayoutEffect, useState } from 'react'
import { getLocalStorage,setLocalStorage } from '../utils/LocalStorage'
export const AuthContext = createContext()


function AuthProvider({children}) {
const [ userData,setUserData] = useState(null)

useEffect(()=>{
setLocalStorage()
const admin = getLocalStorage('admin')
const employee = getLocalStorage('employees')
setUserData([...employee,...admin])
},[])

  return (
    <div>
      <AuthContext.Provider value={userData}>
        {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider