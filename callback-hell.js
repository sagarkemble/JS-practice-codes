/**
 * Before starting this is a long,complex and theory topic but very intresting
 *
 * CALLBACK HELL
 *
 * Callback hell was a common problem in older asynchronous JavaScript
 * before Promises and async/await were introduced.
 *
 * Problem:
 * Many operations in JavaScript (like setTimeout, API calls, file reading, etc.)
 * are asynchronous. This means JavaScript does not wait for them to finish.
 * It continues executing the next lines of code.
 *
 * In real-life scenarios, some tasks depend on previous tasks.
 * Example: While making chai,
 *   1. First boil water
 *   2. Then add tea powder
 *   3. Then add sugar
 *   4. Then add milk
 *   5. Then boil tea
 *   6. Finally strain it
 *
 * Since these steps must run in sequence,
 * we use callbacks to make sure the next step
 * runs only after the previous step completes.
 *
 * However, as the number of steps increases,
 * callbacks get nested inside each other.
 * This creates deeply indented code that:
 *
 *   - Is hard to read
 *   - Is hard to debug
 *   - Is hard to maintain
 *
 * This deeply nested structure is called
 * "Callback Hell" or the "Pyramid of Doom".
 *
 * This problem led to the introduction of:
 *   - Promises
 *   - async/await
 *
 * Callback hell becomes even more complex when we need to pass variables
 * from one function to another.
 * A separate example demonstrating parameter passing
 * is provided in: callback-hell-argument-passing.js
 */

function boilWater(callBack) {
  console.log("Boiling water");

  setTimeout(() => {
    console.log("Water boiling completed");
    callBack();
  }, 2000);
}

function addTeaPowder(callBack) {
  console.log(`Adding tea powder`);
  setTimeout(() => {
    console.log(`Added tea powder`);
    callBack();
  }, 1000);
}

function addSugar(callBack) {
  console.log(`Adding sugar`);
  setTimeout(() => {
    console.log(`Added sugar`);
    callBack();
  }, 1000);
}

function addMilk(callBack) {
  console.log(`Adding milk`);
  setTimeout(() => {
    console.log(`Added milk`);
    callBack();
  }, 1000);
}

function boilTea(callBack) {
  console.log(`Boiling tea`);
  setTimeout(() => {
    console.log(`Tea boiled`);
    callBack();
  }, 3000);
}

function strainTea() {
  console.log(`Straining tea`);
  setTimeout(() => {
    console.log(`Tea strained`);
  }, 1000);
}

boilWater(() => {
  addTeaPowder(() => {
    addSugar(() => {
      addMilk(() => {
        boilTea(() => {
          strainTea();
        });
      });
    });
  });
});
