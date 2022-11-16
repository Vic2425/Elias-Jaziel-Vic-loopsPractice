// loops practices
const person = [
    {
      firstName: 'Jane',
      lastName: 'Doe',
      birthDate: 'Jan 5, 1925',
      gender: 'female'
    },
    {
      firstName: 'John',
      lastName: 'Doe',
      birthDate: 'June 11, 1991',
      year: '1991',
      month: '6',
      gender: 'Male'
    },
    {
      firstName: 'Jahn',
      lastName: 'Doe',
      birthDate: 'Sep 20, 1989',
      year: '1989',
      month: '9',
      gender: 'Female'
    },
    {
      firstName: 'Jone',
      lastName: 'Dino',
      birthDate: 'Nov 2, 1990',
      year: '1990',
      month: '11',
      gender: 'Male'
    },
    {
      firstName: 'Jhan',
      lastName: 'Dino',
      birthDate: 'Feb 13, 2010',
      year: '2010',
      month: '2',
      gender: 'Female'
    },
    {
      firstName: 'Jeon',
      lastName: 'Dino',
      birthDate: 'May 19, 2002',
      year: '2002',
      month: '5',
      gender: 'Male'
    },
    {
      firstName: 'Jean',
      lastName: 'Ode',
      birthDate: 'Sep 10, 1970',
      year: '1970',
      month: '9',
      gender: 'Female'
    }
  ]
  
// **** Vic Part ****
// do...while loop to count from 1 to 1000
let i = 1;
do {
 console.log(i)
 i++
 } while (i <= 1000)


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
var male = person.filter(type => type.gender === 'Male');
 
var female = person.filter(type => type.gender === 'Female');
 
const old = person.filter(person => {
if (person.year >= 1900 && person.year <= 1989) {
return true;
}
});
console.log (old)

let data = person.map(function(element){
    return ${element.firstName} ${element.lastName} ${element.birthDate} ${element.year} ${element.month} ${element.gender};
    })
    
    console.log(data);