// Magic Numbers

// BEFORE
for (let i = 0; i < 86400; i++) {
  // ...
}

//AFTER
const SECOUNDS_IN_A_DAY = 86400;
for (let i = 0; i < SECOUNDS_IN_A_DAY; i++) {
  // ...
}

// Deep nesting

// BEFORE
const exampleArray = [[[['value']]]];

exampleArray.forEach((arr1) => {
  arr1.forEach((arr2) => {
    arr2.forEach((el) => {
      console.log(el);
    });
  });
});

//AFTER
const retriveFinalValue = (element) => {
  if (Array.isArray(element)) {
    return retriveFinalValue(element[0]);
  }

  return element;
};

retriveFinalValue(exampleArray);

// Stop writing comments - Code must speak for itself!

// Avoid large functions

// BEFORE
const addMultiplySubstract = (a, b, c) => {
  // addition
  const addition = a + b + c;
  // multiplication
  const multiplication = a * b * c;
  // subraction
  const subraction = a - b - c;

  //return a string (addition, multiplication, subraction)
  return `${addition} ${multiplication} ${subraction}`;
};

// AFTER
const add = (a, b, c) => a + b + c;
const multiply = (a, b, c) => a * b * c;
const subtract = (a, b, c) => a - b - c;
