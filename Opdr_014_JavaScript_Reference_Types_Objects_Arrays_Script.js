// DEEL 1 en 2
let person = {
    name: "Sissy",
    age: 34
};

let evaluations =  {
    gradeOne: 7,
    gradeTwo: 10,
    gradeThree: 9
};

let colors = ["paars", "geel", "grijs"];
let lastColor = colors[colors.length-1];

colors.push("rood");
colors.push(8);
colors.push("greeting: Hi ik ben een object");

console.log(colors);
console.log(colors.length);
console.log(colors[0]);
console.log(lastColor);
console.log(colors[5]);


// Dot Notation
person.name = "Sissy";
console.log(person.name);

person.age = 34;
console.log(person.age);

evaluations = 7 + 10 + 9
console.log(evaluations);



// Bracket Notation
person["name"] = "Sissy";
console.log(person.name);

person["age"] = 34;
console.log(person.age);


// DEEL 3
let catNames = ["Abyssinian", "Aegean", "American Bobtail"];
let firstCatEnergyLevel = ["5"];
let secondCatTemperament = ["Affectionate", "Social", "Intelligent", "Playful", "Active"];
let thirdCatTemperament = ["Intelligent", "Interactive", "Lively", "Playful", "Sensitive"];
let thirdCatFaveFood = ["meaty things"];

console.log("Kattensoort 3:", catNames[2]);
console.log("Energylevel kattensoort 1:", firstCatEnergyLevel);
console.log("Eerste temperament kat 2:", secondCatTemperament[0]);
console.log("Laatste temperament kat 3:", thirdCatTemperament[4]);
console.log(thirdCatFaveFood);
