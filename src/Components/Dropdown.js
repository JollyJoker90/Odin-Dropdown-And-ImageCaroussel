const Dropdown = (dropdownContainer) => {
  const btn = dropdownContainer.querySelector("button");
  // const items = dropdownContainer.querySelectorAll("div");
  const items = dropdownContainer.children;
  btn.addEventListener("click", () => {
    // items.forEach((item) => {
    //   item.classList.toggle("hidden");
    // });
    items.splice(0, 1).forEach((item) => {
      item.classList.toggle("hidden");
    });
  });
};

export default Dropdown;
