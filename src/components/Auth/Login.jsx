import React, { useEffect, useState } from 'react'

import { setLocalStorage, getLocalStorage } from '../../utils/LocalStorage'
function Login({handleLogin}) {
  const [email,setEmail ] = useState('')
  const [ password,setPassword] = useState('')

  const submitHnalder = (e) => {
    e.preventDefault()
    handleLogin(email,password)
    setEmail('')
    setPassword('')
    
  }

  // useEffect(()=>{
  //   localStorage.clear()
  //   setLocalStorage()
  //   const employees = getLocalStorage('employees')
  //   const admin = getLocalStorage('admin')
  //   console.log(employees);
  //   console.log(admin);
    
  // },[])

  return (
    <div className='flex items-center justify-center h-screen ' >
        <div className='border-2 border-emerald-600 mt-5 '>
            <form onSubmit={(e)=>submitHnalder(e)} className='flex flex-col items-center justify-center p-20' >

                <input value={email} onChange={(e)=>setEmail(e.target.value)} required className='border-2 border-emerald-600 py-3 rounded-full px-5 text-xl outline-none bg-transparent placeholder:text-white'  type="email" placeholder='Enter your email' />

                <input value={password} onChange={(e)=>setPassword(e.target.value)} required  type='password' className='border-2 border-emerald-600 py-3 rounded-full px-5 text-xl outline-none bg-transparent placeholder:text-white mt-5'placeholder='Enter Password' />
                <button className='bg-emerald-600 py-3 rounded-full px-5 text-xl text-black outline-none placeholder:text-white border-none mt-5'placeholder='Enter Password' >Log In </button>
            </form>

        </div>
    </div>
  )
}

export default Login