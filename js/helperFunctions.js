//good old helper functions 
const addNumToArray = (array,num) => array.push(num),
      reduceArray = (array) => array.shift(),
      increaseNum = (num) => num += 1,
      decreaseNum = (num) => num -= 1,
      findMatch = (numA,numB) => numA === numB ? true : false;

let randomArray = [0]
   
//return Math.floor(Math.random() * (max - min + 1)) + min;
let populateRandomizerArray = (arry,max,min) => {
let randomizer = Math.floor(Math.random() * (max - 1 + 1)) + 0;

    if(arry.length >= 1){
        const firstElement = randomArray[0];
        const secondElement = randomArray[1]; 
         if(findMatch(firstElement,secondElement)) {
            increaseNum(randomizer);
         } else if(firstElement === max && secondElement === max){decreaseNum(randomizer)}
         else if(firstElement === min && secondElement === min){increaseNum(randomizer)}
    }
    arry.push(randomizer)
}

const randomNumber = () => {
    if (randomArray.length >= 1){
        return randomArray[randomArray.length - 2]
    } else {
        return randomArray[randomArray.length - 1]
    }
}
