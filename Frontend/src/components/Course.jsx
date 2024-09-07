/* eslint-disable no-unused-vars */
import React from 'react'
import Cards from "./Cards"
import list from "../../public/list.json"
import {Link} from "react-router-dom"

function Course() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-gray-950 dark:text-white'>
        <div className='pt-28 items-center justify-center text-center'>
            <h1 className='text-2xl text-black dark:text-white font-semibold md:text-4xl'>
                We are delighted to have you <span className='text-pink-500'>here! :)</span>
                </h1>
                <p className='mt-12 text-black dark:text-white'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Nostrum animi delectus quis omnis esse ut atque molestiae, 
                    pariatur amet numquam deserunt aperiam? Enim aliquam nobis 
                    perferendis at! Porro, vitae modi!
                </p>
                <Link to="/">
                <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>
                    Back
                </button>
                </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4 text-black'>
            {
                list.map((item)=>(
                    <Cards key={item.id} item={item}/>
                ))
            }
        </div>
    </div>
    </>
    
  )
}

export default Course