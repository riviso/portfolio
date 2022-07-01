
// Underlined texts

var szovegek = document.querySelectorAll('.underlined');

szovegek.forEach(function (szoveg) {
    var szovegszelesseg = parseInt(szoveg.offsetWidth);
    var svg = createSVG(szovegszelesseg);
    insertAfter(svg, szoveg);
});



function createSVG(linkWidth) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", linkWidth);
    svg.setAttribute("height", "20");

    svg.setAttribute('class' , 'underline-svg')

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    var pathD = randomizePath(linkWidth);

    path.setAttribute("d", pathD);
    path.setAttribute("fill", "transparent");
    path.setAttribute("stroke", "rgba(255, 0, 0, 0.75)");
    path.setAttribute("stroke-width", "5");
    path.setAttribute("stroke-linecap", "round");


    svg.appendChild(path);

    return svg;
}

function randomizePath(linkWidth) {
    var moveYMin = 5;
    var moveYMax = 12;
    var curveXMin = 20;
    var curveXMax = linkWidth; /* Width of the link */
    var curveYMin = 5;
    var curveYMax = 20;
    var endYMin = 5;
    var endYMax = 10;
    var moveY = Math.floor(Math.random() * (moveYMax - moveYMin)) + moveYMin;
    var curveX = Math.floor(Math.random() * (curveXMax - curveXMin)) + curveXMin;
    var curveY = Math.floor(Math.random() * (curveYMax - curveYMin)) + curveYMin;
    var endY = Math.floor(Math.random() * (endYMax - endYMin)) + endYMin;

    var newPath = `M5 ${moveY} Q ${curveX} ${curveY} ${linkWidth - 7} ${endY}`;

    return newPath;
}



function insertAfter(el, referenceNode) {
        referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
}

$(function() {
    $("#downarrow").click(function() {
        $('html,body').animate({
            scrollTop: $("#portfolio").offset().top},
            'slow');
    })
});



