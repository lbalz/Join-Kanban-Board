/**
 * Added eventListener to handle addContact Overlay
 */
document.addEventListener('DOMContentLoaded', function () {
    // Event Listener für den "Add new Contact"-Button
    const addContactBtn = document.querySelector('.addNewContactBtn');

    // Überprüfen, ob der Button existiert und ein Event Listener hinzugefügt wurde
    if (addContactBtn) {
        addContactBtn.addEventListener('click', openPopup);
        addContactBtn.addEventListener('click', addBtnDisable)
    } else {
        console.error("Der 'Add new Contact'-Button wurde nicht gefunden.");
    }
});


// Funktion zum Öffnen des Pop-ups
function openPopup() {
    document.querySelector('.overlay').style.display = 'block'; // Pop-up sichtbar machen
    document.querySelector('.overlay').innerHTML = renderAddContactOverlay();
}


// Funktion zum Schließen des Pop-ups
function closePopup() {
    document.querySelector('.overlay').style.display = 'none'; // Pop-up verstecken
}


// Funktion zum Button disablen
function addBtnDisable() {
    document.querySelector(".add")
}