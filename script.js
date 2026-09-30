 let loginForm = document.getElementById("loginForm");

let email = document.getElementById("email");

let password = document.getElementById("password");

let message = document.getElementById("message");

let showPassword = document.getElementById("showPassword");


// Show / Hide Password

showPassword.addEventListener("click", function(){

    if(password.type == "password"){

        password.type = "text";

        showPassword.classList.remove("fa-eye");

        showPassword.classList.add("fa-eye-slash");

    }

    else{

        password.type = "password";

        showPassword.classList.remove("fa-eye-slash");

        showPassword.classList.add("fa-eye");

    }

});


// Form Submit

loginForm.addEventListener("submit", function(event){

    event.preventDefault();


    // Check empty fields

    if(email.value == "" || password.value == ""){

        message.style.display = "block";

        message.style.color = "red";

        message.innerHTML = "Please fill all fields";

    }

    else{

        message.style.display = "block";

        message.style.color = "green";

        message.innerHTML = "Sign In Successful";


        // Clear Form

        loginForm.reset();


        // Password icon wapas normal eye

        password.type = "password";

        showPassword.classList.remove("fa-eye-slash");

        showPassword.classList.add("fa-eye");

    }

});