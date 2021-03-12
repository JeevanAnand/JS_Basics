// //Array

// //adding elements
// const number = [3, 4];

// number.unshift(1);
// console.log(number);

// number.push(7);
// console.log(number);


// number.push(8);
// console.log(number);

// number.splice(2, 2, 'a');
// console.log(number);

//finding elments

// const number1 = [1, 2, 8, 5, 7]
// console.log(number1.indexOf(8));

// const number2 = [1, 2, 8, 5, 7]
// console.log(number2.indexOf(2) !== -1);

// console.log(number2.includes('sm'));

// console.log(number2.indexOf(8, 2));

//finding elements -Reference DataTypes

// const courses = [
//     { id: 1, name: 'a' },
//     { id: 2, name: 'b' },
// ];


// // const course = courses.find(function(obj) {
// //     return obj.name == 'b';
// // });
// // console.log(course);


// const course = courses.find(obj => obj.name == 'a');
// console.log(course);



//remove elements
// const number3 = [7, 8, 0, 3, 4];
// console.log("before", number3);
// number3.pop();
// console.log("after pop", number3)
// console.log("before shift", number3);
// number3.shift();
// console.log("after shift", number3);
// number3.splice(0);
// console.log("after splice(0) all elements are removed", number3);


// let number4 = [5, 8, 9, 3, 1]

// number4 = [];
// console.log(number4);

// number4.length = 0;
// console.log(number4);

// number4.splice(0);
// console.log(number4);

// while (number4.length > 0) {
//     number4.pop();
// }
// console.log(number4);