function toggleMenu() {
    const menu = document.querySelector('.menu');
    const menuIcon = document.querySelector('.menu-icon');
    
    menu.classList.toggle('open'); // Toggle the menu's visibility
    menuIcon.classList.toggle('open'); // Change the hamburger icon to X
  }