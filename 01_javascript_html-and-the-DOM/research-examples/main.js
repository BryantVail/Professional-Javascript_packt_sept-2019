//capturing phase
document.body.addEventListener(
  "click",
  function(event) {
    console.log("body capturing");
  },
  true
);

document.getElementById("div1").addEventListener(
  "click",
  function(event) {
    console.log("div1 capturing");
  },
  true
);

//bubbling phase
document.getElementById("div1").addEventListener(
  "click",
  function(event) {
    console.log("div1 bubbling");
  },
  false
); //false is the default

document.body.addEventListener(
  "click",
  function(event) {
    console.log("body bubbling");
  },
  false
);

// body capturing main.js:5:13
// div1 capturing main.js:13:13
// div1 bubbling main.js:22:13
// body bubbling main.js:30:13
