import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="bg-blue-950 px-20 py-3x">
      <h1>AutoZonin</h1>
      <nav>
        <Link to="/profile">Profile</Link>
        <Link to="/logout">Logout</Link>
        <Link to="/logout">Logout</Link>
      </nav>
    </header>
  );
};
