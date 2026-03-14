function Navbar(){

  return(

    <div className="flex items-center justify-between px-6 py-3 bg-black text-white fixed w-full top-0 border-b border-gray-800 z-50">

      <h1 className="text-xl font-bold">
        YouTube
      </h1>

      <div className="flex w-1/2">

        <input
          className="flex-1 px-4 py-2 bg-gray-900 border border-gray-700 rounded-l-full"
          placeholder="Search"
        />

        <button className="px-4 bg-gray-800 border border-gray-700 rounded-r-full">
          🔍
        </button>

      </div>

      <div className="flex gap-4 text-xl">
        🔔
        👤
      </div>

    </div>

  )

}

export default Navbar