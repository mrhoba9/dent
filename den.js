"use strict";

const addEventOnElem = function (elem, type, callback) {
	if (elem.length > 1) {
		for (let i = 0; i < elem.length; i++) {
			elem[i].addEventListener(type, callback);
		}
	} else {
		elem.addEventListener(type, callback);
	}
};
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navbarToggler = document.querySelector("[data-nav-toggler]");
const toggleNav = function () {
	navbar.classList.toggle("active");
	navbarToggler.classList.toggle("active");
};
addEventOnElem(navbarToggler, "click", toggleNav);
const closeNav = function () {
	navbar.classList.remove("active");
	navbarToggler.classList.remove("active");
};
addEventOnElem(navbarLinks, "click", closeNav);
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");
window.addEventListener("scroll", function () {
	if (window.scrollY >= 100) {
		header.classList.add("active");
		backTopBtn.classList.add("active");
	} else {
		header.classList.remove("active");
		backTopBtn.classList.remove("active");
	}
});
document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById("loadinPage-loading-screen");
    setTimeout(() => {
        loadingScreen.style.display = "none";
    }, 3000);
});

/*for saving contact*/
// document.getElementById("saveContact").onclick = downCont;
// function downCont() {
// 	this.href = URL.createObjectURL(new Blob([`
// 		BEGIN:VCARD
// 		VERSION:3.0
// 		FN:Abdelrahman Shoieb
// 		TEL;TYPE=mobile:01021612312
// 		TEL;TYPE=mobile:01555926159
// 		TEL;TYPE=work:0403400642
// 		TEL;TYPE=home:01092060889
// 		EMAIL:abdelrahmanshoieb@gmail.com
// 		ADR;TYPE=home:;;9 شارع عزيز فهمي - بجوار سينما مصر سابقا بعد صيدليه امل سعد - الدور التالت;طنطا;;;
// 		END:VCARD
// 	`], { type: 'text/vcard' }));
// }
