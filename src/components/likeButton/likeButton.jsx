import { useState } from "react";

export default function likeButton() {
  let [likes, setlikes] = useState(0);

  function countLIkes(e) {
    setlikes(likes + 1);
    console.log(likes);
  }
  return <button onClick={countLIkes}> {likes} Likes</button>;
}
