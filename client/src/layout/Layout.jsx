import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Register } from "../components/auth/Register";
import { Login } from "../components/auth/Login";
import { Catalog } from "../components/catalog/Catalog";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export const Layout = () => {
  return (
    <Router>
      <Navbar />
      <main className="bg-white rounded-3xl py-20">
        <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/profile" />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};
