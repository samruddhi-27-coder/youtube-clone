import { useNavigate } from "react-router-dom";

function VideoCard({ video }) {
  const navigate = useNavigate();

  return (
    <div
      className="cursor-pointer hover:scale-105 transition duration-200"
      onClick={() => navigate(`/video/${video.id}`)}
    >
      <img
        src={video.thumbnail}
        className="rounded-xl w-full"
      />

      <div className="flex mt-2 gap-3">
        <img
          src={video.channelImg}
          className="w-10 h-10 rounded-full"
        />

        <div>
          <h3 className="font-semibold text-sm line-clamp-2">
            {video.title}
          </h3>

          <p className="text-gray-500 text-xs">
            {video.channel}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;