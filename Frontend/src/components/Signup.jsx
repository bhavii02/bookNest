/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import { useForm } from 'react-hook-form';

function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);
    return (
        <>
            <div className="flex h-screen items-center justify-center  text-black ">
                <div className="border-2 shadow-lg p-6 rounded-lg bg-white overflow-hidden w-[450px]">
                    <div className="relative">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            {/* Close button */}
                            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

                            <h3 className="font-bold text-xl mb-4">SignUp</h3>
                            <div className="space-y-4">
                                <span>Name</span>
                                <br />
                                <input
                                    type="text"
                                    placeholder="Enter your fullname"
                                    className="w-full px-4 py-2 border rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-black"
                                    {...register('name', { required: true })}
                                />
                                <br />
                                {errors.name && (
                                    <span className="text-sm text-red-500">This field is required</span>
                                )}

                                {/* Email Field */}
                                <div>
                                    <label htmlFor="email" className="block mb-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Enter your email"
                                        className="w-full px-4 py-2 border rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-black"
                                        {...register('email', { required: true })}
                                    />
                                    <br />
                                    {errors.email && (
                                        <span className="text-sm text-red-500">This field is required</span>
                                    )}
                                </div>
                                {/* Password Field */}
                                <div>
                                    <label htmlFor="password" className="block mb-1">Password</label>
                                    <input
                                        type="password"
                                        id="password"
                                        placeholder="Enter your password"
                                        className="w-full px-4 py-2 border rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-black"
                                        {...register('password', { required: true })}
                                    />
                                    <br />
                                    {errors.password && (
                                        <span className="text-sm text-red-500">This field is required</span>
                                    )}

                                </div>
                            </div>
                            <div className="flex justify-between items-center mt-6">
                                {/* Login Button */}
                                <button className="bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-600 transition duration-300 mr-4">
                                    SignUp
                                </button>
                                {/* SignUp Link */}
                                <p className='ml-4 text-md'>
                                    Have account?{" "}
                                    <button
                                        className="underline text-blue-500 hover:text-blue-700"
                                        onClick={() =>
                                            document.getElementById("my_modal_3").showModal()
                                        }
                                    >
                                        Login
                                    </button>
                                    <Login />
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;
