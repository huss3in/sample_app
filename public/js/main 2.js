$('.intro-mockup').owlCarousel({
    // loop:true,
    margin: 0,
    autoHeight: true,
    items: 1,
})
$('.passes-carousel').owlCarousel({
    loop: true,
    center: true,
    margin: 30,
    autoHeight: true,
    // items: 6,
    responsive: {
        1200: {
            items: 6,
            margin: 25
        } , 
        992: {
            items: 4,
            margin: 20
        },
        768: {
            items: 3
        },
        0: {
            items: 2,
            margin: 10
        }
    },
});
$('.roadmap-carousel').owlCarousel({
    // loop: true,
    // center: true,
    // margin: 30,
    // autoHeight: true,
    // items: 6,
    responsive: {
        1600: {
            items: 4,
            margin: 30
        } , 
        1200: {
            items: 4,
            margin: 1
        } , 
        992: {
            items: 3,
            margin: 20
        },
        768: {
            items: 2
        },
        0: {
            items: 1
        }
    },
});
$('.systems-carousel').owlCarousel({
    loop: true,
    center: true,
    margin: 30,
    autoHeight: true,
    items: 4,
    responsive: {
        1200: {
            items: 4,
            margin: 25
        } , 
        992: {
            items: 4,
            margin: 20
        },
        768: {
            items: 3
        },
        0: {
            items: 2
        }

    },
});
$('.owl-home-products').owlCarousel({
    loop: false,
    center: false,
    margin: 20,
    autoHeight: true,
    items: 3,
    responsive: {
        992: {
            items: 3,
            margin: 10
        },
        768: {
            items: 3,
        },
        0: {
            items: 1,
        }
    }
});
$('.about-gallery').owlCarousel({
    loop: true,
    center: true,
    margin: 20,
    autoHeight: true,
    autoWidth: true,
    items: 4
});

$('.dashboard-carousel').owlCarousel({
    nav: true,
    navText: ["<img src='./img/arrow-right.svg' style='transform: scale(-1, 1)'>","<img src='./img/arrow-right.svg'>"],
    dots: false,
    loop: true,
    center: true,
    autoHeight: true,
    // autoWidth: true,
    margin: 30,
    items: 2,
    animateOut: 'fadeOut',
    responsive: {
        0 : {
            items: 1
        }, 768 : {
            items: 2
        }
    }
});


function selectTab(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

window.onload = function () {
    document.getElementById("defaultOpen").click();
    var reader = $('.reader-img');
    var specsBtn = $('.specs');
    var specsTable = $('.specs-table');
    var specsContainer = $('.specs-container');

    reader.hover(function (e) {
        specsBtn.fadeIn();
    }, function() {
        if($(specsContainer).is(':hover') === true) {
            return;
        } else {
            specsBtn.fadeOut();
            specsTable.fadeOut();
        }
    });
    specsBtn.click(function() {
        specsTable.fadeToggle();
    });

}

// Responsive Menu
var resMenu = $('#res-menu');
var resUl = $('.res-ul');

resMenu.click(function() {
    this.classList.toggle("change");
    resUl.fadeToggle();
})

// function updateSize(){
//     var minHeight=parseInt($('.owl-item').eq(0).css('height'));
//     $('.owl-item').each(function () {
//         var thisHeight = parseInt($(this).css('height'));
//         minHeight=(minHeight<=thisHeight?minHeight:thisHeight);
//     });
//     $('.owl-wrapper-outer').css('height',minHeight+'px');

//     /*show the bottom part of the cropped images*/
//     $('.owl-carousel .owl-item img').each(function(){
//         var thisHeight = parseInt($(this).css('height'));
//         if(thisHeight>minHeight){
//             $(this).css('margin-top',-1*(thisHeight-minHeight)+'px');
//         }
//     });

// }

// var homeIntroParallex = document.getElementsByClassName('home-intro-parallex')[0];
// var homeReaderParallex = document.getElementsByClassName('home-reader-parallex')[0];
// var windowHeight = window.innerHeight;
// var windowWidth = window.innerWidth;
// var scrollArea = 1000 - windowHeight;

// window.addEventListener('scroll', function() {
//     var scrollTop = window.pageYOffset || window.scrollTop;
//     var scrollPercent = scrollTop/scrollArea || 0;
    
//     homeIntroParallex.style.top = scrollPercent*window.innerHeight + 'px';
//     homeIntroParallex.style.top = 180 - scrollPercent*window.innerHeight*0.02 + 'px';
    
//     homeReaderParallex.style.top = scrollPercent*window.innerHeight + 'px';
//     homeReaderParallex.style.top = 200 - scrollPercent*window.innerHeight*0.05 + 'px';

// });


// Live Search
$('.live-search').keyup(function() {
    var filter = $(this).val(),
        count = 0;

    $('.live-search-item').each(function() {
        if ($(this).text().search(new RegExp(filter, "i")) < 0) {
            $(this).parent().hide();
        } else {
            $(this).parent().show().css('float', 'left');
            count++;
        }
    });

    if (count === 0 && filter != '') {
        $('.empty-search').show();
    } else {
        $('.empty-search').hide();
    }
});


$('.pass-types .product').hover(function() {
    $(this).children('.invitation').show();
}, function() {
    $(this).children('.invitation').hide();
})