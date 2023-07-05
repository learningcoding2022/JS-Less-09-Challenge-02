// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");

const assignButton = document.querySelector(".assign");
//assign class appears only when the guest list is full
const assignedItems = document.querySelector(".assigned-items");
//assigned-items targets the list that will populate with the guest's name and their assigned dish

//Under the variables, add an event listener for the addGuestButton variable. Listen for a click event.
addGuestButton.addEventListener("click", function () {
  //In the body of the callback function, write a variable called guest to capture the value of what is entered in the guestInput input: const guest = guestInput.value;
  const guest = guestInput.value;
  //Use console.log() to test the guest variable
  //console.log(guest);
  //Use an if statement to test if the guest variable is not equal to an empty string: if (guest !== "").
  if (guest !== "") {
    addToList(guest);
    updateGuestCount();
    clearInput();
  }
});
//to clear the input box
const clearInput = function () {
  guestInput.value = "";
};

//create a function for adding a guest to the list
//why don't you need the if statement?
const addToList = function (guest) {
  const listItem = document.createElement("li");
  listItem.innerText = guest;
  guestList.append(listItem);
};

//limit the guest list
const updateGuestCount = function () {
  const guests = document.querySelectorAll(".guest-list li");
  guestCount.innerText = guests.length;

  if (guests.length === 8) {
    addGuestButton.classList.add("hide");
    guestInput.classList.add("hide");
    guestInputLabel.classList.add("hide");
    guestFull.classList.remove("hide");
  }
};

const assignItems = function () {
  const potluckItems = [
    "potato salad",
    "hummus",
    "cookies",
    "fruit",
    "veggies",
    "pasta salad",
    "drinks",
    "cheese and crackers",
    "caprese",
    "couscous",
    "fruit",
    "corn salad"
  ];
  //select elements and loop through the array
  const allGuests = document.querySelectorAll(".guest-list li");
  //write a for...of loop to loop over allGuests array using guest as the variable
  for (let guest of allGuests) {
    let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
    let randomPotluckItem = potluckItems[randomPotluckIndex];

    let listItem = document.createElement("li");
    listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`;
    assignedItems.append(listItem);
    //to prevent assigning duplicate items
    potluckItems.splice(randomPotluckIndex, 1);
  }
};

//add an event listener and update potluckitems array
assignButton.addEventListener("click", function () {
  assignItems();
  //to prevent reassigning dishes
  assignButton.disable = true;
});
