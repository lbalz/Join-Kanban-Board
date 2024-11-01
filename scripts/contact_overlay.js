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
    document.querySelector('.contactsOverlay').style.display = 'block'; // Pop-up sichtbar machen
    document.querySelector('.contactsOverlay').innerHTML = renderAddContactOverlay();
}


// Funktion zum Öffnen des Edit Contact Pop-ups
let editUserDetails;
function openEditContactPopup(index) {
    document.querySelector('.contactsOverlay').style.display = 'block';
    document.querySelector('.contactsOverlay').innerHTML = renderEditContactOverlay(editUserDetails, index);
}


// Funktion zum Schließen des Pop-ups
function closePopup() {
    document.querySelector('.contactsOverlay').style.display = 'none'; // Pop-up verstecken
}


// Funktion zum Button disablen
function addBtnDisable() {
    document.querySelector(".add")
}

//Funktion für Dropdown Contact Info Overlay für Responsiv
function dropDownEditAndDelete(){
    let editAndDeleteDropdown = document.getElementById('dropDownMenuForSpecialContact');
    editAndDeleteDropdown.style.display = editAndDeleteDropdown.style.display === "none" ? "block" : "none";
}

//Funktion für Blauen Pfeil, der nach Li zeigt ("Backpfeil")
function goBack() {
    window.history.back();
}
