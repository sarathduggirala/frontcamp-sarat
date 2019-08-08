const CARCOLOR = Symbol(); // give red and no see changes in below console
const CARMAKE = Symbol();
const CARMODEL = Symbol();

class Car {
    constructor(color, make, model) {
        this[CARCOLOR] = color;
        this[CARMAKE] = make;
        this[CARMODEL] = model;
    }
    set carcolor(color){
        this[CARCOLOR]=color
    }
    get carcolor(){
        return this[CARCOLOR]
    }

    set carmodel(model){
        this[CARMODEL]=model
    }
    get carmodel(){
        return this[CARMODEL]
    }

    set carmake(make){
        this[CARMAKE]=make
    }
    get carmake(){
        return this[CARMAKE]
    }
    
    
}
let myCar = new Car('Red', 'Porsche', 'Cayanne');
myCar.carcolor="black"
myCar.carmake="Jaguar"
myCar.carmodel="Land Rover"

console.log(myCar);

// implement the functionality to set and get values to car color - Black, car model - Land Rover and car maker - Jaguar
// you should assign values to those private variables inside class - use setter and getter methods
