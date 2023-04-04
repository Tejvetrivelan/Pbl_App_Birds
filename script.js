// JavaScript code for the app
const divisions = document.querySelectorAll('.division');
const onlinePosterImg = document.querySelector('.division-1 img');
console.log(onlinePosterImg.src);

// Add event listeners to each division
divisions.forEach(division => {
  division.addEventListener('click', () => {
    // Toggle the 'active' class when the division is clicked
    division.classList.toggle('active');
  });
});
// JavaScript code for the app
const divisions = document.querySelectorAll('.division');

