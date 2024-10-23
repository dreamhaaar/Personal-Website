for (var i = 0; i < 7; i++) {
  document
    .getElementsByTagName("button")
    [i].addEventListener("click", function () {
      var check = this.innerHTML;
      this.style.color="black";
      //this.classList.toggle("changeColor");
      setTimeout(() => {
        this.style.color="";
        }, 200);

      playSound(check);
      buttonAnimation(check);
    });
}

document.addEventListener("keydown", function (ev) {
  playSound(ev.key);
  buttonAnimation(ev.key);
  document.querySelector("."+ev.key).classList.add("changeColor");
  setTimeout(function(){
    document.querySelector("."+ev.key).classList.remove("changeColor");
  }, 200);
});

function playSound(key) {
  switch (key) {
    case "w":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    case "s":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    case "d":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case "j":
      var kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;
    case "k":
      var s = new Audio("./sounds/snare.mp3");
      s.play();
      break;
    case "l":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;
  }
}

function buttonAnimation(currentBtn) {
  var a = document.querySelector("." + currentBtn);
  a.classList.add("pressed");

  setTimeout(function () {
    a.classList.remove("pressed");
  }, 200);
}
