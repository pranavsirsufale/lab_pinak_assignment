import { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import './App.css'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import Header from './components/Header/Header'
import { AuthContext } from './context/AuthProvider'

function App() {


  const [user, setUser] = useState(null)

  const authData = useContext(AuthContext)
  console.log(authData);

  useEffect(()=>{
    const loggedInUser = localStorage.getItem("loggedInUser")
  },[authData])

  const handleLogin = (email,password) => {
    if(email == "admin@me.com" && password =='123'){
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
      
      
    }
    else if ( authData && authData.find((e) => (e.email == email && e.password == password))){
      setUser('employee')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))
    
    }else {
      
    }
    
  }


  
  // handleLogin('admin@m3.com',123)

  return (
    <div id='assignment' >
   
    <EmployeeDashboard /> 
    {/* note the rest of the code is intentionally commented down didn't add any extra feature */}
    {/* {
      (!user ? <Login handleLogin={handleLogin} /> : '')
    }
     {
      user === 'admin' ? <AdminDashboard/> :  <EmployeeDashboard /> 
     } */}

    
  </div>
  )
}

export default App
