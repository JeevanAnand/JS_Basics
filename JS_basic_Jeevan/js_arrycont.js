// const first = [1, 2, 3];
// const second = [4, 5, 6];

// const combine = second.concat(first);

// console.log(combine);


//combining reference

// const first = [{ id: 1 }];
// const second = [4, 5, 6];

// // const combined = first.concat(second);
// // first[0].id = 10;

// // console.log(combined);

// //comining using spread operator
// const combined = [...first, ...second];

// const copy = [...combined];
// console.log(copy);

// Iterating an array
// const numbers = [1, 2, 3];

//for of 
// for (let number of numbers)
//     console.log(number);

//second way
// numbers.forEach(function(number) {
//     console.log(number);
// });

//arrow
// numbers.forEach(number => console.log(number));

//joining an array
// const numbers = [1, 2, 3];
// const joined = numbers.join(",");
// console.log(joined);                    //returns string

// const message = 'This is my message';
// const parts = message.split(' ');
// console.log(parts); //returns an array


// //Slug
// //combinig words by -
// const combined = parts.join('-');
// console.log(combined);

const number = [5, 4, 2, 7, 1];
const sorted = number.sort()
console.log(sorted);