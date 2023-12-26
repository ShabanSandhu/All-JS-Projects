//  button working

// for digit button
document.getElementById("zero").onclick = function () {
    display.value += 0
}
document.getElementById("one").onclick = function () {
    display.value += 1
}
document.getElementById("two").onclick = function () {
    display.value += 2
}
document.getElementById("three").onclick = function () {
    display.value += 3
}
document.getElementById("four").onclick = function () {
    display.value += 4
}
document.getElementById("five").onclick = function () {
    display.value += 5
}
document.getElementById("six").onclick = function () {
    display.value += 6
}
document.getElementById("seven").onclick = function () {
    display.value += 7
}
document.getElementById("eight").onclick = function () {
    display.value += 8
}
document.getElementById("nine").onclick = function () {
    display.value += 9
}
document.getElementById("dotBtn").onclick = function () {
    display.value += "."
}

// end

// for clear button
document.getElementById("clearBtn").onclick = function () {
    display.value = "";
}
// end

//for on button
document.getElementById("onBtn").onclick = function () {
    display.focus()
}
// for del button
document.getElementById("delBtn").onclick = function () {
    display.value = display.value.slice(0,-1)
}
// end

// opertor working
document.getElementById("multiplyBtn").onclick = function () {
    display.value += "*"
}

document.getElementById("addBtn").onclick = function () {
    display.value += "+"
}

document.getElementById("subtractBtn").onclick = function () {
    display.value += "-"
}

document.getElementById("dividBtn").onclick = function () {
    display.value += "/"
}
// end

// for result btn 
document.getElementById("resultBtn").onclick = function () {
    let calculate = display.value
    display.value = "", display.value = eval(calculate)
}
// end

// enddddddd