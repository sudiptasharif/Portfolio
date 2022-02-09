var meDivEle = document.getElementById("me");
var meHeadingEle = document.getElementById("me_heading");
var meDetailsEle = document.getElementById("me_details");
var meDetailsExpand = false; 
var meHeadingEleText = "+ About Me";

var workDivEle = document.getElementById("work");
var workHeadingEle = document.getElementById("work_heading");
var workDetailsEle = document.getElementById("work_details");
var workDetailsExpand = false;
var workHeadingEleText = "+ Work Experiances"; 

const main = function() {
    meHeadingEle.addEventListener("click", aboutMe);
    meHeadingEle.addEventListener("mouseover", changeMousePointer);
    workHeadingEle.addEventListener("click", workExperiances);
    workHeadingEle.addEventListener("mouseover", changeMousePointer);
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

const workExperiances = function() {
    if (workDetailsExpand) {
        workDetailsExpand = false;
        workHeadingEleText = "+ Work Experiances"; 
        removeChildLast(workDivEle);
    } else {
        workDetailsExpand = true;
        workHeadingEleText = "- Work Experiances"; 
        appendChildLast(workDivEle, workDetailsEle);
    }
    setVisible(workDetailsEle, workDetailsExpand);
    setText(workHeadingEle, workHeadingEleText);     
}

const changeMousePointer = function (event) {
    event.target.style.cursor = "pointer";
}
window.onload = function() {
    main();
}