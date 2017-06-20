

window.onload = function () {
  init();
}

function init() {
  let navElems = document.getElementById('nav').children;
  let url = window.location;

  if (url.pathname == "/") {
    navElems[0].classList.add("selected");
  } else {
    for (let i = 0; i < navElems.length; i++) {
      let linkText = navElems[i].innerText;
      console.log(linkText);
      if (url.toString().includes(navElems[i].innerText.toLowerCase())) {
        navElems[i].classList.add("selected");
        break;
      }
    }
  }


  console.log(navElems);
}