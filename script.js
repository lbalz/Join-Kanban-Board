// Toggle Drop down for Logout, legal notice, privacy policy
function toggledropDownBar(){
    document.getElementById('dropDownBar').classList.toggle('activ')
}

// Funktion aktuelle Datum
function displayCurrentDate() {
    const dateElement = document.getElementById('currentDate');
    
    // Aktuelles Datum 
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    
    // Datum formatieren hier für DT: 'de-DE'
    const formattedDate = today.toLocaleDateString('en-US', options);
    
    // Datum in das HTML-Element einsetzen
    dateElement.textContent = formattedDate;
}

// Funktion aufrufen, sobald das DOM geladen ist
window.onload = displayCurrentDate;
