/* Show / hide Hamburger Menu */
const hamburgerBtn = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');

function toggleButton() {
  navList.classList.toggle('show');
}

hamburgerBtn.addEventListener('click', toggleButton);
navList.addEventListener('click', toggleButton);
