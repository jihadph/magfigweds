// List of invited guests
const guestList = [
    {
        id: 'M01',
        name: "Prof. Daniel Mostrales"
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
    {
        id: 'M05',
        name: "Johaira Guro & Family",
    },
    {
        id: 'M06',
        name: "Serad Magalin & Family",
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