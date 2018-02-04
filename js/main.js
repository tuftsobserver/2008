var classname = document.getElementsByClassName("hover");

Array.from(classname).forEach(function(element) {

  // if data-size="fullscreen"
  element.addEventListener("mouseover", function() {
    var filename = element.dataset.filename;
    filename = "url(img/" + filename + ")";
    document.getElementById("popup-media").style.backgroundImage = filename;
  }, false);

  element.addEventListener("mouseout", function() {
    document.getElementById("popup-media").style.backgroundImage = "";
  }, false);

  // elseif data-size="small"
  // var img = $('#' + imgid);
  //
  // element.addEventListener("mouseover", function() {
  //   var imgid = element.dataset.imgid;
  //   var coords = element.offset();
  //   var spanh = element.height();
  //   var spanw = element.width();
  //   var imgh = img.height();
  //   var imgw = img.width();
  //   coords.top += spanh/2 - imgh/2;
  //   coords.left += spanw/2 - imgw/2;
  //   img.offset(coords);
  //   img.show();
  // }
  //
  // element.addEventListener("mouseout", function() {
  //   img.hide();
  // }, false);

});
