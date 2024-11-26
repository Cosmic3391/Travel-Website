// Placeholder JS
console.log("Website loaded successfully.");

// Form Validation (For Contact Page)
document.querySelector('.contact-form form')?.addEventListener('submit', handleContactFormSubmit);

function handleContactFormSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (validateContactForm(name, email, message)) {
        alert(`Thank you for contacting us, ${name}! We'll get back to you shortly.`);
        this.reset();
    } else {
        alert('Please fill in all fields.');
    }
}

function validateContactForm(name, email, message) {
    return name !== '' && email !== '' && message !== '';
}

// Digital Clock Functionality
function updateClock() {
    const clock = document.getElementById("digital-clock");
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    clock.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock(); // Initialize immediately

// Flight Booking Form Interactivity
document.getElementById("swap-btn").addEventListener("click", swapLocations);
document.getElementById("search-btn").addEventListener("click", handleSearch);

function swapLocations() {
    const fromInput = document.getElementById("from-location");
    const toInput = document.getElementById("to-location");

    // Swap values
    [fromInput.value, toInput.value] = [toInput.value, fromInput.value];
}

function handleSearch() {
    const from = document.getElementById("from-location").value.trim();
    const to = document.getElementById("to-location").value.trim();
    const departure = document.getElementById("departure-date").value;
    const returnDate = document.getElementById("return-date").value;
    const travellers = document.getElementById("travellers-class").value;

    if (from === '' || to === '') {
        alert("Please enter both 'From' and 'To' locations.");
        return;
    }

    alert(`Searching flights:\nFrom: ${from}\nTo: ${to}\nDeparture: ${departure}\nReturn: ${returnDate || "N/A"}\nTravellers: ${travellers}`);
}

// Handle navigation tab selection
const tabs = document.querySelectorAll(".tab");
tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        // Remove active class from all tabs
        tabs.forEach(t => t.classList.remove("active"));
        // Add active class to clicked tab
        tab.classList.add("active");

        // For demo purposes, log the selected tab's content
        console.log(`Selected Tab: ${tab.dataset.content}`);
    });
});

// Special fare selection
const fareButtons = document.querySelectorAll(".fare-btn");
fareButtons.forEach(button => {
    button.addEventListener("click", () => {
        // Remove active class from all fare buttons
        fareButtons.forEach(btn => btn.classList.remove("active"));
        // Add active class to clicked button
        button.classList.add("active");

        // Log the selected fare type
        console.log(`Selected Fare: ${button.dataset.fare}`);
    });
});
