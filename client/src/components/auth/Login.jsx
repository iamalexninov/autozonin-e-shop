import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <form className="flex flex-col max-w-md m-auto gap-4">
      <h1 className="border-b border-gray-300 mb-2 font-semibold pb-1 uppercase">
        Login
      </h1>
      <input
        type="email"
        name="email"
        placeholder="alex@gmail.com"
        className="p-4 border border-gray-300 rounded-xl"
      />
      <input
        type="password"
        name="password"
        placeholder="******"
        className="p-4 border border-gray-300 rounded-xl"
      />
      <p className="pl-2">
        Don`t have an account?
        <Link
          to="/signup"
          className="ml-1 uppercase font-semibold text-blue-600"
        >
          Sign Up
        </Link>
      </p>
      <button className="bg-blue-600 p-4 rounded-2xl uppercase text-white font-semibold">
        sign in
      </button>
      <div className="flex items-center gap-3">
        <div className="w-full border-b border-slate-300"></div>
        <p className="uppercase my-3 text-center">OR</p>
        <div className="w-full border-b border-slate-300"></div>
      </div>
      <div className="flex gap-3 mb-4">
        <button className="w-full p-4 rounded-2xl hover:text-white text-sm border border-blue-700 text-blue-700 hover:bg-blue-700">
          Sign in with Facebook
        </button>
        <button className="w-full p-4 rounded-2xl hover:text-white  border border-red-700 text-red-700 hover:bg-red-700">
          Sign in with Google
        </button>
      </div>
      <div className="bg-gray-100 rounded-2xl p-6 flex justify-between">
        <div>
          <p className="text-base font-semibold mb-1">Admin Login:</p>
          <p>Email: admin@gmail.com</p>
          <p>Password: admin</p>
        </div>
        <div>
          <p className="text-base font-semibold mb-1">User Login:</p>
          <p>Email: demo@gmail.com</p>
          <p>Password: demo</p>
        </div>
      </div>
    </form>
  );
};
