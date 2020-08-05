// For Click
for(var i = 0; i<document.querySelectorAll(".drum").length; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    //generating button Animations
    buttonAnimation(buttonInnerHtml);
  });
}

// For Key Press
document.addEventListener("keydown", function(event){
  // console.log(event);
  // Output: KeyboardEvent {isTrusted: true, key: "s", code: "KeyS", location: 0, ctrlKey: false, …}

  makeSound(event.key);

  //generating button Animations
  buttonAnimation(event.key);
});

// Function responsible for sound
function makeSound(key){
  switch (key) {
    case "w":
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
      break;
    case "a":
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
      break;
    case "s":
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
      break;
    case "d":
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
      break;
    case "j":
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
      break;
    case "k":
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
      break;
    case "l":
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
      break;
      case "W":
          var audio = new Audio("sounds/tom-1.mp3");
          audio.play();
        break;
      case "A":
          var audio = new Audio("sounds/tom-2.mp3");
          audio.play();
        break;
      case "S":
          var audio = new Audio("sounds/tom-3.mp3");
          audio.play();
        break;
      case "D":
          var audio = new Audio("sounds/tom-4.mp3");
          audio.play();
        break;
      case "J":
          var audio = new Audio("sounds/snare.mp3");
          audio.play();
        break;
      case "K":
          var audio = new Audio("sounds/crash.mp3");
          audio.play();
        break;
      case "L":
          var audio = new Audio("sounds/kick-bass.mp3");
          audio.play();
        break;
    default:

  }
}

// Animations for the Button
function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);
  //we do this because currentKey is only the letter, whereas we need to access
  //the class which is .w or .a or .s ,etc. So we concatinate the dot to the key

  activeButton.classList.add("pressed");

  //the set setTimeout function waits for the specified time and executes the
  //defined function.
  setTimeout(function(){ activeButton.classList.remove("pressed");
  }, 100);
}
