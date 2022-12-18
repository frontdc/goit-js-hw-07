import { galleryItems } from './gallery-items.js';
// Change code below this line



const gallery = document.querySelector('.gallery')



const markup = galleryItems.reduce((acc, item) => acc + `

<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" data-source="${item.original}" alt="${item.description}"></img>
    </a>
</li>
</il>`, ' ');



gallery.insertAdjacentHTML('beforeend', markup)


const onGalleryClick = (e) => {
  e.preventDefault();

  if (e.target.classList.contains("gallery__link")) return;
    const source = e.target.dataset.source;
    
  const instance = basicLightbox.create(`
    <img src="${source}"width="800" height="600">`);

  instance.show();
};

gallery.addEventListener("click", onGalleryClick);




