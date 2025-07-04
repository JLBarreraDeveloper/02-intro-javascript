const name = 'John Doe';
const age = 30;
const names = ['Alice', 'Bob', 'Charlie'];
const ages = [25, 28, 22];
const person = {
  name: 'Jane Doe',
  age: 28,
    hobbies: ['reading', 'hiking', 'coding'],
    address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zip: '12345'
        }
};

const people = [
  { name: 'Alice', age: 25 },
    { name: 'Bob', age: 28 },
    { name: 'Charlie', age: 22 }
];

const isValid = true;

if (isValid) {
  console.log(`Name: ${name}, Age: ${age}`);
  console.log(`Names: ${names.join(', ')}`);
  console.log(`Ages: ${ages.join(', ')}`);
  console.log(`Person: ${JSON.stringify(person, null, 2)}`);
  console.log(`People: ${JSON.stringify(people, null, 2)}`);
}