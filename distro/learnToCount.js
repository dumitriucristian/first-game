"use strict";
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
    const shuffledElements = [];
    const shuffler = shuffle(elements);
    console.log(shuffler);
    elements.forEach(element => {
        const main = document.getElementById("main");
        // Create a new div element
        const newDiv = document.createElement("div");
        newDiv.style.backgroundColor = "lightblue";
        newDiv.style.width = "150px";
        newDiv.style.height = "50px";
        newDiv.style.padding = "5px";
        newDiv.style.margin = "5px";
        const newSpan = document.createElement("span");
        newSpan.innerText = element[1];
        newDiv.appendChild(newSpan);
        // Append the div to the body
        main.appendChild(newDiv);
    });
});
function* shuffle(elements) {
    const arr = [...elements];
    while (arr.length)
        yield arr.splice(Math.random() * arr.length | 0, 1)[0];
}
/*let numbers = [
    [1, "un"],
    [2, "dos"],
    [3, "tres"]
];

var score = 0;
console.log();

for(var index in numbers) {
    let nr = prompt("How Much is " + numbers[index][1]);
    if(nr == numbers[index][0]){
        console.log("good");
        score++
    }else{
        console.log("bad");
    }
}
console.log("your score is: " + score);
*/ 
