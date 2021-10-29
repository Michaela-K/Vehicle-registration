//Selecting Elements
let greetingEl = document.getElementsByClassName("greeting")[0];
let counterEl = document.getElementsByClassName("counter")[0];
let numberEl = document.getElementsByClassName("number")[0];
let firstLastNamesEl = document.getElementsByClassName("firstlastNames")[0];
let sizeVehicleEL = document.getElementsByClassName("sizeVehicle")[0];

// let sizeVehicleEL = document.getElementById("sizeVehicle");
const submitEl = document.getElementById("submit");
const incrementEl = document.getElementById("add-card");
const decrementEl = document.getElementById("minus-card");

//Default Status
greetingEl.classList.add("hidden");
counterEl.classList.add("hidden");
numberEl.textContent = 0;
let counter = 0;

//Names Input/Greeting
submitEl.addEventListener("click", function () {
  console.log("Submit button clicked");
  let firstNameEl = document.getElementById("firstName").value;
  let lastNameEl = document.getElementById("lastName").value;
  if (firstNameEl.length > 2 && lastNameEl.length > 2) {
    console.log(`${firstNameEl}`);
    greetingEl.classList.remove("hidden");
    greetingEl.innerText = `Welcome ${firstNameEl} ${lastNameEl}! Thank's for joining us!`;
    firstNameEl = document.getElementById("firstName").value = "";
    lastNameEl = document.getElementById("lastName").value = "";
  } else {
    alert("Please enter a name that is at least 3 characters long");
  }
});

//Increment
incrementEl.addEventListener("click", function () {
  console.log(" + Button clicked");
  counter += 1;
  numberEl.innerText = counter; // here we grab the html element (countEl) and insert the count (counter)into it using .innerText
  counterEl.classList.remove("hidden");
});

//Decrement
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

/*
div2.setAttribute('class', 'colorButtons'); //creates another div for color buttons
    let green = document.createElement("BUTTON");
    green.innerHTML = "green";
    green.onclick = changeGreen;
    function changeGreen() {
        document.getElementById(`car${currentCount}`).style.backgroundColor = "green";
    } //creates button and function for green
    let grey = document.createElement("BUTTON");
    grey.innerHTML = "grey";
    grey.onclick = changeGrey;
    function changeGrey() {
        document.getElementById(`car${currentCount}`).style.backgroundColor = "grey";
    } //creates button and function for grey
    let yellow = document.createElement("BUTTON");
    yellow.innerHTML = "yellow";
    yellow.onclick = changeYellow;
    function changeYellow() {
        document.getElementById(`car${currentCount}`).style.backgroundColor = "yellow";
    } //creates button and function for yellow
    let brown = document.createElement("BUTTON");
    brown.innerHTML = "brown";
    brown.onclick = changeBrown;
    function changeBrown() {
        document.getElementById(`car${currentCount}`).style.backgroundColor = "brown";
    } //creates button and function for brown
*/

//ADD OR MINUS CARDS
const addCard = document.getElementById("add-card");
addCard.addEventListener("click", function () {
  const addValue = document.getElementsByClassName("number")[0].innerHTML;
  console.log("addValue", addValue);
  addCards();
});
//ADD A CARD
function addCards() {
  //create elements
  const vehicle = document.createElement("div");
  vehicle.classList.add("vehicle");
  const div1 = document.createElement("div");
  //what colour would you prefer?
  let h2a = document.createElement("h2");
  h2a.classList.add("h2");
  //color buttons
  const colorBtns = document.createElement("div");
  colorBtns.classList.add("colorButtons");
  const div2 = document.createElement("div");
  //green
  const greenBtn = document.createElement("button");
  greenBtn.onclick = greenColor;
    function greenColor() {
      document.getElementById('vehicleSize').style.background = "rgb(53, 139, 53)";
    } 
  //grey
  const greyBtn = document.createElement("button");
  greyBtn.onclick = greyColor;
    function greyColor() {
      document.getElementsByClassName('vehicleSize')[0].style.background = "rgb(165, 164, 164)";
    } 
  //yellow
  const yellowBtn = document.createElement("button");
  yellowBtn.onclick = yellowColor;
    function yellowColor() {
      document.getElementsByClassName('vehicleSize')[0].style.background = "yellow";
    } 
  //red
  const redBtn = document.createElement("button");
  redBtn.onclick = redColor;
    function redColor() {
      document.getElementsByClassName('vehicleSize')[0].style.background = "rgb(211, 12, 12)";
    } 
  //Size of Vehicle
  const div3 = document.createElement("div");
  let h2b = document.createElement("h2");
  h2b.classList.add("h2");
  //Length Width Inputs
  const sizeVehicle = document.createElement("div");
  sizeVehicle.classList.add("sizeVehicle");
  // sizeVehicle.id = "sizeVehicle";
  const div4 = document.createElement("div");
  const inputLength = document.createElement("input");
  inputLength.classList.add("input");
  inputLength.placeholder = "Length(in)";
  const div5 = document.createElement("div");
  const inputWidth = document.createElement("input");
  inputWidth.classList.add("input");
  inputWidth.placeholder = "Width(in)";
  //Car Size & color
  const vehicleSize = document.createElement("div");
  vehicleSize.setAttribute("id", "vehicleSize");
  vehicleSize.classList.add("vehicleSize");
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
  //attach entire thing to the HTML
  const vehicles = document.querySelector(".vehicles");
  vehicles.appendChild(vehicle);

  //Create a new Class for each new card??
  function newCardClass() {
    let sizeVehicleEle =
      document.getElementsByClassName("vehicle")[`${addValue}`];
    console.log(sizeVehicleEle);
  }
  newCardClass();
}

//MINUS A CARD
const minusCard = document.getElementById("minus-card");
minusCard.addEventListener("click", function () {
  const minusValue = document.getElementsByClassName("number")[0].innerHTML;
  console.log("minusValue", minusValue);
  //need to grab the ID to remove it ??
  const addValue = document.getElementsByClassName("number")[0].innerHTML;
  let sizeVehicleEle =
    document.getElementsByClassName("vehicle")[`${addValue}`];
  sizeVehicleEle.remove();
});
