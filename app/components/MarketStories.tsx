import React from 'react';
import scenery from '../images/scenery.jpg';
import data from '../Data/data';
import Image from 'next/image';

const MarketStories = () => {
  return (
    <div className='ml-20 sm:640px'>
        <div>
    <div className='text-red-500 text-xl font-bold bg-gray-200 p-3 inline-block '>
        <h1>MARKET STORIES</h1>
    </div>
    <div>
        {data.map(data=> 
        <div className=' border-solid border-2 border-gray-50 mb-2 mt-3 max-w-80 '>
            <Image src={scenery} alt='scenery' height={300} width={320}/>
            <h2 className='mt-3 ml-2'><b>{data.marketStories.title}</b></h2>
            <p className="text-xs mt-2 ml-2 ">{data.marketStories.content}</p>
        </div>
        )}
    </div>
    <div>
        {data.map(data=> 
        <div className=' border-solid border-2 border-gray-50 mb-2 mt-3 max-w-80 '>
            <Image src={scenery} alt='scenery' height={300} width={320}/>
            <h2 className='mt-3 ml-2'><b>{data.marketStories.title}</b></h2>
            <p className="text-xs mt-2 ml-2 ">{data.marketStories.content}</p>
        </div>
        )}
    </div>
    <div>
        {data.map(data=> 
        <div className=' border-solid border-2 border-gray-50 mb-2 mt-3 max-w-80 '>
            <Image src={scenery} alt='scenery' height={300} width={320}/>
            <h2 className='mt-3 ml-2'><b>{data.marketStories.title}</b></h2>
            <p className="text-xs mt-2 ml-2 ">{data.marketStories.content}</p>
        </div>
        )}
    </div>
    <div>
        {data.map(data=> 
        <div className=' border-solid border-2 border-gray-50 mb-2 mt-3 max-w-80 '>
            <Image src={scenery} alt='scenery' height={300} width={320}/>
            <h2 className='mt-3 ml-2'><b>{data.marketStories.title}</b></h2>
            <p className="text-xs mt-2 ml-2 ">{data.marketStories.content}</p>
        </div>
        )}
    </div>
    </div>
    </div>
  )
}

export default MarketStories
