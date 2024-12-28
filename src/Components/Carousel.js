const Carousel = (carouselContainer) => {
  let imgIndex = 0;
  const indicators = [];
  const items = Array.from(carouselContainer.children);

  const resetImages = () => {
    items.forEach((item) => {
      item.style.display = "none";
    });
  };
  const ActivateImage = (index) => {
    items[index].style.display = "block";
  };

  const ResetIndicators = () => {
    indicators.forEach((indicator) => {
      indicator.classList.remove("active");
    });
  };
  const ActivateIndicator = (index) => {
    indicators[index].classList.add("active");
  };

  const prev = document.createElement("button");
  prev.textContent = "prev";
  prev.classList.add("btn", "prev");

  const next = document.createElement("button");
  next.textContent = "next";
  next.classList.add("btn", "next");

  carouselContainer.prepend(prev);
  carouselContainer.append(next);

  const handleIndicator = (e) => {
    ResetIndicators();
    e.target.classList.add("active");
    imgIndex = e.target.dataset.id;
    ChangeImage(imgIndex);
  };

  const indicatorContainer = document.createElement("div");
  indicatorContainer.classList.add("indicator-container");
  items.forEach(() => {
    const circle = document.createElement("span");
    circle.classList.add("indicator");
    indicators.push(circle);
    circle.dataset.id = indicators.length - 1;
    indicatorContainer.append(circle);
    circle.addEventListener("click", handleIndicator);
  });
  resetImages();
  ActivateImage(imgIndex);
  ActivateIndicator(imgIndex);

  carouselContainer.append(indicatorContainer);
  const ChangeImage = () => {
    if (imgIndex < 0) {
      imgIndex = items.length - 1;
    }
    resetImages();
    ActivateImage(imgIndex % 3);
    ResetIndicators();
    ActivateIndicator(imgIndex % 3);
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
