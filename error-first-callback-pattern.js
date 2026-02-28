/**
 * This is an implementation of the "Error-First Callback" pattern.
 *
 * In this pattern, the callback function always receives the error
 * as the first argument and the successful result as the second argument.
 *
 * If an error occurs, the first parameter (err) contains the error object
 * and the result is usually undefined or unchanged.
 * If no error occurs, the first parameter is null and the second parameter
 * contains the successful result.
 *
 * Here:
 * - someFunction checks whether the input is a string.
 * - If it is a string, it converts it to uppercase.
 * - If it is not a string, it creates a TypeError.
 * - The callback is then called with (err, result).
 *
 * This pattern is commonly used in Node.js for handling asynchronous operations.
 */

function someFunction(someValue, callback) {
  let err = null;
  if (typeof someValue === "string") {
    someValue = someValue.toUpperCase();
  } else {
    err = new TypeError("No string provided");
  }
  callback(err, someValue);
}

try {
  someFunction(1, (err, response) => {
    if (err) throw err;
    console.log("Success", response);
  });
} catch (error) {
  console.log(error.message);
}
