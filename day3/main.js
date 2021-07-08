

// function printTodaysDate() {
//   var date = new Date();
//   const year = date.getFullYear();
//   const month = date.getMonth() + 1;
//   const day = date.getDate();
//   const hours = date.getHours();
//   const minutes = date.getMinutes();

//   console.log(day + '/' + month + '/' + year + ' '
//     + hours + ':' + minutes);
// }

// printTodaysDate();
// printTodaysDate();
// printTodaysDate();
// printTodaysDate();


// class QuickMath {
//   isPerfectSquare(num) {
//     return Math.sqrt(num) % 1 == 0;
//   }
// }

// let instance = new QuickMath();
// console.log(instance.isPerfectSquare(6));


class Person {

  static fromNames(firstName, lastName) {
    const person = new Person();
    person.firstName = firstName;
    person.lastName = lastName;
    return person;
  }

  constructor() {
    this.firstName = '';
    this.lastName = '';
  }

  getFullName() {
    return this.firstName +  ' ' + this.lastName;
  }

}

const jacques = Person.fromNames('Jacques', 'de Villiers');
const ryan = Person.fromNames('Ryan', 'Ballentine');

console.log(jacques.lastName);
console.log(ryan.getFullName());