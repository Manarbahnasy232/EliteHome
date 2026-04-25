  const favBtn = document.getElementById('favBtn');
  favBtn.addEventListener('click', function() {
    const icon = this.querySelector('i');
    icon.classList.toggle('bi-heart');
    icon.classList.toggle('bi-heart-fill');
  });
