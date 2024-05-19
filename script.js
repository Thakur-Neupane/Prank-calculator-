// Build a basic calculator
// Build UI : raw desigh , html implementation , CSS
// build solution [business logic ]
const OPERATORS = ["%", "+", "-", "*"]

// Get all buttons from calculaator 
const calculatorButtons = document.querySelectorAll("button")

// display box
const displayBox= document.querySelector(".display-box");
let displayValue = "";

// Step-1 Add onclick event listener to every buttons
calculatorButtons.forEach(btn=>{
  const buttonValue = btn.innerText
btn.onclick=()=>{
  displayValue+=buttonValue
  buttonAction(buttonValue)

  // Button Actions 
  
}
})

// Step-2 Add keypress event listener to 
document.addEventListener("keypress",(event)=>{
  
  if(event.code.includes("key")){
    return;
  }
  displayValue +=event.key
  buttonAction(event.key)
  


})

// Function for displaying value in display box
const display = () =>{
  displayBox.innerText += displayValue || "0.0"
}

// Function to perform action on button click 
const buttonAction = (buttonValue)=>{
  if(buttonValue==="AC"){
    displayValue= ""
    display()
    return;
  }

  // Implement Clear Button 
  if (buttonValue==="C"){
    displayValue= displayValue.slice(0,-2)
    display()
    return;
  }

  // Implement handling the operrator dont allow consecutive multiple operators 

  if (OPERATORS.includes(buttonValue)){
    const lastCharacter= displayValue[displayValue.length-1]
    if(OPERATORS.includes(lastCharacter)){

      // remove the last character which is existing operator 
            displayValue= displayValue.slice(0,-2)           
    }
                         
  }
  // Implement = button to get the total 
  if (buttonValue === "=" || buttonValue==="Enter"){



// Get a valid string for eval 
    const validEvalString = (displayValue.slice(0,-1))
    const result = string(eval(validEvalString))
    displayValue= result;

  }
  display()
}