var $car = document.querySelector('.car');
var distance = 0;
var id = null;
var gas = false;

window.addEventListener('keydown', car);

function car(event) {
  if (event.key === 'ArrowRight') {
    $car.className = 'face-east';
  } else if (event.key === 'ArrowLeft') {
    $car.className = 'face-west';
  } else if (event.key === 'ArrowUp') {
    $car.className = 'face-north';
  } else if (event.key === 'ArrowDown') {
    $car.className = 'face-south';
  }
  if (event.key === ' ') {
    if (!gas) {
      gas = true;
      id = setInterval(move, 4);
    } else {
      gas = false;
      clearInterval(id);
    }
  }
}

function move(event) {
  distance += 4;
  $car.style.left = distance + 'px';
}
