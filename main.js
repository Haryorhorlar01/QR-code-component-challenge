let toggle, secondary;

toggle = document.querySelector('.toggle');

secondary = document.querySelector('.secondary');


function toggleBtn () {
  secondary.classList.toggle('dark')
}

toggle.addEventListener('click', toggleBtn);