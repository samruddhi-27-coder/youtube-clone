import { Link } from "react-router-dom";

function VideoCard({ video }) {

  return (

    <Link to={`/watch/${video._id}`}>

      <div className="text-white cursor-pointer">

        <img
          src={`http://localhost:5002/${video.thumbnail}`}
          className="rounded-xl w-full h-48 object-cover"
        />

        <div className="flex mt-3 gap-3">

          <div className="w-10 h-10 bg-gray-700 rounded-full"></div>

          <div>

            <h3 className="font-semibold text-sm">
              {video.title}
            </h3>

            <p className="text-gray-400 text-xs">
              {video.views} views
            </p>

          </div>

        </div>

      </div>

    </Link>

  );

}

export default VideoCard;