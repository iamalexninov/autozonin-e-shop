import { Route, Router, Routes } from "react-router-dom";

export const Layout = () => {
  return (
    <Router>
      <Routes>
        <Route path="/catalog" />
        <Route path="/auth" />
        <Route path="/profile" />
      </Routes>
    </Router>
  );
};
