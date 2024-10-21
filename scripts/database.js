const accountColors = {
    orange: "#FF7A00",
    pink: "#FF5EB3",
    blue_pruple: "#6E52FF",
    purple: "#9327FF",
    turquoise: "#00BEE8",
    green_blue: "#1FD7C1",
    red_orange: "#FF745E",
    skin_color: "#FFA35E",
    light_pink: "#FC71FF",
    dark_yellow: "#FFC701",
    dark_blue: "#0038FF",
    lime: "#C3FF2B",
    yellow: "#FFE62B",
    light_red: "#FF4646",
    light_orange: "#FFBB2B"
}

const DATABASE_URL = "https://join-project-database-default-rtdb.europe-west1.firebasedatabase.app/";
const USERS_PATH = "/users";

let userData = [];

// Load current userData from DB
async function loadUserData(path = "/users") {
    try {
        let userResponse = await fetch(DATABASE_URL + path + ".json");
        let userResponseJson = await userResponse.json();

        userData = [];

        if (userResponseJson) {
            Object.keys(userResponseJson).forEach(key => {
                userData.push({
                    id: key,
                    initials: userResponseJson[key].initials,
                    name: userResponseJson[key].name,
                    email: userResponseJson[key].email,
                    phone: userResponseJson[key].phone,
                    color: userResponseJson[key].color
                });
        });
        console.log("User-Data Array:", userData);
        renderContactList(userData);
    }
    } catch (error) {
        console.error("Error loading DB-Data:", error);
    }
}

// Send new created Contact to DB
async function sendNewContactToDB(newProfile) {
    try {
        const response = await fetch(DATABASE_URL + USERS_PATH + ".json", {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(newProfile)
        });

        if (!response.ok) {
            throw new Error("ERROR");
        }

        loadUserData();
    } catch (error) {
        console.error("Failed to send new Profile Data to DB:", error);
    }
}


// Update Current User
async function updateContactToDB(id, updatedData) {
    try {
        const response = await fetch(DATABASE_URL + `/users/${id}` + ".json", {
            method : "PUT",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(updatedData)
        });

        if (!response.ok) {
            throw new Error(`Can't delete User with ID ${id}`);
        }

        loadUserData();
    } catch (error) {
        console.error("Failed to update current Contact to DB:", error);
    }
}


// Delete Current User
async function deleteContactFromDB(id) {
    try {
        const response = await fetch(DATABASE_URL + `/users/${id}` + ".json", {
            method : "DELETE"
        });

        if (!response.ok) {
            throw new Error(`Can't delete User with ID ${id}`);
        }

        if(document.querySelector('.contactsOverlay').style.display == "block") {
            closePopup();
        }

        loadUserData();
    } catch (error) {
        console.error("Failed to delete current Contact from DB:", error);
    }
}