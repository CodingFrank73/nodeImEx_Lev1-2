const { names, numbers, delArr, doubleArr } = require("./data")
const { firstElementFromArray,
    allButNotTheLast,
    lastElementFromArray,
    getElementFromPosition,
    removeElementFromArray,
    removeDoubles,
    randomBetween,
    capitalise,
    allToUpper,
    matchParam

} = require("./functions")

const firstElementFromArrayName = firstElementFromArray(names)
console.log("Erstes Element aus Array Name: " + firstElementFromArrayName);

const firstElementFromArrayNumbers = firstElementFromArray(numbers)
console.log("Erstes Element aus Array Name: " + firstElementFromArrayNumbers);


//Alle Elemente aus einem Array ausser das letzte Element
const allNames = allButNotTheLast(names)
console.log("Alle Elemente ausser das letzte in Names: " + allNames);

const allNumbers = allButNotTheLast(numbers)
console.log("Alle Elemente ausser die letzte in Numbers: " + allNumbers);

//Nur das letzte Element eines Array
const lastName = lastElementFromArray(names)
console.log("Das letzte Element in Names: " + lastName);

const lastNumber = lastElementFromArray(numbers)
console.log("Das letzte Element in Numbers: " + lastNumber);


//Element an Postion
let pos = 1;
const namePosition = getElementFromPosition(names, pos)
console.log(`An Position ${pos} des Arrays Names steht das Element ${namePosition}`);

const numberPosition = getElementFromPosition(numbers, pos)
console.log(`An Position ${pos} des Arrays Numbers steht das Element ${numberPosition}`);

//Element löschen
let value = "remove";
const del = removeElementFromArray(delArr, value)
console.log(`Das Element ${value} wurde aus dem Array gelöscht. Übrig sind ${del}`);

//Dopplte Elemente löschen
const double = removeDoubles(doubleArr)
console.log(`Array ohne dopplete Daten: ${double[0]}. Die Summe ist ${double[1]}`);

//Zufallszahl dazwischen
let numA = 1;
let numB = 10;
const between = randomBetween(numA, numB)
console.log(`Zwischen ${numA} und ${numB} ist eine Zufallszahl ${between}`);

//Erster Buchstaben groß
const firstLetterUpperCase = capitalise("test")
console.log(`Erster Buchstaben groß: ${firstLetterUpperCase}`);

//Alle Buchstaben groß
const allLetterToUpper = allToUpper("hallo")
console.log(`Alle Buchstaben groß: ${allLetterToUpper}`);

//MatchParam
let param = "t";
const isMatched = matchParam("test", param)
console.log(isMatched);
