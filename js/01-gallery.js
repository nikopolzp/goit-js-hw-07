import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(makePhotoSet(galleryItems));

const photoContainer = document.querySelector(".gallery");
const photoMarkup = makePhotoSet(galleryItems);
photoContainer.insertAdjacentHTML("beforeend", photoMarkup);
photoContainer.addEventListener("click", onphotoContainerClick);

function makePhotoSet(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
    })
    .join("");
}

function onphotoContainerClick(e) {}
