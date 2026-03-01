/**
 * In JavaScript, when you create an object with numeric keys, the keys are automatically sorted in ascending order.
 * However, if the keys are strings (even if they look like numbers), they are not sorted and will maintain the order in which they were defined.
 * In the example below, the first object `students` has numeric keys (1, 2, 3, 4), so they are automatically sorted in ascending order when the object is created.
 * The second object `students2` has string keys ("1a", "2a", "3a", "4a"), so they are not sorted and maintain the order in which they were defined.
 */

const students = {
  3: "Alice",
  1: "Sagar",
  2: "Charlie",
  4: "Shreya",
};

const students2 = {
  "3a": "Alice",
  "1a": "Sagar",
  "2a": "Charlie",
  "4a": "Shreya",
};
console.log(students);
console.log(students2);

/**
 * output:
 * { '1': 'Sagar', '2': 'Charlie', '3': 'Alice', '4': 'Shreya' }
 * { '3a': 'Alice', '1a': 'Sagar', '2a': 'Charlie', '4a': 'Shreya' }
 * */
