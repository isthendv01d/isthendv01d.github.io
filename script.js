
function fade() {
  var faded = document.querySelectorAll(".fade");
  for (var i = 0; i < faded.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = faded[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      faded[i].classList.add("active");
    } else {
      faded[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", fade);
fade();


