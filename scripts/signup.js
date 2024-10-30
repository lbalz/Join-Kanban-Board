const acceptCheckbox = document.getElementById('accept');
const signUpButton = document.getElementById('signUpButton');
const signupForm = document.getElementById('signupForm');
const popup = document.getElementById('signup-popup');
const overlay = document.getElementById('overlay');

//  sign-Up-Button aktiv wenn checkbox aktiv
acceptCheckbox.addEventListener('change', () => {
    signUpButton.disabled = !acceptCheckbox.checked;
});

signupForm.addEventListener('submit', (event) => {
    event.preventDefault(); 

    // alle Eingabefelder ausgefüllt?
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmpassword').value;

    if (name && email && password && confirmPassword && acceptCheckbox.checked) {
        // Speichern im Local Storage
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);

        // Overlay + Popup 
        showPopup();

        // weiterleitung login
        setTimeout(() => {
            window.location.href = '../pages/log_in.html';
        }, 2000); // weiterleitung nach 2 Sekunden
    } else {
        alert("Bitte füllen Sie alle Felder aus und akzeptieren Sie die Datenschutzrichtlinien.");
    }
});

function showPopup() {
    overlay.classList.remove('hidden'); // overlay sichtbar machen
    popup.classList.remove('hidden'); // popup sichtbar machen

    setTimeout(() => {
        overlay.classList.add('hidden'); // overlay ausblenden
        popup.classList.add('hidden'); // popup ausblenden
    }, 2000); // popup verschwindet nach 2 Sekunden
}
