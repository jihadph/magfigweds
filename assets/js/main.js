// List of invited guests
const guestList = [

    {
        id: 'M01',
        name: "Prof. Daniel Mostrales & Family"
    },
    {
        id: 'M02',
        name: "Faizan Khan & Family",
    },
    {
        id: 'M03',
        name: "Hassan Al-amin Bas & Family",
    },
    {
        id: 'M04',
        name: "John Rey & Jiza",
    },

    /* MAGALIN FAMILY */

    {
        id: 'M05',
        name: "H Johaira Guro & Family",
    },
    {
        id: 'M06',
        name: "Serad Magalin & Family",
    },
    {
        id: 'M07',
        name: "Oliling Magalin & Family",
    },
    {
        id: 'M08',
        name: "H Mangondaya Magalin & Family",
    },

    /* FIGUERAS FAMILY */

    {
        id: 'F01',
        name: "Adriano & Rowena Figueras and Family",
    },
    {
        id: 'F02',
        name: "Romualdo Figueras and Family",
    },
    {
        id: 'F03',
        name: "Luis & Edith Figueras and Family",
    },
    {
        id: 'F04',
        name: "Santos & Concepcion Figueras and Family",
    },
    {
        id: 'F05',
        name: "Rodrigo & Nora Mondelo and Family",
    },
    {
        id: 'F06',
        name: "Mario & Nasaria Mondelo and Family",
    },
    {
        id: 'F07',
        name: "Ruby Timbal and Family",
    },
    {
        id: 'F08',
        name: "Hamman & Jinky Lariosa and Family",
    },
    {
        id: 'F09',
        name: "Ramon & Rowena Leotero and Family",
    }
];
// Get URL parameters
const urlParams = new URLSearchParams(window.location.search);

// Get the guest parameter
const guestId = urlParams.get("guest"); // ex M01

// Guest element
const guestDefaultDiv = document.getElementById("default-message");
const guestDiv = document.getElementById("guest");
const guestNameElement = document.getElementById("guest-name");

if (guestId) {
    // Check if guest exists
    const guest = guestList.find(item =>
            item.id.trim().toLowerCase() === (guestId.trim().toLowerCase())
    );

    if (guest) {
        // Show guest section
        guestDiv.classList.remove("d-none");
        guestDefaultDiv.classList.add("d-none");

        // Optional: display guest name
        guestNameElement.textContent = `${guest.name}`;
    }
}