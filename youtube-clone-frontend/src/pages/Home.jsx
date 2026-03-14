import { useEffect, useState } from "react";
import VideoCard from "../components/VideoCard";

function Home() {

  const [videos, setVideos] = useState([]);

  useEffect(() => {

    fetch("http://localhost:5002/api/video")
      .then(res => res.json())
      .then(data => setVideos(data));

  }, []);

  return (

    <div className="ml-60 pt-20 px-6 bg-black min-h-screen">

      <div className="grid grid-cols-4 gap-6">

        {videos.map(video => (
          <VideoCard key={video._id} video={video}/>
        ))}

      </div>

    </div>
  );
}

export default Home;