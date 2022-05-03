
var mobileMenuVisible = false;
var ref = {};

function toggleMenu() {
  if(mobileMenuVisible) {
    hideMenu();
  } else {
    showMenu();
  }
};

function updateNavAccessibility() {
  var isMobile = window.innerWidth <= 375;

  ref.navTrigger.setAttribute("aria-hidden", !isMobile);
  ref.siteNav.setAttribute("aria-hidden", isMobile);

  if(isMobile) {
    ref.siteNav.setAttribute("hidden", "hidden");
  }
}

function showMenu() {
  mobileMenuVisible = true;

  // Update nav trigger accessibility properties
  ref.navTrigger.setAttribute("aria-expanded", true);

  // Update nav menu accessibility properties
  ref.siteNav.removeAttribute("hidden");

  setTimeout(function() {
    ref.header.classList.add('-active');
  }, 5);
};

function hideMenu() {
  mobileMenuVisible = false;
  ref.header.classList.remove('-active');

  // Update nav trigger accessibility properties
  ref.navTrigger.setAttribute("aria-expanded", false);

  setTimeout(function() {
    ref.siteNav.setAttribute("hidden", "hidden");
  }, 400);
};

function preventScroll(e){
  e.preventDefault();
  e.stopPropagation();
  return false;
};

document.addEventListener("DOMContentLoaded", function(event) {
  ref.header =  document.getElementById("site-header");
  ref.siteNav =  document.getElementById('site-nav');
  ref.navTrigger = document.getElementById("nav-trigger");

  updateNavAccessibility();

  if(ref.navTrigger) {
    ref.navTrigger.addEventListener('click', toggleMenu);
  }
});
