/**
 * CALLBACK HELL – WITH ARGUMENT PASSING
 *
 * This example is an extension of callback-hell.js.
 * The example is same as callback-hell.js but with argument passing between functions.
 *
 * In real-world asynchronous code, we rarely just
 * execute steps in sequence — we often need to pass
 * data from one step to the next.
 *
 * For example:
 *   - boilWater passes teaPowderAmount
 *   - addTeaPowder passes sugarAmount
 *   - addSugar passes milkAmount
 *   - addMilk passes boilTime
 *
 * Each function forwards required values through
 * its callback to the next function.
 *
 * As the number of parameters increases:
 *   - Function signatures become longer
 *   - It becomes easier to mix up argument order
 *   - Debugging becomes harder
 *   - Readability decreases significantly
 *
 * This demonstrates how callback hell becomes
 * even more difficult to manage when argument
 * passing is involved.
 *
 * This complexity is one of the main reasons
 * why Promises and async/await were introduced.
 */
function boilWater(boilTime, teaPowderamount, callBack) {
  console.log(`Boiling water for ${boilTime / 1000} seconds`);

  setTimeout(() => {
    console.log("Water boiling completed");
    callBack(teaPowderamount);
  }, boilTime);
}

function addTeaPowder(teaPowderamount, sugarAmount, callBack) {
  console.log(`Adding ${teaPowderamount} spoon tea powder`);
  setTimeout(() => {
    console.log(`Added ${teaPowderamount} spoon tea powder`);
    callBack(sugarAmount);
  }, 1000);
}

function addSugar(sugarAmount, milkAmount, callBack) {
  console.log(`Adding ${sugarAmount} spoon sugar`);
  setTimeout(() => {
    console.log(`Added ${sugarAmount} spoon sugar`);
    callBack(milkAmount);
  }, 200);
}

function addMilk(milkAmount, boilTime, callBack) {
  console.log(`Adding ${milkAmount} cup of milk`);
  setTimeout(() => {
    console.log(`Added ${milkAmount} cup of milk`);
    callBack(boilTime);
  }, 200);
}

function boilTea(boilTime, callBack) {
  console.log(`Boiling tea for ${boilTime / 1000} seconds`);
  setTimeout(() => {
    console.log(`Tea boiled`);
    callBack();
  }, boilTime);
}

function strainTea() {
  console.log(`Straining tea`);
  setTimeout(() => {
    console.log(`Tea strained`);
  }, 1000);
}

boilWater(2000, 1, (teaPowderAmount) => {
  addTeaPowder(teaPowderAmount, 1, (sugarAmount) => {
    addSugar(sugarAmount, 1, (milkAmount) => {
      addMilk(milkAmount, 3000, (boilTime) => {
        boilTea(boilTime, () => {
          strainTea();
        });
      });
    });
  });
});
