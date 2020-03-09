//good old helper functions 
const addNumToArray = (array,num) => array.push(num),
      reduceArray = (array) => array.shift(),
      increaseNum = (num) => num += 1,
      decreaseNum = (num) => num -= 1,
      findMatch = (numA,numB) => numA === numB ? true : false;
      addNumberToArray = (array,num) => arry.push(num)

let randomArray = []
   
//return Math.floor(Math.random() * (max - min + 1)) + min;
let populateRandomizerArray = (arry,max,min) => {
let randomizer = Math.floor(Math.random() * (max - 1 + 1)) + 0;
const firstElement = randomArray[randomArray.length - 1];
const secondElement = randomArray[randomArray.length - 2]; 
    if(arry.length >= 1 && findMatch(firstElement,secondElement) && firstElement === max) {
        arry.push(randomizer++)
        console.log(randomizer)
    } else if (arry.length >= 1 && findMatch(firstElement,secondElement) && firstElement === max) {
        arry.push(randomizer--)
        console.log(randomizer)
    } else {
        arry.push(randomizer)
    }
    console.log(randomArray)
}

const randomNumber = () => randomArray[randomArray.length - 1]

const emptyArray = () => randomArray.shift();
