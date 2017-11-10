//
// Object desctructuring
//
// const person = {
//   name: 'Saj',
//   age: 27,
//   location: {
//     city: 'Toronto',
//     temp: 18
//   }
// };

// const { name: firstName = 'Anonymous', age } = person;
// const name = person.name;
// const age = person.age;

// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }


// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// }

// const { name: publisherName = 'Self-published' } = book.publisher;

// console.log(publisherName);

//
// Array destructuring
//

// const address = ['1213 Maitland Avenue', 'Ottawa', 'ON', 'K2C2C4'];

// const [, city, province = 'New York'] = address;

// console.log(`You are in ${city} ${province}.`);

const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75'];

const [drink, , mediumPrice] = item;

console.log(`A medium ${drink} costs ${mediumPrice}.`);











