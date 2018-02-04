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

var yearstart = $(".timetravel").offset().top;
var articleposition = $("article").offset().top;
var totalheight = $(".timetravel").height();
var section = totalheight / 11;


$(window).scroll(function(event){
	var scroll = $(window).scrollTop();
	
	console.log("yearstarts: " + yearstart);
	console.log("total height: " + totalheight);	
	console.log("section: " + section);
	console.log("scroll: " + scroll);
	console.log("scroll end: " + (yearstart + totalheight - section));

	
	if(scroll > (yearstart + totalheight - section + 200)){
			$(".timetravel").css("position", "relative");
	} else if(scroll > yearstart) {
		$(".timetravel").css("position", "fixed");
	} else if(scroll < yearstart){
		$(".timetravel").css("position", "relative");
	} 

	console.log((10 * section) + yearstart);

	if (scroll > ((10 * section) + yearstart)){
		$(".timetravel h1").replaceWith("<h1>" + 2008 + "</h1>");
		$(".timetravel h1").css("color", "white");
	} else if (scroll > ((9 * section) + yearstart)){
		$(".timetravel h1").replaceWith("<h1>" + 2009 + "</h1>");
	} else if (scroll > ((8 * section) + yearstart)){
		$(".timetravel h1").replaceWith("<h1>" + 2010 + "</h1>");
	}else if (scroll > ((7 * section) + yearstart)){
		$(".timetravel h1").replaceWith("<h1>" + 2011 + "</h1>");
	} else if (scroll > ((6 * section) + yearstart)){
		$(".timetravel h1").replaceWith("<h1>" + 2012 + "</h1>");
	} else if (scroll > ((5 * section) + yearstart)){
		$(".timetravel h1").replaceWith("<h1>" + 2013 + "</h1>");
	} else if (scroll > ((4 * section) + yearstart)){
		$(".timetravel h1").replaceWith("<h1>" + 2014 + "</h1>");
	} else if (scroll > ((3 * section) + yearstart)){
		$(".timetravel h1").replaceWith("<h1>" + 2015 + "</h1>");
	} else if (scroll > ((2 * section) + yearstart)){
		$(".timetravel h1").replaceWith("<h1>" + 2016 + "</h1>");
	} else if(scroll > (yearstart + section)){
		$(".timetravel h1").replaceWith("<h1>" + 2017 + "</h1>");
	} else
		$(".timetravel h1").replaceWith("<h1>" + 2018 + "</h1>");

	// console.log("scroll: " + scroll);
	// console.log("year height: " + totalheight);
	// console.log("article pos: " + articleposition);

	
// if(scroll > 1400){
// 	$(".timetravel h1").replaceWith("<h1>2008</h1>");
// 		$(".timetravel").addClass("absoluteposition").removeClass("fixposition")
// 	}
	// else if(scroll > 1500)
	// 	$(".timetravel h1").replaceWith("<h1>2009</h1>");
	// else if(scroll > 1400)
	// 	$(".timetravel h1").replaceWith("<h1>2010</h1>");
	// else if(scroll > 1300)
	// 	$(".timetravel h1").replaceWith("<h1>2011</h1>");
	// else if(scroll > 1200)
	// 	$(".timetravel h1").replaceWith("<h1>2012</h1>");
	// else if(scroll > 1100)
	// 	$(".timetravel h1").replaceWith("<h1>2013</h1>");
	// else if(scroll > 1000)
	// 	$(".timetravel h1").replaceWith("<h1>2014</h1>");
	// else if(scroll > 900)
	// 	$(".timetravel h1").replaceWith("<h1>2015</h1>");
	// else if(scroll > 800)
	// 	$(".timetravel h1").replaceWith("<h1>2016</h1>");
	// else if (scroll > 690)
	// $(".timetravel h1").replaceWith("<h1>2017</h1>");
	// else if(scroll > 630 && scroll < 1600){
	// 	$(".timetravel").addClass("fixposition").removeClass("absoluteposition");
	// 	console.log("helo");
	// } 
});