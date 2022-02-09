const isNull = function (arg) {
    return ((arg == undefined) || (arg == null));
}
const isEmpty = function (arg) {
    return ((arg == undefined) || (arg == null) || (arg.length == 0));
}
const setText = function(element, newText) {
    if (isNull(element) || isNull(newText)) {
        throw "invalid input args";
    }
    element.innerHTML = newText; 
}

const setVisible = function(element, visible) {
    if (isNull(element) || (typeof visible !== 'boolean')) {
        throw "invalid input args";
    }
    var result = "hidden";
    if (visible) {
        result = "visible";
    }
    element.style.visibility = result;
}

const appendChildLast = function(parentEle, childEle) {
    if (isNull(parentEle) || isNull(childEle)) {
        throw "invalid input args";
    }
    parentEle.appendChild(childEle);
}

const removeChildLast = function(parentEle) {
    if (isNull(parentEle)) {
        throw "invalid input arg";
    }        
    parentEle.removeChild(parentEle.lastChild);
}

// comment/uncomment as needed for testing
module.exports = {
    isNull,
    isEmpty,
    setText,
    setVisible,
    appendChildLast,
    removeChildLast,
}