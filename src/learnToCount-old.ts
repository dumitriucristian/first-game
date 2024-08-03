// Ensure that the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {


    const elements: [number, string][] = [
        [1, "un"],
        [2, "dos"],
        [3, "tres"],
        [6, "seis"],
        [4, "quatro"],
        [5, "cinco"],
    
    ];

  
    const shuffledElements: [number, string][]  = shuffle(elements);
    const firstShuffledElements: HTMLDivElement[] = [];
    shuffledElements.forEach(element =>{

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

    const secondShuffle: [number, string][]  = shuffle(elements);
    const secondShuffledElements: HTMLDivElement[] = [];
    secondShuffle.forEach(element =>{

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
        
        // Append the div to the bod

      
    });


    let finalElements = combinedElements(firstShuffledElements, secondShuffledElements);
    let finalShuffle = shuffle(finalElements);
    finalElements.forEach(element => {
        const main = document.getElementById("main");
        main?.appendChild(element);

    })

})
    
function combinedElements(first:HTMLDivElement[], second: HTMLDivElement[])
{
    return first.concat(second);
}

function shuffle(array:any)  {
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

