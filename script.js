// Ensure DOM is fully loaded before running any code
document.addEventListener("DOMContentLoaded", () => {
    console.log("Website loaded successfully.");

    // ------------------------------
    // Contact Form Validation
    // ------------------------------
    const form = document.querySelector('.contact-form form');
    if (form) {
        form.addEventListener('submit', handleContactFormSubmit);
    } else {
        console.error("Contact form not found.");
    }

    function handleContactFormSubmit(e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (validateContactForm(name, email, message)) {
            alert(`Thank you for contacting us, ${name}! We'll get back to you shortly.`);
            e.target.reset();
        } else {
            alert('Please fill in all fields.');
        }
    }

    function validateContactForm(name, email, message) {
        return name !== '' && email !== '' && message !== '';
    }

    // ------------------------------
    // Background Image Rotator
    // ------------------------------
    const backgrounds = [
        "images/14.jpg",
        "images/15.jpg",
        "images/9.jpg",
        "images/21.jpg",
        "images/22.jpg",
        "images/23.jpg"
    ];

    let currentIndex = 0;
    const hero = document.querySelector('.hero');
    if (hero) {
        setInterval(changeBackground, 5000);
        changeBackground();
    }

    function changeBackground() {
        if (hero) {
            currentIndex = (currentIndex + 1) % backgrounds.length;
            hero.style.backgroundImage = `url('${backgrounds[currentIndex]}')`;
        }
    }

    // ------------------------------
    // Handle Intro Backgrounds
    // ------------------------------
    const intro1 = document.querySelector('.bgimageAbout');
    const intro2 = document.querySelector('.bgimageFeatures');
    const intro3 = document.querySelector('.bgimagePricing');

    if (intro1) intro1.style.backgroundImage = "url('images/14.jpg')";
    if (intro2) intro2.style.backgroundImage = "url('images/15.jpg')";
    if (intro3) intro3.style.backgroundImage = "url('images/11.jpg')";

    // ------------------------------
    // Modal Log-In and Sign-Up Forms
    // ------------------------------
    function initializeModalEventListeners() {
        const showLoginFormLink = document.getElementById("showLoginForm");
        const showSignupFormLink = document.getElementById("showSignupForm");

        if (showLoginFormLink) showLoginFormLink.addEventListener("click", showLoginForm);
        if (showSignupFormLink) showSignupFormLink.addEventListener("click", showSignupForm);

        const signupForm = document.getElementById("unique-signupForm");
        const loginForm = document.getElementById("unique-loginForm");

        if (signupForm) {
            signupForm.addEventListener("submit", (e) => {
                e.preventDefault();
                alert("Sign-Up form submitted successfully!");
            });
        }

        if (loginForm) {
            loginForm.addEventListener("submit", (e) => {
                e.preventDefault();
                alert("Log-In form submitted successfully!");
            });
        }
    }

    function showLoginForm() {
        const modalContent = document.querySelector(".unique-login-right");
        if (modalContent) {
            modalContent.innerHTML = `
                <h2>Log in to your account</h2>
                <p>Don't have an account? <a href="javascript:void(0)" id="showSignupForm">Sign up</a></p>
                <form id="unique-loginForm">
                    <div class="unique-form-group">
                        <input type="email" placeholder="Email" required>
                    </div>
                    <div class="unique-form-group">
                        <input type="password" placeholder="Enter your password" required>
                    </div>
                    <button type="submit" class="unique-btn-primary">Log in</button>
                </form>
            `;
            initializeModalEventListeners();
        }
    }

    function showSignupForm() {
        const modalContent = document.querySelector(".unique-login-right");
        if (modalContent) {
            modalContent.innerHTML = `
                <h2>Create an account</h2>
                <p>Already have an account? <a href="javascript:void(0)" id="showLoginForm">Log in</a></p>
                <form id="unique-signupForm">
                    <div class="unique-form-group">
                        <input type="text" placeholder="First name" required>
                        <input type="text" placeholder="Last name" required>
                    </div>
                    <div class="unique-form-group">
                        <input type="email" placeholder="Email" required>
                    </div>
                    <div class="unique-form-group">
                        <input type="password" placeholder="Enter your password" required>
                    </div>
                    <div class="unique-form-check">
                        <input type="checkbox" id="unique-terms" required>
                        <label for="unique-terms">I agree to the <a href="#">Terms & Conditions</a>.</label>
                    </div>
                    <button type="submit" class="unique-btn-primary">Create account</button>
                </form>
            `;
            initializeModalEventListeners();
        }
    }

    initializeModalEventListeners();
});
