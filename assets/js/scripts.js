let nav = document.getElementById('nav');
let navUl = nav.getElementsByTagName('ul')[0];
let dropdownBtn = document.getElementById('dropdown-btn');
let navElems = nav.children;
let url = window.location;

window.onload = function () {
  init();
  getItemElements();
}

function init() {

  let noClickElems = nav.querySelectorAll('.no-click');

  document.addEventListener('click', function (event) {
    let target = event.target;
    if (!target.contains(dropdownBtn)) {
      toggleMenu(null, false);
    }
  });

  for (let noClick of noClickElems) {
    noClick.addEventListener('click', function(event) { toggleMenu(event) });
  }


  if (url.pathname == "/") {
    navElems[0].classList.add("selected");
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