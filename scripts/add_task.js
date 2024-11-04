//! Get User Data from DB for assigned to
const DATABASE_URL = "https://join-project-database-default-rtdb.europe-west1.firebasedatabase.app/";

addTaskUserData = [];

async function getUserDataForAddTask(path = "/users") {
  try {
    let userResponse = await fetch(DATABASE_URL + path + ".json");
    let userResponseJson = await userResponse.json();

    addTaskUserData = [];

    if (userResponseJson) {
      Object.keys(userResponseJson).forEach(key => {
        addTaskUserData.push({
          id: key,
          initials: userResponseJson[key].initials,
          name: userResponseJson[key].name,
          color: userResponseJson[key].color,
          isToggled: false // hier is Toggled initalisieren
        });
      });
      console.log(addTaskUserData);
    }

  } catch (error) {
    console.error("Error loading DB-Data:", error);
  }
}


//! Template function for assigned to
function assignedToSingleUserTemplate(singleUser, i) {
  return /*html*/`
                                  <li>
                                    <div id="${singleUser.id}" class="contact" onclick="toggleCheckbox(this, ${i})">
                                        <div class="contactIformation">
                                            <span class="contactAvatar" style="background-color: ${singleUser.color}">${singleUser.initials}</span>
                                            <span>${singleUser.name}</span>
                                        </div>

                                        <div class="checkbox" id="checkbox">
                                          <svg id="unCheckedBox${i}" class="unchecked" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <rect x="4" y="4.96582" width="16" height="16" rx="3" stroke="#4589FF" stroke-width="2"/>
                                          </svg>
                                          <svg id="checkedBox${i}" class="checked hideCheckBox" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M20 11.9658V17.9658C20 19.6227 18.6569 20.9658 17 20.9658H7C5.34315 20.9658 4 19.6227 4 17.9658V7.96582C4 6.30897 5.34315 4.96582 7 4.96582H15" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>
                                              <path d="M8 12.9658L12 16.9658L20 5.46582" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                          </svg>
                                        </div>
                                    </div>
                                  </li>
  `;
}


function renderAssignedToList() {
  let ulItem = document.getElementById("assignedContactsUlItem");
  ulItem.innerHTML = "";

  // const unchecked = document.getElementById('unCheckedBox');
  // const checked = document.getElementById('checkedBox');

  for (let i = 0; i < addTaskUserData.length; i++) {
    const singleUser = addTaskUserData[i];
    ulItem.innerHTML += assignedToSingleUserTemplate(singleUser, i);

    // if (addTaskUserData[i].isToggled === false) {
    //   unchecked.classList.remove('hideCheckBox');
    //   checked.classList.add('hideCheckBox');
    // }
    const contactElement = document.getElementById(singleUser.id);
    renderToggleCheckbox(contactElement, i);
  }
}




// * Select assigned Contacts
// Füge die SVG nur einmal als Template hinzu
const uncheckedSVG = `
  <svg class="unchecked" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4.96582" width="16" height="16" rx="3" stroke="#4589FF" stroke-width="2"/>
  </svg>`;

const checkedSVG = `
  <svg class="checked hideCheckBox" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 11.9658V17.9658C20 19.6227 18.6569 20.9658 17 20.9658H7C5.34315 20.9658 4 19.6227 4 17.9658V7.96582C4 6.30897 5.34315 4.96582 7 4.96582H15" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>
      <path d="M8 12.9658L12 16.9658L20 5.46582" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;


//* Alle Kontakte holen
const contacts = document.querySelectorAll('.contact');

// For-Schleife durch alle Kontakte
for (let i = 0; i < contacts.length; i++) {
  const contact = contacts[i];

  // Checkbox hinzufügen (einmalig)
  const checkboxDiv = contact.querySelector('.checkbox');
  checkboxDiv.innerHTML = checkedSVG;
}


//! Funktion für Checkbox umschalten
function toggleCheckbox(contactElement, i) {


  const unchecked = document.getElementById(`unCheckedBox${i}`);
  const checked = document.getElementById(`checkedBox${i}`);
  // const unchecked = contactElement.querySelector('.unchecked');
  // const checked = contactElement.querySelector('.checked');

  // Toggle Sichtbarkeit der Checkbox
  if (addTaskUserData[i].isToggled) {
    unchecked.classList.remove('hideCheckBox');
    checked.classList.add('hideCheckBox');

    // unchecked.classList.add('hideCheckBox');
    // checked.classList.remove('hideCheckBox');
    addTaskUserData[i].isToggled = false;
  } else {
    unchecked.classList.add('hideCheckBox');
    checked.classList.remove('hideCheckBox');

    // unchecked.classList.remove('hideCheckBox');
    // checked.classList.add('hideCheckBox');
    addTaskUserData[i].isToggled = true;
  }

  // Markiere den Kontakt als aktiv (hellblau)
  contactElement.classList.toggle('active');

}


//! Funktion für Checkbox umschalten
function renderToggleCheckbox(contactElement, i) {


  const unchecked = document.getElementById(`unCheckedBox${i}`);
  const checked = document.getElementById(`checkedBox${i}`);

  // Toggle Sichtbarkeit der Checkbox
  if (addTaskUserData[i].isToggled) {
    // unchecked.classList.remove('hideCheckBox');
    // checked.classList.add('hideCheckBox');

    unchecked.classList.add('hideCheckBox');
    checked.classList.remove('hideCheckBox');

    // Füge die Klasse 'active' hinzu, wenn isToggled true ist
    contactElement.classList.add('active');

  } else {
    // unchecked.classList.add('hideCheckBox');
    // checked.classList.remove('hideCheckBox');

    unchecked.classList.remove('hideCheckBox');
    checked.classList.add('hideCheckBox');

    // Entferne die Klasse 'active', wenn isToggled false ist
    contactElement.classList.remove('active');
  }

  // Markiere den Kontakt als aktiv (hellblau)
  // contactElement.classList.toggle('active');

}


//! Toggle Dropdown of assigned Contacts
function toggleDropdownAssignedContacts() {
  const assignedContacts = document.getElementById('assignedContacts');
  // Toggle the 'hidden' class on or off
  assignedContacts.classList.toggle('hiddenAssignedContacts');
  updateSelectedContacts();
}


// change assiend icon
function changeDropdownAssignedIcon() {
  const arrowDown = document.getElementById('arrowDown');
  const arrowUp = document.getElementById('arrowUp');

  if (arrowDown.style.display === 'none') {
    // Show arrow down, hide arrow up
    arrowDown.style.display = 'flex';
    arrowUp.style.display = 'none';
  } else {
    // Hide arrow down, show arrow up
    arrowDown.style.display = 'none';
    arrowUp.style.display = 'flex';
  }
  updateSelectedContacts();
}

// Funktion, um die ausgewählten Kontakte in showSelectedContact anzuzeigen
function updateSelectedContacts() {
  const selectedContactsContainer = document.querySelector('.showSelectedContact');
  selectedContactsContainer.innerHTML = ''; // Entferne alte Einträge

  // Alle aktiven Kontakte (ausgewählte Kontakte) finden
  const activeContacts = document.querySelectorAll('.contact.active');

  // Füge die Initialen jedes ausgewählten Kontakts hinzu
  activeContacts.forEach(contact => {
    const contactAvatar = contact.querySelector('.contactAvatar').cloneNode(true); // Klont das Kontakt-Avatar
    contactAvatar.classList.add('showncontactAvatar'); // Füge Klasse hinzu, falls nötig
    selectedContactsContainer.appendChild(contactAvatar); // Füge Avatar zur Anzeige hinzu
  });
}

//! Priority btns effects
const urgent = document.getElementById('urgent');
const medium = document.getElementById('medium');
const low = document.getElementById('low');


function toggleUrgent() {
  if (urgent.classList.contains('active')) {
    urgent.classList.remove('active');
    urgent.classList.add('urgentHover');
    medium.classList.add('mediumHover');
    low.classList.add('lowHover');
  } else {
    urgent.classList.add('active');
    urgent.classList.remove('urgentHover');
    medium.classList.add('mediumHover');
    low.classList.add('lowHover');
    low.classList.remove('active');
    medium.classList.remove('active');
  }
}


function toggleMedium() {
  if (medium.classList.contains('active')) {
    medium.classList.remove('active');
    medium.classList.add('mediumHover');
    urgent.classList.add('urgentHover');
    low.classList.add('lowHover');
  } else {
    medium.classList.add('active');
    medium.classList.remove('mediumHover');
    urgent.classList.add('urgentHover');
    low.classList.add('lowHover');
    urgent.classList.remove('active');
    low.classList.remove('active');
  }
}


function toggleLow() {
  if (low.classList.contains('active')) {
    low.classList.remove('active');
    low.classList.add('lowHover');
    urgent.classList.add('urgentHover');
    medium.classList.add('mediumHover');
  } else {
    low.classList.add('active');
    low.classList.remove('lowHover');
    urgent.classList.add('urgentHover');
    medium.classList.add('mediumHover');
    urgent.classList.remove('active');
    medium.classList.remove('active');
  }
}





// let activeContacts = [];

// function updateSelectedContacts() {
//   let contentRef = document.getElementById('showSelectedContact');
//   contentRef.innerHTML = "";
//   const activeContacts = document.querySelectorAll('.contactAvatar');
//   for (let index = 0; index < activeContacts.length; index++) {
//     contentRef.innerHTML += getHtmlContent(index);

//   }
// }

// function getHtmlContent(index) {
//   return `${activeContacts[index]} `
// }



// // Funktion, um die ausgewählten Kontakte in showSelectedContact anzuzeigen
// function updateSelectedContacts() {
//   const selectedContactsContainer = document.querySelector('.showSelectedContact');

//   // Alte Einträge entfernen
//   selectedContactsContainer.innerHTML = '';

//   // Alle aktiven Kontakte (ausgewählte Kontakte) finden
//   const activeContacts = document.querySelectorAll('.contact.active');

//   // Prüfen, ob aktive Kontakte vorhanden sind
//   if (activeContacts.length === 0) {
//       console.log("Keine aktiven Kontakte gefunden.");
//   } else {
//       console.log("Aktive Kontakte gefunden:", activeContacts.length);
//   }

//   // Füge die Initialen jedes ausgewählten Kontakts hinzu
//   activeContacts.forEach(contact => {
//       // Avatar-Element suchen
//       const contactAvatar = contact.querySelector('.contactAvatar');
//       if (contactAvatar) {
//           const avatarClone = contactAvatar.cloneNode(true); // Klonen des Kontakt-Avatars
//           avatarClone.classList.add('showncontactAvatar'); // Klasse für Stil hinzufügen
//           selectedContactsContainer.appendChild(avatarClone); // Zum Container hinzufügen
//           console.log("Avatar hinzugefügt:", avatarClone.textContent);
//       } else {
//           console.log("Kein Avatar-Element gefunden.");
//       }
//   });
// }




// // Funktion, um die ausgewählten Kontakte in showSelectedContact anzuzeigen
// function updateSelectedContacts() {
//   const selectedContactsContainer = document.querySelector('.showSelectedContact');
//   selectedContactsContainer.innerHTML = ''; // Entferne alte Einträge

//   // Alle aktiven Kontakte (ausgewählte Kontakte) finden
//   const activeContacts = document.querySelectorAll('.contact.active');

//   // Füge die Initialen jedes ausgewählten Kontakts hinzu
//   activeContacts.forEach(contact => {
//       const contactAvatar = contact.querySelector('.contactAvatar').cloneNode(true); // Klont das Kontakt-Avatar
//       contactAvatar.classList.add('showncontactAvatar'); // Füge Klasse hinzu, falls nötig
//       selectedContactsContainer.appendChild(contactAvatar); // Füge Avatar zur Anzeige hinzu
//   });
// }


//! Toggle Dropdown of Category
function toggleDropdownCategory() {
  const categoryTasks = document.getElementById('categoryTasks');
  // Toggle the 'hidden' class on or off
  categoryTasks.classList.toggle('hiddenCategoryTasks');
}


// change category icon
function changeDropdownCategoryIcon() {
  const arrowDown = document.getElementById('arrowDownCategory');
  const arrowUp = document.getElementById('arrowUpCategory');

  if (arrowDown.style.display === 'none') {
    // Show arrow down, hide arrow up
    arrowDown.style.display = 'flex';
    arrowUp.style.display = 'none';
  } else {
    // Hide arrow down, show arrow up
    arrowDown.style.display = 'none';
    arrowUp.style.display = 'flex';
  }
}