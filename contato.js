function toggleMenu() {
  const menu = document.getElementById("menu-mob");
  const icon = document.querySelector(".icon");
  const body = document.body;
  
  
  menu.classList.toggle("active");
  icon.classList.toggle("open");
  body.classList.toggle("no-scroll");
}