const Dropdown = (dropdownContainer) => {
  const btn = dropdownContainer.querySelector("button");
  // const items = dropdownContainer.querySelectorAll("div");
  const items = Array.from(dropdownContainer.children);
  // console.log(items);
  // console.log(items.slice(1));
  btn.addEventListener("click", () => {
    // items.forEach((item) => {
    //   item.classList.toggle("hidden");
    // });
    items.slice(1).forEach((item) => {
      item.classList.toggle("hidden");
    });
  });
};

export default Dropdown;
