const user = {
  id: 101,
  name: "Sagar",
  profile: {
    age: 22,
    contact: {
      email: "sagar@example.com",
    },
  },
  orders: [
    {
      id: 1,
      item: "Laptop Sticker",
      price: 299,
    },
    {
      id: 2,
      item: "Keyboard Skin",
    },
  ],
  settings: null,
};

/**
 * Optional Chaining (?.) allows us to safely access nested properties
 * without worrying about whether intermediate properties exist.
 */

console.log(user.profile?.contact?.email);
console.log(user.profile?.contact?.phoneNumber);
console.log(user.settings?.theme);
/**
 * JavaScript evaluates it in this order:
 * First it evaluates user.settings
 * Then the ?. checks whether the result is null or undefined
 * If it is null/undefined, JavaScript stops immediately and returns undefined
 * If it exists, then it continues and accesses .theme
 */

// Nullish Coalescing (??) allows us to provide a default value
// when the left-hand side is null or undefined.

const userTheme = user.settings?.theme ?? "light";
console.log(userTheme); // "light" because user.settings is null

// || works on boolean logic and ?? works on nullish values (null or undefined)
//lets take a example

const obj = {
  value: 0,
};
console.log(obj.value || "no value");
console.log(obj.value ?? "no value");

// In the first case, obj.value is 0, which is falsy, so it returns "no value"
// In the second case, obj.value is 0, which is not null or undefined, so it returns 0
