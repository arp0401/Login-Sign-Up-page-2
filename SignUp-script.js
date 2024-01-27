console.log("Welcome to Login/SignUp Page");

const loginButton = document.getElementById("login-btn");
const signupButton = document.getElementsByClassName("signup-btn");

// const loginform = document.getElementsByClassName("login-btn");
// loginform.addEventListener("submit", function(Event));{
//     Event.preventDefault();
    
//     const formData = new FormData(Event.target);

//     const data = {
//         email: formData.get("email"),
//         password: formData.get("password")
//     };

//     console.log("Login form submitted with data:", data);
// }

// loginButton = document.getElementById("login-btn");
loginButton.addEventListener("submit", function login(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
        email: formData.get("email"),
        password: formData.get("password")
    };

    console.log("Login form submitted with data:", data);
});

signupButton = document.getElementsByClassName("signup-btn");
signupButton.addEventListener("submit", function signup(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
        email: formData.get("email"),
        password: formData.get("password")
    };
    
    console.log("You're Signed Up with data:", data);
});