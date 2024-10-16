let contactList = [];

/**
 * @returns single contact list item
 */
function contactListRenderTemplate(singleContact) {
    return /*html*/`
    <div class="contactListSingleContactItemContainer">
        <div class="contactListSingleContactItemProfilePicture">
            <span>${singleContact.profile_letters}</span>
        </div>

        <div class="contactListSingleContactItemInfoContainer">
            <span class="contactListSingleContactItemName">${singleContact.name}</span>
            <span class="contactListSingleContactItemEmail">${singleContact.email}</span>
        </div>
    </div>
    `;
}

/**
 * This function takes every forEach loop from loadContactList()
 * the first letter of firstname and lastname and compares it to 
 * store it in contactList variable
 * @param {object} singleContact 
 * @returns {string}
 */
function getFirstLetterForProfile(singleContact) {
    let fullName = singleContact.name;
    let singleNames = fullName.split(" ");
    return singleNames[0][0] + singleNames[1][0];
}

//! index / ID soll für die funktionalität des einzelnen Kontakts anzeigen sein
//! CSS muss noch angepasst werden
//! Die random colors müssen auch noch hinzugefügt werden und könnten als string
//! in dem jeweiligen object gespeichert werden um somit in dem renderTemplate
//! den hexcode als inline-style z.B. hinzuzufügen
function loadContactList() {
    userData.forEach((singleContact, index) => {
        contactList.push(
            {
                id: index,
                name: singleContact.name,
                email: singleContact.email,
                profile_letters: getFirstLetterForProfile(singleContact),
                //color : "hex-code"
            }
        );
    });
}

function renderContactList() {
    loadContactList();

    let contactListContainer = document.getElementById("contactList");
    contactListContainer.innerHTML = "";

    contactList.forEach(singleContact => {
        contactListContainer.innerHTML += contactListRenderTemplate(singleContact);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    // Event Listener für den "Add new Contact"-Button
    const addContactBtn = document.querySelector('.addNewContactBtn');
    const closeIcon = document.querySelector('.closePopupIcon');
    const closeBtn = document.querySelector('.closeNewContactBtn'); // add new contact close btn

    // Überprüfen, ob der Button existiert und ein Event Listener hinzugefügt wurde
    if (addContactBtn) {
        addContactBtn.addEventListener('click', openPopup);  
    } else {
        console.error("Der 'Add new Contact'-Button wurde nicht gefunden.");
    }

    // Event Listener für das Schließen über das X
    if (closeIcon, closeBtn) {
        closeIcon.addEventListener('click', closePopup);
        closeBtn.addEventListener('click', closePopup);
    } else {
        console.error("Das Schließen-Symbol wurde nicht gefunden.");
    }
});

// Funktion zum Öffnen des Pop-ups
function openPopup() {
    document.querySelector('.overlay').style.display = 'block'; // Pop-up sichtbar machen
}

// Funktion zum Schließen des Pop-ups
function closePopup() {
    document.querySelector('.overlay').style.display = 'none'; // Pop-up verstecken
}
