/*Q2. Create a JavaScript function called generateGreeting that takes a name as an argument and returns a
personalized greeting message. Use this function to greet three different people.*/

// Define the function
function generateGreeting(name) {
    return `Hello, ${name}! Welcome!`;
}

// Greet three different people
const greeting1 = generateGreeting('Alice');
const greeting2 = generateGreeting('Bob');
const greeting3 = generateGreeting('Charlie');

// Display the greetings
console.log(greeting1);
console.log(greeting2);
console.log(greeting3);
