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

// new String();  <- string constructor; "", '', ``  <- string literals
// new Boolean();  <- boolean constructor; true, false  <- boolean literals
// new Number();  <- number constructor; 1, 2, 3 <- number literals
