// Get the theme toggle button and the body element
const toggleButton = document.getElementById('toggle-theme');
const body = document.body;

// Check if a theme is already saved in localStorage
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-theme');
  toggleButton.innerText = 'Switch to Light Mode';
} else {
  body.classList.remove('dark-theme');
  toggleButton.innerText = 'Switch to Dark Mode';
}

// Add event listener for the theme toggle button
toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-theme');

  // Save the theme preference in localStorage
  if (body.classList.contains('dark-theme')) {
    localStorage.setItem('theme', 'dark');
    toggleButton.innerText = 'Switch to Light Mode';
  } else {
    localStorage.setItem('theme', 'light');
    toggleButton.innerText = 'Switch to Dark Mode';
  }
});
