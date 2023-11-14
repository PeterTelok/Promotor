document.getElementById('floatingArrow').addEventListener('click', function() {
    document.getElementById('next-section').scrollIntoView({ behavior: 'smooth' });
});

let prevScrollpos = window.scrollY || window.scrollY;
const menu = document.querySelector(".menu");



const elements = document.querySelectorAll('.Q-container > div');
const additionalElements = document.querySelectorAll('.additional-elements'); // Replace with your own selector for the additional elements
const delay = 2500; // 6 seconds delay

function revealElements() {
  elements.forEach((el, index) => {
    setTimeout(() => {
      el.style.transition = 'opacity 1s ease'; // Slowing down the transition
      el.style.opacity = 1;
    }, delay + index * delay);
  });

  additionalElements.forEach((el, index) => {
    setTimeout(() => {
      el.style.transition = 'opacity 1s ease'; // Slowing down the transition
      el.style.opacity = 1;
    }, delay + elements.length * delay + index * delay);
  });
}

window.onload = function () {
  const container = document.querySelector('.Q-container');
  container.style.opacity = 1;
  revealElements();
};






