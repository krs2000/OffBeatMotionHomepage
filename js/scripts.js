var navSize=149;

var miniVideoContainer= document.getElementsByClassName("thirdSection");
var vimeoEmebed=["249434988","248575397","233169986","233168772","233168159","233167640","233166754","233165733","233164515"];

var hotel ='233170709';

function vimeoMovie(embed){
	return "<iframe class=\"miniVideo\" src=\"https://player.vimeo.com/video/"+embed+"?title=0&byline=0&portrait=0\"  frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>"
}

document.onload = loadVideos();


function loadVideos(){
for(var i = 0 ; i< vimeoEmebed.length; i++) {
	var video = vimeoMovie(vimeoEmebed[i])
	console.log(video);
	miniVideoContainer[0].innerHTML +=  video;
}

}


$('.videosLink').click(function(){
 positionabout = $('#videos').offset().top - navSize; // Position of #about - nav height = correct position
 $("html, body").animate({scrollTop:positionabout}, '500', 'swing');
})

$('.aboutLink').click(function(){
 positionabout = $('#about').offset().top - navSize; // Position of #about - nav height = correct position
 $("html, body").animate({scrollTop:positionabout}, '500', 'swing');
})

$('.workflowLink').click(function(){
 positionabout = $('#workflow').offset().top - navSize; // Position of #about - nav height = correct position
 $("html, body").animate({scrollTop:positionabout}, '500', 'swing');
})

$('.clientsLink').click(function(){
 positionabout = $('#clients').offset().top - navSize; // Position of #about - nav height = correct position
 $("html, body").animate({scrollTop:positionabout}, '500', 'swing');
})

$('.contactLink').click(function(){
 positionabout = $('#contact').offset().top - navSize; // Position of #about - nav height = correct position
 $("html, body").animate({scrollTop:positionabout}, '500', 'swing');
})

$('.logo').click(function(){
 positionabout = $('#cover').offset().top - navSize; // Position of #about - nav height = correct position
 $("html, body").animate({scrollTop:positionabout}, '500', 'swing');
})



$(window).load(function(){
    $('#spinner').fadeOut(1000);
   $('html, body').css('overflowY', 'auto'); 
})