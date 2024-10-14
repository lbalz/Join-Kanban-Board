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
                id : index,
                name : singleContact.name,
                email : singleContact.email,
                profile_letters : getFirstLetterForProfile(singleContact),
                //color : "hex-code"
            }
        )
    });
}


function renderContactList() {
    loadContactList();

    let contactListContainer = document.getElementById("contactList");
    contactListContainer.innerHTML = "";

    contactList.forEach(singleContact => {
        contactListContainer.innerHTML += contactListRenderTemplate(singleContact);
    })
}