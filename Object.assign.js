/**
 * Object.assign()
 * Object.assign is used to copy properties from one or more source objects into a target object.
 *
 * Syntax
 * Object.assign(target, source1, source2, ...)
 * It copies all own enumerable properties from the sources to the target object.
 *
 * Important points to remember
 *  -It returns the target object, not a new object.
 *  -If you want a new object, pass an empty object as target.
 *  -Object.assign({}, obj1, obj2)
 *  -It performs a shallow copy.
 *     - Primitive values are copied by value.
 *     - Objects and arrays copy only their reference.
 */

// Example 1: Merging Multiple Objects
const userInfo = { name: "Sagar" };
const userAge = { age: 21 };
const userCity = { city: "Pune" };
const mergedUser = Object.assign({}, userInfo, userAge, userCity);
console.log(mergedUser);
// { name: "Sagar", age: 21, city: "Pune" }

// Example 2: Copying an Object
// copying properties from one object into a new object.
const originalProfile = { name: "Sagar", age: 21 };
const copiedProfile = Object.assign({}, originalProfile);
console.log(copiedProfile);
// { name: "Sagar", age: 21 }
//in the above example, we create a new empty object {} as the target and copy the properties from originalProfile into it and return it, so copiedProfile is a new object with the same properties as originalProfile.

// Example 3: Shallow Copy Behavior
// nested objects, arrays which are non-primitive are copied by reference, not duplicated.
const studentData = { details: { age: 21 } };
const clonedStudent = Object.assign({}, studentData);
clonedStudent.details.age = 30;
console.log(studentData.details.age);
// 30
//the original studentData's details.age is also changed to 30 because the studentData.details object is copied by reference
