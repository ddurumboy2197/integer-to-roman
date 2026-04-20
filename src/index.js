function intToRoman(num) {
    const val = [
        1000, 900, 500, 400,
        100, 90, 50, 40,
        10, 9, 5, 4,
        1
    ];
    const syb = [
        "M", "CM", "D", "CD",
        "C", "XC", "L", "XL",
        "X", "IX", "V", "IV",
        "I"
    ];
    let romanNum = '';
    let i = 0;
    while (num > 0) {
        for (; num >= val[i]; num -= val[i]) {
            romanNum += syb[i];
        }
        i++;
    }
    return romanNum;
}

console.log(intToRoman(4)); // IV
console.log(intToRoman(9)); // IX
console.log(intToRoman(13)); // XIII
console.log(intToRoman(44)); // XLIV
console.log(intToRoman(1000)); // M
