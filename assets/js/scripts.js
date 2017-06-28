var nav = document.getElementById('nav');
var navUl = nav.getElementsByTagName('ul')[0];
var navBtn = document.getElementById('nav-btn');
var navElems = nav.children;
var url = window.location;

window.onload = function () {
  init();

  if (typeof getItemElements !== "undefined") {
    getItemElements();
  }
}

function init() {
  if (navUl != undefined && navBtn != undefined) {
    positionNavUl();
    addEventsToDropdown();
  }

  setSelectedNavItem();
}

// from https://stackoverflow.com/a/85973/7659029
function isFunction(possibleFunction) {
  return typeof(possibleFunction) === typeof(Function);
}

function setSelectedNavItem() {
  if (url.pathname == "/") {
    document.getElementsByClassName('first-selected')[0].classList.add("selected");
  } else {
    for (var i = 0; i < navElems.length; i++) {
      var linkText = navElems[i].innerText;
      console.log(linkText);
      if (url.toString().includes(navElems[i].innerText.toLowerCase())) {
        navElems[i].classList.add("selected");
        break;
      }
    }
  }
}

function positionNavUl() {
  var headerContainer = document.getElementsByClassName('header-container')[0];
  var headerContainerPadding = window.getComputedStyle(headerContainer).
    getPropertyValue('padding-top');

  var headerY = document.getElementsByTagName('header')[0].getBoundingClientRect().height;

  headerY -= headerContainerPadding;

  console.log(headerContainerPadding);

  navUl.style.top = headerY + 'px';
}

function addEventsToDropdown() {
  navBtn.addEventListener('click', function (event) {
    toggleMenu(event);
  });

  document.addEventListener('click', function (event) {
    var target = event.target;
    if (!target.contains(navBtn)) {
      toggleMenu(null, false);
    }
  });

  var noClickElems = nav.querySelectorAll('.no-click');

  for (var i = 0; i < noClickElems.length; i++) {
    noClickElems[i].addEventListener('click', function(event) { toggleMenu(event) });
  }
}

function toggleMenu(event, state) {
  const OPEN = 'open';
  if (event !== null) {
    event.preventDefault();
  }

  console.log(state);

  if (state == undefined) {
    state = true;
  }

  if (!state || navUl.classList.contains(OPEN)) {
    navUl.classList.remove(OPEN);
    console.log("closed!");
  } else {
    navUl.classList.add(OPEN);
    console.log("open!");
  }
}