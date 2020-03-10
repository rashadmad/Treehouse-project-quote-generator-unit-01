//good old helper functions 
const addNumToArray = (array,num) => array.push(num),
      //find a match between two numbers
      findMatch = (numA,numB) => numA === numB ? true : false,
      //add a new number to this array
      addNumberToArray = (array,num) => array.push(num),
      //create random number
      getRandomNumber = () => Math.floor(Math.random() * (quotes.length - 1 + 1)) + 0;
      //remove duplicates from an array
      removeDuplicates = (array) => [...new Set(array)]
      /***
      * `getRandomQuote` function
      ***/
      getRandomQuote = (rand) => quotes[rand];

//create an array to store random generated number      
let pickedNumbersArray = []

const duplicateFilter = (array) => {
    const hasMoreThanOne = array.length > 1 

    //after cheking if the array is populated then also check for a match of the last and second to last elements of the array
    
    if(hasMoreThanOne) {

    let firstItem = array[array.length - 1];
    let secondItem = array[array.length - 2]; 
    const max = array.length
    const min = 1
        console.log(firstItem)
        console.log(secondItem)
        
        if(findMatch(firstItem,secondItem) && firstItem === max) {
            console.log("two fives");
            addNumToArray(array,secondItem -= 1);
            return array
        } else if(findMatch(firstItem,secondItem) && firstItem === min){
            console.log("two ones");
            addNumToArray(array,secondItem -= 1);
            return array
        } else if(findMatch(firstItem,secondItem)){
            console.log("everything else");
            addNumToArray(array,secondItem += 1);
            return array
        }
    } 
    //returns an array with out any duplicates
    return array
}
