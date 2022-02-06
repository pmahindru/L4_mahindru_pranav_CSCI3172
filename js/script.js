// This is my own js 

// ---------------------------------------- PART 1 --------------------------------------------------
// this is for the onchange whenever the value update it will update the background color.
document.getElementById('week').addEventListener('change',colorChange);
// function that change the color of the background with respect to the value of the drop down (unique value)
function colorChange(){
    // getting the value of the week
    let week = document.getElementById('week').value;
    // getting the background color div and week so that i can change the color
    let backgroundColorDiv = document.getElementById('colorOfDiv');
    let backgroundColorWeek = document.getElementById('week');
    // extra work :) to change the background color of the form as well
    let backgroundColorForm = document.getElementById('colorOfForm');
    // switch and case for the every week has there unique background color 
    switch(week){
        case "Monday":
            backgroundColorWeek.style.backgroundColor = "pink";
            backgroundColorDiv.style.backgroundColor = "pink";
            backgroundColorForm.style.backgroundColor = "pink";
            break;
        case "Tuesday":
            backgroundColorWeek.style.backgroundColor = "yellow";
            backgroundColorDiv.style.backgroundColor = "yellow";
            backgroundColorForm.style.backgroundColor = "yellow";
            break;
        case "Wednesday":
            backgroundColorWeek.style.backgroundColor = "aqua";
            backgroundColorDiv.style.backgroundColor = "aqua";
            backgroundColorForm.style.backgroundColor = "aqua";
            break;
        case "Thursday":
            backgroundColorWeek.style.backgroundColor = "lightgreen";
            backgroundColorDiv.style.backgroundColor = "lightgreen";
            backgroundColorForm.style.backgroundColor = "lightgreen";
            break;
        case "Friday":
            backgroundColorWeek.style.backgroundColor = "lightblue";
            backgroundColorDiv.style.backgroundColor = "lightblue";
            backgroundColorForm.style.backgroundColor = "lightblue";
            break;
        case "Saturday":
            backgroundColorWeek.style.backgroundColor = "lightgrey";
            backgroundColorDiv.style.backgroundColor = "lightgrey";
            backgroundColorForm.style.backgroundColor = "lightgrey";
            break;
        case "Sunday":
            backgroundColorWeek.style.backgroundColor = "red";
            backgroundColorDiv.style.backgroundColor = "red";
            backgroundColorForm.style.backgroundColor = "red";
            break;
        default:
            backgroundColorWeek.style.backgroundColor = "orange";
            backgroundColorDiv.style.backgroundColor = "orange";
            backgroundColorForm.style.backgroundColor = "orange";
            break; 
    }
    // check the value and color 
    console.log(week);
}

// ---------------------------------------- PART 2 --------------------------------------------------
document.getElementById('submit').addEventListener('click', onSubmit);
function onSubmit(e){
    e.preventDefault();
    let number = parseInt(document.getElementById('number').value);

    let result = "The number entered is " + number + " an ";
    // checking the odd and even
    if(number % 2 == 0){
        result += "even ";
    }
    else{
        result += "odd ";
    }

    // checking the prime and composite
    // this is base case for the prime number because these two number are prime we know that :)
    if(number === 1 || number === 2){
        result += "prime number ";
    }
    else{
        /*
        i am checking count and using for loop
           ### BEFORE CHECKING I AM ASSUMING THAT ALL NUMBERS IS DIVISIBLE BY 1 ###
        if number mod(i) === 0 and count add 1 and if count is more than 1 then it is composite because it is divisible by more than 2 numbers,
        we also checking if the number mod(i) === 0 amd it is only divisible by itself then it is a prime number
        */
        var count = 0;
        for(var i=2; i<=number; i++){
            if(number % i === 0){
                count++;
                if(count > 1){
                    result += "composite number ";
                    break;
                }
            }
        }
        if(count === 1){
            result += "prime number ";   
        }
    }

    if(number <= 50){
        result += "Less than or equal to 50 ";
    }
    else if(number > 50 && number <= 75){
        result += "Greater than 50 and Less than or equal to 75 ";   
    }
    else if(number > 75 && number <= 100){
        result += "Greater than 75 and less than or equal to 100";
    }
    else{
        result += "Greater than 100";
    }

    // show as alert as well as on the web page
    alert(result);
    document.getElementById('answer').innerHTML = result;

    // check the value and answer 
    console.log(number);
    console.log(result);
}

