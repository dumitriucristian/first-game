var ELEMENTS = [
    [1, "un"],
    [2, "dos"],
    [3, "tres"],
];
var LearnToCount = /** @class */ (function () {
    function LearnToCount() {
        var _this = this;
        // Ensure that the DOM is fully loaded before running the script
        document.addEventListener("DOMContentLoaded", function () {
            var shuffledElements = _this.shuffle(ELEMENTS);
            var firstShuffledElements = [];
            shuffledElements.forEach(function (element) {
                var main = document.getElementById("main");
                // Create a new div element
                var newDiv = document.createElement("div");
                newDiv.classList.add("tab");
                var newSpan = document.createElement("span");
                newSpan.innerText = String(element[1]);
                newDiv.appendChild(newSpan);
                // Append the div to the body
                firstShuffledElements.push(newDiv);
            });
            var secondShuffle = _this.shuffle(ELEMENTS);
            var secondShuffledElements = [];
            secondShuffle.forEach(function (element) {
                var main = document.getElementById("main");
                // Create a new div element
                var newDiv = document.createElement("div");
                newDiv.classList.add("tab");
                var newSpan = document.createElement("span");
                newSpan.innerText = String(element[0]);
                newDiv.appendChild(newSpan);
                secondShuffledElements.push(newDiv);
                // Append the div to the bo
            });
            var finalElements = _this.combinedElements(firstShuffledElements, secondShuffledElements);
            var finalShuffle = _this.shuffle(finalElements);
            finalElements.forEach(function (element) {
                var main = document.getElementById("main");
                main === null || main === void 0 ? void 0 : main.appendChild(element);
            });
        });
    }
    LearnToCount.prototype.combinedElements = function (first, second) {
        return first.concat(second);
    };
    LearnToCount.prototype.shuffle = function (array) {
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
    };
    return LearnToCount;
}());
new LearnToCount();
