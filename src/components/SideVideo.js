import React from 'react'
import video from "../statics/video.mp4"

const SideVideo = () => {
  return (
    <div className="my-3">
    <div className="row">
        <video src={video} width="100%" controls></video>
        <p className="card-text mt-1">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
    </div>
  </div>
  )
}

export default SideVideo