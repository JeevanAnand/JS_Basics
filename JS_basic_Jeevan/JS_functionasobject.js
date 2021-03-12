function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

Circle.call({}, 1);
Circle.call({}, 1, 2);

//object equalit
function Address(street, city, zipcode) {

    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
}

let address1 = new Address("a", "b", "c");
let address2 = new Address("a", "b", "c");
let address3 = new Address("a", "b", "e");
let address4 = address1;

function areEqual(obj1, obj2) {
    return obj1.street === obj2.street && obj1.city === obj2.city && obj1.zipcode === obj2.zipcode; //compares value
}

console.log(areEqual(address1, address4));

function areSame(obj1, obj2) {
    return obj1 === obj2; //compares location
}


console.log(areSame(address1, address2));