// TODO: Write a JavaScript conditional statement to sort three numbers. 
    // Display the result.

// ES5 function
function sortThreeNumber(num1, num2, num3){
    let emptyPosition;
    let sortStatus = true;

    while(sortStatus){
        if(num1 < num2 && num2 < num3){
            sortStatus = false;
            document.getElementById('display').innerHTML = num1+', '+num2+', '+num3;
        } else {
            if(num1 < num2){
                // check num3 and num2
                if(num3 < num2){
                    // swap num3 and num2
                    
                    // put num3 value in emptyPosition
                    emptyPosition = num3;
                    // put num2 value in num3
                    num3 = num2;
                    // put emptyPosition value in num2
                    num2 = emptyPosition;
                } 
            } else if(num2 < num1){
                // put num2 value in emptyPosition
                emptyPosition = num2;
                // put num1 value in num2
                num2 = num1;
                // put emptyPosition value in num1
                num1 = emptyPosition;
        
                // check num3 and num2
                if(num3 < num2){
                    // put num3 value in emptyPosition
                    emptyPosition = num3;
                    // put num2 value in num3
                    num3 = num2;
                    // put emptyPosition value in num2
                    num2 = emptyPosition;
                }
            }
        }
    }
    
}

sortThreeNumber(11, 7, 5);