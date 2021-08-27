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
    // document.createElement("p")= `Salams  ${firstNameEl} ${lastNameEl}! Thank's for joining us!`;
    firstNameEl.innerText = ""; //how do i get this to work
    lastNameEl = 0;
  } else {
    alert("Please enter a name that is at least 3 characters long");
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
    let lengthEL = document.getElementById("length").value;
    let widthEL = document.getElementById("width").value;
    if (lengthEL <= 100 && widthEL <= 60) {
      alert(`Please enter valid vehicle dimensions`);
    } else if (lengthEL <= 140 && widthEL <= 63) {
      sizeVehicleEL.innerText = `Economy Vehicle`;
      document.getElementsByClassName("vehicleSize")[0].style.width = "100px";
    } else if (lengthEL <= 160 && widthEL <= 65) {
      sizeVehicleEL.innerText = `Compact Vehicle`;
      document.getElementsByClassName("vehicleSize")[0].style.width = "200px";
    } else if (lengthEL <= 180 && widthEL <= 71) {
      sizeVehicleEL.innerText = `Mid Size Vehicle`;
      document.getElementsByClassName("vehicleSize")[0].style.width = "300px";
    } else if (lengthEL <= 192 && widthEL <= 75) {
      sizeVehicleEL.innerText = `Full Size Vehicle`;
      document.getElementsByClassName("vehicleSize")[0].style.width = "400px";
    } else if (lengthEL > 192 && widthEL > 75) {
      sizeVehicleEL.innerText = `Vehicle not on File`;
    }
  }
});

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
