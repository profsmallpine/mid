document.addEventListener("DOMContentLoaded", function(){
  // When the user scrolls the page, execute manageStickyClassForNav
  window.onscroll = function() { manageStickyClassForNav() };
  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;

  // Add the sticky class to the navbar when you reach its scroll position.
  // Remove "sticky" when you leave the scroll position
  function manageStickyClassForNav() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }

  // Scroll to section when clicking nav item
  var navItems = ['writing', 'photography', 'work'];
  for (var i = 0; i < navItems.length; i++) {
    var id = navItems[i];
    var el = document.getElementById(id);
    el.addEventListener('click', function(e){
      var section = document.getElementById(this.id+'-section')
      if (section) {
        e.preventDefault();
        window.scrollTo({
          top: (section.getBoundingClientRect().top + window.scrollY - 30),
          behavior: 'smooth'
        });
      }
    });
  }

  // If coming from different page, scrollTo
  var urlParams = new URLSearchParams(window.location.search);
  var nav = urlParams.get('nav');
  if (nav) {
    window.scrollTo({
      top: (document.getElementById(nav+'-section').getBoundingClientRect().top + window.scrollY - 30),
      behavior: 'smooth'
    });
  }
});
