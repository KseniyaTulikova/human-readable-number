module.exports = function toReadable (number) {
 if (number < 100) {   
    return twoDigitNumberToReadable(number);
  } else {
    let dozens = number % 100;
    let hundreds = Math.trunc(number / 100);
    
    return (dozens != 0) ? `${READABLE_NUMBERS[hundreds]} hundred ${twoDigitNumberToReadable(dozens)}` : `${READABLE_NUMBERS[hundreds]} hundred`;
  }
}

const twoDigitNumberToReadable = (number) => {
    if(number <= 20) {
        return READABLE_NUMBERS[number];
    } else {
      let units = number % 10;
      let dozens = number % 100 - units;
      
      return (units != 0) ? `${READABLE_NUMBERS[dozens]} ${READABLE_NUMBERS[units]}` : `${READABLE_NUMBERS[dozens]}`;
    } 
}

 const READABLE_NUMBERS = {
    0 : "zero",
    1 : "one",
    2 : "two",
    3 : "three",
    4 : "four",
    5 : "five",
    6 : "six",
    7 : "seven",
    8 : "eight",
    9 : "nine",
    10 : "ten",
    11 : "eleven",
    12 : "twelve",
    13 : "thirteen",
    14 : "fourteen",
    15 : "fifteen",
    16 : "sixteen",
    17 : "seventeen",
    18 : "eighteen",
    19 : "nineteen",
    20 : "twenty",
    30 : "thirty",
    40 : "forty",
    50 : "fifty",
    60 : "sixty",
    70 : "seventy",
    80 : "eighty",
    90 : "ninety",
 };