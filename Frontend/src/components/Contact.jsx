/* eslint-disable no-unused-vars */
import React from 'react'
import { useForm } from 'react-hook-form';
import Navbar from './Navbar';

function Contact() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // Function to handle form submission
    const onSubmit = (data) => {
        console.log('Form Submitted', data);
    };

    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center min-h-screen bg-gray-100 text-black dark:bg-gray-800">
                <div className="w-full max-w-md bg-white dark:bg-gray-900 shadow-md rounded-lg p-8">
                    <h1 className="text-2xl font-semibold text-center mb-6 dark:text-white">Contact Us</h1>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        {/* Email input */}
                        <label className="input input-bordered flex items-center gap-2 bg-gray-100 dark:bg-gray-800 p-2 rounded-md">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70 dark:text-white">
                                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input
                                type="text"
                                className="grow bg-transparent outline-none dark:text-white"
                                placeholder="Email"
                                {...register('email', { required: 'Email is required' })}
                            />
                        </label>
                        {errors.email && (
                            <span className="text-sm text-red-500">{errors.email.message}</span>
                        )}

                        {/* Username input */}
                        <label className="input input-bordered flex items-center gap-2 bg-gray-100 dark:bg-gray-800 p-2 rounded-md">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70 dark:text-white">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                            </svg>
                            <input
                                type="text"
                                className="grow bg-transparent outline-none dark:text-white"
                                placeholder="Username"
                                {...register('username', { required: 'Username is required' })}
                            />
                        </label>
                        {errors.username && (
                            <span className="text-sm text-red-500">{errors.username.message}</span>
                        )}

                        {/* Message input */}
                        <label className="input input-bordered flex items-center gap-2 bg-gray-100 dark:bg-gray-800 p-2 rounded-md">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70 dark:text-white">
                                <path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" />
                            </svg>
                            <input
                                type="text"
                                className="grow bg-transparent outline-none dark:text-white"
                                placeholder="Message"
                                {...register('message', { required: 'Message is required' })}
                            />
                        </label>
                        {errors.message && (
                            <span className="text-sm text-red-500">{errors.message.message}</span>
                        )}

                        {/* Send button */}
                        <button
                            type="submit"
                            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-md">
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact
