// Ensure that the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {
    var elements = [
        [1, "un"],
        [2, "dos"],
        [3, "tres"],
        [6, "seis"],
        [4, "quatro"],
        [5, "cinco"],
    ];
    var shuffledElements = shuffle(elements);
    var firstShuffledElements = [];
    shuffledElements.forEach(function (element) {
        var main = document.getElementById("main");
        // Create a new div element
        var newDiv = document.createElement("div");
        newDiv.className = "tab";
        newDiv.setAttribute("data-number", String(element[0]));
        var newSpan = document.createElement("span");
        newSpan.innerText = String(element[1]);
        newDiv.appendChild(newSpan);
        // Append the div to the body
        firstShuffledElements.push(newDiv);
    });
    var secondShuffle = shuffle(elements);
    var secondShuffledElements = [];
    secondShuffle.forEach(function (element) {
        var main = document.getElementById("main");
        // Create a new div element
        var newDiv = document.createElement("div");
        //add tab
        newDiv.className = "tab";
        //add number
        newDiv.setAttribute("data-number", String(element[0]));
        //add click event
        newDiv.addEventListener("click", check);
        var newSpan = document.createElement("span");
        newSpan.innerText = String(element[0]);
        newDiv.appendChild(newSpan);
        secondShuffledElements.push(newDiv);
        // Append the div to the bod
    });
    var finalElements = combinedElements(firstShuffledElements, secondShuffledElements);
    var finalShuffle = shuffle(finalElements);
    finalElements.forEach(function (element) {
        var main = document.getElementById("main");
        main === null || main === void 0 ? void 0 : main.appendChild(element);
    });
});
function check() {
    console.log("check");
}
function combinedElements(first, second) {
    return first.concat(second);
}
function shuffle(array) {
    var m = array.length, t, i;
    // While there remain elements to shuffle…
    while (m) {
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);
        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return array;
}
