const age = 15;
const isFemale = true;
const driverStatus = "bob";
const firstNameMale = "Bram";
const firstNameFemale ="Sarah";
const totalAmount = 26


if (isFemale) {
    console.log("Hi, beautiful lady!");
}
else {
    console.log("Sorry, its ladies night!");
}

if (age < 18) {
    console.log("You are younger than age 18, we will welcome you when we can celebrate your 18th birthday! 🥳");
}
else {
    console.log("You are older than age 18, welcome to our bar!");
}

if (driverStatus) {
    console.log("Great job, you are an excelent safe driver!");
}

else {
    console.log("Shame on you! Go home, we dont like drunk drivers.")
}

if (age >= 18 && age <= 25) {
    console.log("You are between 18 and 25 and gets 50% discount!");
}
else {
    console.log("Bummer, you're younger than 18 or older than 25, full price for you!")
}

if (firstNameMale === "Bram" || firstNameFemale === "Sarah") {
    console.log("Nice name there, free bear for you!");
}

if (totalAmount > 100) {
    console.log("Free champagne!");
}
else if (totalAmount > 50) {
        console.log("Free nachos!");
}
else if (totalAmount > 25) {
        console.log("Free bitterballen!");
}
else {
    console.log("Why not order some more drinks and food?");
}
