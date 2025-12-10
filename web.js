


document.getElementById('SignUpButton').addEventListener('click', function() {
document.getElementById('SignUp').style.display = 'block';
document.getElementById('SignIn').style.display = 'none';
});

document.getElementById('SignInButton').addEventListener('click', function() {
document.getElementById('SignUp').style.display = 'none';
document.getElementById('SignIn').style.display = 'block';
});

// Hide registration form by default
document.getElementById('SignUp').style.display = 'none';
document.getElementById('SignIn').style.display = 'block';

// Navbar fade out //

(function(){


    var doc = document.documentElement;
    var w =window;


    var scroll = prevScroll = w.scrollY || doc.scrollTop;
    var curDirection = prevDirection = 0;


    var header = document.getElementById('header');

    var checkScroll = function() {
        curScroll = w.scrollY || doc.scrollTop;
        if(curScroll > prevScroll){
            curDirection = 2;
        }
        else{
            curDirection = 1;
        }

        if(curDirection !== prevDirection){
            toggleHeader();
        }
        prevDirection = curDirection;
        prevScroll = curScroll;
    };
    var toggleHeader = function() {
        if(curDirection === 2){
            header.classList.add('hide');
        }
        else if(curDirection === 1) {
            header.classList.remove('header');
        }
    ;}

    window.addEventListener('scroll', checkScroll);
    })();








document.getElementById("reg").addEventListener("submit", function(e) {
    e.preventDefault(); // stop form submit

    const username = document.getElementById("User").value.trim();
    const pass = document.getElementById("Pass").value;
    const rpass = document.getElementById("Rpass").value;

    let errors = [];

    // Username validation
    if (username.length < 3) {
        errors.push("Username must be at least 3 characters long.");
    }

    // Password validation
    if (pass.length < 6) {
        errors.push("Password must be at least 6 characters long.");
    }

    // Repeat password check
    if (pass !== rpass) {
        errors.push("Passwords do not match.");
    }

    // If errors exist → show alerts
    if (errors.length > 0) {
        alert(errors.join("\n"));
    }
    else {
        // Success message
        alert("Registration Successful!");

        // Redirect to login page after success
        window.location.href = "Login.html";
    }
});




function logout() {
    alert("You have been logged out!");
    window.location.href = "Login.html";
}

function logout() {

    document.getElementById("loading-screen").classList.add("show");

    
    setTimeout(() => {
        window.location.href = "Login.html";
    }, 2000);
}

let lastScroll = 0;

window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    let currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 80) {
        // scrolling DOWN → hide navbar
        header.classList.add("hide");
    } else {
        // scrolling UP → show navbar
        header.classList.remove("hide");
    }

    lastScroll = currentScroll;
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").toLowerCase() === "#" + current) {
            link.classList.add("active");
        }
    });
});



// Contact Form Validation
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting by default
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simple validation for non-empty fields
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all the fields.");
    } else {
        // If valid, send a message (this is just a placeholder for now)
        alert("Thank you for your message! I'll get back to you soon.");
        
        // Clear the form after successful submission
        document.getElementById('contact-form').reset();
    }
});


// register alert design //

document.getElementById("successAlert").style.display = "block";

setTimeout(() => {
    window.location.href = "Login.html";
}, 1500);