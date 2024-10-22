// function setActive(button) {
//   // Get all buttons with the class 'btn'
//   const buttons = document.getElementsByClassName('priorityBtn');


//   const mediumHover = document.getElementById('medium');
//   const lowHover = document.getElementById('low');
//   // Remove 'active' class from all buttons
//   for (let i = 0; i < buttons.length; i++) {
//     buttons[i].classList.remove('active');
//   }

//   // Add the 'active' class to the clicked button
//   button.classList.add('active');

//   // Remove Hover 
//   mediumHover.classList.toggle('mediumHover');
//   lowHover.classList.toggle('lowHover');
// }

function toggleUrgent() {
  const urgentHover = document.getElementById('urgent');
  const mediumHover = document.getElementById('medium');
  const lowHover = document.getElementById('low');
  
  if (urgentHover.classList.contains('active')) {
    urgentHover.classList.remove('active');
    urgentHover.classList.add('urgentHover');
    mediumHover.classList.add('mediumHover');
    lowHover.classList.add('lowHover');
  } else {
    urgentHover.classList.add('active');
    urgentHover.classList.remove('urgentHover');
    mediumHover.classList.add('mediumHover');
    lowHover.classList.add('lowHover');
    lowHover.classList.remove('active');
    mediumHover.classList.remove('active');
  }

  // urgentHover.classList.toggle('urgentHover');
  // urgentHover.classList.toggle('active');
  // if (!urgentHover.classList.contains('active')) {
  //   document.getElementById('medium').classList.remove('active');
  //   document.getElementById('low').classList.remove('active');
  //   urgentHover.classList.add('active');
  //   urgentHover.classList.remove('urgentHover');
  // }  else {
  //   urgentHover.classList.add('urgentHover');
  // }
}

function toggleMedium() {
  const mediumHover = document.getElementById('medium');
  const urgentHover = document.getElementById('urgent');
  const lowHover = document.getElementById('low');

  if (mediumHover.classList.contains('active')) {
    mediumHover.classList.remove('active');
    mediumHover.classList.add('mediumHover');
    urgentHover.classList.add('urgentHover');
    lowHover.classList.add('lowHover');
  } else {
    mediumHover.classList.add('active');
    mediumHover.classList.remove('mediumHover');
    urgentHover.classList.add('urgentHover');
    lowHover.classList.add('lowHover');
    urgentHover.classList.remove('active');
    lowHover.classList.remove('active');
  }
  
  // mediumHover.classList.toggle('mediumHover');
  // mediumHover.classList.toggle('active');
  // if (!mediumHover.classList.contains('active')) {
  //   document.getElementById('urgent').classList.remove('active');
  //   document.getElementById('low').classList.remove('active');
  //   mediumHover.classList.add('active');
  //   mediumHover.classList.remove('mediumHover');
  // } else {
  //   mediumHover.classList.add('mediumHover');
  // }
}


function toggleLow() {
  const lowHover = document.getElementById('low');
  const mediumHover = document.getElementById('medium');
  const urgentHover = document.getElementById('urgent');
  
  if (lowHover.classList.contains('active')) {
    lowHover.classList.remove('active');
    lowHover.classList.add('lowHover');
    urgentHover.classList.add('urgentHover');
    mediumHover.classList.add('mediumHover');
  } else {
    lowHover.classList.add('active');
    lowHover.classList.remove('lowHover');
    urgentHover.classList.add('urgentHover');
    mediumHover.classList.add('mediumHover');
    urgentHover.classList.remove('active');
    mediumHover.classList.remove('active');
  }

  // lowHover.classList.toggle('lowHover');
  // lowHover.classList.toggle('active');
  // if (!lowHover.classList.contains('active')) {
  //   document.getElementById('urgent').classList.remove('active');
  //   document.getElementById('medium').classList.remove('active');
  //   lowHover.classList.add('active');
  //   lowHover.classList.remove('lowHover');
  // }  else {
  //   lowHover.classList.add('lowHover');
  // }
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