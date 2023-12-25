import fs from "fs";
const lines = fs.readFileSync('./puzzleinput.txt','utf-8').trim().split('\n');


function partOne() {

    const values = lines.map(line => {
        const firstDigit = line.split('').find((letter) => Number.isInteger(Number(letter)));
        const lastDigit = line.split('').findLast((letter) => Number.isInteger(Number(letter)));
        return Number(firstDigit + lastDigit);
    });

    return values.reduce((sum, value) => sum + value)
}

console.log(partOne());