
var retries = 0;

do {
    retries++;
    var authenticated = prompt("Enter your password: ", "********");
} while (!authenticated && retries < 3); 
if (retries == 3) {
    alert("Too many tries!");
    return;
}