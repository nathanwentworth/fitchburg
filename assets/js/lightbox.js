var imageEls = document.querySelectorAll('.images')[0].getElementsByTagName('img');
var lightbox = document.getElementById('lightbox');
var lightboxImg = document.getElementById('lightbox-img');

getImages();

var imageSrcs = []
function getImages() {
  for (var i = 0; i < imageEls.length; i++) {
    imageEls[i].addEventListener('click', function (event) {
      var index = getIndex(event);
    });
    // imageSrcs[i] = imageEls[i].src;
  }
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
