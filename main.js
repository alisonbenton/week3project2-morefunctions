/*
=======================================================

** Week 3 - Project 2 **
*** More Functioning ***

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the result can be logged to the console.

In order to make the results easy to read,
please use console.log("Question #") to declare the
problem number being solved followed by console.log(yourAnswer) after each question.

For any methods that we didn't cover, please refer to the Functions Documentation.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

BASIC TRACK: 1-9
ADVANCED TRACK: 10-13
=======================================================
*/

document.getElementById("q0").innerHTML = "JS Page Connected Properly!";
document.getElementById("q0").classList.add("status-good");


// 1. Without using Math.min(), write a function called minimum(),
//    that takes two numbers from a user,
//    and outputs the smaller number into the HTML page.

function minimum(first, second){
  console.log(first);
  if(first.value<second.value){
    document.getElementById("q1").innerHTML = "The smaller number is " + first.value;
  }
  else if (first.value === second.value){
    document.getElementById("q1").innerHTML = "They are equal."
  }
  else{
    document.getElementById("q1").innerHTML = "The smaller number is" + second.value;
  }
}
document.getElementById("FindSmaller").addEventListener("click", function() {
minimum (FirstNum, SecondNum);
});


// 2. Create a new function called minimum3(),
//    to find the smallest of three numbers,
//    input by a user,
//    and the smallest displayed within the HTML page.

function minimum3 (first, second, third){
    var fir = first.value;
    var sec = second.value;
    var thi = third.value;
    if ((fir<sec)&&(fir<thi)){
      document.getElementById("q2").innerHTML = "The smallest number is " + fir;
    }
    else if ((sec<fir)&&(sec<thi)){
      document.getElementById("q2").innerHTML = "The smallest number is " + sec;
    }
    else if ((thi<sec)&&(thi<fir)){
      document.getElementById("q2").innerHTML = "The smallest number is " + thi;
    }
}
document.getElementById("FindSmallest").addEventListener("click", function() {
  minimum3(FirstNumber, SecondNumber, ThirdNumber);
});

// 3. Declare a function called sum() that takes an array of numbers as an argument adds them together and displays the result within the HTML page.
//    i.e. sum([1, 2, 3, 4]) should return 10.
function sum(arrayA) {
    var runningsum = 0;
    for (i = 0; i < arrayA.length; i++){
        runningsum += arrayA[i];
      };
    document.getElementById("q3").innerHTML = "The sum of the numbers in the array is: " + runningsum;
};
sum([1,2,3,4]);



// 4. Declare a function called multiply() that takes an array of numbers and multiplies them together.
//    i.e. multiply([1, 2, 3, 4]) should return 24.

function multiply(arrayA) {
    var runningproduct = 1;
    for (i = 0; i < arrayA.length; i++){
        runningproduct *= arrayA[i];
      };
    document.getElementById("q4").innerHTML = "The product of the numbers in the array is: " + runningproduct;
};
multiply([1,2,3,4]);





// 5. Write a function called filterSixPlus() that takes the following array and removes words
//    that are less than six characters.
var words = ["window", "table", "cup", "knife", "barstool", "glass", "charger", "outlet"];

function filterSixPlus(arrayA) {
    var wordstokeep = [];
    for (i = 0; i < arrayA.length; i++){
      if(arrayA[i].length>=6){
        wordstokeep.push(arrayA[i]);
      };
    };
    document.getElementById("q5").innerHTML = "The array is now: " + wordstokeep;
};

filterSixPlus(words);





// 6. Use a function to ask a user for a temperature in Celsius and converts it to Fahrenheit.
//    HINT: You may need to use parseFloat to convert the user's string input to a float.

function converttoF(number) {
  var asnumber = parseFloat(number);
  var Farnumber = asnumber.value*(9/5)-32;
    document.getElementById("q6").innerHTML = "In Fahrenheit that is: " + Farnumber + " degrees.";
};

document.getElementById("Convert").addEventListener("click", function() {
  converttoF(Celnumber);
});



// 7. Adding to the code in #6, ask the user a second time to determine whether they'd like to convert from Fahrenheit to Celsius
//    or from Celsius to Fahrenheit. To keep it simple, instruct them to use "F to C" or "C to F".
//    Display an error if they do not follow the rules.
function converttoF2(number) {
  var asnumber = parseFloat(number);
  var Farnumber = asnumber.value*(9/5)-32;
    document.getElementById("q7").innerHTML = "In Fahrenheit that is: " + Farnumber + " degrees.";
};
function converttoC(number) {
  var asnumber = parseFloat(number);
  var Celnumber = (asnumber.value+32)*(5/9);
    document.getElementById("q7").innerHTML = "In Celcius that is: " + Celnumber + " degrees.";
};

document.getElementById("ConvertFtoC").addEventListener("click", function() {
  converttoC(temperature);
});
document.getElementById("ConvertCtoF").addEventListener("click", function() {
  converttoF2(temperature);
});



// 8. Write a function countBs() that takes a string as its only argument and returns
//    a number that indicates how many uppercase “B” characters are in the string.
//    HINT: Google charAt()
// str.charAt(index)

function countBs(string){
  var total = 0;
  for (i = 0; i <string.length; i++){
    if (string.charAt(i) === "B"){
      total += 1;
    };
  };
  document.getElementById("q8").innerHTML = "There are " + total + " Bs.";
};



document.getElementById("HowManyBs").addEventListener("click", function(){
  countBs(inputstring.value);
});

// 9. http://games.usvsth3m.com/javascript-under-pressure/
//    Have fun with these!
//    Get as far as you can and record your progress and time.
//    We'll try this again in a few weeks!







// ADVANCED TRACK
// 10. Write a function called countChars() that behaves like countBs(), except it takes a
//     second argument that indicates what character is to be counted.






// 11. Declare a function called ohZero that replaces all of the o's in a string with 0's.






// 12. Write a function that prints out the entire "99 Bottles of Beer on the Wall" song lyrics.






// 13. Create a 'Guessing Game'. The game starts by picking a random number.
//     It then prompts the user to guess the number. If the user's number is lower/higher,
//     it will prompt the user to enter another guess and tell the user if the guess was
//     too high or too low. This continues until the correct guess is entered.
//     When the correct guess is entered the user is given a success message with the correct number.
