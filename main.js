// loops practices

// **** Vic Part ****
// do...while loop to count from 1 to 1000
let i = 1;
do {
 console.log(i)
 i++
 } while (i <= 1000)

const person = {
  firstName: 'Jane',
  lastName: 'Doe',
  birthDate: 'Jan 5, 1925',
  gender: 'female'
}
// Object.keys() 
function getObjKey() {
  let key1 = Object.keys(person);
  console.log(key1)
}
getObjKey()

// Object.entries()
function getEntry() {
  let personEntry = Object.entries(person);
  console.log(personEntry);
}
getEntry()

// *** Elias part ***

// *** Jaziel part ***