var x;
var y;

function randomized() {
  var a = Math.random() * 6 + 1;
  var r1 = Math.floor(a);
  x = r1;
  var b = Math.random() * 6 + 1;
  var r2 = Math.floor(b);
  y = r2;

  function firstImg(r1) {
    document
      .querySelector(".dice1 .img1")
      .setAttribute("src", "./images/dice" + r1 + ".png");
  }

  function secondImg(r2) {
    document
      .querySelector(".dice2 .img2")
      .setAttribute("src", "./images/dice" + r2 + ".png");
  }
  firstImg(r1);
  secondImg(r2);
  won();

}
function won() {
    if (x > y) {
      document.querySelector("h1").innerHTML = "Player 1 won!!! 🫢🤭";
    } else if (x < y){
        document.querySelector("h1").innerHTML = "Player 2 won!!! 😲🤭";
    } else document.querySelector("h1").innerHTML = "Tie 🤗";
}
function reloader(){
    document
    .querySelector(".dice2 .img2")
    .setAttribute("src", "./images/dice6.png");
    document
    .querySelector(".dice1 .img1")
    .setAttribute("src", "./images/dice6.png");
    document.querySelector("h1").innerHTML ="Who's Lucky? 🤔 ";
}

randomized();
reloader();

