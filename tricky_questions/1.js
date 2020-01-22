/*
function sayHi() {
  console.log(name);
  console.log(age);
  var name = "Lydia";
  let age = 21;
}

sayHi();
*/


// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// }
// console.log('-------------');
// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// }


// const shape = {
//   radius: 10,
//   diameter() {
//     return this.radius * 2;
//   },
//   perimeter: () => 2 * Math.PI * this.radius
// };

// console.log(shape.diameter());
// console.log(shape.perimeter());


const programmerOutput = [
  {
    name: "Uncle Bobby",
    linesOfCode: 500
  },
  {
    name: "Suzie Q",
    linesOfCode: 1500
  },
  {
    name: "Jimmy Gosling",
    linesOfCode: 150
  },
  {
    name: "Gracie Hopper",
    linesOfCode: 1000
  }
];

// let totalOutput = 0;

// for (let i = 0; i < programmerOutput.length; i++) {
//   totalOutput += programmerOutput[i].linesOfCode;
// }

// console.log(totalOutput);


// const totalOutput1=programmerOutput.reduce((totalLineCode,output)=>{
//   //console.log(totalLineCode);
//   //console.log(output);
//   return totalLineCode+output.linesOfCode

// },0);

// console.log(totalOutput1);

function makeBankAccount(){
  let balance=0;

  function getBalance(){
    return balance;
  }

  function setBalance(amount){
    balance=amount;
  }

  return {
    getBalance,
    setBalance
  }
}

const account=makeBankAccount();
console.log(account.getBalance());
account.setBalance(200);
console.log(account.getBalance());