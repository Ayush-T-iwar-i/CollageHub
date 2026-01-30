// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
  // Sidebar toggle (using the navarbtn button)
  const toggleBtn = document.getElementById('navarbtn');
  const sidebar = document.querySelector('.sidebar');
  
  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener('click', function() {
      sidebar.classList.toggle('collapsed');
    });
  }

  // Dropdown toggle for Classes
  const dropdownBtn = document.querySelector('.dropdown-btn');
  const subMenu = document.querySelector('.sub-menu');
  
  if (dropdownBtn && subMenu) {
    dropdownBtn.addEventListener('click', function() {
      // Toggle show class on submenu
      subMenu.classList.toggle('show');
      // Toggle toggled class on button for arrow rotation
      dropdownBtn.classList.toggle('toggled');
    });
  }
});