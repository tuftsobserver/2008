var classname = document.getElementsByClassName("hover");

Array.from(classname).forEach(function(element) {
  element.addEventListener("mouseover", function() {
    var filename = element.dataset.filename;
    filename = "url(img/" + filename + ")";
    document.getElementById("popup-media").style.backgroundImage = filename;
  }, false);

  element.addEventListener("mouseout", function() {
    document.getElementById("popup-media").style.backgroundImage = "";
  }, false);

});
