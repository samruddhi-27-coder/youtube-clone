function Sidebar(){

  const items = [
    "Home",
    "Trending",
    "Subscriptions",
    "Music",
    "Gaming"
  ]

  return(

    <div className="w-60 h-screen bg-black border-r border-gray-800 fixed left-0 top-16">

      {items.map((item,index)=>(

        <div
          key={index}
          className="px-6 py-3 hover:bg-gray-800 cursor-pointer"
        >
          {item}
        </div>

      ))}

    </div>

  )

}

export default Sidebar