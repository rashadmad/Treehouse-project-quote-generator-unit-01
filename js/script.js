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
   * `getRandomQuote` function
  ***/
  //obviously this function will need some type of randomising funtionality, as we all know this can be a pain in javascript
  const getRandomNumber = () => Math.floor(Math.random() * (quoteAmount - 1 + 1)) + 0;
  //It will need to interact with the array of quotes
  //It will return a quote object
  const getRandomQuote = () => quotes[getRandomNumber()]; 
  //it will be intiatied like this getRandomQuote() 

  /***
   * `printQuote` function
  ***/
  //add data to dom
  let printQuote = () => {
    const quoteObject = getRandomQuote();
    quoteElement.textContent = quoteObject.quoteBody; 
    quoteObject.person ? sourceElement.textContent = quoteObject.person : sourceElement.textContent = "";
    quoteObject.citation ? citationElement.textContent = quoteObject.citation : citationElement.textContent = "";
    quoteObject.date ? yearElement.textContent = quoteObject.date : yearElement.textContent = "works";
  }
  //ok so I want this function to load when the page loads so I will use onload
  window.onload = () => printQuote();
  


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false); 