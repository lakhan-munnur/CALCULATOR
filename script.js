let input =document.getElementById("myInput");
//SELECT input box myinput id is give directlly to input box

let allbuttons=document.querySelectorAll("button");
// Select the buttons as a NodeList
//this will select all buttons

let str="";
// Initialize an empty string to store the input
// str is empty string we are using string becuse
//eval(need string here);
// var x = 10;
// var y = 20;
// var code = 'x + y';  JavaScript code as a string
// var result = eval(code);  Evaluates the code and assigns the result to the 'result' variable
// console.log(result);  Output: 30

let arr=Array.from(allbuttons);
//above method convert NodeList obtained from 
//selecting DOM elements, into an array.
// Convert the NodeList obtained from selecting DOM elements into an array


// function evaluateExpression(expression) {
//     try {
//       return eval(expression);
//     } catch (error) {
//       return 'Error';
//     }
  
//   }


// Function to handle button clicks
//  the parameter e is commonly used as an abbreviation
    //  for the event object. It represents the event that
    //   occurred when a button is clicked. The event object
    //    contains information about the event, such as the 
    //    target element (the element that triggered the
    //      event), the type of event, mouse coordinates,
    //       keyboard keycodes, and more.
function evaluator(e)
{
    //e has the event information ,what even has listned
    
    if (e.target.innerHTML == '=')
    {   // Evaluate the expression stored in 'str' and update the input field
         str = eval(str);
         input.value = str;
    }
    else if(e.target.innerHTML == 'AC')
    {  // Clear the input
        str = "";
        input.value = str;
    }
     else if(e.target.innerHTML == 'DEL')
    {
        // Remove the last character from 'str'
         str = str.substring(0, str. length-1);
         input.value = str;
    }
    else
    {
        // Append the clicked button's text to 'str'
    str =str + e.target.innerHTML;
    input.value = str;
    // Add the button's text to the string
    // str=''
    // str='1'
    // str='1+'
    // str='1+1'
    // str='='
    // eval('1+1')=2
    // str='2'
    // input.value = str;
    //  updated to display "2" in the input field.
    }
}
// Function to add a click event listener to a button
// Define a function to be executed for each element
function addEventListenerToButton(button)
{
    
    button.addEventListener('click',evaluator);
    // evaluator is call back function so called only when
    //button is clicked so here just event listner is attatched 
    //foreach  button
}
// Loop through the array of buttons and attach click event listeners
// Use the forEach() method to loop through the array
arr.forEach(addEventListenerToButton); 
//The forEach loop iterates through each 
//button in the arr array and attaches the 
//click event listener using addEventListenerToButton.

// `forEach()` method in JavaScript is used to iterate 
// over elements in an array and execute a provided function
// for each element.

//ORDER OF EXICUTION OF FUNCTINS
//1.arr.forEach(addEventListenerToButton);
//2.button.addEventListener('click',evaluator);  will run 20 times because it 'attach'just attach not exicute
// event listner to button
//3.so now for all buttons we have "attached" event listner
//now when we click on button evaluator function is called






// Function to evaluate the expression
//   function evaluateExpression(expression) {
//     try {
//       return eval(expression);
//     } catch (error) {
//       return 'Error';
//     }
//   }


// arr.forEach((button)=>{
//     button.addEventListener('click',(e)=>{
//         if (e.target.innerHTML == '=')
//         { 
//              str = eval(str);
//              input.value = str;
//         }
//         else if(e.target.innerHTML == 'AC')
//         { str = "";
//         input.value = str;
//         }
//          else if(e.target.innerHTML == 'DEL')
//          {
//              str = str.substring(0, str. length-1);
//              input.value = str;
//         }
//         else
//         {
//         str += e.target.innerHTML;
//         // Add the button's text to the string
//          input.value = str;
//         }
//     })
// })