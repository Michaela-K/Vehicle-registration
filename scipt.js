//Selecting Elements
let greetingEl = document.getElementsByClassName("greeting")[0];
let counterEl = document.getElementsByClassName("counter")[0];
let numberEl = document.getElementsByClassName("number")[0];
let firstLastNamesEl = document.getElementsByClassName("firstlastNames")[0];
let sizeVehicleEL = document.getElementsByClassName("sizeVehicle")[0];
// let vehicleSizeEl = document.getElementsByClassName("vehicleSize")[0];

const submitEl = document.getElementById("submit");
const incrementEl = document.getElementById("add");
const decrementEl = document.getElementById("minus");

let lengthEl = document.getElementById("length").value;
let widthEl = document.getElementById("width").value;

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
    firstNameEl.innerText = ""; //how do i get this to work
    lastNameEl = 0;
  } else {
    alert("Please enter a name that is at least 2 characters long");
  }
});
firstLastNamesEl.addEventListener("keydown", function (e) {
  //   let firstLastNamesEl = document.getElementsByClassName("firstlastNames")[0];
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

sizeVehicleEL.addEventListener("keydown", function (f) {
  if (f.key === "Enter") {
    console.log("Enter key pressed");
    // sizeVehicleEL.classList.add("hidden");
    if (lengthEL.textContent >= 161 && lengthEL.textContent <= 187) {
      let lengthEl = document.getElementById("length").value;
      let widthEl = document.getElementById("width").value;
      sizeVehicleEL.innerText = `Compact Vehicle`;
      document.getElementsByClassName("vehicleSize")[0].style.width = "100px";
      // } else if (sizeVehicleEL >= 188 || sizeVehicleEL <= 197) {
      //   sizeVehicleEL.innerText = `Mid Size Vehicle`;
      // } else if (sizeVehicleEL > 197) {
      //   sizeVehicleEL.innerText = `Full Size Vehicle`;
      // }
      // sizeVehicleEL.innerText = `${lengthEl}mm * ${widthEl} mm`;
    }
  }
});

//when you click a colour the colour should appear in the colour box
//First set
function greenColor1() {
  console.log("1st Green color button clicked");
  document.getElementsByClassName("vehicleSize")[0].style.background = "green";
}
function greyColor1() {
  console.log("1st Grey color button clicked");
  document.getElementsByClassName("vehicleSize")[0].style.background = "grey";
}
function yellowColor1() {
  console.log("1st Yellow color button clicked");
  document.getElementsByClassName("vehicleSize")[0].style.background = "yellow";
}
function redColor1() {
  console.log("1st Red color button clicked");
  document.getElementsByClassName("vehicleSize")[0].style.background = "red";
}
//Second Set
function greenColor2() {
  console.log("2nd Green color button clicked");
  document.getElementsByClassName("vehicleSize")[1].style.background = "green";
}
function greyColor2() {
  console.log("2nd Grey color button clicked");
  document.getElementsByClassName("vehicleSize")[1].style.background = "grey";
}
function yellowColor2() {
  console.log("2nd Yellow color button clicked");
  document.getElementsByClassName("vehicleSize")[1].style.background = "yellow";
}
function redColor2() {
  console.log("2nd Red color button clicked");
  document.getElementsByClassName("vehicleSize")[1].style.background = "red";
}
// document.createElement("LI");
// newItem.appendChild(textnode);
// document.getElementById("myH1").style.color;
