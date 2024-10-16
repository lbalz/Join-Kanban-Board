/**
 * Added eventListener to handle addContact Overlay
 */
document.addEventListener('DOMContentLoaded', function () {
    // Event Listener für den "Add new Contact"-Button
    const addContactBtn = document.querySelector('.addNewContactBtn');
    const editContactBtn = document.querySelector('.contactListSingleContactItemContainer');

    // Überprüfen, ob der Button existiert und ein Event Listener hinzugefügt wurde
    if (addContactBtn) {
        addContactBtn.addEventListener('click', openAddContactPopup);
        addContactBtn.addEventListener('click', addBtnDisable);
    } else {
        console.error("Der 'Add new Contact'-Button wurde nicht gefunden.");
    }

    // Edit Contact
    if (editContactBtn) {
        editContactBtn.addEventListener('click', openEditContactPopup);
    }
});


// Funktion zum Öffnen des Add Contact Pop-ups
function openAddContactPopup() {
    document.querySelector('.overlay').style.display = 'block'; // Pop-up sichtbar machen
    document.querySelector('.overlay').innerHTML = renderAddContactOverlay();
}


// Funktion zum Öffnen des Edit Contact Pop-ups
let editUserDetails;
function openEditContactPopup() {
    document.querySelector('.overlay').style.display = 'block';
    document.querySelector('.overlay').innerHTML = renderEditContactOverlay(editUserDetails);
}


// Funktion zum Schließen des Pop-ups
function closePopup() {
    document.querySelector('.overlay').style.display = 'none'; // Pop-up verstecken
}


// Funktion zum Button disablen
function addBtnDisable() {
    document.querySelector(".add")
}

