const name = 'John Doe'; // string
const age = 30; // number
const isValid = true; // boolean
const date = new Date(); // Date object
const cost = 19.99; // number (float)


if (isValid) {
  console.log(`Name: ${name}, Age: ${age}`);
  console.log(`Is Valid: ${isValid}`);
  console.log(`Date: ${date.toISOString()}`);
  console.log(`Cost: $${cost.toFixed(2)}`);
}