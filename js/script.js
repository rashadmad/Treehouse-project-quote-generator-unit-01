/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

// I will need to manipulate the dom in particular the "quote" "source" "citation" and "year" classes
// so I will need to create varibles to be refrenced later
const quoteElement = document.createElement('quote'); 
const sourceElement = document.createElement('source'); 
const citationElement = document.createElement('citation'); 
const yearElement = document.createElement('year'); 

// It would be cool to have some sort of fade in and out effect to transition the change in data but not a requierment
// I will need to display at least five quotes
// 

/*** 
 * `quotes` array 
***/
//Here I will need to make an array of objects
/*** this object class will have a
 * Quote
 * person 
 * date 'optional'
 * citation 'optional'
***/
class QuoteObj {
  constructor(quoteObj = "There is no passion to be found playing small - in settling for a life that is less that the one you are capable of living",person = "Nelson Mandela",bio,date,citation) {
    this.quoteBody = quoteObj,
    this.person = person,
    this.bio = bio,
    this.date = date,
    this.citation = citation
  }
}

/***
 * `getRandomQuote` function
***/
//obviously this function will need some type of randomising funtionality, as we all know this can be a pain in javascript
//It will need to interact with the array of quotes
//It will return a quote object
//it will be intiatied like this getRandomQuote() 


/***
 * `printQuote` function
***/
//this will be activated upon a button click
//the getRandomQuote function will be invoked here


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false); 