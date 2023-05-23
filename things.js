window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.Top');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 0) {
      navbar.style.top = '0';
    } else {
      navbar.style.top = '-100px';
    }
  });