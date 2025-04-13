// Function to toggle the visibility of the menu
function toggleMenu() {
  const menu = document.getElementById('dropdownMenu');

  // Toggle the display between 'none' and 'block'
  if (menu.style.display === 'none' || menu.style.display === '') {
      menu.style.display = 'block';  // Show the menu
  } else {
      menu.style.display = 'none';   // Hide the menu
  }
}

function toggleSearch() {
  const searchInput = document.getElementById('search-input');

  if (searchInput.style.display === 'none' || searchInput.style.display === '') {
    searchInput.style.display = 'inline-block';
    searchInput.focus();
  } else {
    searchInput.style.display = 'none';
  }
}

