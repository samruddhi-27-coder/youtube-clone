import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import VideoCard from "../components/VideoCard";
import Categories from "../components/Categories";

export const videos = [
  {
    id: 1,
    title: "React Tutorial",
    category: "Coding",
    channel: "Code Master",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "https://picsum.photos/300/200",
    channelImg: "https://i.pravatar.cc/40"
  },
  {
    id: 2,
    title: "Gaming Setup",
    category: "Gaming",
    channel: "Gamer",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
    thumbnail: "https://picsum.photos/300/201",
    channelImg: "https://i.pravatar.cc/41"
  }
];

function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [dark, setDark] = useState(false);

  const filteredVideos = videos.filter(v => 
    (category === "All" || v.category === category) &&
    v.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={dark ? "dark" : ""}>
      <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen">
        
        <Navbar setSearch={setSearch} toggleDark={() => setDark(!dark)} />

        <div className="flex">
          <Sidebar />

          <div className="flex-1">
            <Categories setCategory={setCategory} />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
              {filteredVideos.map(video => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;