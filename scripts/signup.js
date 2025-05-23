const acceptCheckbox = document.getElementById('accept');
const signUpButton = document.getElementById('signUpButton');
const signupForm = document.getElementById('signupForm');
const popup = document.getElementById('signup-popup');
const overlay = document.getElementById('overlay');

// Sign-Up-Button aktivieren, wenn Checkbox aktiviert ist
acceptCheckbox.addEventListener('change', () => {
    signUpButton.disabled = !acceptCheckbox.checked;
});

// Event-Listener für das Formular beim Abschicken
signupForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Benutzerdaten aus den Eingabefeldern holen
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('passwordField').getAttribute('data-real-password');
    const confirmPassword = document.getElementById('confirmPasswordField').getAttribute('data-real-password');

    // Eingabefelder und Passwortbestätigung prüfen
    if (name && email && password && confirmPassword && acceptCheckbox.checked) {
        if (password !== confirmPassword) {
            alert("Die Passwörter stimmen nicht überein.");
            return;
        }

        // Prüfen, ob die E-Mail schon registriert ist
        if (localStorage.getItem(`user_${email}`)) {
            alert("Diese E-Mail ist bereits registriert. Bitte loggen Sie sich ein.");
            return;
        }

        // Benutzerdaten als Objekt speichern
        const userData = {
            name: name,
            email: email,
            password: password
        };

        // Benutzerobjekt im Local Storage speichern
        localStorage.setItem(`user_${email}`, JSON.stringify(userData));

        // Overlay und Popup anzeigen
        showPopup();

        // Weiterleitung zur Login-Seite nach 2 Sekunden
        setTimeout(() => {
            window.location.href = '../pages/log_in.html';
        }, 2000);
    } else {
        alert("Bitte füllen Sie alle Felder aus und akzeptieren Sie die Datenschutzrichtlinien.");
    }
});

// Funktion zum Anzeigen des Popups
function showPopup() {
    overlay.classList.remove('hidden'); // Overlay sichtbar machen
    popup.classList.remove('hidden'); // Popup sichtbar machen

    setTimeout(() => {
        overlay.classList.add('hidden'); // Overlay ausblenden
        popup.classList.add('hidden'); // Popup ausblenden
    }, 2000);
}
