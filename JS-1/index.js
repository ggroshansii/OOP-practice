//object literal
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  draw: function () {
    console.log("draw");
  },
};

//factory function (creates object)
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}

const circle2 = createCircle(1);
circle2.draw();

//constructor function (creates object; uses 'this' and 'new')
function Circle(radius) {
  this.radius = radius;
  this.draw  = function(){
      console.log("draw");
  }
}

const another = new Circle(1);
another.draw();

Circle.call({}, 1); //equivalent to "const another = new Circle(1);"
Circle.apply({}, [1, 2, 3]) //same as call() but can pass array now
// new String();  <- string constructor; "", '', ``  <- string literals
// new Boolean();  <- boolean constructor; true, false  <- boolean literals
// new Number();  <- number constructor; 1, 2, 3 <- number literals


//Value VS. Reference Types
// VALUE type (primitives) = Number, String, Boolean, Symbol, undefined, null
// REFERENCE types = Object, Function, Array

let x = 10;
let y = x; // independent of each other; value of x is copied to y

x = 20; // x = 20, but y still equals 10;

let x = {value: 10};
let y = x; // address/reference of the object's location in memory is stored in x and then this statement copies the address to y, which makes both values point to this object's reference

x.value = 20; // x = 20, and y = 20; 



//