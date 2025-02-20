
var toggleOpen = document.getElementById('toggleOpen');
var toggleClose = document.getElementById('toggleClose');
var collapseMenu = document.getElementById('collapseMenu');

function handleClick() {
  if (collapseMenu.style.display === 'block') {
    collapseMenu.style.display = 'none';
  } else {
    collapseMenu.style.display = 'block';
  }
}

toggleOpen.addEventListener('click', handleClick);
toggleClose.addEventListener('click', handleClick);
    

const countrySelect = document.getElementById('country');
const otherCountryDiv = document.getElementById('other-country');

countrySelect.addEventListener('change', (e) => {
    if (e.target.value === 'Other') {
        otherCountryDiv.style.display = 'block';
    } else {
        otherCountryDiv.style.display = 'none';
    }
});


    // Fetch and insert the navbar
    fetch("nav.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-container").innerHTML = data;
        })
        .catch(error => console.error("Error loading navbar:", error));
