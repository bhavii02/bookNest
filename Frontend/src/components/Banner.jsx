/* eslint-disable no-unused-vars */
import React from 'react'


function Banner() {
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row bg-white dark:bg-slate-950 dark:text-white'>
                <div className='w-full order-2 md:order-1 md:w-1/2 text-black dark:text-white mt-12 md:mt-32'>
                    <div className='space-y-12'>
                        <h1 className='text-4xl font-bold'>Hello, welcome here to learn something <span className='text-pink-500'>new everyday!!!</span></h1>
                        <p className='text-xl dark:text-white'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse quisquam tempora
                            accusantium sit temporibus cumque harum, explicabo, perspiciatis qui, culpa
                            veritatis! Veritatis quia sint minima, dolore eum praesentium beatae et.
                        </p>
                        <label className="input input-bordered flex items-center gap-2 bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-md">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70 dark:opacity-100 dark:text-white">
                                <path
                                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path
                                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input type="text" className="grow" placeholder="Please enter your Email" />
                        </label>

                    </div>
                    <button className="btn mt-6 btn-secondary text-white ">Secondary</button>

                </div>
                <div className='w-full order-1 md:order-2 md:w-1/2 flex justify-center items-center'>
                    <img src="/banner.png" alt="Banner" className="w-1/2 md:w-[400px] mt-12 md:mt-0" />
                </div>

            </div>
        </>
    )
}

export default Banner