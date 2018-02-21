var navOffset = 88;


var vimeoEmebed = ["249434988", "248575397", "233169986", "233168772", "233168159", "233167640", "233166754", "233165733", "233164515"];

// var hotel ='233170709';

function vimeoMovie(embed) {
    return "<div class=\"vimeoMovieContainer fadeIn\"><iframe class=\"vimeoMovie\" src=\"https://player.vimeo.com/video/" + embed + "?title=0&byline=0&portrait=0\"  frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>"
}

function videoImg(src) {
    return "<div class=\"miniVideoConatainer\" data-id=" + src + "> <img class=\"miniVideo\"  src=\"./img/mini/" + src + ".jpg\" alt=\"sample video\"/><div class=\"mask\"><img class=\"playButton\" src=\"./img/play.png\" alt=\"play\"></div></div>"
}

document.onload = loadVideos();
var mainVideo = $('.mainVideo');
mainVideo.onload = function(){
 mainVideo.play();
}


function loadVideos() {
    for (var i = 1; i < 10; i++) {
        var video = videoImg(i);
        document.getElementById("content").innerHTML += video;
    }
}



// Get the modal
var modal = document.getElementById('myModal');

var span = document.getElementsByClassName("close")[0];


span.onclick = function() {
    modal.style.display = "none";
  $('.modal-content').html("");
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";  
  $('.modal-content').html("");
    }
}


$('.videosLink').click(function() {
    positionabout = $('#content').offset().top - navOffset; // Position of #about - nav height = correct position
    $("html, body").animate({ scrollTop: positionabout }, '500', 'swing');
    $('#content').removeClass();
      $('#cover').html(returnMainVideo());
    $('#content').html("");
    $('#content').addClass("videoList fadeIn");
    loadVideos();
    var burger =  $('#burger');
     burger.prop("checked", false);
})


$(document).on('click', '.arrow', function() {
    positionabout = $('#content').offset().top - navOffset; // Position of #about - nav height = correct position
    $("html, body").animate({ scrollTop: positionabout }, '500', 'swing');
})

$('.aboutLink').click(function() {
    positionabout = $('#cover').offset().top - navOffset; // Position of #about - nav height = correct position
    $("html, body").animate({ scrollTop: positionabout }, '500', 'swing');
    $('#content').removeClass()
       $('#cover').html("");
    $('#content').html("");
    $('#content').addClass("about");
    $('#content').html(returnTimeline());
    var burger =  $('#burger');
     burger.prop("checked", false);
})

$('.clientsLink').click(function() {
    positionabout = $('#cover').offset().top - navOffset; // Position of #about - nav height = correct position
    $("html, body").animate({ scrollTop: positionabout }, '500', 'swing');
    $('#content').removeClass();
     $('#cover').html("");
    $('#content').html("");
    $('#content').addClass("clients");
    $('#content').html(returnClients());
  var burger =  $('#burger');
     burger.prop("checked", false);
})

$('.contactLink').click(function() {
    positionabout = $('#cover').offset().top ; // Position of #about - nav height = correct position
     $('#cover').html("");
    $('#content').html("");
    $('#content').removeClass();
    $('#content').addClass("contact fadeIn");
    $('#content').html(returnContact());
    $("html, body").animate({ scrollTop: positionabout }, '500', 'swing');
    var burger =  $('#burger');
     burger.prop("checked", false);
})



$('.logo').click(function() {

    positionabout = $('#cover').offset().top - navOffset; // Position of #about - nav height = correct position
    $("html, body").animate({ scrollTop: positionabout }, '500', 'swing');
})



$(document).on('click', '.miniVideoConatainer', function() {
     modal.style.display = "block";
   $('.modal-content').html("");
    $('.modal-content').html(vimeoMovie(vimeoEmebed[$(this).attr("data-id")]));
})



$(window).load(function() {
    $('#spinner').fadeOut(1000);
    $('html, body').css('overflowY', 'auto');
})






function returnClients() {
    return (

        "<div class=\"clientsContainer fadeIn\">" +
        "<img class=\"clientImg\" src=\"./img/Clients/1.png\" alt=\"\">" +
        "<img class=\"clientImg\" src=\"./img/Clients/2.png\" alt=\"\">" +
        "<img class=\"clientImg\" src=\"./img/Clients/3.png\" alt=\"\">" +
        "<img class=\"clientImg\" src=\"./img/Clients/4.png\" alt=\"\">" +
        "<img class=\"clientImg\" src=\"./img/Clients/5.png\" alt=\"\">" +
        "</div>" +
        "</section>"
    )
}

function returnContact() {
    return (
        "<div class=\"contactContainer\"><h2>Get in toutch with us .</h2>" +
        "<div class=\"emailForm\">" +
        " <form class=\"formData\" action=\"https://formspree.io/krskrysiak@gmail.com\" method=\"POST\">" +
        "<input type=\"text\" name=\"name\" placeholder=\"Name\">" +
        "<input type=\"text\" name=\"name\" placeholder=\"Topic\">" +
        " <input type=\"text\" class=\"textData\" name=\"message\" placeholder=\"Your message\">" +
        " <input type=\"email\" class=\"emailData\" name=\"_replyto\" placeholder=\"Email\">" +
        "  <input type=\"submit\" value=\"Send\">" +
        " </form>" +
        " </div></div>  "
    )
}



function returnTimeline() {
    return (
        "<div class=\"timeline fadeIn\">" +       
        "</div>"
    )
}


function returnMainVideo() {
    return (
        "<div class=\"mainVideoCotainer fadeIn\">" +
        "<video autoplay muted playsinline loop class=\"mainVideo\">" +
        "<source src=\"./img/cover.mp4\" type=\"video/mp4\">" +
        "</video>" +
        "</div>" +
        " <img src=\"./img/arrow.png\" class=\"floater arrow\" alt=\"arrow\"> " 
    )
}


 
