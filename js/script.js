const burgerBtn = document.querySelector(".burger-menu__btn");
const burgerIcon = document.querySelector(".burger-menu__icon");
const menuList = document.querySelector(".menu__list")
burgerBtn.addEventListener("click", function(){
	burgerIcon.classList.toggle("burger-menu__icon-active");
	menuList.classList.toggle("menu__list--open");
});