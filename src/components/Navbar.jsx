import { FaYoutube, FaSearch, FaMicrophone, FaBell } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

function Navbar({ setSearch, toggleDark }) {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    setSearch(input);
  };

  return (
    <div className="flex items-center justify-between px-4 py-2 bg-white dark:bg-black sticky top-0 z-50">
      
      {/* LEFT */}
      <div className="flex items-center gap-4">
        <GiHamburgerMenu />
        <div className="flex items-center gap-1 text-red-600 text-xl font-bold">
          <FaYoutube /> YouTube
        </div>
      </div>

      {/* SEARCH */}
      <div className="flex w-1/2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full border px-3 py-1 rounded-l-full dark:bg-black"
          placeholder="Search"
        />
        <button onClick={handleSearch} className="bg-gray-200 px-4 rounded-r-full">
          <FaSearch />
        </button>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        <FaMicrophone />
        <FaBell />
        <button onClick={toggleDark}>🌙</button>
        <img src="https://i.pravatar.cc/40" className="rounded-full" />
      </div>
    </div>
  );
}

export default Navbar;