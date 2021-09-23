var loss = 0;
var win = 0;
function randomrgb() {
    const rgb1 = [];
    const rgb2 = [];
    const rgb3 = [];
    const rgb4 = [];
    for (let i = 0; i < 3; i++) {
        rgb1[i] = Math.floor(Math.random() * 256);
    }
    for (let i = 0; i < 3; i++) {
        rgb2[i] = Math.floor(Math.random() * 256);
    }
    for (let i = 0; i < 3; i++) {
        rgb3[i] = Math.floor(Math.random() * 256);
    }
    for (let i = 0; i < 3; i++) {
        rgb4[i] = Math.floor(Math.random() * 256);
    }
    var randomColor1 = `rgb(${rgb1[0]}, ${rgb1[1]}, ${rgb1[2]})`;
    document.getElementById("one").style.backgroundColor = randomColor1;
    var randomColor2 = `rgb(${rgb2[0]}, ${rgb2[1]}, ${rgb2[2]})`;
    document.getElementById("two").style.backgroundColor = randomColor2;
    var randomColor3 = `rgb(${rgb3[0]}, ${rgb3[1]}, ${rgb3[2]})`;
    document.getElementById("three").style.backgroundColor = randomColor3;
    var randomColor4 = `rgb(${rgb4[0]}, ${rgb4[1]}, ${rgb4[2]})`;
    document.getElementById("four").style.backgroundColor = randomColor4;
    var items = [randomColor1, randomColor2, randomColor3, randomColor4];
    var index = Math.floor(Math.random() * items.length);
    result = items[index];
    document.getElementById("val").innerHTML = result;
    return result;
}
randomrgb();

function chkone() {
    onergb = document.getElementById("one").style.backgroundColor;
    if (result == onergb) {
        document.getElementById("win").innerHTML = ++win;
        alert("Hurrah!, You choose the correct Rocking player");
    }
    else {
        document.getElementById("lose").innerHTML = ++loss;
        alert("Sorry, You choose the wrong,Try Again");
    }
}
function chktwo() {
    onergb = document.getElementById("two").style.backgroundColor;
    if (result == onergb) {
        document.getElementById("win").innerHTML = ++win;
        alert("Hurrah!, You choose the correct smart player");
    }
    else {
        document.getElementById("lose").innerHTML = ++loss;
        alert("Sorry, You choose the wrong,don't lose hope");
    }
}
function chkthree() {
    onergb = document.getElementById("three").style.backgroundColor;
    if (result == onergb) {
        document.getElementById("win").innerHTML = ++win;
        alert("Hurrah!, You choose the correct talented player");
    }
    else {
        document.getElementById("lose").innerHTML = ++loss;
        alert("Sorry, You choose the wrong,lose or win part of a life");
    }
}
function chkfour() {
    onergb = document.getElementById("four").style.backgroundColor;
    if (result == onergb) {
        document.getElementById("win").innerHTML = ++win;
        alert("Hurrah!, You choose the correct intelligent player");
    }
    else {
        document.getElementById("lose").innerHTML = ++loss;
        alert("Sorry, You choose the wrong,Not over Yet");
    }
}