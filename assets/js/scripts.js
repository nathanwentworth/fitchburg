let headerY = document.getElementsByTagName('header')[0].getBoundingClientRect().height;
let nav = document.getElementById('nav');
let navUl = nav.getElementsByTagName('ul')[0];
let navBtn = document.getElementById('nav-btn');
let navElems = nav.children;
let url = window.location;

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
    for (let el of navElems) {
      let linkText = el.innerText;
      console.log(linkText);
      if (url.toString().includes(el.innerText.toLowerCase())) {
        el.classList.add("selected");
        break;
      }
    }
  }
}

function positionNavUl() {
  let headerContainer = document.getElementsByClassName('header-container')[0];
  let headerContainerPadding = window.getComputedStyle(headerContainer).
    getPropertyValue('padding-top');

  headerY -= headerContainerPadding;

  console.log(headerContainerPadding);

  navUl.style.top = headerY + 'px';
}

function addEventsToDropdown() {
  navBtn.addEventListener('click', function (event) {
    toggleMenu(event);
  });

  document.addEventListener('click', function (event) {
    let target = event.target;
    if (!target.contains(navBtn)) {
      toggleMenu(null, false);
    }
  });

  let noClickElems = nav.querySelectorAll('.no-click');

  for (let noClick of noClickElems) {
    noClick.addEventListener('click', function(event) { toggleMenu(event) });
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