import React from 'react';
import data from '../Data/data';
import profile from '../images/profile.jpg';
import Image from 'next/image';
import { CiHeart } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import { GoComment } from "react-icons/go";
import { MdOutlineShare } from "react-icons/md";

const DiscussionForm = () => {
  return (
    <div className='ml-10 sm:640px '>
    <div className='text-red-500 text-xl font-bold bg-gray-200 p-3 inline-block '>
        <h1>DISCUSSION FORM</h1>
    </div>
    <div>
        {data.map((data,index)=> 
        <div key={index} className='border-solid border-2 border-r-gray-300 border-b-gray-300 border-gray-100 block p-3 mb-2 mt-3'>
            <div className='flex p-2 '>
            <Image src={profile} alt='scenery' height={50} width={40}/>
                <h1 className='ml-2'><b>{data.discussionForum.title}</b></h1>
                  <div className='bg-blue-700 ml-8 rounded-full pl-4 pr-4 text-white'>
                    {data.discussionForum.sector}
                  </div>
                  <h2 className='text-blue-700 ml-8 '>{data.discussionForum.time}</h2>
            </div>
            <p className='ml-14 mb-5 pr-16'>{data.discussionForum.content}</p>

            <div className='flex items-center space-x-2 justify-between'>
                <CiHeart/> <h5>2k</h5>
                <FaRegEye/> <h5>2K</h5>
                <GoComment/> <h5>2K Comments</h5>
                <MdOutlineShare/> <h5>Share</h5>
            </div>
        </div>
        )}
    </div>
    <div >
        {data.map((data,index)=> 
        <div key={index} className='border-solid border-2 border-r-gray-300 border-b-gray-300 border-gray-100 block p-3 mb-2 mt-3'>
            <div className='flex p-2 '>
            <Image src={profile} alt='scenery' height={50} width={40}/>
                <h1 className='ml-2'><b>{data.discussionForum.title}</b></h1>
                  <div className='bg-blue-700 ml-8 rounded-full pl-4 pr-4 text-white'>
                    {data.discussionForum.sector}
                  </div>
                  <h2 className='text-blue-700 ml-8 '>{data.discussionForum.time}</h2>
            </div>
            <p className='ml-14 mb-5'>{data.discussionForum.content}</p>

            <div className='flex items-center space-x-2 justify-between'>
                <CiHeart/> <h5>2k</h5>
                <FaRegEye/> <h5>2K</h5>
                <GoComment/> <h5>2K Comments</h5>
                <MdOutlineShare/> <h5>Share</h5>
            </div>
        </div>
        )}
    </div>
    <div >
        {data.map((data,index)=> 
        <div key={index} className='border-solid border-2 border-r-gray-300 border-b-gray-300 border-gray-100 block p-3 mb-2 mt-3'>
            <div className='flex p-2 '>
            <Image src={profile} alt='scenery' height={50} width={40}/>
                <h1 className='ml-2'><b>{data.discussionForum.title}</b></h1>
                  <div className='bg-blue-700 ml-8 rounded-full pl-4 pr-4 text-white'>
                    {data.discussionForum.sector}
                  </div>
                  <h2 className='text-blue-700 ml-8 '>{data.discussionForum.time}</h2>
            </div>
            <p className='ml-14 mb-5'>{data.discussionForum.content}</p>

            <div className='flex items-center space-x-2 justify-between'>
                <CiHeart/> <h5>2k</h5>
                <FaRegEye/> <h5>2K</h5>
                <GoComment/> <h5>2K Comments</h5>
                <MdOutlineShare/> <h5>Share</h5>
            </div>
        </div>
        )}
    </div>
    <div >
        {data.map((data,index)=> 
        <div key={index} className='border-solid border-2 border-r-gray-300 border-b-gray-300 border-gray-100 block p-3 mb-2 mt-3'>
            <div className='flex p-2 '>
            <Image src={profile} alt='scenery' height={50} width={40}/>
                <h1 className='ml-2'><b>{data.discussionForum.title}</b></h1>
                  <div className='bg-blue-700 ml-8 rounded-full pl-4 pr-4 text-white'>
                    {data.discussionForum.sector}
                  </div>
                  <h2 className='text-blue-700 ml-8 '>{data.discussionForum.time}</h2>
            </div>
            <p className='ml-14 mb-5'>{data.discussionForum.content}</p>

            <div className='flex items-center space-x-2 justify-between'>
                <CiHeart/> <h5>2k</h5>
                <FaRegEye/> <h5>2K</h5>
                <GoComment/> <h5>2K Comments</h5>
                <MdOutlineShare/> <h5>Share</h5>
            </div>
        </div>
        )}
    </div>
    </div>
  )
}

export default DiscussionForm
