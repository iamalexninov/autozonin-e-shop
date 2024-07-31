import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <form className="flex flex-col max-w-md m-auto gap-4">
      <h1 className="border-b border-gray-300 mb-2 font-semibold pb-1 uppercase">
        Register
      </h1>
      <input
        type="text"
        name="username"
        placeholder="iamalexninov"
        className="p-4 border border-gray-300 rounded-xl"
      />
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
      <input
        type="password"
        name="password"
        placeholder="******"
        className="p-4 border border-gray-300 rounded-xl"
      />
      <p className="pl-2">
        Already have an account?
        <Link to="/signin" className="ml-1 uppercase font-semibold text-blue-600">
          Sign In
        </Link>
      </p>
      <div className="flex gap-2 mb-2 pl-2">
        <input type="checkbox" />
        <label>I have read and accept <span className="text-blue-600">Terms and Privacy Policy.</span></label>
      </div>
      <button className="bg-blue-600 p-4 rounded-2xl uppercase text-white font-semibold">
        sign up
      </button>
      <div className="flex items-center gap-3">
        <div className="w-full border-b border-slate-300"></div>
        <p className="uppercase my-3 text-center">OR</p>
        <div className="w-full border-b border-slate-300"></div>
      </div>
      <div className="flex gap-3">
        <button className="w-full p-4 rounded-2xl hover:text-white text-sm border border-blue-700 text-blue-700 hover:bg-blue-700">
          Sign up with Facebook
        </button>
        <button className="w-full p-4 rounded-2xl hover:text-white  border border-red-700 text-red-700 hover:bg-red-700">
          Sign up with Google
        </button>
      </div>
    </form>
  );
};