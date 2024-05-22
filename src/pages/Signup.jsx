import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/BEEHA LAGOS.png';
import "../styles/login.css";

const Signup = () => {
  return (
    <div className="flex min-h-screen flex-1 flex-col justify-center lg:px-8 log">
      <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Link to={"/"}>
            <img
              className="mx-auto h-10 w-auto"
              src={logo}
              alt="Your Company"
            />
          </Link>
          <h2 className="mt-6 text-center text-2xl md:text-3xl font-extrabold text-gray-900">Create your account</h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
              <div className="mt-1">
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  className="block w-full appearance-none rounded-md border border-gray-300 py-2 px-3 text-gray-900 placeholder-gray-500 shadow-sm focus:border-brandBrown focus:ring-brandBrown focus:outline-none sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full appearance-none rounded-md border border-gray-300 py-2 px-3 text-gray-900 placeholder-gray-500 shadow-sm focus:border-brandBrown focus:ring-brandBrown focus:outline-none sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="block w-full appearance-none rounded-md border border-gray-300 py-2 px-3 text-gray-900 placeholder-gray-500 shadow-sm focus:border-brandBrown focus:ring-brandBrown focus:outline-none sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-brandBrown py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brandBrown"
              >
                Sign up
              </button>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-gray-500">
            Already have an account?{' '}
            <Link to="/sign-in" className="font-medium text-brandBrown hover:text-opacity-90">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
