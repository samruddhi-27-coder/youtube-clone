import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="w-52 p-4 hidden md:block">
      <ul className="space-y-4">
        <li onClick={() => navigate("/")} className="cursor-pointer">🏠 Home</li>
      </ul>
    </div>
  );
}

export default Sidebar;