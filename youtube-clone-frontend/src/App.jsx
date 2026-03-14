import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Watch from "./pages/Watch";

import { Routes, Route } from "react-router-dom";

function App() {

  return (

    <div className="bg-black text-white min-h-screen">

      <Navbar />

      <div className="flex">

        <Sidebar />

        <div className="flex-1 ml-60 pt-20">

          <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/watch/:id" element={<Watch />} />

          </Routes>

        </div>

      </div>

    </div>

  );

}

export default App;