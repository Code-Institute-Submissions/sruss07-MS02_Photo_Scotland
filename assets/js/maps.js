// Function to HIDE/SHOW country info with buttons
const locationButton = document.getElementsByClassName("location-button");
for (let i = 0; i < locationButton.length; i++) {
  locationButton[i].addEventListener("click", handleLocationSelect);
}
function handleLocationSelect(e) {
  const locationBtn = e.target.dataset.location;
  const locationSelection = document.getElementsByClassName("location-section");
  for (let i = 0; i < locationSelection.length; i++) {
    const sectionID = locationSelection[i].id;
    if (sectionID === locationBtn) {
      locationSelection[i].classList.remove("hidden");
    } else {
      locationSelection[i].classList.add("hidden");
    }
  }
  handleLocationReset("location-0");
  // Click button to show map-country based on the innerText
  changeMapLocation(e.target.innerText);
}





// Function to HIDE/SHOW Location info with buttons
const locationButton = document.getElementsByClassName("location-button");
for (let i = 0; i < locationButton.length; i++) {
  locationButton[i].addEventListener("click", handleLocationSelect);
}
function handleLocationSelect(e) {
  const locationBtn = e.target.dataset.location;
  const locationSelection = document.getElementsByClassName("location-section");
  for (let i = 0; i < locationSelection.length; i++) {
    const locationID = locationSelection[i].id;
    if (locationID === locationBtn) {
      locationSelection[i].classList.remove("hidden");
    } else {
      locationSelection[i].classList.add("hidden");
    }
  }
  changeMapLocation(e.target.innerText); // click button to show map-country based on the innerText
}