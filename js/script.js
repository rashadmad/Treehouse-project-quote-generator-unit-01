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
    //add content to elements
    //adds the quote
    quoteElement.textContent = quoteObject.quoteBody; 
    //adds the citation object
    const citationObject = quoteObject.citation;
    //adds the year object
    const yearObject = quoteObject.date;
    //adds the life object
    const lifeObject = quoteObject.life;
    //adds the citation but in some cases there wont be one so add a blank space
    const citationString = citationObject ? '<span class="citation">' + citationObject + '</span>' : '<span></span>';
    //adds year to the string
    const yearString = yearObject ? '<span class="year">' + yearObject + '</span>' : '<span></span>';
    //
    const lifeString = lifeObject ? '<span class="life">' + lifeObject + '</span>' : '<span></span>';
    //adds a background image
    document.body.style.backgroundImage = "url(" + quoteObject.image + ")";
    personElement.innerHTML = quoteObject.person + citationString + yearString + '</br>' + lifeString
    //adds the lifetime

  }

  /***
   * `printQuote` function
  ***/
  //add data to dom
   const printQuote = () => addQuotesToDom(pickedNumbersArray)
   
   //makes this app work like a slide show 
   setInterval(function(){printQuote()}, 3500);

  window.onload = () => printQuote();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
