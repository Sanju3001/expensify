import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBFbdSYe2MSdGHbmDz0-mXHx7ymVJvxgko",
    authDomain: "expensify-95cd0.firebaseapp.com",
    databaseURL: "https://expensify-95cd0.firebaseio.com",
    projectId: "expensify-95cd0",
    storageBucket: "expensify-95cd0.appspot.com",
    messagingSenderId: "22610187803"
  };

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };


// child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
//   });

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });

//     console.log(expenses);
// });

// database.ref('expenses').push({
//   description: 'Cars',
//   note: 'cars amount',
//   amount: 10,
//   createdAt: 39348484
// });


// database.ref('notes/-L-xng-OpFyG4nmTjfVP').remove();

// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React Native, Angular, Python'
// });

// const firebaseNotes = {
//   notes: {
//     aldfadjf: {
//       title: 'First note!',
//   body: 'This is my note'
//     },
//     adiieiei: {
//       title: 'Another note',
//       body: 'This is my second note'
//     }
//   }
// };

// const notes = [{
//   id: '12',
//   title: 'First note!',
//   body: 'This is my note'
// }, {
//   id: '761sae',
//   title: 'Another note',
//   body: 'This is my second note'
// }];

// database.ref('notes').set(notes);

// database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val().name + " is a " + snapshot.val().job.title + " at " + snapshot.val().job.company + ".");
// });

// setTimeout(() => {
//   database.ref('name').set('Saj');
// }, 5000);

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log('Error with data fetching', e);
// });

// // database.ref().on('value', (snapshot) => {
// //   console.log(snapshot.val());
// // });

// setTimeout(() => {
//   database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(30);
// }, 10500);

// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e);
//   });

// database.ref().set({
//   name: 'Saj',
//   age: 30,
//   stressLevel: 9,
//   job: {
//     title: 'Software Developer',
//     company: 'Shopify'
//   },
//   location: {
//     city: 'Ottawa',
//     country: 'Canada'
//   }
// }).then(() => {
//   console.log('Data is saved!');
// }).catch((e) => {
//   console.log('This failed.', e);
// })

// database.ref().update({
//   stressLevel: 5,
//   'job/company': 'Capital One',
//   'location/city': 'Toronto'
// });

// database.ref().set('This is my data.');

// database.ref('age').set(31);
// database.ref('location/city').set('Ottawa');

// database.ref('attributes').set({
//   height: 170,
//   weight: 160
// }).then(() => {
//   console.log('Data is saved.');
// }).catch((e) => {
//   console.log('This set operation failed', e);
// })

// database.ref('isSingle').set(null);

// database.ref('isSingle')
//   .remove()
//   .then(() => {
//   console.log('Remove Succeeded.');
// }).catch((e) => {
//   console.log('Remove operation failed', e);
// })

//console.log('I made a request to change the data.');


