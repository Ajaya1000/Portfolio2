const nav_btn = document.querySelector(".nav-btn");
const menu = document.querySelector(".menu");
const menu_brand = document.querySelector(".menu-brand");
const menu_items = document.querySelectorAll(".menu-item");

nav_btn.addEventListener("click", show);

let showed = false;

function show() {
  if (!showed) {
    nav_btn.classList.add("close");
    menu_brand.classList.add("show");
    menu.classList.add("show");
    menu_items.forEach((menu_item) => {
      menu_item.classList.add("show");
    });
    showed = true;
  } else {
    nav_btn.classList.remove("close");
    menu_brand.classList.remove("show");
    menu.classList.remove("show");
    menu_items.forEach((menu_item) => {
      menu_item.classList.remove("show");
    });
    showed = false;
  }
}
