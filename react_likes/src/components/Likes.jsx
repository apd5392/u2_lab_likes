import React, { useState } from "react";

function Likes(props) {
  const [totalLikes, setTotalLikes] = useState(0);
  function addLikes() {
    setTotalLikes(totalLikes + 1);
  }
  function subtractLikes() {
    if (totalLikes) setTotalLikes(totalLikes - 1);
  }
  return (
    <div>
      <button className="add" onClick={addLikes}>+</button>
      <button className="subtract" onClick={subtractLikes}>-</button>
    </div>
  );
}

export default Likes;
