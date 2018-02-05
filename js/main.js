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

var yearstart = $(".timetravel").offset().top;
var articleposition = $("article").offset().top;
var totalheight = $(".timetravel").height();
var section = (totalheight - $(window).height()) / 10;


$(window).scroll(function(event){
	var scroll = $(window).scrollTop();

	if(scroll > (yearstart + totalheight - $(window).height())){
		$(".title").css("position", "absolute");
    $(".title").css("bottom", 0);
    $(".title").css("top", '');
	} else if (scroll > yearstart) {
		$(".title").css("position", "fixed");
	} else if (scroll < yearstart) {
		$(".title").css("position", "absolute");
    $(".title").css("top", 0);
    $(".title").css("bottom", '');
	}

	if (scroll > ((9 * section) + yearstart)){
    $(".timetravel h1").replaceWith("<h1>" + 2008 + "</h1>");
		$(".timetravel h1").css("color", "white");
	} else if (scroll > ((8 * section) + yearstart)){
		$(".timetravel h1").replaceWith("<h1>" + 2009 + "</h1>");
	} else if (scroll > ((7 * section) + yearstart)){
		$(".timetravel h1").replaceWith("<h1>" + 2010 + "</h1>");
	} else if (scroll > ((6 * section) + yearstart)){
		$(".timetravel h1").replaceWith("<h1>" + 2011 + "</h1>");
	} else if (scroll > ((5 * section) + yearstart)){
		$(".timetravel h1").replaceWith("<h1>" + 2012 + "</h1>");
	} else if (scroll > ((4 * section) + yearstart)){
		$(".timetravel h1").replaceWith("<h1>" + 2013 + "</h1>");
	} else if (scroll > ((3 * section) + yearstart)){
		$(".timetravel h1").replaceWith("<h1>" + 2014 + "</h1>");
	} else if (scroll > ((2 * section) + yearstart)){
		$(".timetravel h1").replaceWith("<h1>" + 2015 + "</h1>");
	} else if (scroll > (section + yearstart)){
		$(".timetravel h1").replaceWith("<h1>" + 2016 + "</h1>");
  } else if (scroll > (yearstart)) {
    $(".timetravel h1").replaceWith("<h1>" + 2017 + "</h1>");
	} else {
		$(".timetravel h1").replaceWith("<h1>" + 2018 + "</h1>");
	}

});


// image preloading
var img1 = new Image();
img1.src = 'img/tomcruise.png';
var img2 = new Image();
img1.src = 'img/low.jpg';
var img3 = new Image();
img1.src = 'img/rings.jpg';
var img4 = new Image();
img1.src = 'img/buzz.jpg';
var img5 = new Image();
img1.src = 'img/circus.jpg';
var img6 = new Image();
img1.src = 'img/glory.jpg';
var img7 = new Image();
img1.src = 'img/scientology.jpg';
var img8 = new Image();
img1.src = 'img/medal.png';
var img9 = new Image();
img1.src = 'img/biography.jpg';
var img10 = new Image();
img1.src = 'img/obama.jpg';
var img11 = new Image();
img1.src = 'img/birther.jpg';
var img12 = new Image();
img1.src = 'img/britney.jpg';
var img13 = new Image();
img1.src = 'img/rant.jpg';
