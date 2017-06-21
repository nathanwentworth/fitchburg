let items = document.getElementsByClassName('project-item');

function getItemElements() {
  for (let item of items) {
    item.addEventListener('mouseenter', function () { loadImages(item) }, { once: true });
  }
}

function loadImages(item) {
  if (!item.classList.contains('loaded')) {
    let gallery = item.getElementsByClassName('gallery')[0];
    if (gallery !== undefined) {
      console.log('loading images!');

      let imagesToReplace = gallery.getElementsByTagName('img');

      for (let img of imagesToReplace) {
        img.src = img.dataset.img;
      }

      item.classList.add('loaded');
    }
  } else {
    console.log('images already loaded!');
  }
}