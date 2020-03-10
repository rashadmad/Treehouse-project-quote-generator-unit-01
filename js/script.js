/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/
"use strict"
// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

  //the purpose of this randomQuoteArray is to create a list of random numbers that dont match that can be used when creating the quote obj
 
 const addQuotesToDom = (array) => { 
    //add a number to our basic array every time we press the button
    addNumberToArray(pickedNumbersArray,getRandomNumber());
    const filteredArray = duplicateFilter(pickedNumbersArray);
    //pull a quote from our quotes array  
    const quoteObject = getRandomQuote(array[array.length - 1]);
    quoteElement.textContent = quoteObject.quoteBody; 
    sourceElement.textContent = quoteObject.person;
    citationElement.textContent = quoteObject.citation;
  }

  /***
   * `printQuote` function
  ***/
  //add data to dom
   const printQuote = () => addQuotesToDom(pickedNumbersArray)

  window.onload = () => printQuote();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
