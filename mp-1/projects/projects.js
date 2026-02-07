// Angelie Darbouze 
// File: project.js
// Description: Javascript file for calculator in projects page

function helper(ans) {
    if (ans < 0) {
        document.getElementById("output").style.color = "red";
    }
    else {
        document.getElementById("output").style.color = "black";
    }
}
function doAdd() {
    let first = document.getElementById("first").value;
    let second = document.getElementById("second").value;
    let ans = Number(first) + Number(second);
    helper(ans);
    document.getElementById("output").innerHTML = ans;
}
function doSubtract() {
    let first = document.getElementById("first").value;
    let second = document.getElementById("second").value;
    let ans = Number(first) - Number(second);
    helper(ans);
    document.getElementById("output").innerHTML = ans;
}
// do the rest... (*, /, **, Clear)

function doMultiply() {
    let first = document.getElementById("first").value;
    let second = document.getElementById("second").value;
    let ans = Number(first) * Number(second);
    helper(ans);
    document.getElementById("output").innerHTML = ans;
}

function doDivide() {
    let first = document.getElementById("first").value;
    let second = document.getElementById("second").value;
    let ans = Number(first) / Number(second);
    helper(ans);
    document.getElementById("output").innerHTML = ans;
}
function doPower() {
    let first = document.getElementById("first").value;
    let second = document.getElementById("second").value;
    let ans = 1;
    for (let i = 0; i < second; i++) {
        ans *= first;
    }
    helper(ans);
    document.getElementById("output").innerHTML = ans;
}
function doClear() {
    document.getElementById("first").value = "";
    document.getElementById("second").value = "";
    // clear the output and reset color
    const output = document.getElementById("output").innerHTML = "";
    output.style.color = "black";
}