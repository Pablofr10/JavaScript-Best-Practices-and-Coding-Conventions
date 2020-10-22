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
const 
