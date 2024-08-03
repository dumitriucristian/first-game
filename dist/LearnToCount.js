"use strict";
const ELEMENTS = [
    [1, "un"],
    [2, "dos"],
    [3, "tres"],
    [4, "quatro"],
    [5, "cinco"],
    [6, "seis"],
];
class LearnToCount {
    constructor() {
        this.firstSelection = [null, null];
        this.secondSelection = [null, null];
        this.firstShuffledElements = [];
        this.secondShuffledElements = [];
        // Ensure that the DOM is fully loaded before running the script
        document.addEventListener("DOMContentLoaded", () => {
            //shuffle array
            const shuffledElements = this.shuffle(ELEMENTS);
            const secondShuffle = this.shuffle(ELEMENTS);
            //add elements to elements array
            this.addElements(secondShuffle, 0, this.secondShuffledElements);
            this.addElements(shuffledElements, 1, this.firstShuffledElements);
            //combine all element
            let finalElements = this.combinedElements(this.firstShuffledElements, this.secondShuffledElements);
            //shuffle
            this.shuffle(finalElements);
            finalElements.forEach(element => {
                const main = document.getElementById("main");
                main === null || main === void 0 ? void 0 : main.appendChild(element);
            });
        });
    }
    addElements(shuffledElements, index, target) {
        shuffledElements.forEach(element => {
            const main = document.getElementById("main");
            // Create a new div element
            const newDiv = document.createElement("div");
            newDiv.classList.add("tab");
            newDiv.classList.add("lightblue");
            //append data
            newDiv.setAttribute("data-number", String(element[0]));
            //append event on 
            newDiv.addEventListener("click", (event) => this.dataCheck(event));
            const newSpan = document.createElement("span");
            newSpan.innerText = String(element[index]);
            newDiv.appendChild(newSpan);
            // Append the div to the body
            target.push(newDiv);
        });
    }
    /**
     * on click save the consecutive two selelctions
     */
    dataCheck(event) {
        //console.log(this.firstSelection);
        const target = event.currentTarget;
        const dataNumber = target.getAttribute("data-number");
        const dataName = target.textContent;
        target.classList.add('darkblue');
        if (this.firstSelection[0] === null) {
            this.firstSelection = [Number(dataNumber), dataName];
        }
        else if (Number(dataNumber) != this.firstSelection[0]) {
            this.secondSelection = [Number(dataNumber), dataName];
        }
        console.log(this.firstSelection);
        console.log(this.secondSelection);
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
