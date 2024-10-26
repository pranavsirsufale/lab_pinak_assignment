import React from 'react'

function Header() {
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium' >Hellow It's <br /><span className='text-3xl font-semibold'> Pranav Sirsufale</span>
        </h1>
        <button className='bg-red-500 text-white px-5 text-lg font-medium py-2 rounded-sm cursor-pointer' > Log Out</button>
    </div>
  )
}

export default Header