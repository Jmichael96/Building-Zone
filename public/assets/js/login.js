$(document).ready(function() {
    console.log("LogIn app loaded");
    $("#loginBtn").on("submit", function(event){

        event.preventDefault();

        //Grab data from sign in form
        var userData = {
            email: $("#email").val().trim(),
            password: $("#password").val().trim(),
        };
        console.log(userData + " in public login.js");
        $.ajax({
            method: "PUT",
            url: "/login",
            data: userData
        }).then(function(data) {
            window.location.replace(data);
        });
        console.log(data);
    });

});

