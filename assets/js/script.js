// Function for smooth scrolling between nav links and sections
$(document).ready(function () {
    $("a, button").on("click", function (event) {
    if (this.hash !== "") {
        event.preventDefault();
        let hash = this.hash;
        $("html, body").animate(
        {
            scrollTop: $(hash).offset().top,
        },
        700,
        function () {
            window.location.hash = hash;
        }
        );
    }
    });

// Function to add or remove active class on nav-items
    $(".nav-link").on("click", function(e){
    $("a.nav-link").removeClass("active");
    $(this).addClass("active");
    });

// Function for image carousel slideshow 
    $(".img-container:gt(0)").hide();
    setInterval(function () {
    $(".img-container:first")
        .fadeOut(5000)
        .next()
        .fadeIn(5000)
        .end()
        .appendTo("#photo-carousel-gallery");
    }, 7000);
});

// Function to close mobile menu after click
window.onclick = function (e) {
    let dropDown = document.getElementById("navbarResponsive");
    if (dropDown.classList.contains("show")) {
    dropDown.classList.remove("show");
    }
};
