import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#0f172a"
    }}>
      <div style={{
        background: "white",
        padding: "40px",
        borderRadius: "10px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
        textAlign: "center",
        width: "300px"
      }}>
        <h2 style={{marginBottom:"20px"}}>Login</h2>

        <input
          type="text"
          placeholder="Username"
          style={{
            width:"100%",
            padding:"10px",
            marginBottom:"15px",
            borderRadius:"5px",
            border:"1px solid #ccc"
          }}
        />

        <input
          type="password"
          placeholder="Password"
          style={{
            width:"100%",
            padding:"10px",
            marginBottom:"20px",
            borderRadius:"5px",
            border:"1px solid #ccc"
          }}
        />

        <button
          onClick={handleLogin}
          style={{
            width:"100%",
            padding:"10px",
            background:"#2563eb",
            color:"white",
            border:"none",
            borderRadius:"5px",
            fontWeight:"bold",
            cursor:"pointer"
          }}
        >
          Login
        </button>

      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;