var gem1 = document.querySelector("[name='gem1']");
var gem2 = document.querySelector("[name='gem2']");
var gem3 = document.querySelector("[name='gem3']");
var gem4 = document.querySelector("[name='gem4']");
var gem5 = document.querySelector("[name='gem5']");
var rating = document.querySelector(".ratinglabel")

var ratingValue = 0;


var rate = function(event) {
    if (event.target === gem1) {
        gem1.setAttribute('src', 'images/gem3.png');
        gem2.setAttribute('src', 'images/unclickedgem.png')
        gem3.setAttribute('src', 'images/unclickedgem.png')
        gem4.setAttribute('src', 'images/unclickedgem.png')
        gem5.setAttribute('src', 'images/unclickedgem.png')
        ratingValue = '1';
    } else if (event.target === gem2) {
        gem1.setAttribute('src', 'images/gem3.png');
        gem2.setAttribute('src', 'images/gem3.png');
        gem3.setAttribute('src', 'images/unclickedgem.png')
        gem4.setAttribute('src', 'images/unclickedgem.png')
        gem5.setAttribute('src', 'images/unclickedgem.png')
        ratingValue = '2';
    } else if (event.target === gem3) {
        gem1.setAttribute('src', 'images/gem3.png');
        gem2.setAttribute('src', 'images/gem3.png');
        gem3.setAttribute('src', 'images/gem3.png');
        gem4.setAttribute('src', 'images/unclickedgem.png')
        gem5.setAttribute('src', 'images/unclickedgem.png')
        ratingValue = '3';
    } else if (event.target === gem4) {
        gem1.setAttribute('src', 'images/gem3.png');
        gem2.setAttribute('src', 'images/gem3.png');
        gem3.setAttribute('src', 'images/gem3.png');
        gem4.setAttribute('src', 'images/gem3.png');
        gem5.setAttribute('src', 'images/unclickedgem.png')
        ratingValue = '4';
    } else if (event.target === gem5) {
        gem1.setAttribute('src', 'images/gem3.png');
        gem2.setAttribute('src', 'images/gem3.png');
        gem3.setAttribute('src', 'images/gem3.png');
        gem4.setAttribute('src', 'images/gem3.png');
        gem5.setAttribute('src', 'images/gem3.png');
        ratingValue = '5';
    }
    return ratingValue;
}

rating.addEventListener('click', rate);