let login_page = document.querySelector("#login-page");
let subjects_page = document.querySelector("#subjects-page");

let givenname = document.querySelector("#givenname");
let middleinitial = document.querySelector("#middleinitial");
let suffix = document.querySelector("#suffix");
let program = document.querySelector("#program");
let section = document.querySelector("#section");
let lastname = document.querySelector("#lastname");

let loginbtn = document.querySelector("#login-btn");
let logoutbtn = document.querySelector("#btn-logout");


// LOGIN FUNCTION
loginbtn.addEventListener("click", function() {

    if (
        givenname.value.trim().toUpperCase() == "JOSHUA" &&
        middleinitial.value.trim().toUpperCase() == "HANNA" &&
        lastname.value.trim().toUpperCase() == "NIOG" &&
        suffix.value.trim().toUpperCase() == "MARK" &&
        program.value.trim().toUpperCase() == "BSIT"
    ) {

        login_page.classList.add("hidden");
        subjects_page.classList.remove("hidden");

    } else {

        console.log("LOGIN FAILED");

    }

});


// LOGOUT FUNCTION
function logout() {

    subjects_page.classList.add("hidden");
    login_page.classList.remove("hidden");

}


// LOGOUT BUTTON
logoutbtn.addEventListener("click", logout);
