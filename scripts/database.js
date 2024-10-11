const DATABASE_URL = "https://join-project-database-default-rtdb.europe-west1.firebasedatabase.app/";

async function loadContactData() {

}

const customers = [
    {
        "name": "Lena Schmidt",
        "phone": "+49 152 34567890",
        "email": "lena.schmidt@example.com"
    },
    {
        "name": "Max Müller",
        "phone": "+49 151 23456789",
        "email": "max.mueller@example.com"
    },
    {
        "name": "Sophie Fischer",
        "phone": "+49 171 98765432",
        "email": "sophie.fischer@example.com"
    },
    {
        "name": "Lukas Weber",
        "phone": "+49 152 87654321",
        "email": "lukas.weber@example.com"
    },
    {
        "name": "Emily Bauer",
        "phone": "+49 160 65432198",
        "email": "emily.bauer@example.com"
    },
    {
        "name": "Leon Wagner",
        "phone": "+49 162 54321987",
        "email": "leon.wagner@example.com"
    },
    {
        "name": "Mia Becker",
        "phone": "+49 176 32198765",
        "email": "mia.becker@example.com"
    },
    {
        "name": "Paul Richter",
        "phone": "+49 170 12345678",
        "email": "paul.richter@example.com"
    },
    {
        "name": "Hannah Hoffmann",
        "phone": "+49 151 56789123",
        "email": "hannah.hoffmann@example.com"
    },
    {
        "name": "Jonas Klein",
        "phone": "+49 172 43219876",
        "email": "jonas.klein@example.com"
    },
    {
        "name": "Laura Schäfer",
        "phone": "+49 163 98761234",
        "email": "laura.schaefer@example.com"
    },
    {
        "name": "Felix Neumann",
        "phone": "+49 157 34561234",
        "email": "felix.neumann@example.com"
    },
    {
        "name": "Anna Schmid",
        "phone": "+49 175 87654321",
        "email": "anna.schmid@example.com"
    },
    {
        "name": "Tim Meyer",
        "phone": "+49 154 56783219",
        "email": "tim.meyer@example.com"
    },
    {
        "name": "Marie Braun",
        "phone": "+49 159 65438921",
        "email": "marie.braun@example.com"
    },
    {
        "name": "Niklas Wolf",
        "phone": "+49 177 98734561",
        "email": "niklas.wolf@example.com"
    },
    {
        "name": "Clara König",
        "phone": "+49 152 32165498",
        "email": "clara.koenig@example.com"
    },
    {
        "name": "David Lehmann",
        "phone": "+49 160 12983476",
        "email": "david.lehmann@example.com"
    },
    {
        "name": "Lilly Schwarz",
        "phone": "+49 157 83726194",
        "email": "lilly.schwarz@example.com"
    },
    {
        "name": "Julian Krüger",
        "phone": "+49 176 76543219",
        "email": "julian.krueger@example.com"
    },
    {
        "name": "Sarah Werner",
        "phone": "+49 162 34981275",
        "email": "sarah.werner@example.com"
    },
    {
        "name": "Elias Zimmermann",
        "phone": "+49 173 54789123",
        "email": "elias.zimmermann@example.com"
    },
    {
        "name": "Maya Böhm",
        "phone": "+49 170 91827364",
        "email": "maya.boehm@example.com"
    },
    {
        "name": "Florian Frank",
        "phone": "+49 151 38472619",
        "email": "florian.frank@example.com"
    },
    {
        "name": "Johanna Hartmann",
        "phone": "+49 159 64829317",
        "email": "johanna.hartmann@example.com"
    }
];

async function addUsers() {
    path = "/users";
    for (let i = 0; i < customers.length; i++) {
        const customer = customers[i];

        data = {
            name : customer.name,
            email : customer.email,
            phone : customer.phone
        }
        
        await fetch(DATABASE_URL + path + ".json", {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(data)
        });
    }
}