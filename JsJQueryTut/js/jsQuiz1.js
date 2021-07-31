// TODO: Write a JavaScript program that accept two integers and display the larger.

// ES5 function
function displayLargerInteger(num1, num2){
    if(num1 > num2){
        // display num1
        document.getElementById('display').innerHTML = num1+' is larger than '+num2;
    } else {
        // display num2
        document.getElementById('display').innerHTML = num2+' is larger than '+num1;
    }
}

// ES6 function
// let displayLargerInteger = (num1, num2) => {
    // if(num1 > num2){
    //     // display num1
    //     document.getElementById('display').innerHTML = num1+' is larger than '+num2;
    // } else {
    //     // display num2
    //     document.getElementById('display').innerHTML = num2+' is larger than '+num1;
    // }
// }

displayLargerInteger(147, 14);