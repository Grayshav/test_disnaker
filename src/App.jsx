// import { useState } from 'react'
import Home from "./page/Home";
import Pengadu from "./dashboard/PengaduIndex";
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pengadu" element={<Pengadu />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
