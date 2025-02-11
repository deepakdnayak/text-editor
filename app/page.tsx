

export default function Login() {
  return( 
    <div className="h-screen w-screen flex justify-center items-center pt-16">

      <div className="h-[80vh] w-[80vw] flex rounded-lg border overflow-hidden shadow-2xl">

        <div className="h-full w-7/12 bg-[url('/Login.jpg')] bg-center bg-cover bg-no-repeat"></div>

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

            <form action="#" method="POST" className="mt-5">
              <div>
                <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-royalblue sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="mt-3">
                <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="password"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-royalblue sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="mt-10">
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>

            </form>

            <div className="mt-5 flex items-center">
              <hr className="flex-grow border-gray-300" />
              <span className="px-4 whitespace-nowrap">Or continue with</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            <div className="flex justify-around mt-5">
              <button className="bg-royalblue text-white rounded-lg py-1 px-6 text-lg hover:scale-105">Google</button>
              <button className="bg-royalblue text-white rounded-lg py-1 px-6 text-lg hover:scale-105">Github</button>
            </div>


          </div>
        </div>

        
      </div>
    </div>
  )
}
