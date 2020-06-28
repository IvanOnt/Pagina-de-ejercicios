// sidebar toggle
const btnToggle = document.querySelector('.toggle-btn');

btnToggle.addEventListener('click', function() {
  console.log('clicked')
  document.getElementById('barrita').classList.toggle('active');
  console.log(document.getElementById('barrita'))
});