
var isMobile = false;
var mobileMenuVisible = false;
var theme = 'light';
var ref = {};

function updateTheme(newTheme) {
  theme = newTheme;

  if(newTheme == 'light') {
    document.body.classList.remove('-theme-dark');
  } else {
    document.body.classList.add('-theme-dark');
  }
}

function onThemeChange(event) {
  this.updateTheme(event.matches ? 'dark' : 'light');
}

function updateThemeToggle(container) {
  var buttons = container.getElementsByTagName("button");
  for(var i=0; i<buttons.length; i++) {
    if(buttons[i].getAttribute('data-theme') == theme) {
      buttons[i].classList.add('-active');
    } else {
      buttons[i].classList.remove('-active');
    }
  }
}

function toggleMenu() {
  if(mobileMenuVisible) {
    hideMenu();
  } else {
    showMenu();
  }
};

function updateNavAccessibility() {
  ref.siteNavToggle.setAttribute("aria-hidden", !isMobile);
  ref.siteNavNav.setAttribute("aria-hidden", isMobile);

  if(isMobile) {
    if(mobileMenuVisible) {
      ref.siteNavNav.removeAttribute("hidden");
    } else {
      ref.siteNavNav.setAttribute("hidden", "hidden");
    }
  } else {
    ref.siteNavNav.removeAttribute("hidden");
  }
}

function showMenu() {
  mobileMenuVisible = true;

  // Update nav trigger accessibility properties
  ref.siteNavToggle.setAttribute("aria-expanded", true);

  // Update nav menu accessibility properties
  ref.siteNavNav.removeAttribute("hidden");

  setTimeout(function() {
    ref.siteNav.classList.add('-expanded');
  }, 5);
};

function hideMenu() {
  mobileMenuVisible = false;
  ref.siteNav.classList.remove('-expanded');

  // Update nav trigger accessibility properties
  ref.siteNavToggle.setAttribute("aria-expanded", false);

  setTimeout(function() {
    ref.siteNavNav.setAttribute("hidden", "hidden");
  }, 400);
};

function preventScroll(e){
  e.preventDefault();
  e.stopPropagation();
  return false;
};

function setupThemeToggle() {
  var themeToggle = document.getElementsByClassName("theme-toggle");
  var i, k, buttons;
  for(k=0; k<themeToggle.length; k++) {
    buttons = themeToggle[k].getElementsByTagName("button");
    for(i=0; i<buttons.length; i++) {
      buttons[i].addEventListener('click', function(event) {
        updateTheme(event.target.getAttribute('data-theme'));
        updateThemeToggle(event.target.parentElement);
      });
    }
  }
}

function resize() {
  var newValue = window.innerWidth < 768;

  if(newValue != isMobile) {
    isMobile = newValue;
    updateNavAccessibility();
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    updateTheme('dark');
  }

  window.addEventListener('resize', resize)
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', onThemeChange);

  ref.header =  document.getElementById("site-header");
  ref.siteNav =  document.getElementById('site-nav');
  ref.siteNavNav =  ref.siteNav.getElementsByTagName('nav')[0];
  ref.siteNavToggle = document.getElementById("site-nav-toggle");

  setupThemeToggle();
  resize();

  ref.siteNavToggle.addEventListener('click', toggleMenu);
});
