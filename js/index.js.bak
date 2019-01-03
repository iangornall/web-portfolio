var navButtons = document.querySelectorAll('.nav-link');
var profileLink = document.querySelector('.profile-link');
var sections = document.querySelectorAll('section');
var headerHeight = document.querySelector('.header').offsetHeight;
var scrollingContent = document.querySelector('body');
var headerPortrait = document.querySelector('.header-portrait');
var portrait = document.querySelector('.about-portrait');

var navBarIcon = document.querySelector('.bars');
var navBar = document.querySelector('.nav-bar')

navBarIcon.addEventListener('click', () => {
    navBar.classList.toggle('show');
});

var scrollingLinkHandler = (event) => {
    event.preventDefault();
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
    console.log('clicked');
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

let tooltip = document.createElement('div');
tooltip.classList.add('tooltip');
let createTooltip = (query, text) => {
    let targetElement = document.querySelector(query);
    targetElement.addEventListener('mouseover', event => {
        tooltip.textContent = text;
        event.currentTarget.appendChild(tooltip);
    });
    targetElement.addEventListener('mouseout', event => {
        tooltip.remove();
    });
}
createTooltip('.devicon-amazonwebservices-original', 'Amazon Web Services');
createTooltip('.devicon-express-original', 'Express');
createTooltip('.devicon-git-plain', 'Git');
createTooltip('.devicon-nodejs-plain', 'Node.js');
createTooltip('.devicon-postgresql-plain', 'PostgreSQL');
createTooltip('.devicon-python-plain', 'Python');
createTooltip('.devicon-react-original', 'React.js');
createTooltip('.devicon-html5-plain', 'HTML5');
createTooltip('.devicon-css3-plain', 'CSS3');
createTooltip('.devicon-javascript-plain', 'JavaScript');
