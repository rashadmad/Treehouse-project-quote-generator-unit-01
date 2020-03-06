/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/
"use strict"
// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat



// It would be cool to have some sort of fade in and out effect to transition the change in data but not a requierment
// I will need to display at least five quotes
// 

//this will be activated upon a button click
//the getRandomQuote function will be invoked here
  /***
   * helper function for checking is the objects in an array are the same
  ***/
  const sameNum = (myArray) => (myArray[0] === myArray[1]) ? true : false;
  const myCeil = (myArray,comparedArrayLength) => (myArray.length > comparedArrayLength) ? 1 : 0;
  /***
   * `getRandomQuote` function
  ***/
  //obviously this function will need some type of randomising funtionality, as we all know this can be a pain in javascript
  const generateRandNum = () => Math.floor(Math.random() * (quoteAmount - 1 + 1)) + 0; 
  
  //check if this random number is not the same as the last one if there was a last one
 
  ///first create a empty array
  let generatedRandNumArray = [];
    
  ///next add the first generated random number to the array
    let addQuoteToArray = () => {
      if (generatedRandNumArray.length == 5){
        //grabage cleaning make sure that this array has at most two items in it
         generatedRandNumArray.shift();
      }
      generatedRandNumArray.push(generateRandNum());
    };

  //It will need to interact with the array of quotes
  //It will return a quote object

  //it will be intiatied like this getRandomQuote() 

  /***
   * `printQuote` function
  ***/
  //add data to dom
  let printQuote = () => {
    addQuoteToArray();
    const mod = () => sameNum(generatedRandNumArray) ? 1 : 0
    const getRandomQuote = () => quotes[generateRandNum() + mod() - myCeil(generatedRandNumArray,quoteAmount)];
    const quoteObject = getRandomQuote();
    quoteElement.textContent = quoteObject.quoteBody; 
    sourceElement.textContent = quoteObject.person;
    //these teneries purpose is to validate those values in some cases the data wont be populated
    quoteObject.citation ? citationElement.textContent = quoteObject.citation : citationElement.textContent = "";
    quoteObject.date ? yearElement.textContent = quoteObject.date : yearElement.textContent = "";
    console.log(generateRandNum());
  }
  //ok so I want this function to load when the page loads so I will use onload
  window.onload = () => printQuote();
  


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false); 