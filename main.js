function filterGallery(category) {
  const images = document.querySelectorAll('.gallery img');
  images.forEach(img => {
    if (category === 'all' || img.dataset.category === category) {
      img.style.display = 'inline-block';
    } else {
      img.style.display = 'none';
    }
  });
}
const form = document.querySelector('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  alert('Thanks for subscribing!');
});
