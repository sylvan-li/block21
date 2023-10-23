// constructor function called "Car"
class Car {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
    //adding a method that returns info on the car
    getDescription() {
      return `The make of this car is ${this.make}, the model is ${this.model} , and is made in ${this.year}.`;
    }
}
//defining a subclass/extended class of "car" named ElectricCar
class ElectricCar extends Car {
  constructor(make, model, year, range) {
    super(make, model, year);
    this.range = range;
  }
  //overriding getDescription method of car
  getInfo(){
    return `${super.getDescription()} It has a range of  ${this.range} miles per charge .`;
  }
}
//Creating an instance of ElectricCar with Tesla 
const Tesla = new ElectricCar("Tesla", "Model S", 2019,300);
console.log(Tesla);
console.log(Tesla.getInfo());
