        

$(document).ready(function() {
    var setMenuHeight = function() {
      $('.menuWrapper').slimscroll({
        height: document.documentElement.clientHeight - 56
      });
    };
  
    $('.trigger').on('click', function() {
      $('.menuContainer').toggleClass('active');
    });
  
    setMenuHeight();
    $(window).resize(function() {
      setMenuHeight();
    });
  });

var i = 0;
function move() {
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("myBar");
        var width = 10;
        var id = setInterval(frame, 10);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
                elem.innerHTML = width + "%";
            }
        }
    }
}
jQuery(document).ready(function () {
    jQuery('.skillbar').each(function () {
        jQuery(this).find('.skillbar-bar').animate({
            width: jQuery(this).attr('data-percent')
        }, 6000);
    });
});


function circle(el) {
    $(el).circleProgress({ fill: { color: '#ff5c5c' } }).on('circle-animation-progress', function (event, progress, stepvalue) {
        $(this).find('strong').text(String(stepvalue.toFixed(2)).substr(2) + '%');
    });
};
circle('.round')


mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
  