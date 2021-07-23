var $car = document.querySelector('.car');
var distance = 0;
var id = null;

window.addEventListener('keydown', turn);
window.addEventListener('keydown', handleKeyDown);

function turn(event) {
  if (event.key === 'ArrowRight') {
    $car.className = 'face-east';
  } else if (event.key === 'ArrowLeft') {
    $car.className = 'face-west';
  } else if (event.key === 'ArrowUp') {
    $car.className = 'face-north';
  } else if (event.key === 'ArrowDown') {
    $car.className = 'face-south';
  }
}

function handleKeyDown(event) {
  if (event.key === ' ') {
    id = setInterval(move, 16);
  }
}

function move(event) {
  distance++;
  $car.style.left = distance + 'px';
}
