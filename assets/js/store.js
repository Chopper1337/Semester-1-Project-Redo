//////// Login Logic ////////

// Local variable to reflect the login status
var loginStatus = "0";

// Run the CheckLogin function upon loading this JS file
CheckLogin();

// Log in user
function Login(){
    // Set loggedIn item in local storage to 1, to reflect login status
    localStorage.setItem("loggedIn", "1");
    // Log the action to console
    console.log("Login button clicked, user logged in")
    // Get the hidden modal
    var loginModal = document.querySelector('#login')
    var modal = bootstrap.Modal.getOrCreateInstance(loginModal)
    // Hide the modal as the user is logged in and the modal is no longer needed
    modal.hide();
    // Run CheckLogin function to apply changes to reflect the login status
    CheckLogin();
}


//Log out user
function Logout(){
    // Set loggedIn item in local storage to 0, to reflect login status
    localStorage.setItem("loggedIn", "0");
    // Log the action to console
    console.log("User logged out")
    // Run CheckLogin function to apply changes to reflect the login status
    CheckLogin();
}

//Check if the user is logged in
function CheckLogin(){
    //If they are logged in
    if(localStorage.getItem("loggedIn") == 1){
        // Log state to console
        console.log("User is logged in")
        // Set local variable to reflect status
        loginStatus = "1"
        // Change text in login/logout button to say logout
        document.getElementById("loginNavBTN").innerHTML = "Logout";
    }
    else{
        // Log state to console
        console.log("User is not logged in")
        // Set local variable to reflect status
        loginStatus = "0"
        // Change text in login/logout button to say login
        document.getElementById("loginNavBTN").innerHTML = "Login/Register";
    }
}

//Handles functionality behind login/logout button
function LoginLogoutBTN(){
    console.log("Login/logout button clicked.")
    if(loginStatus == 1){
        Logout();
        console.log("LoginLogoutBTN pressed, user already logged in so they will be logged out")
    }
    else{
        var myModal = document.querySelector('#login')
        var modal = bootstrap.Modal.getOrCreateInstance(myModal) // Returns a Bootstrap modal instance
        modal.show()
    }
}


//////// Currency changing logic ////////

// Change the displayed currency as per selection
function changeCurrency(currency){
    console.log("Changing currency...")
    if(currency === "euro"){
        console.log("Changing currency to euro")
    }
    else if(currency === "usd"){
        console.log("Changing currency to usd")
    }
    else{
        console.log("Changing currency to cad")
    }

}
