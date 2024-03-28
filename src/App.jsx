import "./App.css";
import { Nav } from "./components/Nav/Nav.jsx";
import { Register } from "./components/Register/Register.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./components/Login/Login.jsx";
import { Index } from "./components/Index/Index.jsx";
import { Verify } from "./components/Verify/Verify.jsx";
import { VerificationContextProvider } from "./context/verificationContext.jsx";

function App() {

  return (
    <VerificationContextProvider>
      <BrowserRouter>
        <div className="flex flex-col items-center min-h-screen bg-black">
          <Nav />
          <Routes>
            <Route exact path="/sessions/register" element={<Register />} />
            <Route exact path="/sessions/login" element={<Login />} />
            <Route exact path="/" element={<Index />} />
            <Route exact path="/sessions/verify" element={<Verify/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </VerificationContextProvider>
  );
}

export default App;
