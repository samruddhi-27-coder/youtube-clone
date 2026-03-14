function likeVideo(){

  fetch(`http://localhost:5002/api/video/like/${id}`,{
    method:"PUT"
  })
  .then(res=>res.json())
  .then(data=>{
    setVideo(data)
  })

}

function dislikeVideo(){

  fetch(`http://localhost:5002/api/video/dislike/${id}`,{
    method:"PUT"
  })
  .then(res=>res.json())
  .then(data=>{
    setVideo(data)
  })

}