/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/
"use strict"
// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

  //the purpose of this randomQuoteArray is to create a list of random numbers that dont match that can be used when creating the quote obj

  /***
   * `getRandomQuote` function
  ***/
  const getRandomQuote = (rand) => quotes[randomNumber()];
  console.log(randomNumber())
  /***
   * `printQuote` function
  ***/
  //add data to dom
   const printQuote = (quoteObject) => {
     populateRandomizerArray(randomArray,quoteAmount,0)
     quoteElement.textContent = quoteObject.quoteBody; 
     sourceElement.textContent = quoteObject.person;
     citationElement.textContent = quoteObject.citation;
     if(randomArray.length === 3){
       emptyArray()
      };
   }
  window.onload = () => printQuote(getRandomQuote());
  
console.log(populateRandomizerArray(randomArray,quoteAmount,0))

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", function(){
  printQuote(getRandomQuote())
}, false); 
