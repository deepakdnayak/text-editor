'use client';

import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login successful:', data);
        // Redirect or update UI on successful login
        window.location.href = '/text'; // Adjust the path as per your application
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Failed to connect to the server. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center pt-16">
      <div className="h-[80vh] w-[80vw] flex rounded-lg border overflow-hidden shadow-2xl">
        <div className="h-full w-5/12 flex-1 flex-col justify-center items-center px-6 py-12">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h1 className="font-bold text-5xl tracking-tight text-royalblue">Text Editor</h1>

            <p className="font-semibold text-2xl mt-3 tracking-tight">Sign in to your account</p>

            <p className="mt-1 text-sm/6 text-gray-500">
              Not a member?{' '}
              <a href="/text" className="font-semibold text-indigo-600 hover:text-indigo-500">
                Register as a new member
              </a>
            </p>

            {error && (
              <div className="mt-4 text-red-500 text-sm/6 font-medium">
                {error}
              </div>
            )}

            <form onSubmit={handleLogin} className="mt-5">
              <div>
                <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="email"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-royalblue sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="mt-3">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autoComplete="password"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-royalblue sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="mt-10">
                <button
                  type="submit"
                  className={`flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                    isLoading ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                  disabled={isLoading}
                >
                  {isLoading ? 'Signing in...' : 'Sign in'}
                </button>
              </div>
            </form>

            <div className="mt-5 flex items-center">
              <hr className="flex-grow border-gray-300" />
              <span className="px-4 whitespace-nowrap">Or continue with</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            <div className="flex justify-around mt-5">
              <button className="bg-royalblue text-white rounded-lg py-1 px-6 text-lg hover:scale-105">
                Google
              </button>
              <button className="bg-royalblue text-white rounded-lg py-1 px-6 text-lg hover:scale-105">
                Github
              </button>
            </div>
          </div>
        </div>

        <div className="h-full w-7/12 bg-[url('/Login.jpg')] bg-center bg-cover bg-no-repeat"></div>
      </div>
    </div>
  );
}
