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
function sortContactList(userData) {
    userData.sort((a, b) => {
        return a.name < b.name ? -1 : 1;
    });
}


// Render Contact List
function renderContactList(userData) {
    sortContactList(userData);
    let contactListContainer = document.querySelector("#contactList");
    contactListContainer.innerHTML = "";

    let currentLetter = "";

    userData.forEach((singleContact, index) => {
        let firstLetter = singleContact.name.charAt(0).toUpperCase();

        if (firstLetter !== currentLetter) {
            currentLetter = firstLetter;

            contactListContainer.innerHTML += /*html*/`
            <div class="letterCategories">
                <span>${currentLetter}</span>
                <div class="seperatorLine"></div>
            </div>
            `;
        }


        contactListContainer.innerHTML += contactListRenderTemplate(singleContact, index);
    });
}


/**
 * Contact Details
 */
function renderContactDetails(userId, index) {
    let contactDetails = document.querySelector("#contactDetails");
    contactDetails.innerHTML = "";

    let contactOverlay = document.querySelector('.contactsOverlay');
    contactOverlay.innerHTML = "";

    singleUser = userData.find(user => user.id === userId);

    if (window.innerWidth <= 1050) {
        contactOverlay.innerHTML = contactDetailsOverlayTemplate(singleUser, index);
    } else {
        contactDetails.innerHTML = contactDetailsRenderTemplate(singleUser, index);
    }
    
    editUserDetails = singleUser;
}


function renderContactDetailsClear() {
    let contactDetails = document.querySelector("#contactDetails");
    contactDetails.innerHTML = "";
}


// render contact details in overlay
// function renderContactDetailsInOverlay(userId, index) {
//     let contactDetails = document.querySelector("#contactDetails");
//     contactDetails.innerHTML = "";

//     singleUser = userData.find(user => user.id === userId);

//     if (window.innerWidth <= 1050) {
//         contactDetails.innerHTML = contactDetailsOverlayTemplate(singleUser, index);
//         document.querySelector('.contactsOverlay')
//     } else {
//         contactDetails.innerHTML = contactDetailsRenderTemplate(singleUser, index);
//     }
    
//     editUserDetails = singleUser;
// }

// add new contact form validation
function checkContactFormValidation() {
    // Albert fragen in wie weit die Form Validation nochmal gehen soll
    let nameRef = document.querySelector("#name");
    let emailRef = document.querySelector("#email");
    let phoneRef = document.querySelector("#phone");

    if (nameRef.value && emailRef.value && phoneRef.value !== "") {
        addNewContact();
    } else {
        if (nameRef.value == "") {
            nameRef.style = "border-bottom: 1px solid var(--form-val-wrong)"
        }

        if (emailRef.value == "") {
            emailRef.style = "border-bottom: 1px solid var(--form-val-wrong)"
        }

        if (phoneRef.value == "") {
            phoneRef.style = "border-bottom: 1px solid var(--form-val-wrong)"
        }
    }
}


// add new contact function
function addNewContact() {
    // checkContactFormValidation();
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
        name: nameValue,
        email: emailValue,
        phone: phoneValue,
        color: randomColor
    }

    sendNewContactToDB(newProfile);

    nameValue = "";
    emailValue = "";
    phoneValue = "";

    closePopup();
    // Successfull created Animation
}


// Update single contact
function updateCurrentContact(id, index) {
    let nameRef = document.querySelector("#editName");
    let emailRef = document.querySelector("#editEmail");
    let phoneRef = document.querySelector("#editPhone");

    let nameValue = nameRef.value;
    let emailValue = emailRef.value;
    let phoneValue = phoneRef.value;

    let currentColor = userData[index].color;
    let initials = generateInitials(nameValue);

    let updatedData = {
        initials: initials,
        name: nameValue,
        email: emailValue,
        phone: phoneValue,
        color: currentColor
    }

    updateContactToDB(id, updatedData);
    closePopup();
}


// Deletes single contact
function deleteContact(id) {
    deleteContactFromDB(id);
    renderContactDetailsClear();
}


// Check background color
function checkBackgroundColor(index) {
    let allDivs = document.querySelectorAll(".contactListSingleContactItemContainer");
    let allSpans = document.querySelectorAll(".contactListSingleContactItemEmail");
    let selectedDiv = document.getElementById(`${index}`);
    let span = document.getElementById(`span${index}`);

    for (let i = 0; i < allDivs.length; i++) {
        const singleDiv = allDivs[i];
        singleDiv.classList.remove("backgroundColorBlue");

        const singleSpan = allSpans[i];
        singleSpan.classList.remove("backgroundColorBlue");
    }

    selectedDiv.classList.add("backgroundColorBlue");
    span.classList.add("backgroundColorBlue");
}


// Add new Contact form validation
function checkFormValidation() {

}

// let testArr = [
//     {
//         "name": "Lena Schmidt",
//         "phone": "+49 152 34567890",
//         "email": "lena.schmidt@example.com"
//     },
//     {
//         "name": "Max Müller",
//         "phone": "+49 151 23456789",
//         "email": "max.mueller@example.com"
//     },
//     {
//         "name": "Sophie Fischer",
//         "phone": "+49 171 98765432",
//         "email": "sophie.fischer@example.com"
//     },
//     {
//         "name": "Lukas Weber",
//         "phone": "+49 152 87654321",
//         "email": "lukas.weber@example.com"
//     },
//     {
//         "name": "Emily Bauer",
//         "phone": "+49 160 65432198",
//         "email": "emily.bauer@example.com"
//     },
//     {
//         "name": "Leon Wagner",
//         "phone": "+49 162 54321987",
//         "email": "leon.wagner@example.com"
//     },
//     {
//         "name": "Mia Becker",
//         "phone": "+49 176 32198765",
//         "email": "mia.becker@example.com"
//     },
//     {
//         "name": "Paul Richter",
//         "phone": "+49 170 12345678",
//         "email": "paul.richter@example.com"
//     },
//     {
//         "name": "Hannah Hoffmann",
//         "phone": "+49 151 56789123",
//         "email": "hannah.hoffmann@example.com"
//     },
//     {
//         "name": "Jonas Klein",
//         "phone": "+49 172 43219876",
//         "email": "jonas.klein@example.com"
//     },
//     {
//         "name": "Laura Schäfer",
//         "phone": "+49 163 98761234",
//         "email": "laura.schaefer@example.com"
//     },
//     {
//         "name": "Felix Neumann",
//         "phone": "+49 157 34561234",
//         "email": "felix.neumann@example.com"
//     },
//     {
//         "name": "Anna Schmid",
//         "phone": "+49 175 87654321",
//         "email": "anna.schmid@example.com"
//     },
//     {
//         "name": "Tim Meyer",
//         "phone": "+49 154 56783219",
//         "email": "tim.meyer@example.com"
//     },
//     {
//         "name": "Marie Braun",
//         "phone": "+49 159 65438921",
//         "email": "marie.braun@example.com"
//     },
//     {
//         "name": "Niklas Wolf",
//         "phone": "+49 177 98734561",
//         "email": "niklas.wolf@example.com"
//     },
//     {
//         "name": "Clara König",
//         "phone": "+49 152 32165498",
//         "email": "clara.koenig@example.com"
//     },
//     {
//         "name": "David Lehmann",
//         "phone": "+49 160 12983476",
//         "email": "david.lehmann@example.com"
//     },
//     {
//         "name": "Lilly Schwarz",
//         "phone": "+49 157 83726194",
//         "email": "lilly.schwarz@example.com"
//     },
//     {
//         "name": "Julian Krüger",
//         "phone": "+49 176 76543219",
//         "email": "julian.krueger@example.com"
//     },
//     {
//         "name": "Sarah Werner",
//         "phone": "+49 162 34981275",
//         "email": "sarah.werner@example.com"
//     },
//     {
//         "name": "Elias Zimmermann",
//         "phone": "+49 173 54789123",
//         "email": "elias.zimmermann@example.com"
//     },
//     {
//         "name": "Maya Böhm",
//         "phone": "+49 170 91827364",
//         "email": "maya.boehm@example.com"
//     },
//     {
//         "name": "Florian Frank",
//         "phone": "+49 151 38472619",
//         "email": "florian.frank@example.com"
//     },
//     {
//         "name": "Johanna Hartmann",
//         "phone": "+49 159 64829317",
//         "email": "johanna.hartmann@example.com"
//     }
// ]

// function addNewContactToDB(user) {
//     let nameValue = user.name;
//     let emailValue = user.email;
//     let phoneValue = user.phone;

//     let randomColor = generateRandomColor();
//     let initials = generateInitials(nameValue);

//     let newProfile = {
//         initials,
//         name: nameValue,
//         email: emailValue,
//         phone: phoneValue,
//         color: randomColor
//     }

//     sendNewContactToDB(newProfile);
// }

// function load() {
//     for (let i = 0; i < testArr.length; i++) {
//         const user = testArr[i];
//         addNewContactToDB(user)
//     }
// }