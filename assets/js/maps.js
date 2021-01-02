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