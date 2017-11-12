'use strict';

// Problem Statement
// If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
// If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?

const TEN = 10;
const TWENTY = 20;
const HUNDRED = 100;
const THOUSAND = 1000;
const MILLION = 1000000;

const BELLOW_TWENTY = [
  'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
  'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
];

const TENTHS_BELLOW_HUNDRED = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

const wordsBellowTwenty = (number) => BELLOW_TWENTY[number];

const wordsBellowHundred = (number) => {
  let remainder, word;
  remainder = number % TEN
  word = TENTHS_BELLOW_HUNDRED[Math.floor(number/TEN)]

  if(remainder) {
    word = `${word} ${BELLOW_TWENTY[remainder]}`
    remainder = 0;
  }

  return word
}

const wordsBellowThousand = (number) => {
  let remainder, word;
  remainder = number % HUNDRED

  word = wordsBellowTwenty(Math.floor(number / HUNDRED)) + ' hundred'

  if(remainder) {
    if(remainder < TWENTY ) {
      word = `${word} and ${wordsBellowTwenty(remainder)}`
    } else {
      word = `${word} and ${wordsBellowHundred(remainder)}`
    }
    remainder = 0;
  }

  return word
}

// TODO: Change the function so that it does not repeat

const genWords = (number) => {
  let word, remainder = 0;

  if( number < TWENTY ) {
    word = wordsBellowTwenty(number)
  } else if(number < HUNDRED) {
    word = wordsBellowHundred(number)
  } else if(number < THOUSAND) {
    word = wordsBellowThousand(number)
  } else if(number < MILLION) {
    word = wordsBellowTwenty(Math.floor(number / THOUSAND)) + ' thousand'
  }

  return word
}

const arrayOfWords = Array.from({length: 1000}, (v, i) => genWords(i+1).replace(/\s+/g, '').length)

const sum = arrayOfWords.reduce((prev, current) => prev + current )

console.log(sum)
