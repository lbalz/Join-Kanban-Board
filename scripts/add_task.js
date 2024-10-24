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


//! Toggle Dropdown of assigned Contacts
function toggleDropdownAssignedContacts() {
  const assignedContacts = document.getElementById('assignedContacts');
  // Toggle the 'hidden' class on or off
  assignedContacts.classList.toggle('hiddenAssignedContacts');
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

// Alle Kontakte holen
const contacts = document.querySelectorAll('.contact');

// For-Schleife durch alle Kontakte
for (let i = 0; i < contacts.length; i++) {
    const contact = contacts[i];

    // Checkbox hinzufügen (einmalig)
    const checkboxDiv = contact.querySelector('.checkbox');
    checkboxDiv.innerHTML = uncheckedSVG + checkedSVG;
}

// Funktion für Checkbox umschalten
function toggleCheckbox(contactElement) {
  const unchecked = contactElement.querySelector('.unchecked');
  const checked = contactElement.querySelector('.checked');

  // Toggle Sichtbarkeit der Checkbox
  if (unchecked.classList.contains('hideCheckBox')) {
      unchecked.classList.remove('hideCheckBox');
      checked.classList.add('hideCheckBox');
  } else {
      unchecked.classList.add('hideCheckBox');
      checked.classList.remove('hideCheckBox');
  }

  // Markiere den Kontakt als aktiv (hellblau)
  contactElement.classList.toggle('active');
}




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