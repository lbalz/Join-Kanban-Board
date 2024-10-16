// Generate Random Color for new Contact
function generateRandomColor() {
    let colorArray = Object.keys(accountColors);
    let randomNumber = Math.random();
    let colorIndex = Math.floor(randomNumber * colorArray.length);

    let randomKey = colorArray[colorIndex];
    let randomValue = accountColors[randomKey];
    return randomValue;
}

// Generate Initials from firstName and lastName
function generateInitials(nameValue) {
    if (nameValue.includes(" ")) {
        let singleNames = nameValue.split(" ");
        return singleNames[0][0] + singleNames[1][0];
    } else {
        return nameValue.slice(0, 2).toUpperCase();
    }
}

// Sort contact List
function sortContactList(contactList) {
    contactList.sort((a, b) => {
        return a.name < b.name ? -1 : 1;
    });
}


function renderContactList() {
    let contactListContainer = document.querySelector("#contactList");
    contactListContainer.innerHTML = "";

    userData.forEach(singleContact => {
        contactListContainer.innerHTML += contactListRenderTemplate(singleContact);
    });
}


/**
 * Contact Details
 */
function renderContactDetails(userId) {
    let contactDetails = document.querySelector("#contactDetails");
    contactDetails.innerHTML = "";

    singleUser = userData.find(user => user.id === userId);
    contactDetails.innerHTML = contactDetailsRenderTemplate(singleUser);
    editUserDetails = singleUser;
}





// add new contact function
function addNewContact() {
    let nameRef = document.querySelector("#name");
    let emailRef = document.querySelector("#email");
    let phoneRef = document.querySelector("#phone");

    let nameValue = nameRef.value;
    let emailValue = emailRef.value;
    let phoneValue = phoneRef.value;

    let randomColor = generateRandomColor();
    let initials = generateInitials(nameValue);

    let newProfile = {
        initials,
        name : nameValue,
        email : emailValue,
        phone : phoneValue,
        color : randomColor
    }

    sendNewContactToDB(newProfile);

    nameValue = "";
    emailValue = "";
    phoneValue = "";

    closePopup();
    // Successfull created Animation
}