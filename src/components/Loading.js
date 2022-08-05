import React from 'react';
import loading from "../statics/loading.gif";
import "../main.css"

const Loading = () => {
  return (
      <img src={loading} className="loader" alt="" />
  )
}

export default Loading
