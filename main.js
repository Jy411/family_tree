import Father from "./Father.js";
import Mother from "./Mother.js";
import Family from "./Family.js";
import Son from "./Son.js";
import Daughter from "./Daughter.js";

// MM-DD-YYYY
let jack = new Father("Wilson", "11-04-1981");
let joanne = new Mother("Annyson", "01-01-1980");
let joe = new Son("Joe", "03-23-2002");
let john = new Son("John", "04-11-2004");
let jane = new Daughter("Jane", "05-14-2003");

console.log(
  "I, Jack, have a height difference of " +
    jack.getHeightDiff(joanne) +
    "cm with my wifey."
);

await jack.getRandomCatFact().then((catFact) => {
  console.log("I, Jack, know that " + catFact);
});

console.log(
  "I, John, have a height difference of " +
    john.getHeightDiff(jane) +
    "cm with my sister."
);

let fam1 = new Family();

fam1.members = [...fam1.members, jack, joanne, joe, john, jane];

console.log(fam1.getFamilyMembersName("dsc"));
// fam1.getFamilyMembersName("ascending");
// console.log(fam1.getFamilyMembersName("descending"));
// console.log("Our fam is this big: " + fam1.getFamilySize());
// console.log(fam1.getAgeDifference(joanne, jack));
//
// console.log(fam1.getFamilyMembersByAge("asc"));
