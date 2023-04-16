const toggleBtn = document.getElementById('toggleBtn');


toggleBtn.addEventListener('click', () => {
  const effectDiv = document.querySelector('.principal');
  if (effectDiv.classList.contains('active')) {
    effectDiv.classList.remove('active');
    toggleBtn.innerText = "Masquer";
  } else {
    effectDiv.classList.add('active');
    toggleBtn.innerText = "Afficher";
  }
});