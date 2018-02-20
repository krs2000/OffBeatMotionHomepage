var navSize = 90;


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




$('.videosLink').click(function() {
    positionabout = $('#content').offset().top - navSize; // Position of #about - nav height = correct position
    $("html, body").animate({ scrollTop: positionabout }, '500', 'swing');
    $('#content').removeClass();
    $('#content').html("");
    $('#content').addClass("videoList fadeIn");
    loadVideos();
})

$('.scrollDown').click(function() {
    positionabout = $('#content').offset().top - navSize; // Position of #about - nav height = correct position
    $("html, body").animate({ scrollTop: positionabout }, '500', 'swing');
})

$('.aboutLink').click(function() {
    positionabout = $('#content').offset().top - navSize; // Position of #about - nav height = correct position
    $("html, body").animate({ scrollTop: positionabout }, '500', 'swing');
    $('#content').removeClass()
    $('#content').html("");
    $('#content').addClass("about");
    $('#content').html(returnTimeline());
})

$('.clientsLink').click(function() {
    positionabout = $('#content').offset().top - navSize; // Position of #about - nav height = correct position
    $("html, body").animate({ scrollTop: positionabout }, '500', 'swing');
    $('#content').removeClass();
    $('#content').html("");
    $('#content').addClass("clients");
    $('#content').html(returnClients());
})

$('.contactLink').click(function() {
    positionabout = $('#content').offset().top - navSize; // Position of #about - nav height = correct position
    $("html, body").animate({ scrollTop: positionabout }, '500', 'swing');
    $('#content').removeClass();
    $('#content').html("");
    $('#content').addClass("contact fadeIn");
    $('#content').html(returnContact());
})



$('.logo').click(function() {

    positionabout = $('#cover').offset().top - navSize; // Position of #about - nav height = correct position
    $("html, body").animate({ scrollTop: positionabout }, '500', 'swing');
})



$(document).on('click', '.miniVideoConatainer', function() {
    // positionabout = $('#cover').offset().top - navSize; 
    // $("html, body").animate({ scrollTop: positionabout }, '500', 'swing');
    // $('#cover').removeClass();
     modal.style.display = "block";


  $('.modal-content').html("");
    $('.modal-content').html(vimeoMovie(vimeoEmebed[$(this).attr("data-id")]));
    // $('#content').addClass("videoList");

})



$(window).load(function() {
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
        "<h2>Get in toutch with us .</h2>" +
        "<div class=\"emailForm\">" +
        " <form class=\"formData\" action=\"https://formspree.io/krskrysiak@gmail.com\" method=\"POST\">" +
        "<input type=\"text\" name=\"name\" placeholder=\"Name\">" +
        "<input type=\"text\" name=\"name\" placeholder=\"Topic\">" +
        " <input type=\"text\" class=\"textData\" name=\"message\" placeholder=\"Your message\">" +
        " <input type=\"email\" class=\"emailData\" name=\"_replyto\" placeholder=\"Email\">" +
        "  <input type=\"submit\" value=\"Send\">" +
        " </form>" +
        " </div>  "
    )
}



function returnTimeline() {
    return (
        "<div class=\"timeline fadeIn\">" +
        "<ul>" +
        " <li>" +
        "<h3>Make Script</h3>" +
        " <p>One day, my boss came up to me and asked, Pretty much decided I wasn't ready.</p>" +
        "</li>" +
        "<li>" +
        "<h3>Film</h3>" +
        " <p>Began work at the Button Factory. This was probably the best time of my life. I had a wife, a dog, and a family.</p>" +
        "</li>" +
        "<li>" +
        "<h3>Editing</h3>" +
        "<p>I was just sick of Josh</p>" +
        "</li>" +
        "<li>" +
        " <h3>Consulting Result</h3>" +
        " <p>I moved to and settled down into my new life.</p>" +
        " </li>" +
        "</ul>" +
        "<ul>" +
        "<li>" +
        "<h3>Deliver</h3>" +
        "<p>It only took, like, two years.</p>" +
        "</li>" +
        " </ul>" +
        "</div>"

    )
}


function returnMainVideo() {
    return (
        "<div class=\"mainVideoCotainer fadeIn\">" +
        "<video autoplay muted playsinline loop lass=\"mainVideo\">" +
        "<source src=\"./img/cover.mp4\" type=\"video/mp4\">" +
        "</video>" +
        "</div>" +
        "<img  src=\"./img/logo.png\" alt=\"logo\">" +
        "<a class=\"scrollDown pulse\" href=\"#content\"></a>"

    )
}


// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
// btn.onclick = function() {
//     modal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}