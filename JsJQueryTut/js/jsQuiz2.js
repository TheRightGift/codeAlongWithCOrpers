// TODO: Write a JavaScript conditional statement to find the sign of product of three numbers. 
    // Display an alert box with the specified sign.

// ES5 function
function productOfThreeNumbers(num1, num2, num3){
    let prdt = num1 * num2 * num3;

    if(Math.sign(prdt) == 1){
        // positive integer
        document.getElementById('display').innerHTML = 'Product is a positive integer';
    } else if(Math.sign(prdt) == -1){
        // negative
        document.getElementById('display').innerHTML = 'Product is a negative integer';
    } else if(Math.sign(prdt) == 0) {
        // zero
        document.getElementById('display').innerHTML = 'Product is a zero';
    } else {
        // invalid parameters
        document.getElementById('display').innerHTML = 'On or more of the parameters is/are not numbers';
    }
} 

productOfThreeNumbers('w', 3, -16);