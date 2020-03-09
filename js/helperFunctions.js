//good old helper functions 
const addNumToArray = (array,num) => array.push(num);
const reduceArray = (array) => array.shift();
const increaseNum = (num) => num += 1;
const decreaseNum = (num) => num -= 1;
const matchNum = (numA,numB) => numA === numB ? true : false;
//obviously this function will need some type of randomising funtionality, as we all know this can be a pain in javascript
const randomNumber = () => Math.floor(Math.random() * (quoteAmount - 1 + 1)) + 0; 