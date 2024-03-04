"use strict";

const detailImageSelector = `[data-image-role="target"]`;
const detailTitleSelector = `[data-image-role="title"]`;
const detailFrameSelector = `[data-image-role="frame"]`;
const thumbnailLinkSelector = `[data-image-role="trigger"]`;

const hiddenDetailClass = "hidden-detail";
const tinyEffectClass = "is-tiny";

function setDetails(imageURL, titleText) {
  const detailImage = document.querySelector(detailImageSelector);
  detailImage.setAttribute("src", imageURL);

  const detailTitle = document.querySelector(detailTitleSelector);
  detailTitle.textContent = titleText;
}

function imageFromThumbnail(thumbnail) {
  return thumbnail.getAttribute("data-image-url");
}

function titleFromThumbnail(thumbnail) {
  return thumbnail.getAttribute("data-image-title");
}

function setDetailsFromThumbnail(thumbnail) {
  setDetails(imageFromThumbnail(thumbnail), titleFromThumbnail(thumbnail));
}

function addThumbnailClickHandler(thumbnail) {
  thumbnail.addEventListener("click", (event) => {
    event.preventDefault();
    setDetailsFromThumbnail(thumbnail);
    showDetails();
  });
}

function hideDetails() {
  document.body.classList.add(hiddenDetailClass);
}

function showDetails() {
  document.body.classList.remove(hiddenDetailClass);

  const frame = document.querySelector(detailFrameSelector);
  frame.classList.add(tinyEffectClass);
  setTimeout(() => frame.classList.remove(tinyEffectClass), 50);
}

document
  .querySelectorAll(thumbnailLinkSelector)
  .forEach(addThumbnailClickHandler);

document.body.addEventListener("keyup", (event) => {
  if (event.key === "Escape") {
    event.preventDefault();
    hideDetails();
  }
});
