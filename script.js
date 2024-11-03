// Toggle Drop down for Logout, legal notice, privacy policy
function toggledropDownBar() {
  document.getElementById("dropDownBar").classList.toggle("activ");
}

// Funktion aktuelle Datum
function displayCurrentDate() {
  const dateElement = document.getElementById("currentDate");

  // Aktuelles Datum
  const today = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };

  // Datum formatieren hier für DT: 'de-DE'
  const formattedDate = today.toLocaleDateString("en-US", options);

  // setzt das Datum ein 
  dateElement.textContent = formattedDate;
}

// Begrüßung nach Tageszeit
function updateGreeting() {
  const hour = new Date().getHours();
  let greeting;

  if (hour < 12) {
    greeting = "Good morning,";
  } else if (hour < 18) {
    greeting = "Good afternoon,";
  } else {
    greeting = "Good evening,";
  }

  document.querySelector('.dashboardHeader h1').innerHTML = `${greeting}<span class="dashboardUsername"> Sofia Müller</span>`;
}

// ruft funktion auf sobald DOM geladen
window.onload = function() {
  displayCurrentDate();
  updateGreeting();
};
