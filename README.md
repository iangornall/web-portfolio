# Web Portfolio
This is a personal portfolio page built with plain HTML, CSS, and JavaScript.

## Features
##### Video of scroll
![Video of scroll](./video/scroll.gif)
##### Function
Provides user with smooth scrolling transition on clicking a link within the page.
##### Code
```function scrollTransition(destination){
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
```
