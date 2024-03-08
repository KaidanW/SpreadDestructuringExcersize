//1a
const jedi = [];

//1b
jedi[0] = "Luke";
console.log(jedi);

//1c
jedi.push("Obi-Wan Kenobi");
console.log(jedi); 

//1d
jedi.unshift("Yoda"); 
console.log(jedi);

//1e
const jedi = ["Yoda", "Luke", "Obi-Wan Kenobi"]; 
console.log(jedi[1]);

//1f
const jedi = ["Yoda", "Luke", "Obi-Wan Kenobi"];
console.log(jedi);

//1g
const jedi = ["Yoda", "Luke"];
jedi.shift();
console.log(jedi[0]);

//2a
const sithLords = ["Darth Vader", "Darth Sidious", "Darth Maul"];

//2b
const imperialOfficers = ["Grand Moff Tarkin", "Orson Krennic"];

//2c
const starWarsVillains = sithLords.concat(imperialOfficers);
console.log(starWarsVillains);

//2d
const slicedArray = starWarsVillains.slice(2, 4);
console.log(slicedArray);

//3a
const droids = {
    astromech: "R2-D2",
    protocol: "C-3PO",
    assassin: "IG-88"
  };
//3b
console.log(droids["astromech"]);

//3c
console.log(droids.protocol);

//3d
droids.assassin = "IG-11";
