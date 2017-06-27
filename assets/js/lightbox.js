
var imageEls;
var lightbox;
var lightboxImg;
var lightboxVis;

var imgIndex;
var imgLength;

window.addEventListener('load', function () {
  getImages();
});

var imageSrcs = []
function getImages() {

  imageEls = document.querySelectorAll('.images')[0].getElementsByTagName('img');
  imgLength = imageEls.length;
  lightbox = document.getElementById('lightbox');
  lightboxImg = document.getElementById('lightbox-img');

  lightboxVis = lightbox.classList.contains('lightbox-visible');
  lightbox.addEventListener('click', function () {
    lightboxToggle();
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
        imgIndex--;
        if (imgIndex < 0) {
          imgIndex = imgLength - 1;
        }

      } else if (event.keyCode == 39 || event.keyCode == 68) {
        imgIndex++;
        if (imgIndex >= imgLength) {
          imgIndex = 0;
        }
      }

      console.log(imgIndex);

      setLightboxImage(imgIndex);
    }
  });

  console.log('images loaded');
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
    lightboxVis = false;
  } else {
    lightbox.classList.add('lightbox-visible');
    lightbox.classList.remove('lightbox-hidden');

    lightboxVis = true;

    setLightboxImage();
  }
}

function setLightboxImage() {
  lightboxImg.src = imageSrcs[imgIndex];
}
