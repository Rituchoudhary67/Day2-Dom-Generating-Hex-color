const showData = document.querySelector("#para");
const btn = document.querySelector(".change-color");


/*step2 :- create a function for btn name as hexcolor*/
function hexColor() {
    const red = Math.floor(Math.random() * 255);   
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
   

    document.body.style.background = `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
    showData.innerText =  `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
    
}

/*step1 :- add event listener on btn*/
btn.addEventListener('click',hexColor)