import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/BEEHA LAGOS.png';
import "../styles/login.css"; 
import { useAuthContext } from '../context/authContext';

const Login = () => {
  const { token, logout, handleSignIn } = useAuthContext(); 
  const [loading, setLoading] = useState(false); 

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const credentials = {
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };

    try {
      await handleSignIn(credentials); 
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="flex min-h-screen flex-1 flex-col justify-center lg:px-8 log">
      <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Link to={"/"}>
            <img
              className="mx-auto h-10 w-auto"
              src={logo}
              alt="Beeha"
            />
          </Link>
          <h2 className="mt-6 text-center text-2xl md:text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          {token ? (
            <div className="text-center">
              <Link to="/myaccont" className="font-medium text-brandBrown hover:text-opacity-90">
                My Account
              </Link>
              <button
                onClick={handleLogout}
                className="ml-4 font-medium text-brandBrown hover:text-opacity-90"
              >
                Logout
              </button>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleLogin}>
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
                    autoComplete="current-password"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 py-2 px-3 text-gray-900 placeholder-gray-500 shadow-sm focus:border-brandBrown focus:ring-brandBrown focus:outline-none sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center items-center rounded-md bg-brandBrown py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brandBrown"
                  disabled={loading}
                >
                  {loading && (
                    <svg
                      aria-hidden="true"
                      className="w-6 h-6 text-white animate-spin mr-2"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentColor"
                      />
                    </svg>
                  )}
                  {loading ? 'Signing in...' : 'Sign in'}
                </button>
              </div>
            </form>
          )}

          {!token && (
            <p className="mt-6 text-center text-sm text-gray-500">
              Not a member?{' '}
              <Link to="/sign-up" className="font-medium text-brandBrown hover:text-opacity-90">
                Sign up for free
              </Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
