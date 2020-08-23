// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
alert("Here is an alert!")
prompt = function () {
    return "Hello!";
}
var name = prompt("Give me your name", "Enter your name here...")
alert("Your name is: " + name)
var clientConfirm = confirm("Do you confirm")
if (clientConfirm) {
    alert("Welcome my Prince");
} else {
    alert("Wrong password");
}