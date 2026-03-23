import { useParams } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { videos } from "./Home";

function Watch() {
  const { id } = useParams();
  const video = videos.find(v => v.id === Number(id));

  const [likes, setLikes] = useState(0);
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen">
      <Navbar />

      <div className="p-4">
        <video controls className="w-full" src={video?.videoUrl} />

        <h2 className="text-xl font-bold mt-2">{video?.title}</h2>

        <div className="flex gap-4 mt-2">
          <button
            onClick={() => setLikes(likes + 1)}
            className="bg-gray-200 px-4 py-1 rounded"
          >
            👍 {likes}
          </button>

          <button
            onClick={() => setSubscribed(!subscribed)}
            className="bg-red-500 text-white px-4 py-1 rounded"
          >
            {subscribed ? "Subscribed" : "Subscribe"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Watch;