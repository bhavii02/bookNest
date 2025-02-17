/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-white text-black">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Close button to close the modal */}
            <button
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById('my_modal_3').close()}
            >
              ✕
            </button>

            <h3 className="font-bold text-lg">Login</h3>

            {/* Email Input */}
            <div className="mt-4 space-y-2">
              <label>Email</label>
              <br />
              <input
                type="email"
                placeholder="Enter your email" 
                className="w-80 px-3 py-1 border rounded-md  focus:outline-none focus:ring-2 focus:ring-black"
                style={{ backgroundColor: 'white', color: 'black' }}
                {...register('email', { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
            </div>

            {/* Password Input */}
            <div className="mt-4 space-y-2">
              <label>Password</label>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                style={{ backgroundColor: 'white', color: 'black' }}
                {...register('password', { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-around mt-4">
              <button
                type="submit"
                className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-600"
              >
                Login
              </button>

              {/* SignUp Link */}
              <p>
                Not registered?{' '}
                <Link to="/signup" className="underline text-blue-500 cursor-pointer">
                  SignUp
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
