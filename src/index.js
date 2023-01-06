const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  let arr = [];
  let res = '';

  for (let i = 0; i <= expr.length; i += 2) {
    if (i % 10 == 0 && arr.length) {
      res += MORSE_TABLE[arr.join('')];
      arr.length = 0;
    }

    if (expr[i] == '0') continue;
    if (expr[i] == '1') {
      expr[i + 1] == 0 ? arr.push('.') : arr.push('-');
    } else if (expr[i] == '*') {
      res += ' ';
      i += 8;
    }
  }

  return res;
}

module.exports = {
  decode,
};
