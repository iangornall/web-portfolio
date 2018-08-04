var navButtons = document.querySelectorAll('.nav-link');
var profileLink = document.querySelector('.profile-link');
var sections = document.querySelectorAll('section');
var headerHeight = document.querySelector('.header').offsetHeight;
var scrollingContent = document.querySelector('.content-and-footer');
var headerPortrait = document.querySelector('.header-portrait');
var portrait = document.querySelector('.about-portrait');
var scrollingLinkHandler = (event) => {
    event.preventDefault();
    console.log(event.currentTarget.getAttribute('href'))
    scrollTransition(event.currentTarget.getAttribute('href').slice(1));
}
navButtons.forEach(navButton => {
    navButton.addEventListener('click', scrollingLinkHandler);
});
profileLink.addEventListener('click', scrollingLinkHandler);


scrollingContent.addEventListener('scroll', function(e){
    for(var i = 0; i < sections.length; i++){
        var sectionPos = sections[i].getBoundingClientRect();
        if (sectionPos.top <= headerHeight  && sectionPos.bottom > headerHeight){
            navButtons[i].classList.add('nav-link-focus');
        } else {
            navButtons[i].classList.remove('nav-link-focus');
        }
    }
    if (portrait.getBoundingClientRect().bottom < headerHeight) {
        headerPortrait.classList.remove('hide');
    } else {
        headerPortrait.classList.add('hide');
    }
});

document.querySelector('.bars').addEventListener('click', function (){
    document.querySelector('.nav-bar').classList.toggle('nav-bar-show');
});

document.querySelector('.nav-bar').addEventListener('click', function (event){
    document.querySelector('.nav-bar').classList.toggle('nav-bar-show');
});

function scrollTransition(destination){
    var duration = 500;
    var destElement = document.getElementById(destination);
    var end = destElement.offsetTop - headerHeight + 1;
    var start = (scrollingContent.scrollTop);
    var scrollDistance = end - start;
    var scrollStep = Math.PI / (duration / 10);
    var count = 0, currPos;
    scrollInterval = setInterval(function(){
        if (currPos != end) {
            count++;
            currPos = start + scrollDistance * (0.5 - 0.5 * Math.cos(count * scrollStep));
            scrollingContent.scrollTop = currPos;
        }
        else { 
            clearInterval(scrollInterval); 
        }
    },10);
}