var $car = document.querySelector('.car');

document.addEventListener('keydown', turn);

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
