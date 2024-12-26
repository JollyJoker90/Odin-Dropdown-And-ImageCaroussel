const Carousel = (carouselContainer) => {
  let imgIndex = 0;
  carouselContainer.style.position = "relative";
  const items = Array.from(carouselContainer.children);

  const resetImages = () => {
    items.forEach((item) => {
      item.style.display = "none";
    });
  };
  // console.log(items);
  resetImages();
  items[imgIndex].style.display = "block";

  const prev = document.createElement("button");
  prev.textContent = "prev";
  prev.classList.add("btn", "prev");

  const next = document.createElement("button");
  next.textContent = "next";
  next.classList.add("btn", "next");

  carouselContainer.prepend(prev);
  carouselContainer.append(next);

  const nextImage = () => {};
};

export default Carousel;
