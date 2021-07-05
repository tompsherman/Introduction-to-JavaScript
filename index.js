/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)


let votingAge=19;
if (votingAge>18){
   console.log("true");
}

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let order = 'cold';

if (order === 'hot'){
console.log('order coffee');
}
else if(order === 'cold'){
console.log('order beer');
}



//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method


let year = "1999";
Number(year);
console.log(year)

//Task d: Write a function to multiply a*b 


let multiplyFunction = (a, b) => a*b;

console.log(multiplyFunction(8,9));


/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

let myAge = 31;
let dogYear = 7;

let arrowFunction = (myAge, dogYear) => myAge*dogYear;

console.log(arrowFunction(myAge,dogYear));

/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996


function feeder(age, weight){
   if(age >=1 && weight > 15){
       console.log(weight*.02);
   }else if(age >1 && weight <= 15 || weight >= 11){
       console.log(weight*.03);
   }else if(age>1 && weight <= 10 || weight >= 6){
       console.log(weight*.04);
   }else if(age>1 && weight <= 5){
       console.log(weight*.05);
   }else if(age<=.999||age>=.584){
       console.log(weight*.04)
   }else if(age<=.583||age>=.334){
       console.log(weight*.05)
   }else if(age<=.333||age>=.166){
       console.log(weight*.1)
   }
}
feeder(1, 15)




/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 





    
        
let compChoice = Math.random();
    let myChoice = "paper";

    if(compChoice>=0 && compChoice<=.333){
        console.log("computer throws rock")
    }else if(compChoice>=.334 && compChoice<=.666){
        console.log("computer throws paper")
    }else if(compChoice>=.667 && compChoice<=1){
        console.log = "computer throws scissors"
    }

if(myChoice === "rock" || myChoice === "paper" || myChoice === "scissors"){
console.log("you threw " + myChoice)
}

    if(myChoice === "rock" && compChoice>=0 && compChoice<=.333){
        console.log("draw")
    }else if(myChoice === "paper" && compChoice>=.334 && compChoice<=.666){
        console.log("draw")
    }else if(myChoice === "scissors" && compChoice>=.667 && compChoice<=1){
        console.log("draw")
    }else if(myChoice === "rock" && compChoice>=.334 && compChoice<=.666){
        console.log("you lose (computer wins)")
    }else if(myChoice === "rock" && compChoice>=.667 && compChoice<=1){
        console.log("you win (computer loses)")
    }else if(myChoice === "paper" && compChoice>=.667 && compChoice<=1){
        console.log("you lose (computer wins)")
    }else if(myChoice === "paper" && compChoice>=0 && compChoice<=.333){
        console.log("you win (computer loses)")
    }else if(myChoice === "scissors" && compChoice>=0 && compChoice<=.333){
        console.log("you lose (computer wins)")
    }else if(myChoice === "scissors" && compChoice>=.334 && compChoice<=.666){
        console.log("you win (computer loses)")
    }  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

let kilometers = 1;

console.log (kilometers/1.609)

// b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
let feet = 1;

console.log (feet*30.48);
/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
// let bottles = 99

// function annoyingSong(bottles){
//     for(let i = bottles; i >= 0; i--){
//      console.log( i + " bottles of soda on the wall " + i + " bottles of soda, take one down pass it around " + (i-1) + " bottles of soda on the wall");
// }
// }
// annoyingSong(bottles)


/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
// function mark(grade){
//    if(grade >=90 && grade <=100){
//        console.log("A");
//    }else if(grade <=89 && grade >=80){
//       console.log("B");
//    }else if(grade <=79 && grade >=70){
//        console.log("C");
//    }else if(grade <=69 && grade >= 60){
//        console.log("D");
//    }else if(grade <=59)
//        console.log("F")
//    }


// mark(55);
// mark(82);
// mark(66);
// mark(95);
// mark(77);

  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
// update your rock papers sissors code below to take a prompt from a user using the window object