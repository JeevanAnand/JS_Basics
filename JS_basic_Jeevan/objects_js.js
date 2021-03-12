function createCircle(radius) {
    const circle = {
        radius,
        location: {
            x: 1,
            y: 1
        },
        isVisible: true,

        draw: function() {
            console.log('draw'); //If a function is part of a oject ,we call it as a method 
        }
    }
    return circle;
};

console.log(createCircle(1));
console.log(createCircle(3));
console.log(createCircle(5));



// DYNAMIC property

let circle1 = {
    radius: 1
};

circle1.color = "red";
delete circle1.radius;

console.log(circle1);

//Value V/s Reference Type

//Copy by value (primitive)

let x = 10;
let y = x;
x = 20;
console.log(x, y);


//copy by reference
let a = { value: 10 };
let b = a;

b.value = 30;
console.log(a.value);
console.log(b.value);

//Enumerating Properties

const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

for (let key in circle)
    console.log(key, circle[key]);

for (let key of Object.keys(circle))
    console.log(key);

for (let entry of Object.entries(circle))
    console.log(entry);

if ("radius" in circle)
    console.log("YES");


// cloning
const circle2 = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

const person = {
    name: "girish"
}

const anotherCircle = {};
//traditional way complete clone
for (let key in circle2)
    anotherCircle[key] = circle2[key];

//other way
anotherCircle['radius'] = circle2['radius'];

console.log(anotherCircle);

//cloning using Object.assign()
const anotherCircle2 = Object.assign({}, circle2, person)

console.log(anotherCircle2);

//Spread Operator
const hosaCircle = {...person }
console.log(hosaCircle);

//template literals

let name = 'jeevan';

const msg = `hi ${name} welcome`;
console.log(msg);