//const { setVisible, setText } = require("./utility");
var meDivEle = document.getElementById("me");
var meHeadingEle = document.getElementById("me_heading");
var meDetailsEle = document.getElementById("me_details");
var meDetailsExpand = false; 
var meHeadingEleText = "+ About Me";

const main = function() {
    setText(meHeadingEle, meHeadingEleText);
    setVisible(meDetailsEle, meDetailsExpand);
    meHeadingEle.addEventListener("click", meHeadingClickEventListener);
}

const meHeadingClickEventListener = function() {
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