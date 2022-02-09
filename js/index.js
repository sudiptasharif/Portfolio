var meDivEle = document.getElementById("me");
var meHeadingEle = document.getElementById("me_heading");
var meDetailsEle = document.getElementById("me_details");
var meDetailsExpand = false; 
var meHeadingEleText = "+ About Me";

const main = function() {
    meHeadingEle.addEventListener("click", aboutMe);
}

const aboutMe = function() {
    if (meDetailsExpand) {
        meDetailsExpand = false;
        meHeadingEleText = "+ About Me";
        removeChildLast(meDivEle);
    } else {
        meDetailsExpand = true;
        meHeadingEleText = "- About Me";
        appendChildLast(meDivEle, meDetailsEle);
    }
    setVisible(meDetailsEle, meDetailsExpand);
    setText(meHeadingEle, meHeadingEleText);   
}

window.onload = function() {
    main();
}