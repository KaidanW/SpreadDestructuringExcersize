// Literal Math Method Exercise
// 1a
let warmHugs = "Hi, I'm Olaf and I like warm hugs.";

// 1b
console.log(warmHugs.toUpperCase()); // HI, I'M OLAF AND I LIKE WARM HUGS.

// 1c
warmHugs = warmHugs.replace("like", "love");
console.log(warmHugs); // Hi, I'm Olaf and I love warm hugs.

// 2a
let beenImpaled = "Oh, look at that. I've been impaled.";

// 2b
console.log(beenImpaled.slice(18, 36)); // I've been impaled.

// 3a
let dotDotDot = "...";

// 3b
let skullBones = `I don't have a skull${dotDotDot}or bones.`;
console.log(skullBones); // I don't have a skull...or bones.

// 4
console.log(Math.PI); // 3.141592653589793

// 5
let randomNumber = Math.random() * 3;
randomNumber = Math.floor(randomNumber) + 1;
console.log(randomNumber); // 1, 2, or 3

// BONUS
// 6
console.log(" Let It Go!".toUpperCase().repeat(2).trim()); // LET IT GO! LET IT GO!
// console.log(" LET IT GO!".repeat(2).trim());
// console.log(" LET IT GO! LET IT GO!".trim());
// console.log("LET IT GO! LET IT GO!");

// 7a
let reindeers = "Reindeers are better than people.";

// 7b
console.log(reindeers.replace(/ /g, "_")); // Reindeers_are_better_than_people.
// console.log(reindeers.replaceAll(" ", "_"));

// 8
console.log(Math.SQRT2); // 1.4142135623730951
// console.log(Math.sqrt(2));

// 9
let newRandomNumber = Math.random();
newRandomNumber *= 17;
newRandomNumber += 7;
newRandomNumber = Math.floor(newRandomNumber);
console.log(newRandomNumber);

// Extra Bonus
let newRandomNumber1 = Math.floor(Math.random() * 17) + 7;
console.log(newRandomNumber);