import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Register } from "../components/auth/Register";
import { Login } from "../components/auth/Login";
import { Catalog } from "../components/catalog/Catalog";
import { Footer } from "../components/Footer";

export const Layout = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/profile" />
      </Routes>
      <Footer />
    </Router>
  );
};
