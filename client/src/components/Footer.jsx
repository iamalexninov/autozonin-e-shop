export const Footer = () => {
  return (
    <footer className="bg-blue-950 py-16 px-20 flex justify-between items-center">
      <div className="">
        <p className="font-semibold text-2xl text-white">Join AutoZonin</p>
        <p className="font-semibold text-base text-white">Explore Our Online Shop.</p>
      </div>
      <div className="w-full max-w-xl relative">
        <input type="text" placeholder="Your email address" className=" p-7 w-full rounded-3xl font-semibold text-base"/>
        <button className="uppercase text-white rounded-3xl absolute bg-blue-700 p-6 top-1 right-1 w-full max-w-28">join</button>
      </div>
    </footer>
  );
};
