const like = document.getElementById('like');
const increaseLike = document.getElementById('increaselike');

like.addEventListener('click', likePlus)

let countPlus = 0 ;

function likePlus(){

 countPlus = countPlus + 1 ;

 increaseLike.innerHTML = countPlus + 'likes'  
 
}