document.addEventListener('DOMContentLoaded', function() {

  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  var mobileMenuBtn = document.getElementById('mobile-menu-btn');
  var mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  }

});