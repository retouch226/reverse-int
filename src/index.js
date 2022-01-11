module.exports = function reverse(n) {
    let numberString = String(n).split("");
    if (numberString[0] === "-") {
        numberString.splice(0, 1);
    }
    let temp = "";
    for (let i = 0; i < numberString.length - 2; i++) {
        temp = numberString[i];
        numberString[i] = numberString[numberString.length - 1 - i];
        numberString[numberString.length - 1 - i] = temp;
    }
    numberString = numberString.join("");
    return Math.abs(+numberString);
};
//console.log(reverse(-425));
