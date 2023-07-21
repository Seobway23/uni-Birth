import React from "react";
import Home from "./components/Home/screens/Home";
import Login from "./components/Home/screens/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
  );
}

export default App;
