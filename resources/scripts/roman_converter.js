//roman/decimal converter by eljotem 2019 => https://github.com/ElJotEm/Roman-Decimal_Converter

const roman = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]
const decimal = [1000,900,500,400,100,90,50,40,10,9,5,4,1]

// TODO: converter functions
function toArabic(inputStr) {}

function toRoman(inputNum) {
    var converted = '';
    for (var i = 0; i <= decimal.length; i++) {
        while (inputNum%decimal[i] < inputNum) {
            converted += roman[i];
            inputNum -= decimal[i];
        }
    }
    return converted;
}

function convert() {
    var input = document.getElementById('converterValue'),
        inputValue = input.value.replace(/[,]|[.]/g, '').trim(); //clean up input

    if(!parseInt(inputValue,10)) { //check if input is a number or string
        for(var i = 0; i < inputValue.length; i++) {
            var char = inputValue.charAt(i).toUpperCase();
            if(!roman.includes(char)) { //check if input is a valid roman numeral
                alert('Roman numerals can only be I, V, X, L, C, D or M');
                return false;
            }
        }
        input.value = toArabic(inputValue);
    } else if(inputValue < 4000) {
        input.value = toRoman(inputValue);
    } else {
        alter('Values higher than 3.999 are not supported for the common roman numerals.')
    }
}
