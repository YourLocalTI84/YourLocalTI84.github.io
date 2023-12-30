document.addEventListener("DOMContentLoaded", function () {
    var dropdownButton = document.querySelector(".dropdown-btn");
    var dropdown = document.querySelector(".dropdown"); 
    var navbar = document.querySelector(".navbar");

    dropdownButton.addEventListener("click", function () {
        dropdown.classList.toggle("clicked");
        navbar.classList.toggle("open");
    });
});