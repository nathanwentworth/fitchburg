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

// from https://stackoverflow.com/a/85973/7659029
function isFunction(possibleFunction) {
  return typeof(possibleFunction) === typeof(Function);
}

function init() {

  if (navUl != undefined) {
    let headerContainer = document.getElementsByClassName('header-container')[0];
    let headerContainerPadding = window.getComputedStyle(headerContainer).
      getPropertyValue('padding-top');

    headerY -= headerContainerPadding;

    console.log(headerContainerPadding);

    navUl.style.top = headerY + 'px';
  }


  let noClickElems = nav.querySelectorAll('.no-click');
  let dropdownBtn = document.getElementById('dropdown-btn');

  if (navBtn != undefined) {
    navBtn.addEventListener('click', function (event) {
      toggleMenu(event);
    })
  }

  if (dropdownBtn != undefined) {
    document.addEventListener('click', function (event) {
      let target = event.target;
      if (!target.contains(dropdownBtn)) {
        toggleMenu(null, false);
      }
    });

    for (let noClick of noClickElems) {
      noClick.addEventListener('click', function(event) { toggleMenu(event) });
    }
  }



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


  console.log(navElems);
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