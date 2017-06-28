
var body;

var imageEls;
var lightbox;
var lightboxImg;
var lightboxVis;

var btnLeft;
var btnRight;
var btnClose;

var imgIndex;
var imgLength;

window.addEventListener('load', function () {
  getImages();
});

var imageSrcs = []
function getImages() {

  body = document.getElementsByTagName('body')[0];
  imageEls = document.querySelectorAll('.images')[0].getElementsByTagName('img');
  imgLength = imageEls.length;
  lightbox = document.getElementById('lightbox');
  lightboxImg = document.getElementById('lightbox-img');

  btnLeft = document.getElementById('lightbox-left');
  btnRight = document.getElementById('lightbox-right');
  btnClose = document.getElementById('lightbox-close');

  btnLeft.addEventListener('click', function () {
    incrementIndex(-1);
  });

  btnRight.addEventListener('click', function () {
    incrementIndex(1);
  });

  btnClose.addEventListener('click', function () {
    lightboxToggle();
  });

  lightboxVis = lightbox.classList.contains('lightbox-visible');
  lightbox.addEventListener('click', function (event) {
    if (event.target == lightbox) {
      lightboxToggle();
    }
  });

  for (var i = 0; i < imageEls.length; i++) {
    imageEls[i].addEventListener('click', function (event) {
      imgIndex = getIndex(event);
      lightboxToggle();
    });
    imageSrcs[i] = imageEls[i].src;
  }

  document.addEventListener('keydown', function (event) {
    console.log(lightboxVis);
    console.log(event.keyCode);
    if (lightboxVis) {

      if (event.keyCode == 27) {
        lightboxToggle();
        return;
      }

      if (event.keyCode == 37 || event.keyCode == 65) {
        incrementIndex(-1);
      } else if (event.keyCode == 39 || event.keyCode == 68) {
        incrementIndex(1);
      }
    }
  });

  console.log('images loaded');
}

function incrementIndex(amount) {
  imgIndex += amount;

  if (imgIndex < 0) {
    imgIndex = imgLength - 1;
  }

  if (imgIndex >= imgLength) {
    imgIndex = 0;
  }

  console.log(imgIndex);
  setLightboxImage(imgIndex);
}

function getIndex(event) {
  var target = event.target;

  for (var i = 0; i < imageEls.length; i++) {
    if (imageEls[i] == target) {
      console.log("index is " + i);
      return i;
    }
  }
}

function lightboxToggle() {
  if (lightboxVis) {
    lightbox.classList.add('lightbox-hidden');
    lightbox.classList.remove('lightbox-visible');

    body.classList.remove('no-scroll');

    lightboxVis = false;
  } else {
    lightbox.classList.add('lightbox-visible');
    lightbox.classList.remove('lightbox-hidden');

    body.classList.add('no-scroll');

    lightboxVis = true;

    setLightboxImage();
  }
}

function setLightboxImage() {
  lightboxImg.src = imageSrcs[imgIndex];
}
