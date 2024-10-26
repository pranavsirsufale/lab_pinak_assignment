import React, { useEffect, useState } from "react";
import { FcAbout } from "react-icons/fc";


function TaskList() {
const [ colors , setColors ] = useState(['red','green','blue','yellow','white','red',])
  


  return (
    <div
      id="task-list"
      className="flex flex-wrap items-center justify-center gap-10 w-full  py-5 mt-10" >
      {
        colors.map((color,i)=>(
          <div key={i} className={`h-full task-list flex-shrink-0 w-[300px] bg-${color}-400 p-5 rounded-xl items-center text-sm`}>
        <p className="flex items-cetner icon-box justify-center" > <span className="bg-yellow-100 p-2  bg-transparent border border-blue-400 rounded-full" >  <FcAbout className="text-2xl task-icon" /> </span> </p>
        
       
        <h4 className="text-sm"> 20 Feb 2024</h4>
        <h2> Assignment Task </h2>
        <p className="text-sm mt-2">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          minima omnis illo necessitatibus ullam voluptatem!
        </p>
      </div>

        ))
      }
      
    
    </div>
  );
}

export default TaskList;
