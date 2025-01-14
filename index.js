// Complete the Numbers class below
// the constructor has already been provided
class Numbers {
  constructor(data) {
    //data can either be a string or an array of numbers
    if (typeof data === 'string') {
      this.data = str.split(',').map((number) => number * 1);
    } else {
      this.data = data;
    }
  }
  count() {
    //return the count of numbers in data
    return this.data.length;
  }
  printNumbers() {
    //print the numbers in data
    console.log(this.data);
  }
  odds() {
    //return the odd numbers in data
    let odds = [];
    this.data.forEach((num) => {
      if (num % 2 !== 0) {
        odds.push(num);
      }
    });
    return odds;
  }
  evens() {
    //return the even numbers in data
    const evens = this.data.filter((num) => {
      return num % 2 === 0;
    });
    return evens;
  }
  sum() {
    //return the sum of the numbers
    const sum = this.data.reduce((acc, num) => {
      return (acc += num);
    }, 0);
    return sum;
  }
  product() {
    //return the product of the numbers
    const product = this.data.reduce((acc, num) => {
      return (acc *= num);
    }, 1);
    return product;
  }
  greaterThan(target) {
    //return the numbers greater than the target
    let larger = [];
    this.data.forEach((num) => {
      if (num > target) {
        larger.push(num);
      }
    });
    return larger;
  }
  howMany(target) {
    //return the count of a given number
    let count = 0;
    this.data.forEach((num) => {
      if (num === target) {
        count += 1;
      }
    });
    return count;
  }
}

//Prompt the user for a list of integers separated by commas
const str = prompt('enter some numbers, like this', '1,2,3,3,5,9');

//create an instance of numbers
const n1 = new Numbers(str);
console.log(n1.count()); //returns count of numbers
n1.printNumbers(); //prints the number along with their indexes
console.log(n1.odds()); //returns odd numbers
console.log(n1.evens()); //returns even numbers
console.log(n1.sum()); //returns sum of numbers
console.log(n1.product()); //returns product of numbers
console.log(n1.greaterThan(3)); //returns numbers greater than another number
console.log(n1.howMany(3)); //return the count of a specific number
