const sampleUser = ["shopper@email.com","strongpassword1","Number 29","Real Street", "Co. Sligo", "Ireland"]

function userData(request){
    if(request == "email"){
        return sampleUser[0]
    }

    if(request == "adrLine1"){
        return sampleUser[2]
    }

    if(request == "adrLine2"){
        return sampleUser[3]
    }

    if(request == "adrLine3"){
        return sampleUser[4]
    }

    if(request == "adrLine4"){
        return sampleUser[5]
    }
}
//////// Login Logic ////////

// Local variable to reflect the login status
var loginStatus = "0";

// Run the CheckLogin function upon loading this JS file
//CheckLogin();
updateCart();

// Log in user
function Login() {
    var enteredUsername = document.getElementById("emailAddressid").value;
    var enteredPassword = document.getElementById("passwordid").value;

    if (enteredUsername == sampleUser[0] && enteredPassword == sampleUser[1]) {
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
    else {
        //Fail login error
    }

}


//Log out user
function Logout() {
    // Set loggedIn item in local storage to 0, to reflect login status
    localStorage.setItem("loggedIn", "0");
    // Log the action to console
    console.log("User logged out")
    // Run CheckLogin function to apply changes to reflect the login status
    CheckLogin();
}

//Check if the user is logged in
function CheckLogin() {
    //If they are logged in
    if (localStorage.getItem("loggedIn") == 1) {
        // Log state to console
        console.log("User is logged in")
        // Set local variable to reflect status
        loginStatus = "1"
        // Change text in login/logout button to say logout
        document.getElementById("loginNavBTN").innerHTML = "Logout";
        refreshCart()
        return 1;
    }
    else {
        // Log state to console
        console.log("User is not logged in")
        // Set local variable to reflect status
        loginStatus = "0"
        // Change text in login/logout button to say login
        document.getElementById("loginNavBTN").innerHTML = "Login/Register";
        document.getElementById("lblCartCount").innerHTML = "";
        return 0;
        refreshCart()
    }

}

//Handles functionality behind login/logout button
function LoginLogoutBTN() {
    console.log("Login/logout button clicked.")
    if (loginStatus == 1) {
        Logout();
        console.log("LoginLogoutBTN pressed, user already logged in so they will be logged out")
    }
    else {
        var myModal = document.querySelector('#login')
        var modal = bootstrap.Modal.getOrCreateInstance(myModal) // Returns a Bootstrap modal instance
        modal.show()
    }

}


//////// Currency changing logic ////////

// Change the displayed currency as per selection
function changeCurrency(currency) {
    let i = 0;
    console.log("Changing currency...")
    if (currency === "euro") {
        console.log("Changing currency to euro")
        while (i < 12) {
            document.getElementsByClassName("currency")[i].innerHTML = document.getElementsByClassName("currency")[i].innerHTML.replace(/^./g, '€');
            i++;
        }
    }
    else if (currency === "usd") {
        console.log("Changing currency to usd")
        while (i < 12) {
            document.getElementsByClassName("currency")[i].innerHTML = document.getElementsByClassName("currency")[i].innerHTML.replace(/^./g, '$');
            i++;
        }
    }
    else {
        console.log("Changing currency to GBP")
        while (i < 12) {
            document.getElementsByClassName("currency")[i].innerHTML = document.getElementsByClassName("currency")[i].innerHTML.replace(/^./g, '£');
            i++;
        }
    }

}

// Updates the cart
function updateCart(addItem) {
    // Read local storage for cart items
    var currentCart = localStorage.getItem("cartItems")

    if (localStorage.getItem("cartItems") == null) {
        localStorage.setItem("cartItems", "0");
    }

    // If we are supposed to add an item
    if (addItem > 0) {
        // If the current cart is not empty
        if (currentCart > 0) {
            // Add one to the carts value
            localStorage.setItem("cartItems", parseInt(currentCart) + 1)
        }
        else {
            // If it is empty (it doesn't exist), create it
            localStorage.setItem("cartItems", "1");
        }

        currentCart = localStorage.getItem("cartItems")
        document.getElementById("lblCartCount").innerHTML = currentCart
    }
}

function refreshCart() {
    // Read local storage for cart items
    var currentCart = localStorage.getItem("cartItems")
    document.getElementById("lblCartCount").innerHTML = currentCart
}
