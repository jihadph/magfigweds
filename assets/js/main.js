// List of invited guests
const guestList = [

    {
        id: 'M01',
        guest: '',
        name: "Prof. Daniel Mostrales & Family"
    },
    {
        id: 'M02',
        guest: '',
        name: "Faizan Khan & Family",
    },
    {
        id: 'M03',
        guest: '',
        name: "Hassan Al-amin Bas & Family",
    },
    {
        id: 'M04',
        guest: '',
        name: "John Rey & Jiza",
    },

    /* MAGALIN FAMILY */

    {
        id: 'M05',
        guest: '',
        name: "H Johaira Guro & Family",
    },
    {
        id: 'M06',
        guest: '',
        name: "Serad Magalin & Family",
    },
    {
        id: 'M07',
        guest: '',
        name: "Oliling Magalin & Family",
    },
    {
        id: 'M08',
        guest: '',
        name: "Mangondaya Magalin & Family",
    },
    {
        id: 'M09',
        guest: '',
        name: "H Sahara Magalin & Family",
    },
    {
        id: 'M10',
        guest: 'ayeshataha',
        name: "Ayesha Lao Taha and Family",
    },
    {
        id: 'M11',
        guest: 'hamzaalonto',
        name: "Hamza Lomondot Alonto and Family",
    },
    {
        id: 'M12',
        guest: 'anjelikaakiko',
        name: "Anjelika & Akiko Orui and Family",
    },

    /* FIGUERAS FAMILY */

    {
        id: 'F01',
        guest: '',
        name: "Adriano & Rowena Figueras and Family",
    },
    {
        id: 'F02',
        guest: '',
        name: "Romualdo Figueras and Family",
    },
    {
        id: 'F03',
        guest: '',
        name: "Luis & Edith Figueras and Family",
    },
    {
        id: 'F04',
        guest: '',
        name: "Santos & Concepcion Figueras and Family",
    },
    {
        id: 'F05',
        guest: '',
        name: "Rodrigo & Nora Mondelo and Family",
    },
    {
        id: 'F06',
        guest: '',
        name: "Mario & Nasaria Mondelo and Family",
    },
    {
        id: 'F07',
        guest: '',
        name: "Ruby Timbal and Family",
    },
    {
        id: 'F08',
        guest: '',
        name: "Hamman & Jinky Lariosa and Family",
    },
    {
        id: 'F09',
        guest: '',
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
    const guest_name = guestList.find(item_arr =>
        item_arr.guest.trim().toLowerCase() === (guestId.trim().toLowerCase())
    );

    console.log(guest);
    console.log(guest_name);

    if (guest) {
        // Show guest section
        guestDiv.classList.remove("d-none");
        guestDefaultDiv.classList.add("d-none");

        // Optional: display guest name
        guestNameElement.textContent = `${guest.name}`;
    }
    if (guest_name) {
        // Show guest section
        guestDiv.classList.remove("d-none");
        guestDefaultDiv.classList.add("d-none");

        // Optional: display guest name
        guestNameElement.textContent = `${guest_name.name}`;
    }

}