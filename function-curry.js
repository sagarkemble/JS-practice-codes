/* ============================================================
   1  WHAT IS CURRYING?
   ============================================================

   Currying is a technique where a function that takes multiple
   arguments is transformed into a sequence of functions,
   each taking one argument.

   Instead of:
       f(a, b, c)

   We convert it into:
       f(a)(b)(c)

   Each returned function forms a closure, meaning it remembers
   previously passed arguments.
*/

/* ============================================================
   2  NORMAL FUNCTION
   ============================================================ */

// Basic function adding three numbers
function add(a, b, c) {
  if (!a || !b || !c) throw new Error("Missing arguments");

  return a + b + c;
}

/* ============================================================
   3  CURRIED VERSION
   ============================================================ */

/**
 * Instead of passing all arguments at once,
 * we pass them one by one in separate function calls.
 *
 * Why?
 * This prevents execution until all required values
 * are provided step-by-step.
 */

function curryAdd(a) {
  return function (b) {
    return function (c) {
      return add(a, b, c);
    };
  };
}

// Step-by-step execution
// curryAdd(1) - returns function waiting for b
// (2)         - returns function waiting for c
// (3)         - executes add(1, 2, 3)

const curriedAdd = curryAdd(1)(2)(3);
console.log(curriedAdd); // 6

/* ============================================================
   4  ES6 SHORT SYNTAX VERSION
   ============================================================ */

const shortenedCurryAdd = (a) => (b) => (c) => a + b + c;

console.log(shortenedCurryAdd(1)(2)(3)); // 6

/* ============================================================
   5  PRACTICAL USE CASE – REUSABLE API CLIENT
   ============================================================ */

/**
 * In real-world applications (especially frontend projects),
 * we often call multiple endpoints from the same base URL.
 *
 * Instead of repeating the base URL every time,
 * we configure it once using currying.
 *
 * Flow:
 *  - Base URL configuration first
 *  - Endpoint selection next
 *  - Resource ID passed last
 */

function createAPI(baseURL) {
  return function (endpoint) {
    return function (id) {
      return fetch(`${baseURL}/${endpoint}/${id}`);
    };
  };
}

// Step 1: Configure base URL once
const api = createAPI("https://yourApi...");

// Step 2: Create specialized API handlers
const usersAPI = api("users");
const productsAPI = api("products");

// Step 3: Call them with only required ID
usersAPI(10);
productsAPI(5);

/* ============================================================
   6  WHY CURRYING IS USEFUL IN REAL PROJECTS
   ============================================================

   - Prevents premature execution
   - Allows configuration first, execution later
   - Creates reusable specialized functions
   - Useful in middleware, logging, API clients, validators
*/
