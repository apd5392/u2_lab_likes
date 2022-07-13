import React, { useState } from "react";
import LikeTotal from "./LikeTotal";

function Likes(props) {
  const [totalLikes, setTotalLikes] = useState(0);
  function addLikes() {
    setTotalLikes(totalLikes + 1);
  }
  function subtractLikes() {
    if (totalLikes) setTotalLikes(totalLikes - 1);
  }
  return (
    <div className="container">
      <div className="display">
        <LikeTotal totalLikes={totalLikes} />
      </div>
      <div className="buttons">
        <button className="add" onClick={addLikes}>+</button>
        <button className="subtract" onClick={subtractLikes}>-</button>
      </div>
    </div>
  );
}

export default Likes;
