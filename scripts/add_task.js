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
  

  // Toggle Drop down for Logout, legal notice, privacy policy
// function toggledropDownCategory() {
//     const category = document.getElementById('nav');
//     category.classList.toggle('activ')
// }