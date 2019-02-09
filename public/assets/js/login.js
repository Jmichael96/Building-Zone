$(document).ready(function() {
    console.log("LogIn app loaded");
    $("#loginBtn").on("submit", function(event){
        event.preventDefault();
        //Grab data from sign in form
        // var userData = {
        //     username: $("#username").val().trim(),
        //     password: $("#password").val().trim(),
        // };
        $.ajax({
            method: "POST",
            url: "/login",
            data: {
            username: $("#username").val().trim(),
            password: $("#password").val().trim(),
        }  
        }).then(function(data) {
            window.location.replace(data);
        });
        console.log(data);
    });

});
  