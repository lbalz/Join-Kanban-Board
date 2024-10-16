/**
 * Contact Templates
 */

// Contact List Template
function contactListRenderTemplate(singleContact) {
    return /*html*/`
    <div class="contactListSingleContactItemContainer" id="${singleContact.id}" onclick="renderContactDetails('${singleContact.id}')">
        <div class="contactListSingleContactItemProfilePicture" style="background-color: ${singleContact.color}">
            <span>${singleContact.initials}</span>
        </div>

        <div class="contactListSingleContactItemInfoContainer">
            <span class="contactListSingleContactItemName">${singleContact.name}</span>
            <span class="contactListSingleContactItemEmail">${singleContact.email}</span>
        </div>
    </div>
    `;
}

// Contact Details Template
function contactDetailsRenderTemplate(singleUser) {
    return /*html*/`
    <div class="upperContainer">
        <div>
            <div class="circle" id="initialienForCircle" style="background-color: ${singleUser.color}">
                <span>${singleUser.initials}</span>
            </div>
        </div>
        <div class="nameAndIcons">
            <div id="fullName">
                <h1>${singleUser.name}</h1>
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
            <span style="font-weight: bold">Email</span> <br>
            <span style="color: #4589FF">${singleUser.email}</span>
        </div>
        <div>
            <span style="font-weight: bold">Phone</span> <br>
            <span>${singleUser.phone}</span>
        </div>
    </div>
    `;
}


/* Contact Overlay Templates */
function renderAddContactOverlay() {
    return /*html*/`
    <div class="popUp" onclick="event.stopPropagation()">
        <div class="popUpTop">
            <img class="logoAddContact" src="../assets/icons/logo_add_contact.svg" alt="Add Contact Logo">
            <span class="addContactText">Add Contact</span>
            <span class="addContactTextBottom">Tasks are better with a team!</span>
        </div>
        <img class="closePopupIcon" src="../assets/icons/x_add_contact_icon.svg" alt="Close Popup" onclick="closePopup()">

        <div class="contactFormSection">
            <div class="profileImg">
                <span>
                    <img src="../assets/icons/person.png" alt="">
                </span>
            </div>
            <form class="contactForm">
                <div class="inputGroup">
                    <input type="text" placeholder="Name" value="" id="name">
                    <label for="name" class="contactFormIcon">
                        <img src="../assets/icons/person.png" alt="">
                    </label>
                </div>
                <div class="inputGroup">
                    <input type="email" placeholder="Email" value="" id="email">
                    <label for="email" class="contactFormIcon">
                        <img src="../assets/icons/mail.png" alt="">
                    </label>
                </div>
                <div class="inputGroup">
                    <input type="tel" placeholder="Phone" value="" id="phone">
                    <label for="phone" class="contactFormIcon">
                        <img src="../assets/icons/call.png" alt="">
                    </label>
                </div>
                <div class="buttons">
                    <button type="button" class="cancelContactBtnOverlay" onclick="closePopup()">Cancel &times;</button>
                    <button type="submit" class="addNewContactBtnOverlay" onclick="addNewContact()">
                        Create contact <img src="/assets/icons/check.png" alt="">
                    </button>
                </div>
            </form>
        </div>
    </div>
    `;
}