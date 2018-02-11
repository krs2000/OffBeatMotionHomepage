var navSize=90;

var miniVideoContainer= document.getElementById("content");

// var vimeoEmebed=["249434988","248575397","233169986","233168772","233168159","233167640","233166754","233165733","233164515"];

// var hotel ='233170709';

// function vimeoMovie(embed){
// 	return "<iframe class=\"miniVideo\" src=\"https://player.vimeo.com/video/"+embed+"?title=0&byline=0&portrait=0\"  frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>"
// }

function videoImg(src){
	return "<div class=\"miniVideoConatiner\"> <img class=\"miniVideo\"  src=\"./img/mini/"+src+".jpg\" alt=\"sample video\"/><div class=\"mask\"><img class=\"playButton\" src=\"./img/play.png\" alt=\"play\"></div></div>"
}

document.onload = loadVideos();


function loadVideos(){
for(var i = 1 ; i< 10; i++) {
	var video = videoImg(i);
	miniVideoContainer.innerHTML +=  video;
}
}





$('.videosLink').click(function(){
 positionabout = $('#content').offset().top - navSize; // Position of #about - nav height = correct position
 $("html, body").animate({scrollTop:positionabout}, '500', 'swing');
  $('#content').removeClass();
  $('#content').html("");
 $('#content').addClass("videoList");
 loadVideos();
})

$('.scrollDown').click(function(){
 positionabout = $('#content').offset().top - navSize; // Position of #about - nav height = correct position
 $("html, body").animate({scrollTop:positionabout}, '500', 'swing');
})

$('.aboutLink').click(function(){
 positionabout = $('#content').offset().top - navSize; // Position of #about - nav height = correct position
 $("html, body").animate({scrollTop:positionabout}, '500', 'swing');
 $('#content').removeClass()
$('#content').html("");
 $('#content').addClass("about");
$('#content').html(returnTimeline());
})

$('.clientsLink').click(function(){
 positionabout = $('#content').offset().top - navSize; // Position of #about - nav height = correct position
 $("html, body").animate({scrollTop:positionabout}, '500', 'swing');
 $('#content').removeClass();
 $('#content').html("");
 $('#content').addClass("clients");
$('#content').html(returnClients());
})

$('.contactLink').click(function(){
 positionabout = $('#content').offset().top - navSize; // Position of #about - nav height = correct position
 $("html, body").animate({scrollTop:positionabout}, '500', 'swing');
 $('#content').removeClass();
 $('#content').html("");
 $('#content').addClass("contact");
$('#content').html(returnContact());
})



$('.logo').click(function(){
 positionabout = $('#cover').offset().top - navSize; // Position of #about - nav height = correct position
 $("html, body").animate({scrollTop:positionabout}, '500', 'swing');
})



$(window).load(function(){
    $('#spinner').fadeOut(1000);
   $('html, body').css('overflowY', 'auto'); 
})


// $(".miniVideoConatiner").hover(
//      function(){
//     $(this).children(".mask").children("img").css("display","block");
// });

// $(".miniVideoConatiner").mouseout(
//   function(){
//     $(this).children(".mask").children("img").css("display", "none");
// }
//  )





function returnClients(){
return(


        "<div class=\"clientsContainer\">"+
            "<img class=\"clientImg\" src=\"./img/Clients/1.png\" alt=\"\">"+
            "<img class=\"clientImg\" src=\"./img/Clients/2.png\" alt=\"\">"+
            "<img class=\"clientImg\" src=\"./img/Clients/3.png\" alt=\"\">"+
            "<img class=\"clientImg\" src=\"./img/Clients/4.png\" alt=\"\">"+
            "<img class=\"clientImg\" src=\"./img/Clients/5.png\" alt=\"\">"+
        "</div>"+
    "</section>"
   



	)
}

function returnContact(){
return(
"<h2>Get in toutch with us .</h2>"+
      "<div class=\"emailForm\">"+
           " <form class=\"formData\" action=\"https://formspree.io/krskrysiak@gmail.com\" method=\"POST\">"+
                "<input type=\"text\" name=\"name\" placeholder=\"Name\">"+
                "<input type=\"text\" name=\"name\" placeholder=\"Topic\">"+
               " <input type=\"text\" class=\"textData\" name=\"message\" placeholder=\"Your message\">"+
               " <input type=\"email\" class=\"emailData\" name=\"_replyto\" placeholder=\"Email\">"+
              "  <input type=\"submit\" value=\"Send\">"+
           " </form>"+
       " </div> "
)
    }



 function returnTimeline(){
 	return(
  "<div class=\"timeline\">"+
    "<ul>"+
     " <li>"+
        "<h3>Make Script</h3>"+
       " <p>One day, my boss came up to me and asked, Pretty much decided I wasn't ready.</p>"+
      "</li>"+
      "<li>"+
        "<h3>Film</h3>"+
       " <p>Began work at the Button Factory. This was probably the best time of my life. I had a wife, a dog, and a family.</p>"+
      "</li>"+
      "<li>"+
        "<h3>Editing</h3>"+
        "<p>I was just sick of Josh</p>"+
      "</li>"+
      "<li>"+
       " <h3>Consulting Result</h3>"+
       " <p>I moved to and settled down into my new life.</p>"+
     " </li>"+
    "</ul>"+
    "<ul>"+
      "<li>"+
        "<h3>Deliver</h3>"+
        "<p>It only took, like, two years.</p>"+
      "</li>"+
   " </ul>"+
  "</div>"
 		
 		)
 }