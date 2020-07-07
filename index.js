for (var i = 0; i < document.querySelectorAll('.drum').length; i++) {
  document.querySelectorAll('.drum')[i].addEventListener('click', function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
  });
}

function makeSound(key) {
  switch (key) {
    case 'w':
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case 'a':
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case 's':
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case 'd':
      var tom4 = new Audio('./sounds/tom-4.mp3');
      tom4.play();
      break;

    case 'j':
      var snare = new Audio('./sounds/snare.mp3');
      snare.play();
      break;

    case 'k':
      var crash = new Audio('./sounds/crash.mp3');
      crash.play();
      break;

    case 'l':
      var kick = new Audio('./sounds/kick-bass.mp3');
      kick.play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
}

function makeMySound(code) {
  switch (code) {
    case 'KeyW':
      var tm1 = new Audio('sounds/tom-1.mp3');
      tm1.play();
      break;

    case 'KeyA':
      var tm2 = new Audio('sounds/tom-2.mp3');
      tm2.play();
      break;

    case 'KeyS':
      var tm3 = new Audio('sounds/tom-3.mp3');
      tm3.play();
      break;

    case 'KeyD':
      var tm4 = new Audio('./sounds/tom-4.mp3');
      tm4.play();
      break;

    case 'KeyJ':
      var snre = new Audio('./sounds/snare.mp3');
      snre.play();
      break;

    case 'KeyK':
      var crsh = new Audio('./sounds/crash.mp3');
      crsh.play();
      break;

    case 'KeyL':
      var kik = new Audio('./sounds/kick-bass.mp3');
      kik.play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
}

document.addEventListener('keydown', function (event) {
  var keyBoard = event.code;

  makeMySound(keyBoard);

  buttonAnimation(keyBoard);
});

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector('.' + currentKey);

  activeButton.classList.add('pressed');

  setTimeout(function () {
    activeButton.classList.remove('pressed');
  }, 100);
}
