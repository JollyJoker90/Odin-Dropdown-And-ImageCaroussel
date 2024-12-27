const Carousel = (carouselContainer) => {
  let imgIndex = 0;
  carouselContainer.style.position = "relative";
  const items = Array.from(carouselContainer.children);

  const resetImages = () => {
    items.forEach((item) => {
      item.style.display = "none";
    });
  };
  const ActivateImage = (index) => {
    items[index].style.display = "block";
  };

  resetImages();
  ActivateImage(imgIndex);

  const prev = document.createElement("button");
  prev.textContent = "prev";
  prev.classList.add("btn", "prev");

  const next = document.createElement("button");
  next.textContent = "next";
  next.classList.add("btn", "next");

  carouselContainer.prepend(prev);
  carouselContainer.append(next);

  const indicators = [];
  items.forEach((item) => {
    console.log(item);
  });

  const ChangeImage = () => {
    if (imgIndex < 0) {
      imgIndex = items.length - 1;
    }
    resetImages();
    ActivateImage(imgIndex % 3);
  };

  const nextImage = () => {
    imgIndex += 1;
    ChangeImage();
  };

  const prevImage = () => {
    imgIndex -= 1;
    ChangeImage();
  };

  next.addEventListener("click", nextImage);
  prev.addEventListener("click", prevImage);
};

export default Carousel;
