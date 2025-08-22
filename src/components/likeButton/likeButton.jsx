export default function likeButton() {
  let likes = 0;
  function countLIkes(e) {
    likes ++ ;
    console.log(likes);
    console.log(e)
  }
  return <button onClick={countLIkes}> {likes} Likes</button>;
}
