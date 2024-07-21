const dropdownBtn = document.querySelector('button.menu')
const dropdownList = document.querySelector('.nav-links-container')


function toggleDropdown() {
  dropdownList.classList.toggle('hidden')
}

dropdownBtn.addEventListener('click', toggleDropdown)