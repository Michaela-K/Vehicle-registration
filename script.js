//Selecting Elements
let greetingEl = document.getElementsByClassName("greeting")[0];
let counterEl = document.getElementsByClassName("counter")[0];
let numberEl = document.getElementsByClassName("number")[0];
let firstLastNamesEl = document.getElementsByClassName("firstlastNames")[0];
let sizeVehicleEL = document.getElementsByClassName("sizeVehicle")[0];
// let vehicleSizeEl = document.getElementsByClassName("vehicleSize")[0];

const submitEl = document.getElementById("submit");
const incrementEl = document.getElementById("add-card");
const decrementEl = document.getElementById("minus-card");

//Default Status
greetingEl.classList.add("hidden");
counterEl.classList.add("hidden");
numberEl.textContent = 0;
let counter = 0;

//Names
submitEl.addEventListener("click", function () {
  console.log("Submit button clicked");
  let firstNameEl = document.getElementById("firstName").value;
  let lastNameEl = document.getElementById("lastName").value;
  if (firstNameEl.length > 2 && lastNameEl.length > 2) {
    console.log(`${firstNameEl}`);
    greetingEl.classList.remove("hidden");
    greetingEl.innerText = `Salams  ${firstNameEl} ${lastNameEl}! Thank's for joining us!`;
    firstNameEl = document.getElementById("firstName").value = "";
    lastNameEl = document.getElementById("lastName").value = "";
  } else {
    alert("Please enter a name that is at least 3 characters long");
  }
});
firstLastNamesEl.addEventListener("keydown", function (e) {
  let firstNameEl = document.getElementById("firstName").value;
  let lastNameEl = document.getElementById("lastName").value;
  if (e.key === "Enter") {
    console.log("Enter key pressed");
    greetingEl.classList.remove("hidden");
    greetingEl.innerText = `Salams  ${firstNameEl} ${lastNameEl}! Thank's for joining us!`;
  }
});

//if add or minus buttons are clicked then increment or decrement
incrementEl.addEventListener("click", function () {
  console.log(" + Button clicked");
  counter += 1;
  numberEl.innerText = counter; // here we grab the html element (countEl) and insert the count (counter)into it using .innerText
  counterEl.classList.remove("hidden");
});

//decrementEl.addEventListener("click", function () {
decrementEl.addEventListener("click", function () {
  console.log("- Button clicked");
  if (counter > 0) {
    counter -= 1;
  }
  numberEl.innerText = counter; // here we grab the html element (countEl) and insert the count (counter)into it using .innerText
  counterEl.classList.remove("hidden");
});

//when enter the length and width of the car, box size should change

// sizeVehicleEL.addEventListener("keydown", function (f) {
//   if (f.key === "Enter") {
//     console.log("Enter key pressed");
//     let lengthEL = document.getElementById("length").value;
//     let widthEL = document.getElementById("width").value;
//     if (lengthEL <= 100 && widthEL <= 60) {
//       alert(`Please enter valid vehicle dimensions`);
//     } else if (lengthEL <= 140 && widthEL <= 63) {
//       sizeVehicleEL.innerText = `Economy Vehicle`;
//       document.getElementsByClassName("vehicleSize")[0].style.width = "100px";
//     } else if (lengthEL <= 160 && widthEL <= 65) {
//       sizeVehicleEL.innerText = `Compact Vehicle`;
//       document.getElementsByClassName("vehicleSize")[0].style.width = "200px";
//     } else if (lengthEL <= 180 && widthEL <= 71) {
//       sizeVehicleEL.innerText = `Mid Size Vehicle`;
//       document.getElementsByClassName("vehicleSize")[0].style.width = "300px";
//     } else if (lengthEL <= 192 && widthEL <= 75) {
//       sizeVehicleEL.innerText = `Full Size Vehicle`;
//       document.getElementsByClassName("vehicleSize")[0].style.width = "400px";
//     } else if (lengthEL > 192 && widthEL > 75) {
//       sizeVehicleEL.innerText = `Vehicle not on File`;
//     }
//   }
// });

//when you click a colour the colour should appear in the colour box
//First set
function greenColor1() {
  console.log("1st Green color button clicked");
  document.getElementsByClassName("vehicleSize")[0].style.background =
    "rgb(53, 139, 53)";
}
function greyColor1() {
  console.log("1st Grey color button clicked");
  document.getElementsByClassName("vehicleSize")[0].style.background =
    "rgb(165, 164, 164)";
}
function yellowColor1() {
  console.log("1st Yellow color button clicked");
  document.getElementsByClassName("vehicleSize")[0].style.background = "yellow";
}
function redColor1() {
  console.log("1st Red color button clicked");
  document.getElementsByClassName("vehicleSize")[0].style.background =
    "rgb(211, 12, 12)";
}
//Second Set
function greenColor2() {
  console.log("2nd Green color button clicked");
  document.getElementsByClassName("vehicleSize")[1].style.background =
    "rgb(53, 139, 53)";
}
function greyColor2() {
  console.log("2nd Grey color button clicked");
  document.getElementsByClassName("vehicleSize")[1].style.background =
    "rgb(165, 164, 164)";
}
function yellowColor2() {
  console.log("2nd Yellow color button clicked");
  document.getElementsByClassName("vehicleSize")[1].style.background = "yellow";
}
function redColor2() {
  console.log("2nd Red color button clicked");
  document.getElementsByClassName("vehicleSize")[1].style.background =
    "rgb(211, 12, 12)";
}

// document.createElement("LI");   not working above??
// newItem.appendChild(textnode);???

//ADD OR MINUS CARDS
const addCard = document.getElementById("add-card");
addCard.addEventListener("click", function () {
  const addValue = document.getElementsByClassName("number")[0].innerHTML;
  console.log("addValue", addValue);
  addCards();
});

function addCards() {
  //create elements
  const vehicle = document.createElement("div");
  const div1 = document.createElement("div");
  //what colour would you prefer?
  let h2a = document.createElement("h2");
  //color buttons
  const colorBtns = document.createElement("div");
  const div2 = document.createElement("div");
  const greenBtn = document.createElement("button");
  const greyBtn = document.createElement("button");
  const yellowBtn = document.createElement("button");
  const redBtn = document.createElement("button");
  //Size of Vehicle
  const div3 = document.createElement("div");
  let h2b = document.createElement("h2");
  //Length Width Inputs
  const sizeVehicle = document.createElement("div");
  const div4 = document.createElement("div");
  const inputLength = document.createElement("input");
  inputLength.placeholder = "Length(in)";
  const div5 = document.createElement("div");
  const inputWidth = document.createElement("input");
  inputWidth.placeholder = "Width(in)";
  //Car Size & color
  const vehicleSize = document.createElement("div");
  const p = document.createElement("p");

  const addValue = document.getElementsByClassName("number")[0].innerHTML;
  //add content
  h2a.textContent = `What color would you prefer for vehicle ${addValue}?`;
  greenBtn.textContent = "Green";
  greyBtn.textContent = "Grey";
  yellowBtn.textContent = "Yellow";
  redBtn.textContent = "Red";
  h2b.textContent = "What is the size of the car?";
  p.textContent = "Car Size & Color";

  //append to DOM
  vehicle.appendChild(div1);
  div1.appendChild(h2a);
  vehicle.appendChild(colorBtns);
  colorBtns.appendChild(div2);
  div2.appendChild(greenBtn);
  div2.appendChild(greyBtn);
  div2.appendChild(yellowBtn);
  div2.appendChild(redBtn);
  vehicle.appendChild(div3);
  div3.appendChild(h2b);
  vehicle.appendChild(sizeVehicle);
  sizeVehicle.appendChild(div4);
  div4.appendChild(inputLength);
  sizeVehicle.appendChild(div5);
  div5.appendChild(inputWidth);
  vehicle.appendChild(vehicleSize);
  vehicleSize.appendChild(p);

  const vehicles = document.querySelector(".vehicles");
  vehicles.appendChild(vehicle);
}
const minusCard = document.getElementById("minus-card");
minusCard.addEventListener("click", function () {
  const minusValue = document.getElementsByClassName("number")[0].innerHTML;
  console.log("minusValue", minusValue);
});

// //create a new div and set its attributes
// let div = document.createElement("div");
// div.id = "content";
// div.className = "note";

// // create a new text node and add it to the div
// let text = document.createTextNode("CreateElement example");
// div.appendChild(text);

// // create a new heading and add it to the div
// let h2 = document.createElement("h2");
// h2.textContent = "Add h2 element to the div";
// div.appendChild(h2);

// // add div to the document
// document.body.appendChild(div);
