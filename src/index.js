const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = '';
    const exprLength = expr.length;
    for(let spliceIndex = 10; spliceIndex <= exprLength; spliceIndex+=10){
        const startIndex = spliceIndex - 10;
        const encriptedLetter = expr.slice(startIndex, spliceIndex);
        if(encriptedLetter === '**********'){result += ' '} else {decript(encriptedLetter)};
    }

    function decript(letter) {
        let code = letter.replace(/00/g,'').replace(/10/g,'.').replace(/11/g,'-');        
        result += MORSE_TABLE[code];
    }

    return result;
}

module.exports = {
    decode
}