let counterDisplay = document.getElementById("count-el");
let savedCountDisplay = document.getElementById("saved-el");
let totalCountDisplay = document.getElementById("total-el");

let count = 0;
let savedCount = "";
let totalPassangers = 0;

const increment = () => {
  count += 1;
  counterDisplay.textContent = count;
};

const save = () => {
  if (savedCount === "") {
    savedCount = count;
  } else {
    savedCount = " - " + count;
  }

  totalPassangers += count;
  totalCountDisplay.textContent = totalPassangers;
  savedCountDisplay.textContent += savedCount;
  count = 0;
  savedCount = 0;
};
