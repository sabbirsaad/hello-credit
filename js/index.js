navbar = document.querySelector(".bottom-navbar").querySelectorAll("ul li a");

navbar.forEach((e) => {
    e.addEventListener("click", function () {
        navbar.forEach((n) => n.classList.remove("active"));
        this.classList.add("active");
    });
});
