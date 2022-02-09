var meDivEle = document.getElementById("me");
var meHeadingEle = document.getElementById("me_heading");
var meDetailsEle = document.getElementById("me_details");
var meDetailsExpand = false; 
var meHeadingEleText = "About Me";

var workDivEle = document.getElementById("work");
var workHeadingEle = document.getElementById("work_heading");
var workDetailsEle = document.getElementById("work_details");
var workDetailsExpand = false;
var workHeadingEleText = "Work Experiences"; 

const main = function() {
    meHeadingEle.addEventListener("click", aboutMe);
    meHeadingEle.addEventListener("mouseover", changeMousePointer);
    workHeadingEle.addEventListener("click", workExperiances);
    workHeadingEle.addEventListener("mouseover", changeMousePointer);
}

const aboutMe = function() {
    if (meDetailsExpand) {
        meDetailsExpand = false;
        newMeHeadingEleText = "+ " + meHeadingEleText;
        removeChildLast(meDivEle);
    } else {
        meDetailsExpand = true;
        newMeHeadingEleText = "- " + meHeadingEleText;;
        appendChildLast(meDivEle, meDetailsEle);
    }
    setVisible(meDetailsEle, meDetailsExpand);
    setText(meHeadingEle, newMeHeadingEleText);   
}

const workExperiances = function() {
    if (workDetailsExpand) {
        workDetailsExpand = false;
        newWorkHeadingEleText = "+ " + workHeadingEleText; 
        removeChildLast(workDivEle);
    } else {
        workDetailsExpand = true;
        newWorkHeadingEleText = "- " + workHeadingEleText; 
        appendChildLast(workDivEle, workDetailsEle);
    }
    setVisible(workDetailsEle, workDetailsExpand);
    setText(workHeadingEle, newWorkHeadingEleText);     
}

const changeMousePointer = function (event) {
    event.target.style.cursor = "pointer";
}
window.onload = function() {
    main();
}