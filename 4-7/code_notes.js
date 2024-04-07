const body = document.querySelector("body");
const button = document.querySelector("button");
let counter = 0;

button.addEventListener('click', () => {
      const container = document.querySelector(`.container${counter}`)
      counter++;
      const div = document.createElement('div');
      div.setAttribute('class', `container${counter}`)
      div.style.border = '15px solid red';
      div.style.height = '100%';
      container.appendChild(div); 
  if (div.offsetWidth < 150 || div.offsetHeight < 100) {
            resetDivs();
        
  }

  
})


const resetDivs = () => {
      const firstDiv = document.querySelector('.container1');
      firstDiv.remove();
      counter = 0; 
  
}

// Write a function to randomize the colors of the border


//- create our container for the rest of our divs
//- make it the full width/height of the parent
//- create our button
//- give it position: absolute and move it with top/down/left/right
//- create your variables to grab the body and button
//- create a counter or come up with another way of keeping track of our latest created div
//- find a way to always append to the last div created
//- add an event listener to the button => click event
//- grab the container, or the last created div
//- create the new div give it a class/id that will allow us to grab it on the next button click
//- style the new div
//- append the created div to the container div/the latest div
//- In order to reset we must remove the first created div
