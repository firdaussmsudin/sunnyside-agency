document
.getElementsByClassName("hamburger-menu")[0]
.addEventListener("click", () => {
  let get_mobile_menu = document.getElementById("mobile-menu");
  if (get_mobile_menu.classList.contains("mobile-nav-hide")) {
    get_mobile_menu.classList.remove("mobile-nav-hide");
    assignClicktoMenu();
  } else {
    get_mobile_menu.classList.add("mobile-nav-hide");
  }
});

// Assign each mobile menu when click to close the menu
function assignClicktoMenu() {
let html_collection =
  document.querySelector("#mobile-menu ul").children;
Array.from(html_collection).forEach((element) => {
  element.addEventListener("click", () => {
    let get_mobile_menu = document.getElementById("mobile-menu");
    get_mobile_menu.classList.add("mobile-nav-hide");
  });
});


}