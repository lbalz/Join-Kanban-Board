


let contactList = [];


/**
 * @returns single contact list item
 */
function contactListRenderTemplate(singleContact) {
    return /*html*/`
    <div class="contactListSingleContactItemContainer" onclick="renderContactDetails('${singleContact.id}')">
        <div class="contactListSingleContactItemProfilePicture" style="background-color: ${singleContact.color}">
            <span>${singleContact.profile_letters}</span>
        </div>

        <div class="contactListSingleContactItemInfoContainer">
            <span class="contactListSingleContactItemName">${singleContact.name}</span>
            <span class="contactListSingleContactItemEmail">${singleContact.email}</span>
        </div>
    </div>
    `;
}


function contactDetailsRenderTemplate() {
    return /*html*/`
    <div class="upperContainer">
        <div>
            <div class="circle" id="initialienForCircle">
                <h1>MM</h1>
            </div>
        </div>
        <div class="nameAndIcons">
            <div id="fullName">
                <h1>Mike Meyers</h1>
            </div>
            <div class="editAndDeleteIcon">
                <div class="editIcon"><img src="../assets/icons/edit.svg">
                    <p>Edit</p>
                </div>
                <div class="deleteIcon"><img src="../assets/icons/delete.svg">
                    <p>Delete</p>
                </div>
            </div>
        </div>
    </div>
    <div>
        <h2>Contact Information</h2>
        <div>
            <h4>Email</h4>
            <a href="">Meyers.Schlachtfest@gmail.com</a>
        </div>
        <div>
            <h4>Phone</h4>
            <a href="">01666660664</a>
        </div>
    </div>
    `;
}

//! Die Random Colors müssen generiert werden und dann in die db geschickt werden
//! damit sich die farben nicht bei jedem reload ändern
function getRandomColorForProfile() {
    let colorArray = Object.keys(accountColors);
    let randomNumber = Math.random();
    let colorIndex = Math.floor(randomNumber * colorArray.length);

    let randomKey = colorArray[colorIndex];
    let randomValue = accountColors[randomKey];
    return randomValue;
}


/**
 * This function takes every forEach loop from loadContactList()
 * the first letter of firstname and lastname and compares it to 
 * store it in contactList variable
 * @param {object} singleContact 
 * @returns {string}
 */
function getLettersForProfile(singleContact) {
    let fullName = singleContact.name;
    let singleNames = fullName.split(" ");
    return singleNames[0][0] + singleNames[1][0];
}


/**
 * Sort array object contactList alphabetically
 * @param {Array} contactList 
 */
function sortContactList(contactList) {
    contactList.sort((a, b) => {
        return a.name < b.name ? -1 : 1;
    });
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
                id: singleContact.id,
                index : index,
                name: singleContact.name,
                email: singleContact.email,
                profile_letters: getLettersForProfile(singleContact),
                color: getRandomColorForProfile()
            }
        );
    });
    contactList = contactList;
    sortContactList(contactList);
}


function renderContactList() {
    loadContactList();

    let contactListContainer = document.querySelector("#contactList");
    contactListContainer.innerHTML = "";

    contactList.forEach(singleContact => {
        contactListContainer.innerHTML += contactListRenderTemplate(singleContact);
    });
}


/**
 * Contact Details
 */
function renderContactDetails(userId) {
    let contactDetails = document.querySelector("#contactDetails");
    contactDetails.innerHTML = "";


}


/**
 * Added eventListener to handle addContact Overlay
 */
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
