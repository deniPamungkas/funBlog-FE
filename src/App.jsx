import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout";
import Home from "./pages/home";
import Read from "./pages/read";
import Recommended from "./pages/recommended";
import MustRead from "./pages/mustRead";
import Write from "./pages/write";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import SignUp from "./pages/signUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="recommended" element={<Recommended />} />
          <Route path="mustRead" element={<MustRead />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/read/:post_id" element={<Read />} />
        <Route path="/write/:post_id" element={<Write />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
