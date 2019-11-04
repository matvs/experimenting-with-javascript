let createPromise = ms => new Promise((resolve, reject) => {
  setTimeout(() => resolve(ms), ms) 
});

let numbers = [1, 2, 3];
let letters = ['a', 'b', 'c'];

let RestApi = (function(){

function sendData(data){
  return createPromise(3000).then(() => data);
  data.push("Hello Array");
  data = [];
}

return {
  sendData: sendData
}

}());

let DataController = (function(numbers, letters){

function sendNumbers(){
  RestApi.sendData(DataController.numbers).then((numbers) => {
    console.log(numbers);
    //numbers = [];
  })
  //DataController.numbers = [];
}

function sendLetters(){
   RestApi.sendData(DataController.letters.slice()).then((letters) => {
    console.log(letters);
    //letters = [];
  })
  //DataController.letters = [];
}

return {
  sendNumbers: sendNumbers,
  sendLetters: sendLetters,
  numbers: numbers,
  letters: letters
}

}(numbers, letters));

DataController.sendNumbers()
DataController.sendNumbers()
DataController.sendLetters();
DataController.sendLetters();

function emptyArray(array) {
    array = [];
}

function pushNumberOneToArray(array) {
  array.push(1)
}

emptyArray(DataController.letters);
console.log(DataController.letters);

pushNumberOneToArray(DataController.letters);
console.log(DataController.letters);
