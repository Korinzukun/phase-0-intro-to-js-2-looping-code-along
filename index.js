// Function 1: writeCards() - Using a for loop
// Accepts an array of names and an event name
// Returns an array of thank you messages
function writeCards(names, event) {
  // Step 1: Create a new, empty array to hold the messages
  const messages = [];
  
  // Step 2: Create a for loop that iterates through the names array
  for (let i = 0; i < names.length; i++) {
    // Step 3: Build the thank you message using string interpolation
    const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    
    // Step 4: Add the message to the new array
    messages.push(message);
  }
  
  // Step 5: Return the new array with all messages
  return messages;
}

// Function 2: countDown() - Using a while loop
// Takes a positive integer and counts down to zero
// Logs each number to the console
function countDown(number) {
  // Initialize the counter with the starting number
  let counter = number;
  
  // Use while loop to count down until we reach 0
  while (counter >= 0) {
    console.log(counter);
    counter--; // Decrement the counter to avoid infinite loop
  }
}// Code your solutions in this file
