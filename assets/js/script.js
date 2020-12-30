$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      let hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });

  $(".nav-link").on("click", function(e){
    $("a.nav-link").removeClass("active");
    $(this).addClass("active");
  });
 
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


window.onclick = function (e) {
  let dropDown = document.getElementById("navbarResponsive");
  if (dropDown.classList.contains("show")) {
    dropDown.classList.remove("show");
  }
};