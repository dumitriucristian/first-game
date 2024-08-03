"use strict";
class LearnToCount {
    constructor() {
        // Ensure that the DOM is fully loaded before running the script
        document.addEventListener("DOMContentLoaded", () => {
            const elements = [
                [1, "un"],
                [2, "dos"],
                [3, "tres"],
                [6, "seis"],
                [4, "quatro"],
                [5, "cinco"],
            ];
            const shuffledElements = this.shuffle(elements);
            const firstShuffledElements = [];
            shuffledElements.forEach(element => {
                const main = document.getElementById("main");
                // Create a new div element
                const newDiv = document.createElement("div");
                newDiv.style.backgroundColor = "lightblue";
                newDiv.style.width = "150px";
                newDiv.style.height = "50px";
                newDiv.style.padding = "5px";
                newDiv.style.margin = "5px";
                const newSpan = document.createElement("span");
                newSpan.innerText = String(element[1]);
                newDiv.appendChild(newSpan);
                // Append the div to the body
                firstShuffledElements.push(newDiv);
            });
            const secondShuffle = this.shuffle(elements);
            const secondShuffledElements = [];
            secondShuffle.forEach(element => {
                const main = document.getElementById("main");
                // Create a new div element
                const newDiv = document.createElement("div");
                newDiv.style.backgroundColor = "lightblue";
                newDiv.style.width = "150px";
                newDiv.style.height = "50px";
                newDiv.style.padding = "5px";
                newDiv.style.margin = "5px";
                const newSpan = document.createElement("span");
                newSpan.innerText = String(element[0]);
                newDiv.appendChild(newSpan);
                secondShuffledElements.push(newDiv);
                // Append the div to the bo
            });
            let finalElements = this.combinedElements(firstShuffledElements, secondShuffledElements);
            let finalShuffle = this.shuffle(finalElements);
            finalElements.forEach(element => {
                const main = document.getElementById("main");
                main === null || main === void 0 ? void 0 : main.appendChild(element);
            });
        });
    }
    combinedElements(first, second) {
        return first.concat(second);
    }
    shuffle(array) {
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
}
new LearnToCount();
