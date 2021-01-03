// Function to hide and show location info with buttons
const localityButton = document.getElementsByClassName("locality-button");
for (let i = 0; i < localityButton.length; i++) {
  localityButton[i].addEventListener("click", handleLocalitySelect);
}
function handleLocalitySelect(e) {
  const localityBtn = e.target.dataset.locality;
  const localitySelection = document.getElementsByClassName("locality-section");
  for (let i = 0; i < localitySelection.length; i++) {
    const localityID = localitySelection[i].id;
    if (localityID === localityBtn) {
      localitySelection[i].classList.remove("hidden");
    } else {
      localitySelection[i].classList.add("hidden");
    }
  }
  changeMapLocation(e.target.innerText); // click button to show map-country based on the innerText
}

// Function to reset location info
function handleLocalityReset(locality) {
  const localityBtn = locality;
  const localitySelection = document.getElementsByClassName("locality-section");
  for (let i = 0; i < localitySelection.length; i++) {
    const localityID = localitySelection[i].id;
    if (localityID === localityBtn) {
      localitySelection[i].classList.remove("hidden");
    } else {
      localitySelection[i].classList.add("hidden");
    }
  }
}

