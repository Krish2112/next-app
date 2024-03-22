"use client";
import React from 'react';
import { useState } from 'react';
import { CiUser } from "react-icons/ci";
import { BiSolidBellRing } from "react-icons/bi";
import { MdOutlineMessage } from "react-icons/md";
import { MdAutoStories } from "react-icons/md";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const SideBar = () => {
    const[open,setOpen] = useState(true);
    const Items =[
      {title:"Discussion Form",icon:<MdOutlineMessage/>},
      {title:"Market Stories",icon:<MdAutoStories/>},
      {title:"Sentiment"},
      {title:"Market"},
      {title:"Sector"},
      {title:"Watchlist"},
      {title:"Events"},
      {title:"News/Interview"}
  ];
  return (  
    <div className='flex'>
        <div className= {`bg-blue-900 h-screen pt-8 ${open ? "w-72" : "w-0"} duration-400 relative`}>
            <IoArrowForwardCircleOutline  className={`bg-white text-blue-900 
            text-3xl rounded-full  border -right-3 mt-64 absolute border-blue-900 cursor-pointer ${!open && "rotate-180"}`} 
            onClick={()=>setOpen(!open)}
            />
            <div className='inline-flex'>
            <CiUser className={`bg-white text-3xl ml-4 rounded block float-left ${!open && "scale-0"}`}/>
            <h1 className={`text-white origin-left ml-4 font-medium text-xl duration-300 ${!open && "scale-0"}`}>Hello , User</h1> 
            <BiSolidBellRing className={`text-3xl ml-12 ${!open && "scale-0"}`}/>
        </div>
        <ul className='pt-2'>
          {Items.map((items,index)=>{
            return (
            <>
              <li className='text-gray-300 text-sm
              flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2 ml-3'>
                <span className={`text-2xl block float-left ${!open && "hidden"}`}>
                  {items.icon}
                </span>
                <span className={`text-base font-medium flex-1 ${!open && "hidden"}`}>{items.title}</span>
              </li>
            </>)
          })}
        </ul>
        </div>
        
    </div>
  )
}

export default SideBar
