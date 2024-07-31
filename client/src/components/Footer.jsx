export const Footer = () => {
  return (
    <footer className="bg-sky-950 p-14 flex justify-between">
      <div>
        <p className="font-semibold text-2xl text-white">Join AutoZonin</p>
        <p className="font-semibold text-base text-white">Explore Our Online Shop.</p>
      </div>
      <div>
        <input type="text" placeholder="Your email address" />
        <button className="uppercase text-white p-4 rounded-full">join</button>
      </div>
    </footer>
  );
};
