// Prompt the user for their details
let username = prompt("Enter your name:");
let age = Number(prompt("Enter your age:"));
let email = prompt("Enter your email address:");

// Check the user's age
if (age < 12) {
    alert(
        "Hi " + username +
        ", you are " + age +
        " years old and you are too young to register. Sorry 😔😔"
    );
} else if (age >= 12 && age < 18) {
    alert(
        "Hi " + username +
        ", you are " + age +
        " years old and you have limited options to register for. We will keep in touch via your email: " +
        email + ". 👏🏽👏🏽"
    );
} else {
    alert(
        "Hi " + username +
        ", you are " + age +
        " years old and you can register for any option of your choosing. We will keep in touch via your email: " +
        email + ". 👏🏽👏🏽"
    );
}