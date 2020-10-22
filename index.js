// Magic Numbers

// Before
for (let i = 0; i < 86400; i++) {
  // ...
}

// After
const SECOUNDS_IN_A_DAY = 86400;
for (let i = 0; i < SECOUNDS_IN_A_DAY; i++) {
  // ...
}

// Deep nesting

// Before
const exampleArray = [[[['value']]]];

exampleArray.forEach((arr1) => {
  arr1.forEach((arr2) => {
    arr2.forEach((el) => {
      console.log(el);
    });
  });
});

// After
const retriveFinalValue = (element) => {
  if (Array.isArray(element)) {
    return retriveFinalValue(element[0]);
  }

  return element;
};

retriveFinalValue(exampleArray);

// Stop writing comments - Code must speak for itself!

// Avoid large functions

// Before
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

// After
const add = (a, b, c) => a + b + c;
const multiply = (a, b, c) => a * b * c;
const subtract = (a, b, c) => a - b - c;

// Code Repetition

// Before
const getUserCredentials = (user) => {
  const name = user.name;
  const surname = user.surname;
  const password = user.password;
  const email = user.email;
};

// After
const getUserCredentials = (user) => {
  const { name, surname, password, email } = user;
};

// Variable Name
const camelCase = '';
let thisIsARandomCamelCase;
let exampleFunctionName;
let getUserCredentials;

// Meaninfull names
getUserData;
getUserInfo;

getUserPosts;

// Favor descriptive over concise

// Before
findUser;

// After
findUserByNameOrEmail;
setUserLoggedInTrue;

// Use shorter version

getUserFromDataBase;

getUserCredentials;

// Use consistent verbs per concept

// Functions will usually create, read, update or delete something

// Before
getQuestions; // get
returnUsers; // get
retrieveUsers; // get

// Create
// Delete

// After
getQuestions; // get
getUsers; // get
getUsers; // get

// Make booleans that read well in if-then statements
let car = {};

sedan, solid, green, airbag;
isSedan, isSolid, isGreen, hasAirbag;

// Before
car.sedan, car.solid, car.green, car.airbag;

// After
car.isSedan, car.isSolid, car.isGreen, car.hasAirbag;
