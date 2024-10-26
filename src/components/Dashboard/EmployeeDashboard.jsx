import React from 'react'
import Header from '../Header/Header'
import TaskListNumber from '../Header/TaskListNumber'
import TaskList from '../Header/TaskList/TaskList'

function EmployeeDashboard() {
  return (
    <>
    <div id='employee' className='p-10 h-auto '>
    <Header/>
    {/* <TaskListNumber/> */}
    <TaskList />
 
        </div>
    </>
    
  )
}

export default EmployeeDashboard