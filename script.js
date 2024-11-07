// Toggle Drop down for Logout, legal notice, privacy policy
function toggledropDownBar() {
  document.getElementById("dropDownBar").classList.toggle("activ");
}

// Funktion für aktuelles Datum
function displayCurrentDate() {
  const dateElement = document.getElementById("currentDate");

  // Aktuelles Datum
  const today = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };

  // Formatieren des Datums (hier für US-Format)
  const formattedDate = today.toLocaleDateString("en-US", options);

  // Datum anzeigen
  dateElement.textContent = formattedDate;
}

// Begrüßung nach Tageszeit aktualisieren, ohne den Benutzernamen zu ändern
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

  // Nur den Begrüßungstext aktualisieren, ändert nix am Benutzer
  const greetingElement = document.querySelector('.dashboardHeader h1');
  greetingElement.innerHTML = `${greeting} <span class="dashboardUsername">${greetingElement.querySelector('.dashboardUsername').textContent}</span>`;
}

// Funktionen aufrufen, wenn das DOM geladen ist
window.onload = function() {
  displayCurrentDate();
  updateGreeting();
};

// script.js

document.addEventListener("DOMContentLoaded", () => {
  const loggedInUserEmail = localStorage.getItem("loggedInUser");

  if (loggedInUserEmail) {
      // Prüfen, ob der eingeloggte Benutzer ein Gast ist
      if (loggedInUserEmail === "guest") {
          document.querySelector(".dashboardUsername").textContent = "Guest";
      } else {
          // Benutzername des SignUp Benutzers auslesen
          const userData = JSON.parse(localStorage.getItem("user_" + loggedInUserEmail));

          if (userData && userData.name) {
              document.querySelector(".dashboardUsername").textContent = userData.name;
          } else {
              console.error("Fehler: Benutzerdaten oder Name nicht gefunden.");
          }
      }
  } else {
      // Falls kein Benutzer eingeloggt ist, zur Login-Seite weiterleiten
      console.warn("Kein Benutzer eingeloggt, Umleitung zur Login-Seite.");
      window.location.href = "./pages/log_in.html";
  }
});

