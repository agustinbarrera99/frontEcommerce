import "./App.css";
import { Nav } from "./components/Nav/Nav.jsx";
import { Register } from "./components/Register/Register.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./components/Login/Login.jsx";
import { Index } from "./components/Index/Index.jsx";

function App() {

  return (
      <BrowserRouter>
        <div className="flex flex-col items-center min-h-screen bg-black">
          <Nav />
          <Routes>
            <Route exact path="/sessions/register" element={<Register />} />
            <Route exact path="/sessions/login" element={<Login />} />
            <Route exact path="/" element={<Index />} />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
