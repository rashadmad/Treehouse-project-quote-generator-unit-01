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
  const generateRandNum = () => Math.floor(Math.random() * (quoteAmount - 1 + 1)) + 0; 
  //const checkForMatch = new Map();

  ///I want to have a diffrent quote displayed everytime its clicked
  //create an array keeping track of the quote indexs of the quotes that have been displayed this will allow use to compare the quotes we have displayed with new quotes
  let randomQuotesArray = []

  //this helper function will compare the last two items of an array if both items are the same this will ring true
  const numMatch = (numA,numB) => {
    const foundMatch = numA === numB;
    if (randomQuotesArray.length > 1 && foundMatch){
      return foundMatch ? true : false
      console.log('match found of 5');
    }
      return false
      console.log('match found');
  }

  //populate that array with the choosen quote index number NOT with the quotes obj
  //but first fillter that number make sure its not a reapeat
  let addQuoteToindex = (array,num) => {
    let filteredNum = num;
    if (numMatch(randomQuotesArray[filteredNum - 2],randomQuotesArray[filteredNum - 1]) && num === randomQuotesArray[filteredNum - 1]) {
      filteredNum--
    } else if (numMatch(randomQuotesArray[filteredNum - 2],randomQuotesArray[filteredNum - 1])) {
      filteredNum++
    }
    
    array.push(filteredNum);
  }

  /***
   * `printQuote` function
  ***/
  //add data to dom
  const printQuote = () => {

    //add a quote index to the array
    addQuoteToindex(randomQuotesArray,generateRandNum());
    console.log(generateRandNum());
    //here we take the last item in the array and generate a random quote obj
    let quoteObject = quotes[randomQuotesArray.length - 1];
    console.log(randomQuotesArray);
    quoteElement.textContent = quoteObject.quoteBody; 
    sourceElement.textContent = quoteObject.person;
    //these teneries purpose is to validate those values in some cases the data wont be populated
    quoteObject.citation ? citationElement.textContent = quoteObject.citation : citationElement.textContent = "";
    quoteObject.date ? yearElement.textContent = quoteObject.date : yearElement.textContent = "";
  }
  //ok so I want this function to load when the page loads so I will use onload
  window.onload = () => printQuote();
  


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false); 