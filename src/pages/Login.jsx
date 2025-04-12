
const Login = () => {
  return (
    <>

      <div className="flex justify-center items-center bg-slate-300 h-[35.59vw]">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-[50%] ">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6"></h2>
          <form onSubmit={(e) => e.preventDefault()}>
            {/* Email Field */}
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            {/* Password Field */}
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            {/* Submit Button */}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Sign In
            </button>

            <a
              href="/skylearn/forgotpassword"
              className="text-blue-500 hover:underline text-sm"
            >
              Forgot password?
            </a>
          </form>
          <p className="text-center text-sm text-gray-500 mt-5">
            Don't have an account?
            <a
              href="/skylearn/register"
              className="text-blue-500 hover:underline"
            >
              create a new account
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
