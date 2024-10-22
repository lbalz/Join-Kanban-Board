function setActive(button) {
  // Get all buttons with the class 'btn'
  const buttons = document.getElementsByClassName('priorityBtn');

  // Remove 'active' class from all buttons
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('active');
  }

  // Add the 'active' class to the clicked button
  button.classList.add('active');
}


// Toggle Dropdown of assigned Contacts
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



// Toggle Dropdown of Category
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